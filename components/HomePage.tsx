"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Flame,
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Users,
  Award,
  Bike,
  Landmark,
  MapPin,
  Sparkles,
  BookOpen,
  Heart,
  CheckCircle2,
  ChevronDown,
  Quote,
  Clock,
  Compass,
  Sun,
  Scroll,
  HandHeart,
  Infinity as InfinityIcon,
  Calendar,
  Send,
  User,
  Video,
  Image as ImageIcon,
  Eye,
  Loader2
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "+91 96177 11721";
const PHONE_TEL = "+919617711721";
const WHATSAPP_LINK = "https://wa.me/919617711721";

const trustPoints = [
  { icon: Landmark, title: "7–8 पीढ़ियाँ", subtitle: "वैदिक परंपरा" },
  { icon: Users, title: "5000+", subtitle: "सफल पूजन" },
  { icon: Bike, title: "Cycle Wala Panda", subtitle: "पंडित अजय शर्मा परिवार" },
  { icon: MapPin, title: "रामघाट, उज्जैन", subtitle: "पवित्र तीर्थ स्थल" }
];

const pujas = [
  {
    icon: Flame,
    name: "पितृ दोष पूजा",
    description:
      "पितरों की अतृप्त आत्माओं को शांति प्रदान कर परिवार में सुख-समृद्धि लाने हेतु विशेष वैदिक अनुष्ठान।"
  },
  {
    icon: Scroll,
    name: "त्रिपिंडी श्राद्ध",
    description:
      "तीन पीढ़ियों के पितरों की मुक्ति हेतु क्षिप्रा तट पर विधिवत सम्पन्न किया जाने वाला पवित्र श्राद्ध कर्म।"
  },
  {
    icon: HandHeart,
    name: "नारायण बली",
    description:
      "अकाल मृत्यु प्राप्त आत्माओं की सद्गति एवं मोक्ष प्राप्ति हेतु किया जाने वाला पावन अनुष्ठान।"
  },
  {
    icon: InfinityIcon,
    name: "कालसर्प दोष पूजा",
    description:
      "जन्म कुंडली में कालसर्प दोष के प्रभाव को शांत कर जीवन की बाधाओं से मुक्ति दिलाने वाली पूजा।"
  },
  {
    icon: Sun,
    name: "महामृत्युंजय जाप",
    description:
      "स्वास्थ्य लाभ, दीर्घायु एवं अकाल मृत्यु के भय से रक्षा हेतु शक्तिशाली मंत्र जाप।"
  },
  {
    icon: Heart,
    name: "मंगल दोष पूजा",
    description:
      "कुंडली में मंगल दोष की शांति हेतु पूजा, विवाह में आ रही बाधाओं को दूर करने में सहायक।"
  },
  {
    icon: Compass,
    name: "ग्रह शांति पूजा",
    description:
      "कुंडली में अशुभ ग्रहों की स्थिति को शांत कर जीवन में स्थिरता एवं सफलता प्रदान करने वाला अनुष्ठान।"
  },
  {
    icon: Sparkles,
    name: "नवग्रह शांति",
    description:
      "नौ ग्रहों की कृपा प्राप्त करने एवं समस्त ग्रह दोषों के निवारण हेतु सम्पूर्ण वैदिक पूजन।"
  }
];

const whyChooseUs = [
  {
    icon: BookOpen,
    title: "शुद्ध वैदिक विधि",
    description: "प्रत्येक अनुष्ठान शास्त्रों में वर्णित विधि के अनुसार पूर्ण श्रद्धा एवं सटीकता से सम्पन्न किया जाता है।"
  },
  {
    icon: Award,
    title: "अनुभवी पंडित",
    description: "20 वर्षों से अधिक के अनुभव के साथ पंडित अजय शर्मा जी स्वयं प्रत्येक पूजा का मार्गदर्शन करते हैं।"
  },
  {
    icon: Video,
    title: "लाइव वीडियो सुविधा",
    description: "जो श्रद्धालु उज्जैन नहीं आ सकते, उनके लिए पूजा का लाइव वीडियो कॉल के माध्यम से प्रसारण किया जाता है।"
  },
  {
    icon: MessageCircle,
    title: "व्हाट्सएप सहयोग",
    description: "बुकिंग से लेकर पूजा सम्पन्न होने तक हर जानकारी व्हाट्सएप पर तुरंत उपलब्ध कराई जाती है।"
  },
  {
    icon: ShieldCheck,
    title: "पारदर्शी प्रक्रिया",
    description: "पूजा सामग्री, विधि एवं दक्षिणा की सम्पूर्ण जानकारी बुकिंग से पहले ही स्पष्ट रूप से बता दी जाती है।"
  },
  {
    icon: MapPin,
    title: "रामघाट, उज्जैन",
    description: "क्षिप्रा नदी के पावन रामघाट तट पर, जो पितृ कर्म हेतु सर्वाधिक पवित्र स्थलों में से एक है।"
  }
];

