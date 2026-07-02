"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const solutions = [
  { label: "Sales Opportunities", href: "/solutions/sales-opportunities/" },
  { label: "Marketing Effectiveness", href: "/solutions/marketing-effectiveness/" },
  { label: "Strategic Decisions", href: "/solutions/strategic-decisions/" },
];

const navLinks = [
  { label: "Platform", href: "/platform/" },
  { label: "Who We Serve", href: "/who-we-serve/" },
  { label: "About", href: "/about/" },
];

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-indigo-deep/95 backdrop-blur supports-[backdrop-filter]:bg-brand-indigo-deep/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0" aria-label="Calqulis home">
          <Logo variant="light" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <Link href="/" className="text-sm font-medium text-slate-200 transition hover:text-brand-cyan">
            Home
          </Link>
          <Link
            href="/platform/"
            className="text-sm font-medium text-slate-200 transition hover:text-brand-cyan"
          >
            Platform
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-slate-200 transition hover:text-brand-cyan"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-white/10 bg-brand-indigo-deep shadow-xl shadow-black/30">
                  {solutions.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm text-slate-200 transition first:rounded-t-xl last:rounded-b-xl hover:bg-white/5 hover:text-brand-cyan"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/who-we-serve/"
            className="text-sm font-medium text-slate-200 transition hover:text-brand-cyan"
          >
            Who We Serve
          </Link>
          <Link href="/about/" className="text-sm font-medium text-slate-200 transition hover:text-brand-cyan">
            About
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/request-a-demo/"
            className="rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-brand-indigo-deep transition hover:brightness-110"
          >
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-indigo-deep px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile">
            <Link href="/" className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5">
              Home
            </Link>
            <Link href="/platform/" className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5">
              Platform
            </Link>
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Solutions
            </div>
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-md px-6 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {s.label}
              </Link>
            ))}
            {navLinks.slice(1).map((l) => (
              <Link key={l.href} href={l.href} className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5">
                {l.label}
              </Link>
            ))}
            <Link
              href="/request-a-demo/"
              className="mt-3 rounded-full bg-brand-cyan px-5 py-2.5 text-center text-sm font-semibold text-brand-indigo-deep"
            >
              Request a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
