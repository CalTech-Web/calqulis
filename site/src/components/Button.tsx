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
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition";
  const styles: Record<string, string> = {
    primary: "bg-brand-cyan text-brand-indigo-deep hover:brightness-110",
    secondary:
      "border border-white/25 text-white hover:border-brand-cyan hover:text-brand-cyan",
    ghost: "bg-brand-indigo text-white hover:bg-brand-slate-blue",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
