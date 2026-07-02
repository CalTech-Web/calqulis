import type { Metadata } from "next";
import SolutionTemplate from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "Sales Opportunities",
  description:
    "Surface in market buying signals so sales teams prioritize the right accounts and reach demand before competitors see it.",
};

const points = [
  "Surfaces in market buying signals so sales teams prioritize the right accounts",
  "Identifies where demand is emerging before competitors see it",
  "Helps sales leaders focus outreach on the highest probability opportunities",
  "Turns behavioral signal into a prioritized, actionable account list rather than a raw data feed",
];

export default function SalesOpportunitiesPage() {
  return (
    <SolutionTemplate
      title="Sales Opportunities"
      description="Calqulis surfaces in market buying signals so your sales team knows exactly where to focus, before the competition does."
      points={points}
      currentHref="/solutions/sales-opportunities/"
    />
  );
}
