"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 sm:bottom-6">
        <a
          href="https://wa.me/919617711721"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.header.whatsapp}
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-sacred transition-transform hover:scale-105"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href="tel:+919617711721"
          aria-label={t.header.callNow}
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-maroon p-3.5 text-ivory shadow-sacred transition-transform hover:scale-105"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Sticky mobile Book Puja bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-ivory p-3 sm:hidden">
        <a
          href="#book"
          className="flex w-full items-center justify-center rounded-full bg-maroon py-3 text-sm font-semibold text-ivory shadow-sacred"
        >
          {t.nav.bookPuja}
        </a>
      </div>
    </>
  );
}
