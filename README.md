# Pitra Dosh Puja \u2014 pitradoshpuja.com

A premium, bilingual (English / Hindi) Next.js website for booking Vedic pujas performed by
Pandit Ajay Sharma Ji at Ramghat, Ujjain.

## Stack

Next.js 14 (App Router) \u00b7 TypeScript \u00b7 Tailwind CSS \u00b7 Framer Motion \u00b7 Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's built

- **Design system** \u2014 `tailwind.config.ts` defines the full palette (ivory / maroon / gold /
  saffron / dusk night), a serif display pairing (Cormorant Garamond + Tiro Devanagari Hindi
  for headings) and a body pairing (Inter + Noto Sans Devanagari), plus the signature
  "diya glow" gradient and scalloped temple-arch divider used between sections.
- **Full homepage** \u2014 Hero, Pandit Ji profile, all 15 puja service cards, Why Choose Us,
  the 6-step booking process, gallery preview, testimonials, FAQ (20 questions with
  `FAQPage` schema), a booking/enquiry form, and footer.
- **Bilingual language system** (see below) \u2014 instant switch, no page reload, persisted
  choice, translated copy for every section.
- **SEO foundation** \u2014 Organization/LocalBusiness/ReligiousOrganization JSON-LD, FAQ
  JSON-LD, Open Graph + Twitter cards, canonical + hreflang tags, `robots.ts` and
  `sitemap.ts` metadata routes.
- **Responsive UX** \u2014 sticky header, mobile drawer menu, sticky mobile "Book Puja" bar,
  floating WhatsApp/Call buttons, scroll-reveal animations that respect
  `prefers-reduced-motion`.
- **Legal pages** \u2014 Privacy Policy, Terms, Refund Policy (stub content, ready to refine).

## How the language switcher works

Location: `lib/i18n/`

- `dictionaries/en.json` and `dictionaries/hi.json` hold every string on the site, in the
  same shape (typed in `types.ts`), so nothing can silently fall out of sync.
- `LanguageProvider.tsx` is a client-side React Context that:
  - Defaults to English on first render (so server and client HTML match \u2014 no hydration
    mismatch).
  - Reads a saved preference from `localStorage` (`pdp_locale`) right after mount and swaps
    instantly, with no navigation or reload.
  - Persists every change back to `localStorage`.
  - Updates `<html lang>` and the browser tab title for accessibility and clarity.
- `components/LanguageSwitcher.tsx` is the globe-icon dropdown (desktop, top-right of the
  header) and a segmented control (inside the mobile menu). Both call the same `setLocale`.
- Every section reads copy via `const { t } = useLanguage()` and renders `t.hero.headline`
  etc. \u2014 there is no hardcoded UI text in the components.

This satisfies the brief's functional requirements (instant switch, persisted preference,
fully translated UI) with a lightweight approach that needed no extra runtime dependency.

### Upgrading to locale-prefixed routes (recommended before launch)

Because language state lives on the client, a search engine crawling the site without
JavaScript will only ever see the English version, and `<title>`/meta description can't
change per-language on the server. For strongest SEO, migrate to **next-intl** with
locale-prefixed routing (`/en/...`, `/hi/...`):

1. `npm install next-intl`
2. Move `app/page.tsx` and friends under `app/[locale]/`.
3. Add `middleware.ts` using `next-intl`'s middleware for locale detection/redirects.
4. Replace `LanguageProvider`'s client-only switch with `next-intl`'s `useTranslations` /
   `Link` (which navigates to `/hi/...` and re-renders the correct server output).
5. Point the `alternates.languages` block in `app/layout.tsx` at the real `/en` and `/hi`
   URLs instead of the shared root.

The dictionary JSON files are already shaped for a drop-in migration \u2014 `next-intl` reads
the same per-locale JSON structure.

## What's scaffolded but needs content/integration before launch

- **Individual puja pages** (`/pujas/[slug]`) \u2014 the service data model (`t.services.items`)
  is ready; add a dynamic route that reuses it for the Description / Benefits / Procedure /
  Duration / FAQ template described in the brief.
- **Blog** \u2014 no CMS is wired up yet. Recommend a headless CMS (Sanity/Contentful) or MDX
  under `app/blog/[slug]`.
- **Booking form submission** \u2014 `components/Contact.tsx` currently only flips to a "thank
  you" state on submit. Wire the `handleSubmit` function to your backend, a form service, or
  a Next.js Route Handler under `app/api/booking/route.ts`.
- **Payment** \u2014 Razorpay is the natural fit for INR + international cards; add it as a step
  after booking confirmation, not on this form.
- **Real photography** \u2014 all imagery is currently a styled placeholder (no stock/copyrighted
  assets were used, per the brief). Replace with licensed photos of Ramghat, the rituals, and
  Pandit Ji.
- **Google Reviews / YouTube testimonials** \u2014 testimonial data is static; swap in the Google
  Places API or YouTube Data API once you have accounts connected.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, JSON-LD, providers
  page.tsx             Homepage
  globals.css
  robots.ts / sitemap.ts
  privacy-policy/ terms/ refund-policy/
components/
  Header.tsx, LanguageSwitcher.tsx, Hero.tsx, PanditJi.tsx, Services.tsx,
  WhyChooseUs.tsx, BookingProcess.tsx, Gallery.tsx, Testimonials.tsx,
  CtaBanner.tsx, FAQ.tsx, Contact.tsx, Footer.tsx, FloatingButtons.tsx, LegalPage.tsx
lib/i18n/
  config.ts, types.ts, LanguageProvider.tsx, dictionaries/en.json, dictionaries/hi.json
```

## Deployment

Ready for Vercel: push to a Git repo, import into Vercel, no environment variables required
for the current feature set.
