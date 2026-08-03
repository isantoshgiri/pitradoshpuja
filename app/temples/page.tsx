import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { temples } from "@/data/temples";

export const metadata: Metadata = {
  title: "उज्जैन के प्रमुख मंदिर | पंडित अजय शर्मा",
  description:
    "उज्जैन के प्रमुख मंदिरों की जानकारी, इतिहास, दर्शन समय और पूजा से संबंधित विस्तृत लेख।",
  keywords: ["उज्जैन मंदिर", "महाकाल मंदिर", "हरसिद्धि माता मंदिर", "उज्जैन तीर्थ"],
  alternates: {
    canonical: "https://pitradoshpuja.com/temples"
  },
  openGraph: {
    title: "उज्जैन के प्रमुख मंदिर | पंडित अजय शर्मा",
    description: "उज्जैन की प्राचीन धार्मिक परंपरा और प्रमुख मंदिरों की सम्पूर्ण जानकारी।",
    url: "https://pitradoshpuja.com/temples"
  }
};

export default function TemplesPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
            मंदिर संग्रह
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-[#2B1B14] sm:text-5xl">
            उज्जैन के प्रमुख मंदिर
          </h1>
          <p className="mt-5 text-base leading-8 text-[#5A4632] sm:text-lg">
            उज्जैन की प्राचीन धार्मिक परंपरा और प्रमुख मंदिरों की सम्पूर्ण जानकारी।
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {temples.map((temple) => (
            <article key={temple.slug} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#E9D3A6] bg-white shadow-[0_20px_50px_-25px_rgba(110,20,35,0.22)]">
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src={temple.image}
                  alt={temple.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-2xl font-semibold text-[#2B1B14]">
                  {temple.title}
                </h2>
                <p className="mt-4 flex-1 text-base leading-8 text-[#5A4632]">
                  {temple.description}
                </p>
                <Link
                  href={`/temples/${temple.slug}`}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#6E1423] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4E0F18]"
                >
                  आगे पढ़ें
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
