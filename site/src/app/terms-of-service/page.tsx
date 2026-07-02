import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Calqulis Solutions.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" compact />

      <Section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-slate-700">
          <p className="text-sm text-slate-500">Last updated July 2026</p>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Acceptance of terms</h2>
            <p className="mt-3 leading-relaxed">
              These Terms of Service govern your use of calqulis.com, operated by Calqulis
              Solutions. By accessing this site, you agree to these terms. Calqulis is currently
              in pre launch, so a full platform terms of service will accompany general
              availability of the product.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Use of this site</h2>
            <p className="mt-3 leading-relaxed">
              This site is provided to share information about Calqulis and to allow visitors to
              request a demo. You agree to use this site only for lawful purposes and not to
              interfere with its operation or attempt to access it in an unauthorized manner.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              All content on this site, including text, graphics, and the Calqulis name and
              marks, is the property of Calqulis Solutions or its licensors and is protected by
              applicable intellectual property laws. You may not reproduce or distribute this
              content without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">No warranty</h2>
            <p className="mt-3 leading-relaxed">
              This site and the information on it are provided as is, without warranties of any
              kind, express or implied. Because Calqulis is pre launch, product features and
              availability described on this site are subject to change.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              To the fullest extent permitted by law, Calqulis Solutions will not be liable for
              any indirect, incidental, or consequential damages arising from your use of this
              site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Changes to these terms</h2>
            <p className="mt-3 leading-relaxed">
              We may update these Terms of Service from time to time. Continued use of this site
              after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about these Terms of Service, please reach out using the
              Request a Demo form on this site.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
