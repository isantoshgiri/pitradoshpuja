"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase/client";

const inputClass =
  "w-full rounded-lg border border-gold/25 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string | null)?.trim() ?? "";
    const mobile = (data.get("phone") as string | null)?.trim() ?? "";
    const email = (data.get("email") as string | null)?.trim() ?? "";
    const puja = (data.get("puja") as string | null)?.trim() ?? "";
    const bookingDate = (data.get("date") as string | null)?.trim() ?? "";
    const message = (data.get("message") as string | null)?.trim() ?? "";

    // Required: Name, Mobile, Puja, Booking Date. Email and Message are optional.
    if (!name || !mobile || !puja || !bookingDate) {
      setErrorMessage(t.contact.form.errorValidation);
      return;
    }

    if (!supabase) {
      setErrorMessage(t.contact.form.errorGeneral);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("Bookings").insert({
        Name: name,
        Mobile: mobile,
        Email: email || null,
        Puja: puja,
        "Booking Date": bookingDate,
        Message: message || null,
        Status: "Pending"
      });

      if (error) {
        throw error;
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Booking submission failed:", err);
      setErrorMessage(t.contact.form.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-maroon sm:text-4xl">
            {t.contact.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-2xl border border-gold/20">
              <iframe
                title="Ramghat, Ujjain map"
                className="h-56 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Ramghat,Ujjain,Madhya+Pradesh&output=embed"
              />
            </div>

            <div className="space-y-4 rounded-2xl border border-gold/20 bg-parchment/50 p-6">
              <InfoRow icon={MapPin} label={t.contact.addressLabel}>
                Ramghat, Kshipra Tat, Ujjain, Madhya Pradesh &ndash; 456006
              </InfoRow>
              <InfoRow icon={Phone} label={t.contact.mobileLabel}>
                <a href="tel:+919617711721" className="hover:text-maroon">+91 96177 11721</a>
              </InfoRow>
              <InfoRow icon={Mail} label={t.contact.emailLabel}>
                <a href="mailto:contact@cyclewalapanda.com" className="hover:text-maroon">
                  contact@cyclewalapanda.com
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label={t.contact.hoursLabel}>
                {t.contact.hours}
              </InfoRow>
            </div>
          </motion.div>

          <motion.div
            id="book"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="scroll-mt-24 rounded-2xl border border-gold/20 bg-parchment/40 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-maroon">
              {t.contact.formTitle}
            </h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 size={36} className="text-maroon" />
                <p className="text-sm text-ink/70">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required name="name" placeholder={t.contact.form.name} className={inputClass} />
                <input required name="phone" placeholder={t.contact.form.phone} className={inputClass} />
                <input type="email" name="email" placeholder={t.contact.form.email} className={inputClass} />
                <input name="country" placeholder={t.contact.form.country} className={inputClass} />
                <input name="state" placeholder={t.contact.form.state} className={inputClass} />
                <input name="city" placeholder={t.contact.form.city} className={inputClass} />
                <input name="gotra" placeholder={t.contact.form.gotra} className={inputClass} />
                <select required name="puja" className={inputClass} defaultValue="">
                  <option value="" disabled>{t.contact.form.puja}</option>
                  {t.services.items.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
                <input required type="date" name="date" aria-label={t.contact.form.date} className={inputClass} />
                <input type="time" name="time" aria-label={t.contact.form.time} className={inputClass} />
                <textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  rows={4}
                  className={`${inputClass} sm:col-span-2`}
                />
                {errorMessage && (
                  <p className="text-sm text-maroon sm:col-span-2" role="alert">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-ivory shadow-sacred transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:col-span-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> {t.contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} /> {t.contact.form.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/8 text-maroon">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-ink/45">{label}</p>
        <p className="text-sm text-ink/80">{children}</p>
      </div>
    </div>
  );
}
