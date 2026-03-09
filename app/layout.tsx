import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sidebar AI | AI Systems & Custom Integrations for Law Firms",
  description:
    "AI consulting, custom tools, and integrations for law firms — contract analysis, document triage, closing automation, and direct connections to iManage, Clio, and NetDocuments. We build it, train your team, and hand it over.",
  keywords:
    "legal AI, law firm AI, contract analysis, document triage, MCP integration, iManage AI, Clio AI, NetDocuments AI, legal technology, AI for lawyers",
  openGraph: {
    title: "Sidebar AI | AI Systems & Custom Integrations for Law Firms",
    description:
      "We build AI tools that read your contracts, flag what matters, and connect directly to your document management system. Built for law firms.",
    url: "https://sidebarai.us",
    siteName: "Sidebar AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidebar AI | AI Systems & Custom Integrations for Law Firms",
    description:
      "AI systems and custom integrations built specifically for law firms.",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
