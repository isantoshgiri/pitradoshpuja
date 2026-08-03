"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dusk text-ivory/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="Pitra Dosh Puja"
                width={220}
                height={56}
                className="h-12 w-auto sm:h-14 lg:h-14"
                priority
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{t.footer.about}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#pandit-ji" className="hover:text-gold-light">{t.nav.panditji}</a></li>
              <li><a href="#pujas" className="hover:text-gold-light">{t.footer.allPujas}</a></li>
              <li><a href="#gallery" className="hover:text-gold-light">{t.nav.gallery}</a></li>
              <li><a href="#testimonials" className="hover:text-gold-light">{t.nav.testimonials}</a></li>
              <li><a href="#faq" className="hover:text-gold-light">{t.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              {t.footer.legal}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gold-light">{t.footer.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-gold-light">{t.footer.terms}</Link></li>
              <li><Link href="/refund-policy" className="hover:text-gold-light">{t.footer.refund}</Link></li>
              <li><a href="#contact" className="hover:text-gold-light">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              {t.footer.follow}
            </h4>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 hover:border-gold/50 hover:text-gold-light">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 hover:border-gold/50 hover:text-gold-light">
                <Instagram size={15} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 hover:border-gold/50 hover:text-gold-light">
                <Youtube size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/45">
          &copy; {year} Pitra Dosh Puja &mdash; Pandit Ajay Sharma Ji. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
