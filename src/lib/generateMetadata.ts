import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  urlPath?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  urlPath = "",
  keywords = [],
  image = siteConfig.ogImage,
  type = "website",
}: GenerateMetadataOptions): Metadata {
  const url = `${siteConfig.url}${urlPath}`;
  const formattedTitle = title.includes(siteConfig.shortName)
    ? title
    : `${title} | ${siteConfig.shortName}`;

  return {
    title: formattedTitle,
    description,
    keywords: [
      "Arunayoga",
      "Yoga Centre Hyderabad",
      "Best Yoga Centre in Hyderabad",
      ...keywords,
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: formattedTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [image],
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
  };
}
