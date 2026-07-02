import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a demo of Calqulis, the behavioral intelligence platform for sales opportunities, marketing effectiveness, and strategic decisions.",
};

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Demo"
        title="See Calqulis in action"
        description="Tell us a bit about your organization and a member of our team will follow up to schedule your demo."
        compact
      />

      <Section className="bg-white py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <DemoForm />
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Calqulis is currently in pre launch. There is no phone line yet, the fastest way to
            reach us is this form.
          </p>
        </div>
      </Section>
    </>
  );
}
