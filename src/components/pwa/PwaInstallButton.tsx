"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function PwaInstallButton({ compact = false }: { compact?: boolean }) {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallPromptEvent);
    };
    const clearPrompt = () => setPromptEvent(null);

    window.addEventListener("beforeinstallprompt", handlePrompt);
    window.addEventListener("appinstalled", clearPrompt);
    window.addEventListener("devcalc:pwa-consumed", clearPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
      window.removeEventListener("appinstalled", clearPrompt);
      window.removeEventListener("devcalc:pwa-consumed", clearPrompt);
    };
  }, []);

  async function install() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    await promptEvent.userChoice;
    window.dispatchEvent(new Event("devcalc:pwa-consumed"));
  }

  if (!promptEvent) return null;

  return (
    <button
      type="button"
      onClick={install}
      aria-label="Install DevCalc app"
      className={compact
        ? "inline-flex items-center justify-center rounded-lg bg-[#1f3a5c] p-2 text-white shadow-sm transition hover:bg-[#162a43] dark:bg-blue-600"
        : "inline-flex items-center justify-center gap-2 rounded-full border border-[#1f3a5c] px-3 py-2 text-xs font-semibold text-[#1f3a5c] transition hover:bg-[#1f3a5c] hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white"}
    >
      <Download size={compact ? 18 : 15} aria-hidden="true" />
      {!compact && <span>Install App</span>}
    </button>
  );
}
