import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Calqulis is a pre launch behavioral intelligence platform built for organizations that want to act on buyer behavior, not just observe it.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About | Calqulis",
    description:
      "Calqulis is a pre launch behavioral intelligence platform built for organizations that want to act on buyer behavior, not just observe it.",
    url: "/about/",
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
    title: "About | Calqulis",
    description:
      "Calqulis is a pre launch behavioral intelligence platform built for organizations that want to act on buyer behavior, not just observe it.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Calqulis"
        title="We Act on Buyer Behavior, Not Just Observe It"
        description="Calqulis is a pre launch SaaS platform built for organizations that want to act on buyer behavior, not just observe it."
      />

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We built Calqulis to give organizations a single, clear view of the behavior driving
            their market, so every decision is backed by evidence instead of guesswork.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Calqulis Solutions is a commercial and consumer behavioral intelligence platform that
            aggregates multiple sources of behavioral and market data into actionable insights,
            helping mid sized businesses, large enterprises, and national organizations understand
            buying behavior, uncover sales opportunities, sharpen marketing effectiveness, and
            make more informed strategic decisions.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">Where we are today</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Calqulis is currently in pre launch. We are building the platform alongside early
            partners who want a direct voice in how it develops. Rather than present an established
            customer base that does not yet exist, we would rather invite you to see the platform
            firsthand and help shape it.
          </p>
          <div className="mt-8">
            <Button href="/request-a-demo/">Request a Demo</Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">How we think about data</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Calqulis is positioned as the intelligence platform itself. Our content and our product
            speak in terms of what our platform aggregates and analyzes, grounded in four pillars:
            aggregation of behavioral and market intelligence, buying behavior understanding, sales
            opportunity identification, and marketing and strategic decision support.
          </p>
        </div>
      </Section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${siteUrl}/` },
          { name: "About", url: `${siteUrl}/about/` },
        ]}
      />
    </>
  );
}
