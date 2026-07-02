import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Calqulis Solutions.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Calqulis",
    description: "Privacy Policy for Calqulis Solutions.",
    url: "/privacy-policy/",
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
    title: "Privacy Policy | Calqulis",
    description: "Privacy Policy for Calqulis Solutions.",
    images: ["/opengraph-image"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" compact />

      <Section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-slate-700">
          <p className="text-sm text-slate-500">Last updated July 2026</p>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-3 leading-relaxed">
              Calqulis Solutions, referred to here as Calqulis, we, us, or our, respects your
              privacy. This policy explains what information we collect through calqulis.com,
              how we use it, and the choices available to you. Calqulis is currently in pre
              launch, so this policy will be expanded as the platform and its data practices are
              finalized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              When you request a demo or otherwise contact us through this site, we collect the
              information you provide directly, such as your name, work email address, company
              name, and any message you submit. We do not knowingly collect information from
              children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              We use the information you submit to respond to your demo request, communicate
              with you about Calqulis, and improve our website and platform. We do not sell the
              personal information collected through this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">How we share information</h2>
            <p className="mt-3 leading-relaxed">
              We may share information with service providers who help us operate this website
              and process demo requests, such as our email delivery provider, solely for the
              purpose of supporting those functions. We do not share your information with third
              parties for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Data retention</h2>
            <p className="mt-3 leading-relaxed">
              We retain information submitted through this site for as long as reasonably
              necessary to respond to your inquiry and maintain accurate business records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Your choices</h2>
            <p className="mt-3 leading-relaxed">
              You may contact us at any time to ask what information we hold about you or to
              request that it be corrected or deleted, subject to any legal or legitimate
              business requirements to retain it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Changes to this policy</h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy as Calqulis moves from pre launch toward general
              availability. Material changes will be reflected by updating the date at the top of
              this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this Privacy Policy, please reach out using the Request
              a Demo form on this site.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
