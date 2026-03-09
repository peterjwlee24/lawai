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
  title: "Blueprint AI | AI Consulting & Training for Businesses",
  description:
    "We connect AI to the tools you already use and train your team to use it. AI consulting for law firms, CPA firms, real estate, insurance agencies, and restaurants.",
  keywords:
    "AI consulting, business automation, AI training, law firm AI, CPA automation, real estate AI, insurance automation, restaurant AI",
  openGraph: {
    title: "Blueprint AI | AI Consulting & Training for Businesses",
    description:
      "We connect AI to the tools you already use and train your team to use it. Serving law firms, CPA firms, real estate, insurance, and restaurants.",
    url: "https://blueprintaihq.com",
    siteName: "Blueprint AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueprint AI | AI Consulting & Training for Businesses",
    description:
      "We connect AI to the tools you already use and train your team to use it.",
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
