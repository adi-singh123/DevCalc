"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { Adb } from "@yume-chan/adb";

type UiNode = {
  id: string;
  className: string;
  packageName: string;
  resourceId: string;
  text: string;
  contentDesc: string;
  clickable: boolean;
  scrollable: boolean;
  bounds: [number, number, number, number];
  xpath: string;
  appium: string;
  uiautomator: string;
  adbTap: string;
  children: UiNode[];
};

function quoteSelector(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\"/g, "\\\"");
}

function parseBounds(value: string): [number, number, number, number] {
  const match = value.match(/^\[(\d+),(\d+)\]\[(\d+),(\d+)\]$/);
  return match ? [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])] : [0, 0, 0, 0];
}

function buildNode(element: Element, id = "0", parentXPath = "//hierarchy"): UiNode {
  const className = element.getAttribute("class") || element.tagName || "node";
  const resourceId = element.getAttribute("resource-id") || "";
  const text = element.getAttribute("text") || "";
  const contentDesc = element.getAttribute("content-desc") || "";
  const bounds = parseBounds(element.getAttribute("bounds") || "");
  const siblings = element.parentElement
    ? Array.from(element.parentElement.children).filter((child) => (child.getAttribute("class") || child.tagName) === className)
    : [];
  const position = Math.max(1, siblings.indexOf(element) + 1);
  const structuralXPath = `${parentXPath}/${className}${siblings.length > 1 ? `[${position}]` : ""}`;
  let xpath = structuralXPath;
  let appium = `By.XPATH, \"${structuralXPath}\"`;
  let uiautomator = `d(className=\"${quoteSelector(className)}\")`;

  if (resourceId) {
    xpath = `//${className}[@resource-id='${quoteSelector(resourceId)}']`;
    appium = `By.ID, \"${quoteSelector(resourceId)}\"`;
    uiautomator = `d(resourceId=\"${quoteSelector(resourceId)}\")`;
  } else if (contentDesc) {
    xpath = `//${className}[@content-desc='${quoteSelector(contentDesc)}']`;
    appium = `AppiumBy.ACCESSIBILITY_ID, \"${quoteSelector(contentDesc)}\"`;
    uiautomator = `d(description=\"${quoteSelector(contentDesc)}\")`;
  } else if (text) {
    xpath = `//${className}[@text='${quoteSelector(text)}']`;
    appium = `By.XPATH, \"${xpath.replace(/\"/g, "\\\"")}\"`;
    uiautomator = `d(text=\"${quoteSelector(text)}\")`;
  }

  const centerX = Math.round((bounds[0] + bounds[2]) / 2);
  const centerY = Math.round((bounds[1] + bounds[3]) / 2);
  const node: UiNode = {
    id, className, resourceId, text, contentDesc, bounds,
    packageName: element.getAttribute("package") || "",
    clickable: element.getAttribute("clickable") === "true",
    scrollable: element.getAttribute("scrollable") === "true",
    xpath, appium, uiautomator,
    adbTap: `adb shell input tap ${centerX} ${centerY}`,
    children: [],
  };
  node.children = Array.from(element.children).map((child, index) => buildNode(child, `${id}-${index}`, structuralXPath));
  return node;
}

function flatten(node: UiNode): UiNode[] {
  return [node, ...node.children.flatMap(flatten)];
}

