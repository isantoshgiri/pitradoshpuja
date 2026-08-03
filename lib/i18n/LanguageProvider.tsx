"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { ReactNode } from "react";
import { defaultLocale, localeTags, STORAGE_KEY, type Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en.json";
import hi from "./dictionaries/hi.json";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  hi: hi as Dictionary
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default is always Hindi on first paint (server + client match),
  // then we swap to the saved preference right after mount.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "hi") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeTags[locale];
    document.documentElement.setAttribute("data-locale", locale);
    document.documentElement.setAttribute(
      "dir",
      locale === "hi" ? "ltr" : "ltr" // both LTR; kept explicit for future RTL locales
    );
    // Reflect the active language in the browser tab immediately.
    // (Full server-rendered <title>/meta swap requires locale-prefixed
    // routing \u2014 see README for the next-intl migration path.)
    document.title = dictionaries[locale].meta.title;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
