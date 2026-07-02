import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-200 ease-out";
  const styles: Record<string, string> = {
    primary:
      "bg-brand-cyan text-brand-indigo-deep shadow-lg shadow-brand-cyan/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-cyan/40 hover:brightness-110",
    secondary:
      "border border-white/25 text-white hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/15",
    ghost:
      "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20 hover:-translate-y-0.5 hover:bg-brand-slate-blue hover:shadow-xl hover:shadow-brand-indigo/35",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
