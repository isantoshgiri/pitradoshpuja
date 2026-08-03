"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Users,
  Landmark,
  Globe2,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: Users, label: t.hero.trust1 },
    { icon: ShieldCheck, label: t.hero.trust2 },
    { icon: Landmark, label: t.hero.trust3 },
    { icon: Globe2, label: t.hero.trust4 },
  ];

  return (
    <section className="relative overflow-hidden bg-temple-gradient text-ivory">
      {/* Background */}
      <div className="absolute inset-0 bg-diya-glow pointer-events-none" />

      <div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div
        className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-maroon-light/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 lg:py-28">

        {/* Left */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light mb-5"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-base sm:text-lg max-w-xl text-ivory/75"
          >
            {t.hero.subheading}
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#book"
              className="rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-dusk shadow-glow hover:-translate-y-0.5 transition"
            >
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold hover:bg-white/10 transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Phone */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex items-center gap-5 text-sm text-ivory/70"
          >
            <a
              href="tel:+919617711721"
              className="flex items-center gap-2 hover:text-gold-light"
            >
              <Phone size={15} />
              {t.hero.ctaCall}
            </a>

            <span>|</span>

            <a
              href="https://wa.me/919617711721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-light"
            >
              <MessageCircle size={15} />
              {t.hero.ctaWhatsapp}
            </a>
          </motion.div>

          {/* Trust */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12 border-t border-white/10 pt-8"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="mx-auto text-gold-light"
                />
                <p className="mt-2 text-xs sm:text-sm text-ivory/70">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gold/10 blur-2xl" />

          <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-2xl">

            <div className="relative aspect-[4/3] lg:aspect-[7/8]">

              <Image
                src="/images/hero/ramghat.jpg"
                alt="Ramghat"
                fill
                priority
                sizes="(min-width:1024px) 50vw,100vw"
                className="object-cover"
              />

            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-dusk/40 via-transparent to-transparent" />

          </div>
        </motion.div>

      </div>

      <div className="text-dusk">
        <div className="arch-divider" />
      </div>
    </section>
  );
}