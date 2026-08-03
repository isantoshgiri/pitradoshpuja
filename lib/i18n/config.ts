export const locales = ["hi", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hi";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी"
};

// BCP-47 tags used for <html lang>, hreflang and Open Graph locale meta.
export const localeTags: Record<Locale, string> = {
  en: "en-IN",
  hi: "hi-IN"
};

export const STORAGE_KEY = "pdp_locale";
