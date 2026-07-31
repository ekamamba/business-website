import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

metadataBase: new URL(siteConfig.url)

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://business-website-gilt-five.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}