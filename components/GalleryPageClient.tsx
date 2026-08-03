"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = Array.from({ length: 20 }, (_, index) => index + 1);

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const selectedImagePath = useMemo(() => {
    if (selectedImage === null) return null;
    return `/images/gallery/${selectedImage}.jpeg`;
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
            गैलरी
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-[#2B1B14] sm:text-5xl">
            गैलरी
          </h1>
          <p className="mt-5 text-base leading-8 text-[#5A4632] sm:text-lg">
            उज्जैन रामघाट पर पंडित अजय शर्मा (Cycle Wala Panda) द्वारा संपन्न वैदिक पूजन एवं धार्मिक अनुष्ठानों के वास्तविक छायाचित्र।
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((imageNumber) => (
            <button
              key={imageNumber}
              type="button"
              onClick={() => setSelectedImage(imageNumber)}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#E9D3A6] bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={`/images/gallery/${imageNumber}.jpeg`}
                alt={`पूजन गैलरी फोटो ${imageNumber}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E9D3A6] bg-white p-8 shadow-[0_25px_60px_-30px_rgba(110,20,35,0.2)] sm:p-10 lg:p-12">
          <h2 className="font-display text-3xl font-semibold text-[#2B1B14] sm:text-4xl">
            🛕 उज्जैन रामघाट से वास्तविक पूजन के छायाचित्र
          </h2>
          <p className="mt-5 space-y-4 text-base leading-8 text-[#5A4632]">
            <span className="block">
              यहाँ प्रदर्शित सभी छायाचित्र पंडित अजय शर्मा (Cycle Wala Panda) एवं उनके परिवार द्वारा उज्जैन रामघाट पर सम्पन्न कराए गए वास्तविक वैदिक अनुष्ठानों के हैं।
            </span>
            <span className="block">
              हम पिछले 7–8 पीढ़ियों से श्रद्धालुओं की सेवा कर रहे हैं और हजारों सफल पूजन सम्पन्न कर चुके हैं।
            </span>
            <span className="block">
              सभी पूजन पूर्ण वैदिक विधि, शुद्ध सामग्री तथा अनुभवी आचार्यों के मार्गदर्शन में सम्पन्न किए जाते हैं।
            </span>
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#E9D3A6] bg-gradient-to-br from-[#6E1423] via-[#7F1D2C] to-[#A22433] p-8 text-white shadow-[0_25px_60px_-30px_rgba(110,20,35,0.4)] sm:p-10 lg:p-12">
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            अपनी पूजा आज ही बुक करें
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/90">
            यदि आप भी उज्जैन रामघाट पर वैदिक विधि से पूजन करवाना चाहते हैं, तो अभी हमसे संपर्क करें।
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+919617711721"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3CB7B] px-6 py-3 text-sm font-semibold text-[#3A0B12] transition hover:bg-[#E3A335]"
            >
              📞 अभी कॉल करें
            </a>
            <a
              href="https://wa.me/919617711721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              💬 WhatsApp पर संपर्क करें
            </a>
          </div>
        </div>
      </section>

      {selectedImagePath && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-2 text-sm font-semibold text-white"
            >
              ×
            </button>
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[16/10]">
              <Image
                src={selectedImagePath}
                alt={`पूजन गैलरी फोटो ${selectedImage}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
