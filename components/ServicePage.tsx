"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";

const WHATSAPP_NUMBER = "919617711721";

function whatsappLink(titleHi: string) {
  const message = `नमस्ते 🙏 मुझे "${titleHi}" बुक करनी है। कृपया जानकारी दें।`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DurationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 5h9M7 9h9M7 5c4 0 6 2 6 4.2S11 13 7 13h1l7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DiyaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3c1 1.6 1 2.8 0 4-1-1.2-1-2.4 0-4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11c2.6-1.4 5.2-2 8-2s5.4.6 8 2c-.6 3.6-3.8 8-8 8s-7.4-4.4-8-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpireDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,60 L0,40 L40,40 L60,10 L80,40 L120,40 L140,18 L160,40 L200,40 L220,4 L240,40 L280,40 L300,22 L320,40 L360,40 L380,10 L400,40 L440,40 L460,18 L480,40 L520,40 L540,4 L560,40 L600,40 L620,10 L640,40 L680,40 L700,22 L720,40 L760,40 L780,18 L800,40 L840,40 L860,4 L880,40 L920,40 L940,10 L960,40 L1000,40 L1020,22 L1040,40 L1080,40 L1100,18 L1120,40 L1160,40 L1180,10 L1200,40 L1200,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ServicePage({ service }: { service: Service }) {
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  const heroImageSrc = service.thumb || "/images/placeholder.jpg";

  return (
    <main className="bg-[#FFF9EF] pb-28 md:pb-0">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden rounded-b-[2rem] border-b border-[#E9D3A6]/70 bg-white"
      >
        <div className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[600px]">
          <Image
            src={heroImageSrc}
            alt={service.titleHi}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:px-8 lg:py-14"
      >
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#8A6A3E]">
          <Link href="/" className="transition-colors hover:text-[#6E1423]">
            होम
          </Link>
          <span>/</span>
          <Link href="/services" className="transition-colors hover:text-[#6E1423]">
            पूजा
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#2B1B14]">{service.titleHi}</span>
        </nav>

        <div className="rounded-[2rem] border border-[#E9D3A6] bg-white p-7 shadow-[0_25px_60px_-30px_rgba(110,20,35,0.28)] sm:p-10 lg:p-12">
          <span className="inline-flex items-center rounded-full border border-[#E3A335]/50 bg-[#FFF7E6] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
            वैदिक पूजा सेवा
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#2B1B14] sm:text-5xl lg:text-6xl">
            {service.titleHi}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5A4632] sm:text-lg">
            {service.shortDescriptionHi}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#6E1423]/20 bg-[#FFF9EF] px-5 py-3 text-sm font-semibold text-[#6E1423] transition hover:bg-[#FDEFCF]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L13 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 7a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              अभी कॉल करें
            </a>
            <a
              href={whatsappLink(service.titleHi)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:scale-[1.01]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.09-1.5a9.88 9.88 0 0 0 4.95 1.33h.01c5.46 0 9.9-4.45 9.9-9.92C21.96 6.45 17.5 2 12.04 2Zm5.79 14.06c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
              </svg>
              WhatsApp पर बुक करें
            </a>
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#6E1423] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4E0F18]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12h18" strokeLinecap="round" />
              </svg>
              पूजा बुक करें
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-[#EFDEB8] bg-[#FFF9EF] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">📍 स्थान</p>
              <p className="mt-2 font-serif text-lg font-semibold text-[#2B1B14]">{service.location}</p>
            </div>
            <div className="rounded-2xl border border-[#EFDEB8] bg-[#FFF9EF] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">⏳ अवधि</p>
              <p className="mt-2 font-serif text-lg font-semibold text-[#2B1B14]">{service.duration}</p>
            </div>
            <div className="rounded-2xl border border-[#EFDEB8] bg-[#FFF9EF] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">💰 दक्षिणा</p>
              <p className="mt-2 font-serif text-lg font-semibold text-[#2B1B14]">{service.price}</p>
            </div>
            <div className="rounded-2xl border border-[#EFDEB8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">⭐ वैदिक विधि</p>
              <p className="mt-2 text-sm leading-7 text-[#5A4632]">शास्त्रोक्त विधि, सटीक मंत्र-जप और सावधानीपूर्वक अनुष्ठान</p>
            </div>
            <div className="rounded-2xl border border-[#EFDEB8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">👨‍🦳 अनुभवी पंडित</p>
              <p className="mt-2 text-sm leading-7 text-[#5A4632]">पंडित अजय शर्मा जी की मार्गदर्शना में पूजा का आयोजन</p>
            </div>
            <div className="rounded-2xl border border-[#EFDEB8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3E]">📹 लाइव वीडियो सुविधा</p>
              <p className="mt-2 text-sm leading-7 text-[#5A4632]">आवश्यकता पर पूजा की लाइव वीडियो सुविधा उपलब्ध</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[#E9D3A6] bg-white p-8 shadow-sm shadow-[#6E1423]/5 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B5772F]">इस पूजा के बारे में</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#2B1B14] sm:text-4xl">
              {service.titleHi} की विशेषता
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5A4632]">
              {service.shortDescriptionHi}
            </p>
            <p className="mt-5 text-base leading-8 text-[#5A4632]">
              यह पूजा उन परिवारों के लिए विशेष रूप से लाभकारी मानी जाती है, जो अपनी आध्यात्मिक यात्रा में शांति, संतुलन और शुभता की इच्छा रखते हैं।
            </p>

            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold text-[#2B1B14]">पूजा विधि</h3>
              <ol className="mt-5 space-y-3">
                {service.procedureHi.slice(0, 5).map((step, index) => (
                  <li key={index} className="flex gap-3 rounded-2xl border border-[#EFDEB8] bg-[#FFF9EF] p-4 text-sm leading-7 text-[#5A4632]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6E1423] text-sm font-semibold text-[#F3CB7B]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#E9D3A6] bg-[#FFF9EF] p-8 shadow-sm shadow-[#6E1423]/5">
              <h3 className="font-serif text-2xl font-semibold text-[#2B1B14]">लाभ</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5A4632]">
                {service.benefitsHi.slice(0, 5).map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B5772F]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#E9D3A6] bg-white p-8 shadow-sm shadow-[#6E1423]/5">
              <h3 className="font-serif text-2xl font-semibold text-[#2B1B14]">किसे करानी चाहिए</h3>
              <p className="mt-4 text-sm leading-7 text-[#5A4632]">
                यह पूजा उन श्रद्धालुओं के लिए विशेष रूप से उपयुक्त मानी जाती है, जो अपने जीवन में शांति, संतुलन और पारिवारिक कल्याण की कामना रखते हैं।
              </p>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-[#2B1B14]">आवश्यक सामग्री</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#5A4632]">
                <li>• अक्षत, पुष्प, दीप और धूप</li>
                <li>• वैदिक मंत्रों के लिए तिल, जौ और कुशा</li>
                <li>• दान, भोजन और ब्राह्मण सत्कार</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8"
      >
        <div id="booking-form" className="rounded-[2rem] border border-[#E9D3A6] bg-[#6E1423] p-8 text-[#FFF9EF] shadow-[0_25px_70px_-30px_rgba(110,20,35,0.45)] sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F3CB7B]">पूजा बुकिंग</p>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">{service.titleHi} के लिए अभी संपर्क करें</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#F5E6D3]">
            अपनी पसंदीदा तिथि और विवरण साझा करें, हमारी टीम आपसे शीघ्र ही सम्पर्क करेगी।
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${WHATSAPP_NUMBER}`} className="rounded-full border border-[#F3CB7B]/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">📞 अभी कॉल करें</a>
            <a href={whatsappLink(service.titleHi)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#21b85a]">💬 WhatsApp पर बुक करें</a>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="rounded-full bg-[#F3CB7B] px-5 py-3 text-sm font-semibold text-[#3A0B12] transition hover:bg-[#E3A335]">🕉️ पूजा बुक करें</a>
          </div>
        </div>
      </motion.section>

      {/* 5. FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B5772F]">प्रश्न</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#2B1B14] sm:text-4xl">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[#EFDEB8] bg-white p-5 open:shadow-md open:shadow-[#6E1423]/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-[#2B1B14] sm:text-lg">
                {faq.questionHi}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FDEFCF] text-[#B5772F] transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 space-y-2 border-t border-[#F1E4C8] pt-3">
                <p className="text-[15px] leading-relaxed text-[#3A2A1E]">{faq.answerHi}</p>
                <p className="text-sm italic leading-relaxed text-[#8A6A3E]">{faq.answerEn}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
              अन्य सेवाएं
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#2B1B14] sm:text-4xl">
              संबंधित पूजा सेवाएं
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#EFDEB8] bg-white shadow-sm shadow-[#6E1423]/5 transition-transform hover:-translate-y-1"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={related.thumb}
                    alt={related.titleHi}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-4">
                  <h3 className="font-serif text-base font-semibold text-[#2B1B14]">
                    {related.titleHi}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[#5A4632]">
                    {related.shortDescriptionHi}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. Large WhatsApp Booking Button */}
      <section className="px-4 pb-20 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-[#E9D3A6] bg-gradient-to-b from-[#FDEFCF] to-[#FFF9EF] px-6 py-14 text-center shadow-lg shadow-[#6E1423]/10">
          <h3 className="max-w-xl font-serif text-2xl font-bold text-[#2B1B14] sm:text-3xl">
            {service.titleHi} बुक करने के लिए अभी संपर्क करें
          </h3>
          <p className="max-w-lg text-[15px] leading-relaxed text-[#5A4632]">{service.shortDescriptionHi}</p>
          <a
            href={whatsappLink(service.titleHi)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-lg font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.09-1.5a9.88 9.88 0 0 0 4.95 1.33h.01c5.46 0 9.9-4.45 9.9-9.92C21.96 6.45 17.5 2 12.04 2Zm5.79 14.06c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
            </svg>
            WhatsApp पर अभी बुक करें
          </a>
          <p className="text-sm text-[#8A6A3E]">दक्षिणा: {service.price}</p>
        </div>
      </section>

      {/* 7. Sticky CTA Button on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#E9D3A6] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={whatsappLink(service.titleHi)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.09-1.5a9.88 9.88 0 0 0 4.95 1.33h.01c5.46 0 9.9-4.45 9.9-9.92C21.96 6.45 17.5 2 12.04 2Zm5.79 14.06c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.13.1-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
          </svg>
          {service.price} · WhatsApp पर बुक करें
        </a>
      </div>
    </main>
  );
}
