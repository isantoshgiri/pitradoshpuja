import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const displayHi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["600", "700", "800"],
  variable: "--font-display-hi",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const bodyHi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-body-hi",
  display: "swap"
});

const SITE_URL = "https://pitradoshpuja.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pitra Dosh Puja in Ujjain | Pandit Ajay Sharma Ji | Ramghat",
    template: "%s | Pitra Dosh Puja"
  },
  description:
    "Book authentic Pitra Dosh Puja, Tripindi Shradh, Narayan Bali and Vedic rituals performed at Ramghat, Ujjain by Pandit Ajay Sharma Ji. Trusted by devotees worldwide.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "hi-IN": SITE_URL,
      "x-default": SITE_URL
    }
  },
  openGraph: {
    title: "Pitra Dosh Puja in Ujjain | Pandit Ajay Sharma Ji",
    description:
      "Authentic Vedic rituals performed at Ramghat, Ujjain \u2014 Pitra Dosh Puja, Tripindi Shradh, Narayan Bali and more.",
    url: SITE_URL,
    siteName: "Pitra Dosh Puja",
    locale: "hi_IN",
    alternateLocale: ["en_IN"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitra Dosh Puja in Ujjain | Pandit Ajay Sharma Ji",
    description:
      "Authentic Vedic rituals performed at Ramghat, Ujjain by Pandit Ajay Sharma Ji."
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ReligiousOrganization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Pitra Dosh Puja \u2014 Pandit Ajay Sharma Ji",
      alternateName: "Cycle Wala Panda",
      url: SITE_URL,
      image: `${SITE_URL}/images/og-cover.jpg`,
      telephone: "+91-9617711721",
      email: "contact@cyclewalapanda.com",
      priceRange: "\u20b9\u20b9",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ramghat, Kshipra Tat",
        addressLocality: "Ujjain",
        addressRegion: "Madhya Pradesh",
        postalCode: "456006",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.1885,
        longitude: 75.7734
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "06:00",
        closes: "20:00"
      }
    }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi-IN"
      data-locale="hi"
      className={`${display.variable} ${displayHi.variable} ${body.variable} ${bodyHi.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="en-IN" href={SITE_URL} />
        <link rel="alternate" hrefLang="hi-IN" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
