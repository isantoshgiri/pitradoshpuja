"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Award, MapPin, MessageSquare, Laptop, Video,
  PackageCheck, Eye, HandHeart, Users2
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const icons = [ShieldCheck, Award, MapPin, MessageSquare, Laptop, Video, PackageCheck, Eye, HandHeart, Users2];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {t.why.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-maroon sm:text-4xl">
            {t.why.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                className="rounded-2xl border border-gold/15 p-6 text-center transition-colors hover:border-gold/40"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold-dark">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
