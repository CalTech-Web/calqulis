import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Calqulis is built for mid sized businesses, large enterprises, and national organizations that want a clearer, evidence based view of buying behavior and market trends.",
  alternates: {
    canonical: "/who-we-serve/",
  },
  openGraph: {
    title: "Who We Serve | Calqulis",
    description:
      "Calqulis is built for mid sized businesses, large enterprises, and national organizations that want a clearer, evidence based view of buying behavior and market trends.",
    url: "/who-we-serve/",
    siteName: "Calqulis",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Calqulis | Behavioral Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve | Calqulis",
    description:
      "Calqulis is built for mid sized businesses, large enterprises, and national organizations that want a clearer, evidence based view of buying behavior and market trends.",
    images: ["/opengraph-image"],
  },
};

const segments = [
  {
    title: "Mid sized businesses",
    description:
      "Teams that need a clearer view of buyer behavior without building an internal data science function.",
  },
  {
    title: "Large enterprises",
    description:
      "Organizations coordinating sales, marketing, and strategy teams around a shared, evidence based view of the market.",
  },
  {
    title: "National organizations",
    description:
      "Groups that need consistent, aggregated behavioral and market intelligence across broad, distributed operations.",
  },
];

const teams = [
  {
    title: "Sales leaders",
    description:
      "Prioritize outreach using in market buying signals instead of static account lists.",
  },
  {
    title: "Marketing leaders",
    description:
      "See which messages, channels, and audiences are actually driving results, and reallocate spend accordingly.",
  },
  {
    title: "Executive and strategy teams",
    description:
      "Ground planning, market entry, and positioning decisions in a shared, data backed view of the market.",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="We Serve Serious, Established Buyers"
        description="Calqulis is built for mid sized businesses, large enterprises, and national organizations that want a clearer, evidence based view of buying behavior and market trends."
      />

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Organizations we serve</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            From growing companies to national operations, Calqulis scales with the size of
            your market.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {segments.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900">Teams that use Calqulis</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Sales, marketing, and strategy teams all work from the same behavioral intelligence.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {teams.map((t) => (
              <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-indigo/15 bg-slate-50 p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Not sure if Calqulis fits your organization?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Request a demo and our team will walk through how Calqulis applies to your specific
            business.
          </p>
          <div className="mt-8">
            <Button href="/request-a-demo/">Request a Demo</Button>
          </div>
        </div>
      </Section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteUrl}/` },
          { name: "Who We Serve", url: `${siteUrl}/who-we-serve/` },
        ]}
      />
    </>
  );
}
