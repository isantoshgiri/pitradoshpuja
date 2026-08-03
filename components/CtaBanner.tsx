"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-maroon py-16 text-ivory">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6"
      >
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.cta.title}</h2>
        <p className="max-w-xl text-sm text-ivory/75 sm:text-base">{t.cta.subtitle}</p>
        <a
          href="#contact"
          className="mt-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-dusk shadow-glow transition-transform hover:-translate-y-0.5"
        >
          {t.cta.button}
        </a>
      </motion.div>
    </section>
  );
}
