import Link from "next/link";
import PageHero from "./PageHero";
import Section from "./Section";
import Button from "./Button";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import { siteUrl } from "@/lib/site";

type Solution = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  href: string;
};

const allSolutions: Solution[] = [
  {
    eyebrow: "Solutions",
    title: "Sales Opportunities",
    href: "/solutions/sales-opportunities/",
    description: "",
    points: [],
  },
  {
    eyebrow: "Solutions",
    title: "Marketing Effectiveness",
    href: "/solutions/marketing-effectiveness/",
    description: "",
    points: [],
  },
  {
    eyebrow: "Solutions",
    title: "Strategic Decisions",
    href: "/solutions/strategic-decisions/",
    description: "",
    points: [],
  },
];

export default function SolutionTemplate({
  title,
  description,
  points,
  currentHref,
}: {
  title: string;
  description: string;
  points: string[];
  currentHref: string;
}) {
  const otherSolutions = allSolutions.filter((s) => s.href !== currentHref);

  return (
    <>
      <PageHero eyebrow="Solutions" title={title} description={description} />

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-brand-indigo"
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
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-indigo/15 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            See {title} in action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Calqulis is in early access. Request a demo to see how the platform can help your team
            with {title.toLowerCase()}.
          </p>
          <div className="mt-8">
            <Button href="/request-a-demo/">Request a Demo</Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Explore other solutions</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Calqulis covers three connected use cases inside a single platform.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherSolutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 transition hover:border-brand-indigo/30 hover:bg-white hover:shadow-sm"
              >
                <span className="font-semibold text-slate-900 group-hover:text-brand-indigo">
                  {s.title}
                </span>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 8h9M8.5 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-indigo"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteUrl}/` },
          { name: title, url: `${siteUrl}${currentHref}` },
        ]}
      />
    </>
  );
}
