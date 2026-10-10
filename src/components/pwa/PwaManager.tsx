"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISSED_KEY = "devcalc.pwa.install-dismissed.v1";
const INSTALL_SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;

export default function PwaManager() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    const dismissedAt = Number(window.localStorage.getItem(DISMISSED_KEY) || 0);
    const snoozed = dismissedAt > 0 && Date.now() - dismissedAt < INSTALL_SNOOZE_MS;
    if (standalone || snoozed) return;

    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
      setVisible(true);
    };
    const handleInstalled = () => {
      setInstallPrompt(null);
      setVisible(false);
      window.localStorage.removeItem(DISMISSED_KEY);
    };
    const handleConsumed = () => {
      setInstallPrompt(null);
      setVisible(false);
    };

    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", handleInstalled);
    window.addEventListener("devcalc:pwa-consumed", handleConsumed);
    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", handleInstalled);
      window.removeEventListener("devcalc:pwa-consumed", handleConsumed);
    };
  }, []);

  async function install() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") setVisible(false);
    setInstallPrompt(null);
    window.dispatchEvent(new Event("devcalc:pwa-consumed"));
  }

  function dismiss() {
    window.localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    setVisible(false);
  }

  if (!visible || !installPrompt) return null;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900" aria-label="Install DevCalc">
      <div className="flex items-start gap-3">
        <Image src="/icon.png" alt="" width={48} height={48} className="h-12 w-12 rounded-xl" />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-slate-900 dark:text-white">Install DevCalc</p>
          <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">Open saved tools faster and use supported pages when your connection is unavailable.</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" onClick={dismiss} className="rounded-xl border border-slate-300 px-4 py-2.5 font-medium dark:border-slate-700">Not now</button>
        <button type="button" onClick={install} className="rounded-xl bg-[#1f3a5c] px-4 py-2.5 font-semibold text-white">Install app</button>
      </div>
    </aside>
  );
}
