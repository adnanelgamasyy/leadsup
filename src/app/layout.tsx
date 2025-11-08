import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Leads Up - AI Voice Solutions for Lead Generation",
  description: "Transform cold calls into warm conversations with AI-powered voice solutions. Boost conversions by 3x with natural-sounding AI voices.",
  openGraph: {
    title: "The Leads Up - AI Voice Solutions for Lead Generation",
    description: "Transform cold calls into warm conversations with AI-powered voice solutions. Boost conversions by 3x with natural-sounding AI voices.",
    images: [
      {
        url: "/leadsup-og.png",
        width: 1200,
        height: 630,
        alt: "The Leads Up - AI Voice Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Leads Up - AI Voice Solutions for Lead Generation",
    description: "Transform cold calls into warm conversations with AI-powered voice solutions. Boost conversions by 3x with natural-sounding AI voices.",
    images: ["/leadsup-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}