const bookingSteps = [
  { step: "01", icon: Phone, title: "कॉल करें", description: "हमें कॉल या व्हाट्सएप के माध्यम से अपनी आवश्यकता बताएं।" },
  { step: "02", icon: User, title: "जानकारी दें", description: "अपनी कुंडली एवं समस्या से जुड़ी जानकारी हमारी टीम को साझा करें।" },
  { step: "03", icon: Calendar, title: "मुहूर्त निश्चित करें", description: "पंडित जी द्वारा शुभ मुहूर्त निकालकर पूजा की तिथि निश्चित की जाती है।" },
  { step: "04", icon: Flame, title: "पूजा सम्पन्न करें", description: "रामघाट पर विधिवत पूजा सम्पन्न कर आपको फोटो एवं वीडियो भेजा जाता है।" }
];

const reviews = [
  {
    name: "राकेश वर्मा",
    location: "दिल्ली",
    quote:
      "पंडित जी ने पूजा से पहले हर विधि को बहुत ही सरलता से समझाया। पूजा सम्पन्न होने के बाद परिवार में जो शांति महसूस हुई, वह अद्भुत है।"
  },
  {
    name: "सुनीता अग्रवाल",
    location: "मुंबई",
    quote:
      "हम उज्जैन नहीं जा सके, तो पंडित जी ने लाइव वीडियो कॉल पर पूरी पूजा दिखाई। ऐसा लगा जैसे हम स्वयं वहाँ उपस्थित हों।"
  },
  {
    name: "मनोज तिवारी",
    location: "लखनऊ",
    quote:
      "त्रिपिंडी श्राद्ध रामघाट पर जिस श्रद्धा और शुद्धता से सम्पन्न हुआ, उसने हमारे पूरे परिवार को गहरी संतुष्टि दी।"
  }
];

const faqs = [
  {
    question: "पितृ दोष क्या है और यह कैसे पता चलता है?",
    answer:
      "जब पितरों की आत्मा को मोक्ष प्राप्त नहीं होता, तो कुंडली में पितृ दोष बनता है, जिसके कारण परिवार में बार-बार बाधाएं, स्वास्थ्य समस्याएं या पारिवारिक कलह देखने को मिलता है। पंडित अजय शर्मा जी कुंडली देखकर इसकी पुष्टि करते हैं।"
  },
  {
    question: "क्या पूजा के लिए उज्जैन आना अनिवार्य है?",
    answer:
      "नहीं, आप अपने संकल्प के साथ हमें बुकिंग दे सकते हैं और पूजा रामघाट पर सम्पन्न कर लाइव वीडियो कॉल एवं फोटो के माध्यम से आपको दिखाई जाती है।"
  },
  {
    question: "पूजा बुकिंग में क्या-क्या सम्मिलित रहता है?",
    answer:
      "बुकिंग में परामर्श, सम्पूर्ण पूजन सामग्री, पंडित अजय शर्मा जी द्वारा विधिवत अनुष्ठान एवं पूजा के पश्चात फोटो-वीडियो प्रमाण सम्मिलित हैं।"
  },
  {
    question: "पूजा के लिए कितने दिन पहले बुकिंग करानी चाहिए?",
    answer:
      "शुभ मुहूर्त निश्चित करने हेतु कम से कम एक सप्ताह पूर्व बुकिंग करना उचित है, परंतु आवश्यकता होने पर शीघ्र बुकिंग भी सम्भव है।"
  },
  {
    question: "त्रिपिंडी श्राद्ध और पितृ दोष पूजा में क्या अंतर है?",
    answer:
      "त्रिपिंडी श्राद्ध विशेष रूप से तीन पीढ़ियों के पितरों हेतु किया जाता है और सामान्यतः तब सुझाया जाता है जब पितृ दोष अत्यधिक गंभीर हो।"
  },
  {
    question: "क्या विदेश में रहने वाले श्रद्धालु भी पूजा करवा सकते हैं?",
    answer:
      "जी हाँ, देश-विदेश से अनेक श्रद्धालु फोन एवं व्हाट्सएप के माध्यम से बुकिंग करवाते हैं और लाइव वीडियो कॉल पर पूजा में सम्मिलित होते हैं।"
  },
  {
    question: "पूजा की दक्षिणा एवं शुल्क कैसे तय होता है?",
    answer:
      "पूजा के प्रकार एवं सामग्री के अनुसार शुल्क की जानकारी बुकिंग से पहले ही फोन या व्हाट्सएप पर स्पष्ट रूप से बता दी जाती है।"
  },
  {
    question: "पंडित अजय शर्मा जी को 'साइकिल वाले पंडा' क्यों कहा जाता है?",
    answer:
      "पंडित जी वर्षों से सरल जीवन जीते हुए साइकिल से रामघाट आते-जाते हैं, जिस कारण श्रद्धालु उन्हें प्रेमपूर्वक 'साइकिल वाले पंडा' कहकर पुकारते हैं।"
  },
  {
    question: "क्या पूजा हेतु कुंडली भेजना आवश्यक है?",
    answer:
      "कुंडली उपलब्ध हो तो अत्यंत उपयोगी रहती है, परंतु उपलब्ध न होने पर भी जन्म तिथि, समय एवं स्थान के आधार पर परामर्श दिया जाता है।"
  },
  {
    question: "बुकिंग की पुष्टि कैसे प्राप्त होगी?",
    answer:
      "बुकिंग फॉर्म भरने अथवा कॉल करने के पश्चात हमारी टीम व्हाट्सएप या फोन कॉल के माध्यम से पूजा की तिथि एवं विवरण की पुष्टि करती है।"
  }
];

