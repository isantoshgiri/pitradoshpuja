export interface ServiceItem {
  name: string;
  desc: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  name: string;
  loc: string;
  text: string;
}

export interface LegalSection {
  heading?: string;
  body: string;
}

export interface LegalContent {
  title: string;
  sections: LegalSection[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    pujas: string;
    panditji: string;
    gallery: string;
    blogs: string;
    testimonials: string;
    faq: string;
    contact: string;
    bookPuja: string;
  };
  header: { callNow: string; whatsapp: string };
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCall: string;
    ctaWhatsapp: string;
    trust1: string;
    trust2: string;
    trust3: string;
    trust4: string;
  };
  panditji: {
    eyebrow: string;
    name: string;
    alias: string;
    experience: string;
    bio: string;
    specialisationsTitle: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: ServiceItem[];
  };
  why: { eyebrow: string; title: string; items: FeatureItem[] };
  process: { eyebrow: string; title: string; steps: ProcessStep[] };
  gallery: { eyebrow: string; title: string; items: string[] };
  testimonials: { eyebrow: string; title: string; items: TestimonialItem[] };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  cta: { title: string; subtitle: string; button: string };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    mobileLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    formTitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      country: string;
      state: string;
      city: string;
      gotra: string;
      purpose: string;
      date: string;
      time: string;
      puja: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      errorValidation: string;
      errorGeneral: string;
    };
  };
  footer: {
    about: string;
    quickLinks: string;
    allPujas: string;
    legal: string;
    privacy: string;
    terms: string;
    refund: string;
    follow: string;
    rights: string;
  };
  legalPages: {
    privacy: LegalContent;
    terms: LegalContent;
    refund: LegalContent;
  };
}
