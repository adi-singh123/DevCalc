"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Sparkles, Bot, Building2, Car, BookOpen, FileQuestion } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

type NavLink =
  | { label: string; href: string; children?: never }
  | {
      label: string;
      href?: never;
      id: string;
      children: NavChild[];
    };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  {
    label: "Services",
    id: "services",
    children: [
      {
        label: "Software Builds for Students",
        href: "/college-project",
        desc: "Web, AI/ML & Mobile apps with a 24-hour prototype",
      },
      {
        label: "Automation & Web Scraping",
        href: "/want-automation",
        desc: "Playwright, Selenium & Python automated workflows",
      },
    ],
  },
  {
    label: "State Taxes",
    id: "state-taxes",
    children: [
      {
        label: "Stamp Duty Calculator",
        href: "/stamp-duty-calculator",
        desc: "MH, KA, DL, UP & TN property ready reckoner rates",
      },
      {
        label: "Road Tax Calculator",
        href: "/road-tax-calculator",
        desc: "State-wise RTO vehicle tax slabs & EV exemptions",
      },
    ],
  },
  {
    label: "Resources",
    id: "resources",
    children: [
      {
        label: "Calculator Tug of War (Game)",
        href: "/tug-of-war-calculator",
        desc: "Interactive speed math duel against our AI bot",
      },
      {
        label: "Interview Questions",
        href: "/interview-questions",
        desc: "Curated technical interview quizzes by topic",
      },
      {
        label: "Blog & Guides",
        href: "/blog",
        desc: "Articles on coding, calculations & technology",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeDrawer() {
    setIsOpen(false);
    setActiveMobileSubmenu(null);
  }

  // Close dropdowns on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeDrawer();
        setActiveDesktopDropdown(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setActiveDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f4ee]/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-[#f7f4ee]/80 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
          <div className="hidden items-center gap-2 lg:flex" ref={dropdownContainerRef}>
            <nav aria-label="Primary">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="relative">
                    {link.children ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveDesktopDropdown((prev) =>
                              prev === link.id ? null : link.id
                            )
                          }
                          aria-expanded={activeDesktopDropdown === link.id}
                          aria-haspopup="true"
                          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                        >
                          {link.label}
                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-200 ${
                              activeDesktopDropdown === link.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeDesktopDropdown === link.id && (
                          <div
                            role="menu"
                            className="absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-stone-200 bg-[#f7f4ee] p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                onClick={() => setActiveDesktopDropdown(null)}
                                className="block rounded-xl p-2.5 transition hover:bg-[#e9e2d6] dark:hover:bg-slate-800"
                              >
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                                  {child.label}
                                </div>
                                {child.desc && (
                                  <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                                    {child.desc}
                                  </div>
                                )}
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
                className="rounded-full bg-[#1f3a5c] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                All Calculators
              </Link>
            </div>
          </div>

          {/* Mobile Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="rounded-lg p-1.5 text-slate-900 hover:bg-stone-200/60 dark:text-white dark:hover:bg-slate-800"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 lg:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDrawer();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-84 max-w-[85vw] overflow-y-auto bg-[#f7f4ee] shadow-2xl dark:bg-slate-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-200 p-4 dark:border-slate-700">
              <Link
                href="/"
                onClick={closeDrawer}
                className="flex items-center"
                aria-label="DevCalc home"
              >
                <Image
                  src="/logo.png"
                  alt="DevCalc Logo"
                  width={130}
                  height={42}
                  className="h-auto w-auto max-h-10"
                />
              </Link>

              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close menu"
                className="rounded-lg p-1 text-slate-900 hover:bg-stone-200/60 dark:text-white dark:hover:bg-slate-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4" aria-label="Mobile primary">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      <div className="rounded-xl border border-stone-200/80 bg-white/60 p-2 dark:border-slate-800 dark:bg-slate-800/40">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMobileSubmenu((prev) =>
                              prev === link.id ? null : link.id
                            )
                          }
                          aria-expanded={activeMobileSubmenu === link.id}
                          className="flex w-full items-center justify-between p-1.5 text-base font-semibold text-slate-800 dark:text-slate-200"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              activeMobileSubmenu === link.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeMobileSubmenu === link.id && (
                          <div className="mt-2 space-y-1 border-t border-stone-200/60 pt-2 dark:border-slate-700/60">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeDrawer}
                                className="block rounded-lg p-2 text-sm text-slate-600 transition hover:bg-stone-200/50 hover:text-[#1f3a5c] dark:text-slate-300 dark:hover:bg-slate-700"
                              >
                                <div className="font-medium">{child.label}</div>
                                {child.desc && (
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    {child.desc}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeDrawer}
                        className="block rounded-xl px-3 py-2.5 text-base font-semibold text-slate-800 transition hover:bg-white/60 dark:text-slate-200 dark:hover:bg-slate-800/60"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2">
                <Link
                  href="/calculators"
                  onClick={closeDrawer}
                  className="block rounded-xl bg-[#1f3a5c] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Explore All Calculators
                </Link>
                <Link
                  href="/college-project"
                  onClick={closeDrawer}
                  className="block rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-center text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/50 dark:bg-emerald-950/40 dark:text-emerald-300"
                >
                  ⚡ Student Projects (24h Prototype)
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
