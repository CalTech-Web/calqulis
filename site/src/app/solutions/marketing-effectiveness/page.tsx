import type { Metadata } from "next";
import SolutionTemplate from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "Marketing Effectiveness",
  description:
    "Measure which messages, channels, and audiences actually move buyers, then reallocate spend toward what is proven to work.",
};

const points = [
  "Measures which messages, channels, and audiences actually move buyers",
  "Connects behavioral intelligence to marketing spend and campaign performance",
  "Helps marketing teams reallocate budget toward what is proven to work",
  "Replaces guesswork about attribution with a behavior backed view of what is actually driving results",
];

export default function MarketingEffectivenessPage() {
  return (
    <SolutionTemplate
      title="Marketing Effectiveness"
      description="Calqulis connects behavioral intelligence to marketing performance, so your team can see what is actually working and act on it."
      points={points}
      currentHref="/solutions/marketing-effectiveness/"
    />
  );
}
