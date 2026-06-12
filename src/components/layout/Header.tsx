"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            DevCalc
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-100 bg-black/50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold">
                DevCalc
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
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
                      onClick={() =>
                        setIsOpen(false)
                      }
                      className="block text-lg font-medium text-slate-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/calculators"
                onClick={() =>
                  setIsOpen(false)
                }
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