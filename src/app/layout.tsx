import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://flowsync-crm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FlowSync CRM | AI Powered Business Platform",
    template: "%s | FlowSync CRM",
  },
  description:
    "FlowSync CRM helps businesses manage CRM, HRMS and Invoicing from one intelligent platform.",
  keywords: [
    "CRM",
    "Lead Management",
    "HRMS",
    "Invoicing",
    "Sales CRM",
    "Business Automation",
    "FlowSync",
    "Sales Pipeline",
    "Customer Relationship Management",
  ],
  authors: [{ name: "FlowSync" }],
  creator: "FlowSync",
  publisher: "FlowSync",
  applicationName: "FlowSync CRM",
  category: "Business Software",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FlowSync CRM",
    title: "FlowSync CRM | AI Powered Business Platform",
    description:
      "FlowSync CRM helps businesses manage CRM, HRMS and Invoicing from one intelligent platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowSync CRM — AI Powered Business Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowSync CRM | AI Powered Business Platform",
    description:
      "FlowSync CRM helps businesses manage CRM, HRMS and Invoicing from one intelligent platform.",
    images: ["/og-image.png"],
    creator: "@flowsync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1020" },
    { media: "(prefers-color-scheme: light)", color: "#0B1020" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}