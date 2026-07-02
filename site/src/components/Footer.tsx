import Link from "next/link";
import Logo from "./Logo";

const solutionLinks = [
  { label: "Sales Opportunities", href: "/solutions/sales-opportunities/" },
  { label: "Marketing Effectiveness", href: "/solutions/marketing-effectiveness/" },
  { label: "Strategic Decisions", href: "/solutions/strategic-decisions/" },
  { label: "Platform Overview", href: "/platform/" },
];

const companyLinks = [
  { label: "About", href: "/about/" },
  { label: "Who We Serve", href: "/who-we-serve/" },
  { label: "Request a Demo", href: "/request-a-demo/" },
  { label: "Contact", href: "/request-a-demo/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-indigo-deep text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Calqulis turns behavioral and market intelligence into your next best move.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-300 transition hover:text-brand-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-300 transition hover:text-brand-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-300 transition hover:text-brand-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>Copyright 2026 Calqulis Solutions. All Rights Reserved.</p>
          <a
            href="https://caltechweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-brand-cyan"
          >
            Powered by Caltechweb
          </a>
        </div>
      </div>
    </footer>
  );
}
