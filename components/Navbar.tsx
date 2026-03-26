"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryLinks = [
  { href: "/", label: "Profile" },
  { href: "/effective-communication", label: "Communication" },
  { href: "/digital-literacy", label: "Digital Literacy" },
];

const dropdownLinks = [
  { href: "/innovative-problem-solving", label: "Problem Solving" },
  { href: "/data-driven-decision-making", label: "Data-Driven Decisions" },
  {
    href: "/ethical-data-communication",
    label: "Ethical Data Communication",
  },
  { href: "/career-goals", label: "Career Goals" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isDropdownActive = dropdownLinks.some((link) => link.href === pathname);

  return (
    <header className="sticky top-0 z-50 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-4 rounded-[1rem] border border-line bg-white px-4 py-4 md:grid-cols-[auto_1fr_auto] md:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-display text-3xl font-semibold text-ink transition-colors hover:text-deep-blue"
            >
              Christy
            </Link>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink md:hidden"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col gap-2 border-line p-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:px-3">
              {primaryLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-sm transition-colors ${
                        active
                          ? "text-deep-blue"
                          : "text-ink hover:text-deep-blue"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="relative">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-sm transition-colors md:w-auto ${
                    isDropdownActive || isDropdownOpen
                      ? "text-deep-blue"
                      : "text-ink hover:text-deep-blue"
                  }`}
                  onClick={() => setIsDropdownOpen((open) => !open)}
                >
                  More
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`mt-2 space-y-2 rounded-[0.9rem] border border-line bg-white p-2 md:absolute md:right-0 md:z-20 md:min-w-64 ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  {dropdownLinks.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-[0.7rem] px-4 py-3 text-sm transition-colors ${
                          active
                            ? "bg-deep-blue text-white"
                            : "text-ink hover:bg-[#faf8f4] hover:text-deep-blue"
                        }`}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </li>
            </ul>
          </nav>

          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <a
              href="/Christy_Eddington.pdf"
              download
              className="inline-flex w-full items-center justify-center rounded-full border border-deep-blue bg-deep-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#163956] md:w-auto"
            >
              Resume
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
