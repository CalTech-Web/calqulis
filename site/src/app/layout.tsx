import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://calqulis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calqulis | Behavioral Intelligence Platform",
    template: "%s | Calqulis",
  },
  description:
    "Calqulis turns behavioral and market intelligence into your next best move. A single platform for sales opportunities, marketing effectiveness, and strategic decisions.",
  openGraph: {
    title: "Calqulis | Behavioral Intelligence Platform",
    description:
      "Calqulis turns behavioral and market intelligence into your next best move.",
    url: siteUrl,
    siteName: "Calqulis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calqulis | Behavioral Intelligence Platform",
    description:
      "Calqulis turns behavioral and market intelligence into your next best move.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calqulis",
  legalName: "Calqulis Solutions",
  url: siteUrl,
  description:
    "Calqulis turns behavioral and market intelligence into your next best move. A single platform for sales opportunities, marketing effectiveness, and strategic decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