function NodeTree({ node, selectedId, filter, onSelect }: { node: UiNode; selectedId?: string; filter: string; onSelect: (node: UiNode) => void }) {
  const ownText = `${node.className} ${node.resourceId} ${node.text} ${node.contentDesc}`.toLowerCase();
  const visibleChildren = node.children.filter((child) => !filter || flatten(child).some((item) => `${item.className} ${item.resourceId} ${item.text} ${item.contentDesc}`.toLowerCase().includes(filter)));
  if (filter && !ownText.includes(filter) && visibleChildren.length === 0) return null;
  return (
    <div className="ml-3 border-l border-slate-700 pl-2 text-xs">
      <button type="button" onClick={() => onSelect(node)} className={`my-0.5 max-w-full rounded px-2 py-1 text-left font-mono ${selectedId === node.id ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-slate-800"}`}>
        <span className="text-pink-400">&lt;{node.className.split(".").pop()}&gt;</span>{" "}
        {node.resourceId && <span className="text-sky-400">#{node.resourceId.split("/").pop()} </span>}
        {node.text && <span className="text-amber-300">&quot;{node.text}&quot;</span>}
      </button>
      {visibleChildren.map((child) => <NodeTree key={child.id} node={child} selectedId={selectedId} filter={filter} onSelect={onSelect} />)}
    </div>
  );
}

export default function AndroidUiInspector() {
  const adbRef = useRef<Adb | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const supported = useSyncExternalStore(
    () => () => undefined,
    () => "usb" in navigator,
    () => false,
  );
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState("Not connected");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [root, setRoot] = useState<UiNode | null>(null);
  const [screenshot, setScreenshot] = useState("");
  const [selected, setSelected] = useState<UiNode | null>(null);
  const [hovered, setHovered] = useState<UiNode | null>(null);
  const [filter, setFilter] = useState("");
  const [imageSize, setImageSize] = useState({ width: 1, height: 1 });
  const nodes = useMemo(() => root ? flatten(root) : [], [root]);

  useEffect(() => {
    return () => { void adbRef.current?.close(); };
  }, []);

  useEffect(() => () => { if (screenshot) URL.revokeObjectURL(screenshot); }, [screenshot]);

  async function connect() {
    setBusy(true); setError(""); setStatus("Choose your Android phone in the browser prompt...");
    try {
      const [{ Adb }, { AdbDaemonTransport }, { AdbDaemonWebUsbDeviceManager }, { default: AdbWebCredentialStore }] = await Promise.all([
        import("@yume-chan/adb"), import("@yume-chan/adb"), import("@yume-chan/adb-daemon-webusb"), import("@yume-chan/adb-credential-web"),
      ]);
      const manager = AdbDaemonWebUsbDeviceManager.BROWSER;
      if (!manager) throw new Error("WebUSB is not available. Open this page in desktop Chrome or Microsoft Edge.");
      const device = await manager.requestDevice();
      if (!device) { setStatus("No device selected"); return; }
      setStatus("Waiting for USB debugging approval on the phone...");
      const connection = await device.connect();
      const transport = await AdbDaemonTransport.authenticate({ serial: device.serial, connection, credentialStore: new AdbWebCredentialStore("DevCalc Android Inspector") });
      const adb = new Adb(transport);
      adbRef.current = adb;
      setConnected(true);
      const model = await adb.getProp("ro.product.model");
      setStatus(`Connected: ${model || device.name || device.serial}`);
      void adb.disconnected.then(() => { adbRef.current = null; setConnected(false); setStatus("Phone disconnected"); });
    } catch (reason) {
      setStatus("Not connected");
      setError(reason instanceof Error ? reason.message : "The phone could not be connected.");
    } finally { setBusy(false); }
  }

  async function inspect() {
    const adb = adbRef.current;
    if (!adb) { setError("Connect an Android phone first."); return; }
    setBusy(true); setError("");
    try {
      const appium = await adb.subprocess.noneProtocol.spawnWaitText(["pidof", "io.appium.uiautomator2.server"]);
      if (appium.trim()) throw new Error("Appium is controlling this phone. Stop the Appium session before inspecting its UI.");
      const imageBytes = await adb.subprocess.noneProtocol.spawnWait(["screencap", "-p"]);
      if (!imageBytes.length) throw new Error("Android returned an empty screenshot.");
      const hierarchyPath = "/sdcard/devcalc-window.xml";
      const dumpOutput = await adb.subprocess.noneProtocol.spawnWaitText(["uiautomator", "dump", hierarchyPath]);
      const hierarchyXml = await adb.subprocess.noneProtocol.spawnWaitText(["cat", hierarchyPath]);
      const xmlStart = hierarchyXml.indexOf("<?xml");
      if (xmlStart < 0) throw new Error(dumpOutput.trim() || "Android did not return a UI hierarchy.");
      const documentXml = new DOMParser().parseFromString(hierarchyXml.slice(xmlStart), "application/xml");
      if (documentXml.querySelector("parsererror") || !documentXml.documentElement) throw new Error("The Android UI hierarchy XML could not be parsed.");
      const nextRoot = buildNode(documentXml.documentElement);
      const screenshotBuffer = new Uint8Array(imageBytes).buffer;
      const nextUrl = URL.createObjectURL(new Blob([screenshotBuffer], { type: "image/png" }));
      setScreenshot((previous) => { if (previous) URL.revokeObjectURL(previous); return nextUrl; });
      setRoot(nextRoot); setSelected(null); setHovered(null);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "The phone screen could not be inspected."); }
    finally { setBusy(false); }
  }

  function pickNode(event: React.MouseEvent<HTMLDivElement>, choose: boolean) {
    const image = imageRef.current;
    if (!image) return;
    const rect = image.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (image.naturalWidth / rect.width);
    const y = (event.clientY - rect.top) * (image.naturalHeight / rect.height);
    const match = nodes.filter((node) => { const [x1, y1, x2, y2] = node.bounds; return x >= x1 && x <= x2 && y >= y1 && y <= y2 && x2 > x1 && y2 > y1; })
      .sort((a, b) => (a.bounds[2] - a.bounds[0]) * (a.bounds[3] - a.bounds[1]) - (b.bounds[2] - b.bounds[0]) * (b.bounds[3] - b.bounds[1]))[0] || null;
    setHovered(match); if (choose && match) setSelected(match);
  }

  async function copy(value: string) { await navigator.clipboard.writeText(value); }
  const overlay = (node: UiNode | null, color: string) => {
    if (!node) return null;
    const [x1, y1, x2, y2] = node.bounds;
    return <span className="pointer-events-none absolute border-2" style={{ left: `${x1 / imageSize.width * 100}%`, top: `${y1 / imageSize.height * 100}%`, width: `${(x2 - x1) / imageSize.width * 100}%`, height: `${(y2 - y1) / imageSize.height * 100}%`, borderColor: color, backgroundColor: `${color}33` }} />;
  };

  return (
    <div className="mt-6 min-w-0 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl sm:mt-8 sm:rounded-3xl">
      <div className="flex flex-col gap-3 border-b border-slate-700 bg-slate-900 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="min-w-0"><p className="font-bold text-sky-400">Android UI Inspector</p><p className="break-words text-xs leading-5 text-slate-400">{status}</p></div>
        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:shrink-0">
          <button type="button" disabled={busy || !supported} onClick={connect} className="min-h-11 rounded-lg border border-slate-600 px-3 py-2 text-xs font-semibold hover:bg-slate-800 disabled:opacity-50 sm:px-4 sm:text-sm">Connect phone</button>
          <button type="button" disabled={busy || !connected} onClick={inspect} className="min-h-11 rounded-lg bg-sky-400 px-3 py-2 text-xs font-bold text-slate-950 hover:bg-sky-300 disabled:opacity-50 sm:px-4 sm:text-sm">{busy ? "Working..." : "Inspect screen"}</button>
        </div>
      </div>
      {!supported && <p role="alert" className="m-3 rounded-xl border border-amber-700 bg-amber-950/50 p-3 text-xs leading-5 text-amber-200 sm:m-4 sm:p-4 sm:text-sm">WebUSB is unavailable. Use desktop Google Chrome or Microsoft Edge over HTTPS.</p>}
      {error && <p role="alert" className="m-3 break-words rounded-xl border border-red-800 bg-red-950/50 p-3 text-xs leading-5 text-red-200 sm:m-4 sm:p-4 sm:text-sm">{error}</p>}
      {!root ? <div className="px-4 py-8 text-center text-sm leading-6 text-slate-400 sm:p-8"><p>Enable USB debugging, connect a data cable, and close other ADB or Appium programs.</p><p className="mt-2">Then connect the phone, approve Android&apos;s debugging prompt, and inspect the current screen.</p></div> : (
        <div className="grid min-w-0 overflow-hidden xl:h-[75vh] xl:min-h-[620px] xl:max-h-[780px] xl:grid-cols-[minmax(280px,42%)_minmax(0,1fr)]">
          <div className="flex max-h-[70svh] min-h-[280px] items-start justify-center overflow-auto overscroll-contain bg-black p-2 sm:p-4 xl:max-h-none xl:min-h-0">
            <div className="relative max-w-full touch-manipulation" onMouseMove={(event) => pickNode(event, false)} onMouseLeave={() => setHovered(null)} onClick={(event) => pickNode(event, true)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img ref={imageRef} src={screenshot} alt="Current Android screen" onLoad={(event) => setImageSize({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} className="block h-auto max-h-[760px] max-w-full select-none" draggable={false} />
              {overlay(hovered, "#38bdf8")}{overlay(selected, "#facc15")}
            </div>
          </div>
          <div className="grid h-[min(680px,78svh)] min-h-[520px] min-w-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden border-t border-slate-700 xl:h-auto xl:min-h-0 xl:border-l xl:border-t-0">
            <div className="max-h-[45%] overflow-auto overscroll-contain border-b border-slate-700 bg-slate-900 p-3 sm:max-h-[390px] sm:p-4">
              <h3 className="font-semibold text-sky-400">Selected element</h3>
              {!selected ? <p className="mt-3 text-sm text-slate-400">Click an element on the screenshot or in the hierarchy.</p> : <>
                <div className="mt-3 space-y-2">{[["Appium", selected.appium], ["UIAutomator2", selected.uiautomator], ["XPath", selected.xpath], ["ADB tap", selected.adbTap]].map(([label, value]) => <div key={label} className="flex min-w-0 items-start gap-2 rounded-lg border border-slate-700 bg-slate-950 p-2"><div className="min-w-0 flex-1"><span className="text-[10px] uppercase text-slate-500">{label}</span><code className="block break-all text-[11px] leading-5 text-sky-300 sm:text-xs">{value}</code></div><button type="button" onClick={() => void copy(value)} className="min-h-9 shrink-0 rounded bg-slate-700 px-2 py-1 text-xs hover:bg-sky-500 hover:text-black">Copy</button></div>)}</div>
                <dl className="mt-3 grid grid-cols-[88px_minmax(0,1fr)] text-[11px] sm:grid-cols-[110px_minmax(0,1fr)] sm:text-xs">{[["resource-id", selected.resourceId], ["text", selected.text], ["content-desc", selected.contentDesc], ["class", selected.className], ["package", selected.packageName], ["bounds", JSON.stringify(selected.bounds)], ["clickable", String(selected.clickable)], ["scrollable", String(selected.scrollable)]].map(([key, value]) => <div className="contents" key={key}><dt className="border border-slate-700 p-1.5 text-slate-500">{key}</dt><dd className="min-w-0 break-all border border-slate-700 p-1.5 font-mono text-slate-300">{value || "-"}</dd></div>)}</dl>
              </>}
            </div>
            <div className="min-h-0 min-w-0 overflow-auto overscroll-contain bg-slate-950 p-3 sm:p-4"><input value={filter} onChange={(event) => setFilter(event.target.value.toLowerCase())} placeholder="Filter by text, ID, description, or class..." className="sticky top-0 z-10 mb-3 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-500" /><div className="min-w-max pr-3"><NodeTree node={root} selectedId={selected?.id} filter={filter} onSelect={setSelected} /></div></div>
          </div>
        </div>
      )}
    </div>
  );
}
