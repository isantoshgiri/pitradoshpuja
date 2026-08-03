import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "ब्लॉग | पंडित अजय शर्मा | उज्जैन रामघाट",
  description:
    "पितृ दोष पूजा, काल सर्प दोष पूजा, त्रिपिंडी श्राद्ध और उज्जैन रामघाट से जुड़े वैदिक अनुष्ठानों पर लेख।",
  keywords: [
    "ब्लॉग",
    "पितृ दोष पूजा",
    "काल सर्प दोष पूजा",
    "त्रिपिंडी श्राद्ध",
    "उज्जैन रामघाट"
  ],
  alternates: {
    canonical: "https://pitradoshpuja.com/blog"
  },
  openGraph: {
    title: "ब्लॉग | पंडित अजय शर्मा | उज्जैन रामघाट",
    description:
      "उज्जैन रामघाट पर वैदिक अनुष्ठानों से जुड़े आध्यात्मिक लेख और मार्गदर्शिका।",
    url: "https://pitradoshpuja.com/blog"
  }
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
            ब्लॉग
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-[#2B1B14] sm:text-5xl">
            हमारे लेख
          </h1>
          <p className="mt-5 text-base leading-8 text-[#5A4632] sm:text-lg">
            उज्जैन रामघाट पर वैदिक पूजा, पितृ कर्म, शांति अनुष्ठान और आध्यात्मिक जानकारी पर संग्रहित विशेषज्ञ लेख।
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[1.75rem] border border-[#E9D3A6] bg-white p-8 shadow-[0_20px_50px_-25px_rgba(110,20,35,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B5772F]">
                {post.publishedAt}
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-[#2B1B14] sm:text-[1.75rem]">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5A4632]">
                {post.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#8A6A3E]">
                <span>{post.readingTime}</span>
                <span>•</span>
                <span>वेदिक मार्गदर्शन</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center rounded-full bg-[#6E1423] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4E0F18]"
              >
                आगे पढ़ें
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
