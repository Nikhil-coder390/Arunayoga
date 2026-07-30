import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RightActionBar from "@/components/layout/RightActionBar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/data/siteConfig";
import { getOrganizationSchema } from "@/data/schemas";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF0000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Arunayoga | Best Yoga Centre in Hyderabad",
    template: "%s | Arunayoga Hyderabad",
  },
  description: siteConfig.description,
  keywords: [
    "Best Yoga Centre in Hyderabad",
    "Yoga Centre Hyderabad",
    "Yoga Studio Hyderabad",
    "Yoga Classes Hyderabad",
    "Yoga Teacher Training Hyderabad",
    "Meditation Classes Hyderabad",
    "Yoga Training & Research Institute",
    "Therapeutic Yoga Hyderabad",
    "Corporate Yoga Hyderabad",
    "Prenatal Yoga Hyderabad",
    "Traditional Yoga Hyderabad",
    "Yoga Alliance Teacher Training Hyderabad",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Arunayoga | Best Yoga Centre in Hyderabad",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/about-founder.png`,
        width: 1200,
        height: 630,
        alt: "Arunayoga Training & Research Institute Hyderabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunayoga | Best Yoga Centre in Hyderabad",
    description: siteConfig.description,
    images: [`${siteConfig.url}/about-founder.png`],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${quicksand.variable} font-sans antialiased text-text bg-white`}>
        <ScrollToTop />
        <Header />
        <RightActionBar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

