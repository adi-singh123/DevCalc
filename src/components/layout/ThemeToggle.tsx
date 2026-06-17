"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] =
    useState<boolean>(() => {
      if (
        typeof window ===
        "undefined"
      ) {
        return false;
      }

      return document.documentElement.classList.contains(
        "dark",
      );
    });

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add(
        "dark",
      );

      localStorage.setItem(
        "theme",
        "dark",
      );
    } else {
      document.documentElement.classList.remove(
        "dark",
      );

      localStorage.setItem(
        "theme",
        "light",
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        rounded-full
        border
        border-slate-300
        p-2
        text-slate-700
        transition
        hover:bg-slate-100
        dark:border-slate-600
        dark:text-white
        dark:hover:bg-slate-800
      "
      aria-label="Toggle Theme"
    >
      {dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}