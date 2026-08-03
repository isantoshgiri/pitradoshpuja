"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function PanditJi() {
  const { t } = useLanguage();
  const specialisations = t.services.items.slice(0, 8).map((s) => s.name);

  return (
    <section id="pandit-ji" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-sacred">
  <Image
    src="/images/pandit/ajay-sharma.jpg"
    alt="Pandit Ajay Sharma Ji"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

  <span className="absolute bottom-4 left-4 right-4 rounded-xl bg-ivory/95 px-3 py-2 text-center text-xs font-medium text-maroon shadow-sacred">
    {t.panditji.experience}
  </span>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {t.panditji.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-maroon sm:text-4xl">
            {t.panditji.name}
          </h2>
          <p className="mt-2 text-sm italic text-ink/60">{t.panditji.alias}</p>
          <p className="mt-6 text-base leading-relaxed text-ink/75">{t.panditji.bio}</p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-maroon">
            {t.panditji.specialisationsTitle}
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {specialisations.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink/80">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                {s}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-maroon px-7 py-3 text-sm font-semibold text-ivory shadow-sacred transition-transform hover:-translate-y-0.5"
          >
            {t.panditji.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