const galleryImages = [
  { src: "/images/gallery/ramghat-1.jpg", alt: "रामघाट पर पूजा का दृश्य" },
  { src: "/images/gallery/ramghat-2.jpg", alt: "पंडित जी द्वारा हवन कर्म" },
  { src: "/images/gallery/ramghat-3.jpg", alt: "क्षिप्रा नदी तट पर अनुष्ठान" },
  { src: "/images/gallery/ramghat-4.jpg", alt: "पितृ दोष पूजा सामग्री" },
  { src: "/images/gallery/ramghat-5.jpg", alt: "श्रद्धालु परिवार पूजा में सम्मिलित" },
  { src: "/images/gallery/ramghat-6.jpg", alt: "संध्या आरती रामघाट" }
];

const pujaOptions = [
  "पितृ दोष पूजा",
  "त्रिपिंडी श्राद्ध",
  "नारायण बली",
  "कालसर्प दोष पूजा",
  "महामृत्युंजय जाप",
  "मंगल दोष पूजा",
  "ग्रह शांति",
  "नवग्रह शांति"
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ------------------------------------------------------------------ */
/*  Reusable bits                                                      */
/* ------------------------------------------------------------------ */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-maroon">
      <Sparkles className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Booking form state                                                 */
/* ------------------------------------------------------------------ */

interface BookingFormState {
  name: string;
  mobile: string;
  city: string;
  puja: string;
  date: string;
  message: string;
}

const initialFormState: BookingFormState = {
  name: "",
  mobile: "",
  city: "",
  puja: pujaOptions[0],
  date: "",
  message: ""
};

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState<BookingFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitted(false);

    const name = formData.name.trim();
    const mobile = formData.mobile.trim();
    const city = formData.city.trim();
    const puja = formData.puja.trim();
    const date = formData.date.trim();
    const message = formData.message.trim();

    if (!name || !mobile || !city || !puja || !date) {
      setErrorMessage("कृपया आवश्यक जानकारी भरें।");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setErrorMessage("कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    if (!supabase) {
      setErrorMessage("कुछ समस्या हुई। कृपया थोड़ी देर बाद पुनः प्रयास करें।");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("Bookings").insert({
        Name: name,
        Mobile: mobile,
        Email: null,
        Puja: puja,
        "Booking Date": date,
        Message: message || null,
        Status: "Pending"
      });

      if (error) {
        throw error;
      }

      setFormData(initialFormState);
      setSubmitted(true);
    } catch (err) {
      console.error("Booking submission failed:", err);
      setErrorMessage("कुछ समस्या हुई। कृपया फिर से कोशिश करें या हमसे सीधे संपर्क करें।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section aria-label="मुख्य परिचय" className="relative overflow-hidden bg-maroon-dark text-ivory">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero/ramghat.jpg"
            alt="रामघाट, उज्जैन में क्षिप्रा नदी तट"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/70 to-maroon-dark/40" />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 text-gold-light"
          >
            <Flame className="h-6 w-6" aria-hidden="true" />
            <span className="font-display text-sm tracking-[0.3em]">रामघाट &middot; उज्जैन</span>
            <Flame className="h-6 w-6" aria-hidden="true" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            पितृ दोष से मुक्ति हेतु
            <span className="mt-2 block text-gold-light">वैदिक पूजा एवं अनुष्ठान</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-balance mt-6 max-w-2xl font-body text-base text-ivory/90 sm:text-lg"
          >
            रामघाट उज्जैन में पंडित अजय शर्मा जी द्वारा शास्त्रोक्त विधि से पूजा
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-gold px-8 py-4 font-body text-sm font-semibold text-maroon-dark shadow-xl transition hover:bg-gold-light"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              अभी कॉल करें
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-ivory/40 bg-ivory/10 px-8 py-4 font-body text-sm font-semibold text-ivory backdrop-blur transition hover:bg-ivory/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp पर बात करें
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================ TRUST BAR ============================ */}
      <section aria-label="विश्वास के आंकड़े" className="bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustPoints.map(({ icon: Icon, title, subtitle }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex h-full flex-col items-center justify-center rounded-[24px] border border-gold/20 bg-white p-6 text-center shadow-[0_12px_45px_-18px_rgba(0,0,0,0.25)] transition-all duration-300"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/10 text-maroon shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-2xl font-semibold leading-tight text-maroon-dark sm:text-[1.7rem]">
                  {title}
                </span>
                <span className="mt-2 font-body text-sm font-medium tracking-wide text-gray-600">
                  {subtitle}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ ABOUT PANDIT JI ============================ */}
      <section aria-label="पंडित जी का परिचय" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-gold/30 shadow-xl"
          >
            <Image
              src="/images/pandit/ajay-sharma.jpg"
              alt="पंडित अजय शर्मा जी, रामघाट उज्जैन"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
          >
            <SectionEyebrow>हमारे विषय में</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">
              पंडित अजय शर्मा जी
              <span className="mt-1 block text-lg font-normal text-saffron">
                &ldquo;साइकिल वाले पंडा&rdquo;
              </span>
            </h2>

            <ul className="mt-6 space-y-3 font-body text-sm text-gray-700 sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                20+ वर्षों का अनुभव
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                रामघाट उज्जैन में वैदिक अनुष्ठान
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                हजारों परिवारों ने पूजा करवाई
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                देश-विदेश से श्रद्धालु आते हैं
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                लोग इन्हें &ldquo;साइकिल वाले पंडा&rdquo; के नाम से भी जानते हैं
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                सरल, अनुभवी एवं वेदों के ज्ञाता
              </li>
            </ul>

            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-maroon px-7 py-3.5 font-body text-sm font-semibold text-ivory shadow-lg transition hover:bg-maroon-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              पंडित जी से बात करें
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================ POPULAR PUJAS ============================ */}
      <section id="pujas" aria-label="प्रमुख पूजन एवं अनुष्ठान" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionEyebrow>पवित्र अनुष्ठान</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">
              प्रमुख पूजन एवं अनुष्ठान
            </h2>
            <p className="mt-4 font-body text-gray-600">
              प्रत्येक अनुष्ठान रामघाट पर पंडित अजय शर्मा जी की देखरेख में शास्त्रोक्त विधि से सम्पन्न किया जाता है।
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pujas.map(({ icon: Icon, name, description }) => (
              <motion.article
                key={name}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-gold/20 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon text-gold-light transition group-hover:bg-maroon-dark">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-maroon-dark">{name}</h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-gray-600">{description}</p>
                <a
                  href="#booking-form"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-saffron/10 px-5 py-2.5 font-body text-sm font-semibold text-saffron transition hover:bg-saffron hover:text-white"
                >
                  अभी बुक करें
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ BOOKING FORM ============================ */}
      <section id="booking-form" aria-label="पूजा बुकिंग फॉर्म" className="bg-maroon-dark">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center text-ivory"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-ivory/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-light">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              पूजा बुकिंग
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">अपनी पूजा बुक करें</h2>
            <p className="mt-3 font-body text-ivory/75">
              नीचे दिया गया फॉर्म भरें, हमारी टीम शीघ्र ही आपसे सम्पर्क करेगी।
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-gold-light/20 bg-ivory/95 p-6 shadow-2xl backdrop-blur sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block font-body text-sm font-semibold text-maroon-dark">
                  नाम
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="अपना पूरा नाम लिखें"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="mobile" className="block font-body text-sm font-semibold text-maroon-dark">
                  मोबाइल नंबर
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="city" className="block font-body text-sm font-semibold text-maroon-dark">
                  शहर
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="अपना शहर लिखें"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="puja" className="block font-body text-sm font-semibold text-maroon-dark">
                  पूजा का चयन
                </label>
                <select
                  id="puja"
                  name="puja"
                  required
                  value={formData.puja}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                >
                  {pujaOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="date" className="block font-body text-sm font-semibold text-maroon-dark">
                  पसंदीदा तिथि
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="message" className="block font-body text-sm font-semibold text-maroon-dark">
                  संदेश
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="अतिरिक्त जानकारी (वैकल्पिक)"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-body text-sm text-gray-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-8 py-4 font-body text-sm font-semibold text-maroon-dark shadow-lg transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  भेजा जा रहा है...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  अभी बुक करें
                </>
              )}
            </button>

            {errorMessage && (
              <p role="alert" className="mt-4 font-body text-sm font-semibold text-red-700">
                {errorMessage}
              </p>
            )}

            {submitted && (
              <p role="status" className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-green-700">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                आपकी बुकिंग सफलतापूर्वक प्राप्त हो गई है। हमारी टीम शीघ्र ही आपसे संपर्क करेगी।
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* ============================ BOOKING PROCESS ============================ */}
      <section aria-label="बुकिंग प्रक्रिया" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionEyebrow>प्रक्रिया</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">बुकिंग प्रक्रिया</h2>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {bookingSteps.map(({ step, icon: Icon, title, description }) => (
              <motion.li key={step} variants={fadeUp} className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-lg">
                <span className="font-display text-4xl font-bold text-gold/50">{step}</span>
                <span className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-gold-light">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-maroon-dark">{title}</h3>
                <p className="mt-2 font-body text-sm text-gray-600">{description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ============================ WHY CHOOSE US ============================ */}
      <section aria-label="हमें ही क्यों चुनें" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionEyebrow>विशेषताएं</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">हमें ही क्यों चुनें</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-gold/20 bg-gray-50 p-7 transition hover:border-gold/50 hover:bg-white hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-maroon-dark">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ PHOTO GALLERY ============================ */}
      <section aria-label="छायाचित्र दीर्घा" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionEyebrow>छायाचित्र</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">पूजन दीर्घा</h2>
            <p className="mt-4 font-body text-gray-600">रामघाट पर सम्पन्न हुए अनुष्ठानों की कुछ पावन झलकियाँ।</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {galleryImages.map(({ src, alt }) => (
              <motion.div
                key={src}
                variants={fadeUp}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-gold/20 bg-gray-200 shadow-md"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-dark/70 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 font-body text-xs text-ivory">
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    {alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ DEVOTEE REVIEWS ============================ */}
      <section aria-label="श्रद्धालुओं की अनुभूतियाँ" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionEyebrow>अनुभव</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">
              श्रद्धालुओं की अनुभूतियाँ
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {reviews.map(({ name, location, quote }) => (
              <motion.figure
                key={name}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-gold/20 bg-gray-50 p-7 shadow-lg"
              >
                <Quote className="h-8 w-8 text-gold/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-body text-sm italic leading-relaxed text-gray-700">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-gold/10 pt-4">
                  <div>
                    <p className="font-display text-base font-semibold text-maroon-dark">{name}</p>
                    <p className="font-body text-xs tracking-wide text-gray-500">{location}</p>
                  </div>
                  <div className="flex gap-0.5 text-gold" aria-label="5 में से 5 सितारे">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold" aria-hidden="true" />
                    ))}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section aria-label="अक्सर पूछे जाने वाले प्रश्न" className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center"
          >
            <SectionEyebrow>प्रश्नोत्तर</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon-dark sm:text-4xl">
              अक्सर पूछे जाने वाले प्रश्न
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div key={question} className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-md">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-body text-sm font-semibold text-maroon-dark sm:text-base"
                    >
                      {question}
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-gold-dark transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 font-body text-sm leading-relaxed text-gray-600">{answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA BANNER ============================ */}
      <section aria-label="आज ही बुक करें" className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-gold-dark via-gold to-saffron px-6 py-20 text-center sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl"
          >
            <Flame className="mx-auto h-10 w-10 text-maroon-dark" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold text-maroon-dark sm:text-4xl">
              आज ही अपना अनुष्ठान बुक करें
            </h2>
            <p className="mt-3 font-body text-maroon-dark/80">
              पंडित अजय शर्मा जी की टीम से सीधे बात करें और शुभ मुहूर्त में अपनी पूजा निश्चित करें।
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-maroon px-8 py-4 font-body text-sm font-semibold text-ivory shadow-xl transition hover:bg-maroon-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                अभी कॉल करें
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-maroon-dark/30 bg-ivory px-8 py-4 font-body text-sm font-semibold text-maroon-dark shadow-xl transition hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp पर बात करें
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
