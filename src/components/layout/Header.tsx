"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type NavLink =
  | { label: string; href: string; children?: never }
  | {
      label: string;
      href?: never;
      children: { label: string; href: string }[];
    };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Resources",
    children: [
      { label: "Interview Questions", href: "/interview-questions" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the mobile drawer is open (DOM sync only — no setState here)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile drawer + its submenu together, called from event handlers (not an effect)
  function closeDrawer() {
    setIsOpen(false);
    setResourceOpen(false);
  }

  // Close mobile drawer / desktop dropdown on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeDrawer();
        setDesktopDropdownOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close desktop dropdown when clicking outside it
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f4ee]/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-[#f7f4ee]/80 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="DevCalc home"
          >
            <Image
              src="/logo.png"
              alt="DevCalc Logo"
              width={180}
              height={60}
              priority
              className="h-auto w-auto max-h-12"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-[#26364a] dark:text-white">
                DevCalc
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="relative">
                    {link.children ? (
                      <div ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() =>
                            setDesktopDropdownOpen((prev) => !prev)
                          }
                          aria-expanded={desktopDropdownOpen}
                          aria-haspopup="true"
                          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              desktopDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {desktopDropdownOpen && (
                          <div
                            role="menu"
                            className="absolute left-0 top-full z-50 mt-2 w-60 rounded-xl border border-stone-200 bg-[#f7f4ee] p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                onClick={() => setDesktopDropdownOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-200 dark:hover:bg-slate-800"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-2 flex items-center gap-2 border-l border-stone-200 pl-4 dark:border-slate-700">
              <ThemeToggle />
              <Link
                href="/calculators"
                className="rounded-full bg-[#1f3a5c] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#162a43]"
              >
                Explore Calculators
              </Link>
            </div>
          </div>

          {/* Mobile Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="text-slate-900 dark:text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 md:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDrawer();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#f7f4ee] shadow-xl dark:bg-slate-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-200 p-5 dark:border-slate-700">
              <Link
                href="/"
                onClick={closeDrawer}
                className="flex items-center"
                aria-label="DevCalc home"
              >
                <Image
                  src="/logo.png"
                  alt="DevCalc Logo"
                  width={140}
                  height={45}
                  className="h-auto w-auto"
                />
              </Link>

              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close menu"
                className="text-slate-900 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-5" aria-label="Mobile primary">
              <ul className="space-y-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setResourceOpen((prev) => !prev)}
                          aria-expanded={resourceOpen}
                          className="flex w-full items-center justify-between text-lg font-medium text-slate-700 dark:text-slate-200"
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              resourceOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {resourceOpen && (
                          <div className="mt-3 ml-4 space-y-3">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeDrawer}
                                className="block text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-300 dark:hover:text-blue-400"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeDrawer}
                        className="block text-lg font-medium text-slate-700 dark:text-slate-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href="/calculators"
                onClick={closeDrawer}
                className="mt-8 block rounded-xl bg-[#1f3a5c] px-5 py-3 text-center font-medium text-white transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                Explore Calculators
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
