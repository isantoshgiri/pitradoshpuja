"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Flame } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import clsx from "clsx";
import Image from "next/image";

const PHONE = "+919617711721";
const WHATSAPP = "https://wa.me/919617711721";

export default function Header() {
  const { t } = useLanguage();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSectionNavigation = (sectionId: string) => (event: any) => {
    event.preventDefault();
    setMobileOpen(false);

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(`/#${sectionId}`);
  };

  const navItems = [
    { href: "/", label: "होम" },
    { href: "/services", label: "पूजा" },
    { href: "/temples", label: "मंदिर" },
    { href: "/pandit-ajay-sharma", label: "पंडित जी" },
    { href: "/gallery", label: "गैलरी" },
    { href: "/blog", label: "ब्लॉग" }
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ivory/95 shadow-sacred backdrop-blur-sm" : "bg-ivory/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
  <Image
    src="/images/logo.png"
    alt="पितृ दोष पूजा"
    width={300}
    height={90}
    priority
    className="h-14 w-auto lg:h-16"
  />
</Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-maroon"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 rounded-full border border-maroon/30 px-3 py-2 text-sm font-medium text-maroon transition-colors hover:bg-maroon/5"
          >
            <Phone size={15} /> अभी कॉल करें
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#22c55e]"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
          <a
            href="#book"
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-white shadow-sacred transition-transform hover:-translate-y-0.5 hover:bg-maroon-dark"
          >
            पूजा बुक करें
          </a>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} className="text-maroon" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="ml-auto mr-3 mt-3 flex h-[calc(100vh-1.5rem)] w-[88%] max-w-sm flex-col rounded-xl border border-gray-200 bg-white px-5 py-5 text-gray-800 shadow-2xl z-[80]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-maroon">Pitra Dosh Puja</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X size={24} className="text-maroon" />
                </button>
              </div>

              <div className="mt-6">
                <LanguageSwitcher variant="mobile" />
              </div>

              <nav className="mt-8 flex flex-1 flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-orange-50 hover:text-maroon"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-gold/20 pt-5">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-maroon/30 py-3 text-sm font-medium text-maroon"
                >
                  <Phone size={16} /> अभी कॉल करें
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-maroon py-3 text-sm font-semibold text-white"
                >
                  पूजा बुक करें
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
