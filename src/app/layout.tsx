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
    default: "FlowSync CRM | One Platform. Every Workflow.",
    template: "%s | FlowSync CRM",
  },
  description:
    "Modern CRM for Lead Management, HRMS, Invoicing and Integrations. Unify your entire business workflow in one premium platform.",
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
    title: "FlowSync CRM | One Platform. Every Workflow.",
    description:
      "Modern CRM for Lead Management, HRMS, Invoicing and Integrations. Unify your entire business workflow in one premium platform.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FlowSync CRM — One Platform. Every Workflow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowSync CRM | One Platform. Every Workflow.",
    description:
      "Modern CRM for Lead Management, HRMS, Invoicing and Integrations.",
    images: ["/og-image.svg"],
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
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a14" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a14" },
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