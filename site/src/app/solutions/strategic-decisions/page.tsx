import type { Metadata } from "next";
import SolutionTemplate from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "Strategic Decisions",
  description:
    "Aggregate market and behavioral trends into executive level insight that supports planning, market entry, and positioning.",
  alternates: {
    canonical: "/solutions/strategic-decisions/",
  },
  openGraph: {
    title: "Strategic Decisions | Calqulis",
    description:
      "Aggregate market and behavioral trends into executive level insight that supports planning, market entry, and positioning.",
    url: "/solutions/strategic-decisions/",
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
    title: "Strategic Decisions | Calqulis",
    description:
      "Aggregate market and behavioral trends into executive level insight that supports planning, market entry, and positioning.",
    images: ["/opengraph-image"],
  },
};

const points = [
  "Aggregates market and behavioral trends into executive level insight",
  "Supports long range planning, market entry, and competitive positioning decisions",
  "Gives leadership a shared, data backed view instead of siloed reports",
  "Positions behavioral intelligence as a continuous input to strategy, not a one time report",
];

export default function StrategicDecisionsPage() {
  return (
    <SolutionTemplate
      title="Strategic Decisions"
      description="Calqulis gives leadership teams a single, data backed view of the behavior and market trends shaping their next strategic move."
      points={points}
      currentHref="/solutions/strategic-decisions/"
    />
  );
}
