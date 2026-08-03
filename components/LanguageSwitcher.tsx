"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales, localeLabels } from "@/lib/i18n/config";
import clsx from "clsx";

export default function LanguageSwitcher({ variant = "header" }: { variant?: "header" | "mobile" }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickAway(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2 rounded-full bg-parchment p-1" role="group" aria-label="Language">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={clsx(
              "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              locale === l ? "bg-maroon text-ivory shadow-sacred" : "text-ink/70 hover:text-ink"
            )}
            aria-pressed={locale === l}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-transparent px-3 py-1.5 text-sm text-ink/80 transition-colors hover:border-gold hover:text-maroon"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe size={15} strokeWidth={1.75} />
        <span className="min-w-[3.5rem] text-left">{localeLabels[locale]}</span>
        <ChevronDown size={14} className={clsx("transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-gold/25 bg-ivory shadow-sacred"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  role="option"
                  aria-selected={locale === l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={clsx(
                    "flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors",
                    locale === l ? "bg-maroon/10 text-maroon" : "text-ink/80 hover:bg-parchment"
                  )}
                >
                  {localeLabels[l]}
                  {locale === l && <Check size={14} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
