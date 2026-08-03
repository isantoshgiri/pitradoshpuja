import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "पूजन गैलरी | पंडित अजय शर्मा | उज्जैन रामघाट",
  description:
    "उज्जैन रामघाट पर सम्पन्न वास्तविक पितृ दोष पूजा, काल सर्प दोष पूजा, नारायण बली, नाग बली, त्रिपिंडी श्राद्ध एवं अन्य वैदिक अनुष्ठानों की फोटो गैलरी।"
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
