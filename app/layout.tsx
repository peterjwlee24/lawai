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
  metadataBase: new URL("https://sidebarai.us"),
  title: {
    default: "Sidebar AI — Claude for Legal Implementation Partner for Law Firms",
    template: "%s · Sidebar AI",
  },
  description:
    "Sidebar AI is the Claude for Legal implementation partner for boutique law firms — fully remote, live with a senior engineer. We configure Claude for Legal to your matter playbook, wire it into iManage, Clio, or NetDocuments, write custom secure connections to your bespoke firm software, and hand it over fully trained — in five business days. Bar-compliant by design.",
  keywords: [
    "Claude for Legal",
    "Claude for Legal implementation",
    "Anthropic Claude law firm",
    "AI consulting for law firms",
    "boutique law firm AI",
    "MCP connector iManage",
    "MCP connector NetDocuments",
    "MCP connector Clio",
    "Microsoft 365 AI for law firms",
    "Claude Cowork legal",
    "Claude skills lawyer",
    "ABA Model Rule 1.1 AI",
    "ABA Model Rule 1.6 confidentiality AI",
    "ABA Model Rule 5.3 supervision AI",
    "bar-compliant AI",
    "law firm AI seminar",
    "partner AI training",
    "AI implementation sprint",
    "contract review AI",
    "matter intake automation",
    "M&A closing automation AI",
  ].join(", "),
  openGraph: {
    title: "Sidebar AI — Claude for Legal Implementation Partner",
    description:
      "Boutique law firms get a working Claude for Legal deployment in five business days. In-person consultation. Bar-compliant by design. ABA Model Rules 1.1, 1.6, 5.3 mapped and documented.",
    url: "https://sidebarai.us",
    siteName: "Sidebar AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidebar AI — Claude for Legal Implementation Partner",
    description:
      "Five-day Claude for Legal sprints for boutique law firms. In-person consultation, configured to your matter playbook, bar-compliant by design.",
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
