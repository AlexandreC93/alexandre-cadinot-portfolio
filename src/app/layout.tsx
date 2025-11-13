import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Alexandre CADINOT — Portfolio",
  description: "Digital Systems Architect — Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
