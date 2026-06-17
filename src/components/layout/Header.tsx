"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Calculators",
      href: "/calculators",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DevCalc Logo"
              width={180}
              height={60}
              priority
              className="h-auto w-auto max-h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex">
            <nav>
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
              className="text-slate-900 dark:text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-100 bg-black/50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl dark:bg-slate-900">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center"
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
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-slate-900 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-5">
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-slate-700 dark:text-slate-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/calculators"
                onClick={() => setIsOpen(false)}
                className="
  mt-8
  block
  rounded-xl
  bg-black
  px-5
  py-3
  text-center
  font-medium
  text-white
  dark:bg-blue-600
"
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
