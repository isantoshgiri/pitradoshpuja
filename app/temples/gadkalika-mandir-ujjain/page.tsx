import type { Metadata } from "next";
import TempleArticleLayout from "@/components/TempleArticleLayout";
import { temples } from "@/data/temples";

const temple = temples.find((item) => item.slug === "gadkalika-mandir-ujjain");

if (!temple) {
  throw new Error("Temple not found");
}

const templeContent = temple;

export const metadata: Metadata = {
  title: temple.seo.title,
  description: temple.seo.description,
  keywords: temple.seo.keywords,
  alternates: {
    canonical: `https://pitradoshpuja.com/temples/${temple.slug}`
  },
  openGraph: {
    title: temple.seo.title,
    description: temple.seo.description,
    url: `https://pitradoshpuja.com/temples/${temple.slug}`
  }
};

export default function GadkalikaTemplePage() {
  return <TempleArticleLayout temple={templeContent} />;
}
