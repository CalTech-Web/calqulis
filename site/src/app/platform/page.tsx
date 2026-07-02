import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Calqulis behavioral intelligence platform aggregates multiple sources of commercial and consumer data into one continuously updated, actionable view.",
};

const capabilities = [
  {
    title: "Aggregated intelligence",
    description:
      "Calqulis aggregates multiple sources of commercial and consumer behavioral and market data into one platform, so your team is not stitching together disconnected reports.",
  },
  {
    title: "Actionable, not just raw data",
    description:
      "Raw behavioral signals are turned into decision ready insight. Calqulis is built for buying behavior analysis, not just data delivery.",
  },
  {
    title: "SaaS delivery",
    description:
      "Accessible without specialized data science staff. Sales, marketing, and strategy teams can act on insight directly inside the platform.",
  },
  {
    title: "Continuously updated",
    description:
      "Intelligence updates continuously rather than arriving as a static report, so decisions stay current as buyer behavior shifts.",
  },
];

const modules = [
  {
    title: "Sales Opportunities",
    href: "/solutions/sales-opportunities/",
    description: "Prioritize accounts based on in market buying signals.",
  },
  {
    title: "Marketing Effectiveness",
    href: "/solutions/marketing-effectiveness/",
    description: "See which messages and channels actually move buyers.",
  },
  {
    title: "Strategic Decisions",
    href: "/solutions/strategic-decisions/",
    description: "Give leadership a shared, evidence backed view of the market.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Turn Raw Signal Into Decision Ready Insight"
        description="Calqulis aggregates every source of commercial and consumer behavioral and market data into one continuously updated platform, built for sales, marketing, and strategy teams."
      />

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-indigo-deep py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three core use cases, one platform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Calqulis is not three separate products. It is a single platform, with sales
            opportunities, marketing effectiveness, and strategic decisions as core modules.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-brand-cyan/40 hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-brand-cyan">
                {m.title}
              </h3>
              <p className="mt-3 flex-1 text-slate-300">{m.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-indigo/15 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            See the platform for yourself
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Calqulis is in early access. Request a demo to walk through the platform with our
            team.
          </p>
          <div className="mt-8">
            <Button href="/request-a-demo/">Request a Demo</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
