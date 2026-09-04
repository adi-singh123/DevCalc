"use client";

import { useState, useMemo } from "react";
import {
  ArrowLeftRight,
  Check,
  Clipboard,
  Columns,
  Copy,
  FileCode,
  FileDiff,
  Minus,
  Plus,
  RefreshCw,
  Sparkles,
  Trash2,
} from "lucide-react";

type DiffType = "equal" | "add" | "delete";

type DiffSegment = {
  type: DiffType;
  value: string;
  originalLineNum?: number;
  changedLineNum?: number;
};

type SideBySideRow = {
  left: { lineNum: number | null; text: string; type: DiffType };
  right: { lineNum: number | null; text: string; type: DiffType };
};

// Standard Longest Common Subsequence (LCS) implementation for line-level diffing
function computeLineLCS(linesA: string[], linesB: string[]): { type: DiffType; value: string }[] {
  const n = linesA.length;
  const m = linesB.length;

  // Build matrix
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (linesA[i] === linesB[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Backtrack to find diff
  const result: { type: DiffType; value: string }[] = [];
  let i = n;
  let j = m;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && linesA[i - 1] === linesB[j - 1]) {
      result.unshift({ type: "equal", value: linesA[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: "add", value: linesB[j - 1] });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      result.unshift({ type: "delete", value: linesA[i - 1] });
      i--;
    }
  }

  return result;
}

const SAMPLE_ORIGINAL = `function calculateTotal(items, taxRate) {
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price;
  }
  const tax = subtotal * taxRate;
  return subtotal + tax;
}`;

const SAMPLE_CHANGED = `function calculateTotal(items, taxRate, discount = 0) {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const discounted = Math.max(0, subtotal - discount);
  const tax = discounted * taxRate;
  return discounted + tax;
}`;

export default function DiffChecker() {
  const [originalText, setOriginalText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [viewMode, setViewMode] = useState<"split" | "unified">("split");
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasCompared, setHasCompared] = useState(false);

  // Perform diff computation
  const { unifiedDiff, sideBySideRows, stats } = useMemo(() => {
    if (!hasCompared && !originalText && !changedText) {
      return { unifiedDiff: [], sideBySideRows: [], stats: null };
    }

    let origLines = originalText.split(/\r?\n/);
    let modLines = changedText.split(/\r?\n/);

    if (originalText === "" && origLines.length === 1 && origLines[0] === "") {
      origLines = [];
    }
    if (changedText === "" && modLines.length === 1 && modLines[0] === "") {
      modLines = [];
    }

    // Normalization functions for comparison
    const normalize = (line: string) => {
      let l = line;
      if (ignoreWhitespace) l = l.trim().replace(/\s+/g, " ");
      if (ignoreCase) l = l.toLowerCase();
      return l;
    };

    const normA = origLines.map(normalize);
    const normB = modLines.map(normalize);

    const lcsRaw = computeLineLCS(normA, normB);

    // Reconstruct with original strings & line numbers
    let aIndex = 0;
    let bIndex = 0;

    const unified: DiffSegment[] = [];
    const sideBySide: SideBySideRow[] = [];

    let addedCount = 0;
    let deletedCount = 0;
    let unchangedCount = 0;

    let k = 0;
    while (k < lcsRaw.length) {
      const item = lcsRaw[k];

      if (item.type === "equal") {
        const lineA = origLines[aIndex];
        const lineNumA = aIndex + 1;
        const lineNumB = bIndex + 1;

        unified.push({
          type: "equal",
          value: lineA ?? "",
          originalLineNum: lineNumA,
          changedLineNum: lineNumB,
        });

        sideBySide.push({
          left: { lineNum: lineNumA, text: lineA ?? "", type: "equal" },
          right: { lineNum: lineNumB, text: modLines[bIndex] ?? "", type: "equal" },
        });

        unchangedCount++;
        aIndex++;
        bIndex++;
        k++;
      } else if (item.type === "delete") {
        // Collect consecutive deletes and adds to align side-by-side cleanly
        const deleteChunk: string[] = [];
        const addChunk: string[] = [];

        while (k < lcsRaw.length && lcsRaw[k].type === "delete") {
          deleteChunk.push(origLines[aIndex]);
          unified.push({
            type: "delete",
            value: origLines[aIndex] ?? "",
            originalLineNum: aIndex + 1,
          });
          deletedCount++;
          aIndex++;
          k++;
        }

        while (k < lcsRaw.length && lcsRaw[k].type === "add") {
          addChunk.push(modLines[bIndex]);
          unified.push({
            type: "add",
            value: modLines[bIndex] ?? "",
            changedLineNum: bIndex + 1,
          });
          addedCount++;
          bIndex++;
          k++;
        }

        const maxChunk = Math.max(deleteChunk.length, addChunk.length);
        for (let idx = 0; idx < maxChunk; idx++) {
          const delText = deleteChunk[idx];
          const addText = addChunk[idx];

          const leftLineNum = delText !== undefined ? aIndex - deleteChunk.length + idx + 1 : null;
          const rightLineNum = addText !== undefined ? bIndex - addChunk.length + idx + 1 : null;

          sideBySide.push({
            left: {
              lineNum: leftLineNum,
              text: delText ?? "",
              type: delText !== undefined ? "delete" : "equal",
            },
            right: {
              lineNum: rightLineNum,
              text: addText ?? "",
              type: addText !== undefined ? "add" : "equal",
            },
          });
        }
      } else if (item.type === "add") {
        unified.push({
          type: "add",
          value: modLines[bIndex] ?? "",
          changedLineNum: bIndex + 1,
        });

        sideBySide.push({
          left: { lineNum: null, text: "", type: "equal" },
          right: { lineNum: bIndex + 1, text: modLines[bIndex] ?? "", type: "add" },
        });

        addedCount++;
        bIndex++;
        k++;
      }
    }

    return {
      unifiedDiff: unified,
      sideBySideRows: sideBySide,
      stats: {
        added: addedCount,
        deleted: deletedCount,
        unchanged: unchangedCount,
        origLinesCount: origLines.length,
        modLinesCount: modLines.length,
        origChars: originalText.length,
        modChars: changedText.length,
      },
    };
  }, [originalText, changedText, ignoreWhitespace, ignoreCase, hasCompared]);

  const handleLoadSample = () => {
    setOriginalText(SAMPLE_ORIGINAL);
    setChangedText(SAMPLE_CHANGED);
    setHasCompared(true);
  };

  const handleSwap = () => {
    const temp = originalText;
    setOriginalText(changedText);
    setChangedText(temp);
  };

  const handleClear = () => {
    setOriginalText("");
    setChangedText("");
    setHasCompared(false);
  };

  const handleCopyDiff = () => {
    if (!unifiedDiff || unifiedDiff.length === 0) return;
    const textOutput = unifiedDiff
      .map((item) => {
        const prefix = item.type === "add" ? "+ " : item.type === "delete" ? "- " : "  ";
        return `${prefix}${item.value}`;
      })
      .join("\n");

    navigator.clipboard.writeText(textOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      {/* Top Bar: Controls & Samples */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <FileDiff size={18} />
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Client-Side Diff Engine
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleLoadSample}
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-stone-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <Sparkles size={13} className="text-amber-500" /> Load Sample Code
          </button>

          <button
            type="button"
            onClick={handleSwap}
            title="Swap Original and Changed texts"
            className="inline-flex items-center gap-1 rounded-lg border border-stone-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-stone-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ArrowLeftRight size={13} /> Swap
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1 rounded-lg border border-rose-200 px-2.5 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-900/50 dark:text-rose-400 dark:hover:bg-rose-950/30"
          >
            <Trash2 size={13} /> Clear
          </button>
        </div>
      </div>

      {/* Input Editors */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {/* Original Text Box */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Original Text (Before)
            </label>
            <span className="text-xs text-stone-500 dark:text-slate-400 font-mono">
              {originalText.split(/\r?\n/).length} lines | {originalText.length} chars
            </span>
          </div>

          <textarea
            rows={9}
            value={originalText}
            onChange={(e) => {
              setOriginalText(e.target.value);
              setHasCompared(false);
            }}
            placeholder="Paste your original text, code, or document here..."
            className="w-full resize-y rounded-2xl border border-stone-300 bg-stone-50/50 p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 transition focus:border-blue-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
        </div>

        {/* Changed Text Box */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Changed Text (After)
            </label>
            <span className="text-xs text-stone-500 dark:text-slate-400 font-mono">
              {changedText.split(/\r?\n/).length} lines | {changedText.length} chars
            </span>
          </div>

          <textarea
            rows={9}
            value={changedText}
            onChange={(e) => {
              setChangedText(e.target.value);
              setHasCompared(false);
            }}
            placeholder="Paste your modified text, updated code, or revision here..."
            className="w-full resize-y rounded-2xl border border-stone-300 bg-stone-50/50 p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 transition focus:border-blue-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Options & Action Row */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-stone-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/60">
        <div className="flex flex-wrap items-center gap-4">
          <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={ignoreWhitespace}
              onChange={(e) => setIgnoreWhitespace(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-blue-600 focus:ring-blue-500"
            />
            Ignore Whitespace
          </label>

          <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-blue-600 focus:ring-blue-500"
            />
            Ignore Case
          </label>
        </div>

        <button
          type="button"
          onClick={() => setHasCompared(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#1f3a5c] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <FileDiff size={17} /> Find Difference
        </button>
      </div>

      {/* Statistics & Results Section */}
      {hasCompared && stats && (
        <div className="mt-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-center dark:border-emerald-900/50 dark:bg-emerald-950/30">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Added Lines
              </span>
              <p className="mt-1 text-2xl font-extrabold text-emerald-800 dark:text-emerald-300">
                +{stats.added}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-center dark:border-rose-900/50 dark:bg-rose-950/30">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                Deleted Lines
              </span>
              <p className="mt-1 text-2xl font-extrabold text-rose-800 dark:text-rose-300">
                -{stats.deleted}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-center dark:border-slate-700 dark:bg-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Unchanged Lines
              </span>
              <p className="mt-1 text-2xl font-extrabold text-slate-800 dark:text-slate-200">
                {stats.unchanged}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4 text-center dark:border-blue-900/50 dark:bg-blue-950/30">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Net Delta
              </span>
              <p className="mt-1 text-2xl font-extrabold text-blue-900 dark:text-blue-300">
                {stats.modChars - stats.origChars >= 0
                  ? `+${stats.modChars - stats.origChars}`
                  : `${stats.modChars - stats.origChars}`}{" "}
                <span className="text-xs font-normal">chars</span>
              </p>
            </div>
          </div>

          {/* View Mode Toggle & Copy Header */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 dark:border-slate-800">
            <div className="flex items-center gap-1 rounded-xl bg-stone-100 p-1 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setViewMode("split")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "split"
                    ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <Columns size={14} /> Side-by-Side (Split)
              </button>

              <button
                type="button"
                onClick={() => setViewMode("unified")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "unified"
                    ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <FileCode size={14} /> Unified (Inline)
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopyDiff}
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-stone-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" /> Copied Patch!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Diff Patch
                </>
              )}
            </button>
          </div>

          {/* Diff Viewer */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200 bg-slate-950 font-mono text-xs sm:text-sm text-slate-100 shadow-inner dark:border-slate-800">
            {viewMode === "unified" ? (
              // Unified / Inline View
              <div className="overflow-x-auto divide-y divide-slate-900">
                {unifiedDiff.length === 0 ? (
                  <div className="p-6 text-center text-slate-500">
                    No differences found. The two texts are 100% identical.
                  </div>
                ) : (
                  unifiedDiff.map((row, idx) => {
                    const isAdd = row.type === "add";
                    const isDelete = row.type === "delete";

                    return (
                      <div
                        key={idx}
                        className={`flex items-start px-3 py-1 font-mono transition-colors ${
                          isAdd
                            ? "bg-emerald-950/60 text-emerald-300 border-l-4 border-emerald-500"
                            : isDelete
                            ? "bg-rose-950/60 text-rose-300 border-l-4 border-rose-500"
                            : "text-slate-300 hover:bg-slate-900/50"
                        }`}
                      >
                        <span className="w-9 shrink-0 select-none text-right text-slate-500 pr-2">
                          {row.originalLineNum ?? ""}
                        </span>
                        <span className="w-9 shrink-0 select-none text-right text-slate-500 pr-2">
                          {row.changedLineNum ?? ""}
                        </span>
                        <span className="w-5 shrink-0 select-none font-bold text-center">
                          {isAdd ? "+" : isDelete ? "-" : " "}
                        </span>
                        <span className="flex-1 whitespace-pre-wrap break-all pl-1">
                          {row.value || " "}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              // Side-by-Side / Split View
              <div className="overflow-x-auto">
                <div className="min-w-[700px] divide-y divide-slate-900">
                  {sideBySideRows.length === 0 ? (
                    <div className="p-6 text-center text-slate-500">
                      No differences found. The two texts are 100% identical.
                    </div>
                  ) : (
                    sideBySideRows.map((row, idx) => {
                      const isDel = row.left.type === "delete";
                      const isAdd = row.right.type === "add";

                      return (
                        <div key={idx} className="grid grid-cols-2 divide-x divide-slate-800">
                          {/* Left (Original) */}
                          <div
                            className={`flex items-start px-2 py-0.5 ${
                              isDel
                                ? "bg-rose-950/60 text-rose-300 border-l-2 border-rose-500"
                                : "text-slate-300"
                            }`}
                          >
                            <span className="w-8 shrink-0 select-none text-right text-slate-500 pr-2 text-xs">
                              {row.left.lineNum ?? ""}
                            </span>
                            <span className="flex-1 whitespace-pre-wrap break-all pl-1">
                              {row.left.text || " "}
                            </span>
                          </div>

                          {/* Right (Changed) */}
                          <div
                            className={`flex items-start px-2 py-0.5 ${
                              isAdd
                                ? "bg-emerald-950/60 text-emerald-300 border-l-2 border-emerald-500"
                                : "text-slate-300"
                            }`}
                          >
                            <span className="w-8 shrink-0 select-none text-right text-slate-500 pr-2 text-xs">
                              {row.right.lineNum ?? ""}
                            </span>
                            <span className="flex-1 whitespace-pre-wrap break-all pl-1">
                              {row.right.text || " "}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

