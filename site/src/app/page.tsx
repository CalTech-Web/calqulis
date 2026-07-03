import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import NetworkMotif from "@/components/NetworkMotif";
import ProcessStory from "@/components/ProcessStory";
import ProcessIcon, { type ProcessIconName } from "@/components/ProcessIcon";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const useCases = [
  {
    title: "Sales Opportunities",
    href: "/solutions/sales-opportunities/",
    description:
      "Surface in market buying signals so sales teams prioritize the right accounts and reach demand before competitors see it.",
  },
  {
    title: "Marketing Effectiveness",
    href: "/solutions/marketing-effectiveness/",
    description:
      "Measure which messages, channels, and audiences actually move buyers, then reallocate spend toward what is proven to work.",
  },
  {
    title: "Strategic Decisions",
    href: "/solutions/strategic-decisions/",
    description:
      "Aggregate market and behavioral trends into executive level insight that supports planning, market entry, and positioning.",
  },
];

const process: {
  step: string;
  phase: string;
  icon: ProcessIconName;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    phase: "Step 01",
    icon: "connect",
    title: "Connect",
    description:
      "Behavioral signals, market movement, and consumer activity stream in from every source relevant to your business, converging into one raw signal.",
  },
  {
    step: "02",
    phase: "Step 02",
    icon: "analyze",
    title: "Analyze",
    description:
      "The Calqulis analysis engine processes that raw signal, smoothing noisy buying behavior and market data into structured, actionable insight.",
  },
  {
    step: "03",
    phase: "Step 03",
    icon: "surface",
    title: "Surface",
    description:
      "The structured signal surfaces as clear, decision ready insight, where sales opportunities, marketing performance, and strategic trends rise into view.",
  },
  {
    step: "04",
    phase: "Step 04",
    icon: "act",
    title: "Act",
    description:
      "Every insight routes to the team that can act on it: sales prioritizes outreach, marketing reallocates spend, and leadership sharpens strategy.",
  },
  {
    step: "05",
    phase: "Ongoing",
    icon: "refine",
    title: "Refine",
    description:
      "The loop never stops. Fresh behavior flows back into analysis, so your intelligence stays current as buyer behavior shifts.",
  },
];

const differentiators = [
  "Aggregates multiple behavioral and market intelligence sources into one platform, instead of forcing teams to stitch together disconnected data",
  "Delivers actionable insight, not just raw data or dashboards full of numbers",
  "Purpose built for three distinct use cases, sales opportunity identification, marketing effectiveness, and strategic decision making",
  "Designed for mid sized businesses, large enterprises, and national organizations, not a one size fits all self serve tool",
  "SaaS delivery model means no specialized data science team is required to get value",
  "Positions behavioral intelligence as a continuous input to decisions, not a one time report",
];

const faqs = [
  {
    q: "What is Calqulis?",
    a: "Calqulis is a commercial and consumer behavioral intelligence platform. It aggregates multiple sources of behavioral and market intelligence into one place and turns that data into actionable insight for sales, marketing, and strategy teams.",
  },
  {
    q: "Who is Calqulis built for?",
    a: "Calqulis is built for mid sized businesses, large enterprises, and national organizations that want a clearer, evidence based view of buying behavior and market trends.",
  },
  {
    q: "How does Calqulis get its data?",
    a: "Calqulis aggregates behavioral and market intelligence from multiple sources into a single platform, so customers get one consistent, actionable view instead of piecing together disparate data themselves.",
  },
  {
    q: "Do I need a data science team to use Calqulis?",
    a: "No. Calqulis is delivered as SaaS specifically so that sales, marketing, and strategy teams can act on behavioral intelligence directly, without needing dedicated data science resources.",
  },
  {
    q: "When is Calqulis launching?",
    a: "Calqulis is currently in pre launch. Visitors can request a demo to be among the first to see the platform.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden brand-gradient-bg">
        <NetworkMotif className="network-fade pointer-events-none absolute inset-0 z-0 h-full w-full opacity-90" />
        <div className="pointer-events-none absolute inset-0 z-0 node-grid opacity-[0.15]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
          <p className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-cyan">
            Behavioral Intelligence, Reimagined
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn behavioral and market <span className="text-gradient">intelligence</span> into
            your next best move
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Calqulis aggregates multiple sources of behavioral and market data into one platform,
            helping organizations understand buying behavior, uncover sales opportunities,
            sharpen marketing effectiveness, and make more informed strategic decisions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/request-a-demo/">Request a Demo</Button>
            <Button href="/platform/" variant="secondary">
              See the Platform
            </Button>
          </div>
        </div>
      </section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One platform, three outcomes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Calqulis is a single behavioral intelligence platform built around the decisions that
            matter most to your business.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Link
              key={useCase.href}
              href={useCase.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-indigo/30 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-brand-indigo">
                {useCase.title}
              </h3>
              <p className="mt-3 flex-1 text-slate-600">{useCase.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo">
                Explore {useCase.title}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 8h9M8.5 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How Calqulis works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Continuously updated intelligence, delivered as SaaS, so your team can act without
            waiting on a dedicated data science group.
          </p>
        </div>

        <div className="mt-12">
          <ProcessStory />
        </div>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-indigo/20 bg-white shadow-sm">
                  <ProcessIcon name={p.icon} />
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-indigo">
                  {p.phase}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-indigo-deep py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why organizations choose Calqulis
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Six reasons sales, marketing, and strategy teams pick Calqulis over piecing data
            together themselves.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item}
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-brand-cyan/10"
            >
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-brand-cyan transition duration-200 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10.5l3.5 3.5L16 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-indigo/15 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Calqulis is in early access
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We built Calqulis to give organizations a single, clear view of the behavior driving
            their market, so every decision is backed by evidence instead of guesswork. Request a
            demo to be among the first organizations to see the platform in action.
          </p>
          <div className="mt-8">
            <Button href="/request-a-demo/">Request a Demo</Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-center text-lg leading-relaxed text-slate-600">
            Answers to what teams evaluating Calqulis ask us most.
          </p>
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
