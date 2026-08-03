"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-parchment py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-maroon sm:text-4xl">
            {t.gallery.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {t.gallery.items.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-maroon/15 to-gold/15"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-maroon/50">
                <ImageIcon size={22} strokeWidth={1.4} />
                <span className="px-2 text-center text-[11px] font-medium text-ink/60">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
