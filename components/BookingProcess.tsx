"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function BookingProcess() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-temple-gradient py-20 text-ivory lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-diya-glow opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t.process.title}</h2>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 via-gold/20 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-dusk font-display text-xl font-semibold text-gold-light shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 max-w-[220px] text-sm text-ivory/65">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
