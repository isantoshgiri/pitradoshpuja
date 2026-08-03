"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-maroon sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-gold/15 bg-parchment/60 p-7"
            >
              <Quote size={22} className="text-gold-dark" />
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{item.text}</p>
              <div className="mt-5 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink/50">{item.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
