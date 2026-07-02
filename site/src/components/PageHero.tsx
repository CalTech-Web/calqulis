import { ReactNode } from "react";
import NetworkMotif from "./NetworkMotif";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function PageHero({ eyebrow, title, description, children, compact }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden brand-gradient-bg">
      <NetworkMotif className="network-fade pointer-events-none absolute inset-0 z-0 h-full w-full opacity-90" />
      <div className="pointer-events-none absolute inset-0 z-0 node-grid opacity-[0.15]" />
      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 text-center ${
          compact ? "py-20 sm:py-24" : "py-28 sm:py-36"
        }`}
      >
        {eyebrow && (
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-cyan">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
