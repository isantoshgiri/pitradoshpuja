import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CircleCheckBig,
  Compass,
  Flame,
  HandHeart,
  HeartHandshake,
  Landmark,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet
} from "lucide-react";

const services = [
  { title: "पितृ दोष पूजा", href: "/services/pitra-dosh-puja" },
  { title: "काल सर्प दोष पूजा", href: "/services/kaal-sarp-dosh-puja" },
  { title: "गुरु चांडाल दोष पूजा", href: "/services/guru-chandal-dosh-puja" },
  { title: "मंगल दोष पूजा", href: "/services/mangal-dosh-puja" },
  { title: "त्रिपिंडी श्राद्ध", href: "/services/tripindi-shradh" },
  { title: "तीर्थ श्राद्ध", href: "/services/tirth-shradh" },
  { title: "नारायण बली", href: "/services/narayan-bali-puja" },
  { title: "नाग बली", href: "/services/nag-bali-puja" },
  { title: "नाग बली नारायण बली", href: "/services/nag-bali-narayan-bali-puja" },
  { title: "महा मृत्युंजय जाप", href: "/services/mahamrityunjay-jaap" },
  { title: "रुद्राभिषेक", href: "/services/rudrabhishek" },
  { title: "गृह प्रवेश", href: "/services/griha-pravesh-puja" },
  { title: "सत्यनारायण कथा", href: "/services/satyanarayan-katha" },
  { title: "विवाह संस्कार", href: "/services/vivah-puja" }
];

const whyChooseUs = [
  {
    icon: Landmark,
    title: "7–8 पीढ़ियों की परंपरा",
    description: "परिवार की दीर्घकालीन वैदिक सेवा का अनुकरण करते हुए शुद्ध परंपरा के साथ पूजन किया जाता है."
  },
  {
    icon: Compass,
    title: "उज्जैन रामघाट पर अनुभवी सेवा",
    description: "संकल्प, समय और विधि के अनुसार रामघाट पर पवित्र वातावरण में अनुष्ठान सम्पन्न होते हैं."
  },
  {
    icon: Sparkles,
    title: "शुद्ध वैदिक विधि",
    description: "प्रत्येक पूजन शास्त्रसम्मत नियम, मंत्र-जप और वैदिक अनुक्रम के अनुसार किया जाता है."
  },
  {
    icon: Users,
    title: "अनुभवी आचार्य परिवार",
    description: "पूरे परिवार की सहभागिता से पूजन प्रक्रिया अधिक सघन, सटीक और श्रद्धापूर्ण बनती है."
  },
  {
    icon: BadgeCheck,
    title: "पूजा प्रमाणपत्र उपलब्ध",
    description: "आवश्यकतानुसार पूजा की पुष्टि, फोटो-वीडियो और प्रमाणपत्रों की सुविधा उपलब्ध रहती है."
  },
  {
    icon: HeartHandshake,
    title: "हजारों संतुष्ट श्रद्धालु",
    description: "देश-विदेश से आने वाले श्रद्धालुओं ने समय-समय पर उनके मार्गदर्शन में सफलता प्राप्त की है."
  },
  {
    icon: Wallet,
    title: "पारदर्शी प्रक्रिया",
    description: "बुकिंग से लेकर पूजा की जानकारी तक सभी बातों की स्पष्ट और ईमानदार जानकारी दी जाती है."
  },
  {
    icon: BookOpen,
    title: "सम्पूर्ण धार्मिक मार्गदर्शन",
    description: "पूजन के साथ-साथ सही समय, मंत्र, व्यवस्था और धार्मिक सलाह भी दी जाती है."
  }
];

const testimonials = [
  {
    name: "राकेश वर्मा",
    location: "दिल्ली",
    quote:
      "पितृ दोष पूजा के दौरान पूरे अनुष्ठान की शुद्धता और संवेदनशीलता ने हमारे परिवार को गहरी शांति दी।"
  },
  {
    name: "सुनीता अग्रवाल",
    location: "मुंबई",
    quote:
      "उज्जैन रामघाट पर हुई पूजा में हर चरण को बहुत ही सटीक और भावपूर्ण तरीके से समझाया गया।"
  },
  {
    name: "मनोज तिवारी",
    location: "लखनऊ",
    quote:
      "त्रिपिंडी श्राद्ध में पंडित जी के मार्गदर्शन से हमारे परिवार को मन की थकान से राहत मिली।"
  },
  {
    name: "दीपक शर्मा",
    location: "इंदौर",
    quote:
      "पंडित अजय शर्मा जी और उनके परिवार की परंपरा और अनुशासन हमें बार-बार उनके पास ले आता है।"
  },
  {
    name: "अर्चना सिंह",
    location: "बेंगलुरु",
    quote:
      "नाग बली और नारायण बली की पूजा बहुत ही स्नेहपूर्ण और शास्त्रसम्मत रूप से संपन्न हुई।"
  },
  {
    name: "विजय कुमार",
    location: "चेन्नई",
    quote:
      "पूजा के बाद घर में सकारात्मकता का अनुभव हुआ; हम पूरी तरह संतुष्ट और आभारी हैं।"
  },
  {
    name: "कविता राठौर",
    location: "जोधपुर",
    quote:
      "रामघाट पर हुई पूजा के बाद परिवार में प्राचीन शुभता और स्थिरता का अनुभव हुआ।"
  },
  {
    name: "सौरभ पांडे",
    location: "नोएडा",
    quote:
      "पूजन की निष्पक्ष प्रक्रिया, समय की सटीकता और पंडित जी की विनम्रता अद्भुत थी।"
  }
];

const faqs = [
  {
    question: "पंडित अजय शर्मा जी कौन हैं?",
    answer:
      "पंडित अजय शर्मा जी उज्जैन रामघाट के प्रसिद्ध वैदिक आचार्य हैं, जो अपने परिवार के साथ 7–8 पीढ़ियों से वैदिक अनुष्ठान, श्राद्ध कर्म एवं पूजन करवाते हैं."
  },
  {
    question: "‘साइकिल वाले पंडा’ नाम कैसे पड़ा?",
    answer:
      "बहुत वर्ष पहले उनके दादा जी को एक यजमान द्वारा सम्मानस्वरूप साइकिल उपहार में मिली थी, जिसके बाद स्थानीय लोग उनके परिवार को प्यार से ‘Cycle Wala Panda’ कहने लगे."
  },
  {
    question: "रामघाट उज्जैन पर पूजा क्यों की जाती है?",
    answer:
      "रामघाट को पितृ कर्म, तर्पण और वैदिक अनुष्ठानों के लिए अत्यंत पवित्र माना जाता है, इसलिए यह स्थान विशेष शुभ माना जाता है."
  },
  {
    question: "पितृ दोष पूजा की सलाह कब लेनी चाहिए?",
    answer:
      "जब परिवार में लगातार बाधाएं, स्वास्थ्य या आर्थिक कठिनाइयों के साथ मानसिक अस्थिरता महसूस हो, तो पितृ दोष पूजा का परामर्श लेना उचित माना जाता है."
  },
  {
    question: "काल सर्प दोष पूजा किस लिए कराई जाती है?",
    answer:
      "काल सर्प दोष की स्थिति में जीवन में बार-बार रुकावटें, देरी या अस्थिरता अनुभव हो सकती है, इसलिए यह पूजा की जाती है."
  },
  {
    question: "त्रिपिंडी श्राद्ध किसके लिए की जाती है?",
    answer:
      "तीन पीढ़ियों के पितरों की शांति और मोक्ष के लिए त्रिपिंडी श्राद्ध किया जाता है, जो विशेष रूप से प्राचीन परंपरा का हिस्सा है."
  },
  {
    question: "क्या नारायण बली पूजा भी कराई जा सकती है?",
    answer:
      "जी हाँ, यदि किसी व्यक्ति की अकाल मृत्यु या असामयिक घटना से संबंधित चुनौती हो, तो नारायण बली पूजा की सलाह दी जाती है."
  },
  {
    question: "नाग बली पूजा किस उद्देश्य से की जाती है?",
    answer:
      "नाग बली पूजा का संबंध सर्प दोष, नाग देवता की शांति और संतानों या परिवार में आने वाली बाधाओं से जोड़कर देखा जाता है."
  },
  {
    question: "क्या पूजा दूर बैठे भी करवाई जा सकती है?",
    answer:
      "जी हाँ, आप अपनी सुविधा के अनुसार दूर बैठे भी पूजा की बुकिंग करा सकते हैं और आवश्यकतानुसार जानकारी प्राप्त कर सकते हैं."
  },
  {
    question: "क्या पूजा के बाद प्रमाण मिल सकता है?",
    answer:
      "आवश्यकता होने पर पूजा की सूचना, फोटो-वीडियो और प्रमाणपत्र जैसी सुविधा उपलब्ध कराई जाती है."
  },
  {
    question: "क्या परिवार के साथ पूजा कराना संभव है?",
    answer:
      "जी हाँ, परिवार के साथ या अलग-अलग स्थान से जुड़े हुए श्रद्धालु भी पूजा की प्रक्रिया में सहभागी हो सकते हैं."
  },
  {
    question: "कब संपर्क करना चाहिए?",
    answer:
      "यदि आपको किसी शुभ मुहूर्त, पूजन का सही समय या परामर्श की आवश्यकता हो, तो तुरंत संपर्क किया जा सकता है."
  }
];

export const metadata: Metadata = {
  title: "पंडित अजय शर्मा | साइकिल वाले पंडा | उज्जैन रामघाट",
  description:
    "उज्जैन रामघाट के प्रसिद्ध वैदिक आचार्य पंडित अजय शर्मा जी (साइकिल वाले पंडा) एवं उनका परिवार पिछले 7–8 पीढ़ियों से पितृ दोष पूजा, काल सर्प दोष पूजा, त्रिपिंडी श्राद्ध, नारायण बली, नाग बली एवं अन्य वैदिक अनुष्ठान सम्पन्न करा रहा है।",
  keywords: [
    "पंडित अजय शर्मा",
    "साइकिल वाले पंडा",
    "Cycle Wala Panda",
    "उज्जैन पंडित",
    "रामघाट पंडित",
    "पितृ दोष पूजा उज्जैन",
    "काल सर्प दोष पूजा",
    "त्रिपिंडी श्राद्ध",
    "नारायण बली",
    "नाग बली"
  ],
  alternates: {
    canonical: "https://pitradoshpuja.com/pandit-ajay-sharma"
  },
  openGraph: {
    title: "पंडित अजय शर्मा | साइकिल वाले पंडा | उज्जैन रामघाट",
    description:
      "उज्जैन रामघाट के प्रसिद्ध वैदिक आचार्य पंडित अजय शर्मा जी के जीवन, परंपरा और वैदिक सेवा की पूरी जानकारी।",
    url: "https://pitradoshpuja.com/pandit-ajay-sharma"
  }
};

export default function PanditAjaySharmaPage() {
  return (
    <main className="bg-[#FBF6EA] text-[#2A1810]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B1330] via-[#2B2049] to-[#450B14] text-[#FBF6EA]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,154,59,0.22),_transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E4C273]/40 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#E4C273]">
              <Sparkles className="h-4 w-4" />
              वैदिक परंपरा का मानक
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              पंडित अजय शर्मा जी
            </h1>
            <p className="mt-4 font-displayHi text-xl font-semibold text-[#E4C273] sm:text-2xl">
              उज्जैन रामघाट के प्रसिद्ध वैदिक आचार्य एवं “साइकिल वाले पंडा”
            </p>
            <p className="mt-6 text-base leading-8 text-[#F7EFD7] sm:text-lg">
              पंडित अजय शर्मा जी एवं उनका परिवार पिछले 7–8 पीढ़ियों से उज्जैन रामघाट पर वैदिक परंपरा के अनुसार विभिन्न धार्मिक अनुष्ठान, श्राद्ध कर्म एवं पूजन सम्पन्न करा रहा है। वर्षों से देश-विदेश से आने वाले हजारों श्रद्धालुओं ने इनके मार्गदर्शन में सफलतापूर्वक धार्मिक अनुष्ठान सम्पन्न कराए हैं।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919617711721"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C99A3B] px-6 py-3 font-semibold text-[#2A1810] transition hover:bg-[#E4C273]"
              >
                <Phone className="h-4 w-4" />
                📞 अभी कॉल करें
              </a>
              <a
                href="https://wa.me/919617711721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                💬 WhatsApp पर संपर्क करें
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] border border-[#E4C273]/40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <Image
                src="/images/pandit/ajay-sharma.jpg"
                alt="पंडित अजय शर्मा जी"
                width={720}
                height={960}
                priority
                className="h-[480px] w-full rounded-[1.4rem] object-cover sm:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#E6D2A4] bg-white p-8 shadow-sacred sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#A17B26]">हमारी वैदिक परंपरा</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#450B14] sm:text-4xl">
              सात पीढ़ियों से चली आ रही सेवा, श्रद्धा और वैदिक अनुशासन
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5A4632]">
              <p>
                पंडित अजय शर्मा जी के परिवार की सेवा परंपरा 7–8 पीढ़ियों से अधिक पुरानी है, और यह परंपरा केवल धार्मिक अनुष्ठानों तक सीमित नहीं रही, बल्कि जीवन के हर क्षेत्र में श्रद्धा, अनुशासन और संस्कारों की डोर को सँजोने का एक शाश्वत माध्यम बन गई है। उज्जैन रामघाट, जो पितृ कर्म, तर्पण, श्राद्ध और वैदिक पूजन के लिए अत्यंत पवित्र माना जाता है, इसी परंपरा का पावन केंद्र बना हुआ है। यहीं पर उनके परिवार ने न केवल पूजा की पारंपरिक विधि का निर्वहन किया, बल्कि अनेकों श्रद्धालुओं की आस्था और विश्वास का आधार भी बनाया।
              </p>
              <p>
                उनके परिवार का प्रत्येक सदस्य वैदिक शास्त्रों की गहराई, मंत्र-जाप की सटीकता, समय-निर्धारण की सावधानी और पूजा की शुद्धता को बहुत गंभीरता से समझता है। यह केवल एक पेशा नहीं, बल्कि एक जीवन-धर्म है। इसलिए हर पूजन में श्रद्धा का भाव, परंपरा की शुद्धता और विधि की सटीकता तीनों को समान महत्व दिया जाता है। यही कारण है कि देश-विदेश से आने वाले श्रद्धालु अपने मन की शांति, अपने पूर्वजों की समर्पित स्मृति और अपने जीवन की आध्यात्मिक स्थिरता के लिए बार-बार इस परिवार की शरण में आते हैं।
              </p>
              <p>
                पंडित जी और उनके परिवार का विश्वास है कि पूजा केवल कर्मकांड नहीं, बल्कि मनुष्य के भीतर की शांति, पारिवारिक संतुलन और आत्मिक चेतना को पुनः जगाने का एक पावन माध्यम है। इसलिए हर अनुष्ठान को वैदिक विधि के अनुसार, श्रद्धापूर्वक और निष्पक्ष रूप से संपन्न किया जाता है। चाहे वह पितृ दोष पूजा हो, त्रिपिंडी श्राद्ध हो, काल सर्प दोष पूजा हो या नारायण बली और नाग बली जैसे विशेष अनुष्ठान, हर कार्य में शास्त्रसम्मत नियम, मंत्र-उच्चारण और भाव-प्रवणता का पूरा ध्यान रखा जाता है।
              </p>
              <p>
                उनके परिवार की प्रतिष्ठा पर सबसे बड़ा बल यह है कि वे केवल पूजन करते नहीं, बल्कि श्रद्धालु की भावनाओं, उनके मन की चिंता और उनके जीवन की आवश्यकताओं को भी समझते हैं। इसी कारण वे अपने अनुभव, अनुशासन और परंपरागत ज्ञान के साथ-साथ श्रद्धालुओं को धार्मिक मार्गदर्शन भी देते हैं। यही वजह है कि उनके समक्ष आने वाले लोग अपने जीवन के महत्वपूर्ण मोड़ों पर सहजता और विश्वास के साथ अपना निर्णय लेते हैं।
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E6D2A4] bg-[#FFF9EF] p-8 shadow-sacred sm:p-10">
            <div className="flex items-center gap-3 text-[#A17B26]">
              <Flame className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.26em]">विशेष अनुभव</p>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-[#450B14]">
              “साइकिल वाले पंडा” नाम कैसे पड़ा?
            </h3>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#5A4632]">
              <p>
                बहुत वर्षों पहले, एक यजमान ने अपने सम्मान और कृतज्ञता के भाव से पंडित अजय शर्मा जी के दादा जी को एक साइकिल उपहार में दी। उस समय ऐसा उपहार प्राप्त करना एक बड़ा सम्मान माना जाता था, और यह घटना उनके परिवार के लिए स्मरणीय बन गई।
              </p>
              <p>
                उसके बाद स्थानीय निवासी और श्रद्धालु उनके परिवार को प्यार से “Cycle Wala Panda” कहने लगे। धीरे-धीरे यह नाम केवल एक उपनाम नहीं, बल्कि पूरे परिवार की पहचान बन गया।
              </p>
              <p>
                आज भी पंडित अजय शर्मा जी और उनका परिवार उसी सरलता, विनम्रता और सेवाभाव के साथ सदियों पुरानी परंपरा को आगे बढ़ा रहे हैं। उनके जीवन में दया, अनुशासन और भक्तिभाव एक साथ मिलता है, और वही उनकी पहचान बन गया है।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="rounded-[2rem] border border-[#E6D2A4] bg-gradient-to-br from-white via-[#FFF9EF] to-[#F3EBD8] p-8 shadow-sacred sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#A17B26]">पंडित अजय शर्मा एवं उनका परिवार</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#450B14] sm:text-4xl">
            पूरा परिवार, एक ही ध्येय — शुद्ध वैदिक सेवा
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#5A4632]">
            पंडित अजय शर्मा जी के परिवार में हर सदस्य एक ही ध्येय के साथ कार्य करता है — शास्त्रसम्मत, भावपूर्ण और सच्ची श्रद्धा से धार्मिक अनुष्ठान सम्पन्न करना। पूरा परिवार वैदिक परंपरा का पालन करता है और सामूहिक रूप से विभिन्न धार्मिक अनुष्ठानों की व्यवस्था, मंत्र-जप, पूजा-विधि और श्रद्धालु-सेवा में भाग लेता है। प्रत्येक पूजन शुद्ध वैदिक विधि के अनुसार किया जाता है, जिसमें समय, मंत्र, सामग्री और भाव — सबका पूरा ध्यान रखा जाता है। वर्षों के अनुभव और जीवन भर की सेवा के कारण ही यह परिवार श्रद्धालुओं का विश्वास और सम्मान अर्जित कर पाया है।
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#A17B26]">सर्वोत्तम सेवाएँ</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#450B14] sm:text-4xl">
              प्रमुख धार्मिक सेवाएँ
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#5A4632]">
            पंडित अजय शर्मा जी एवं उनके परिवार द्वारा संचालित की जाने वाली प्रमुख पूजा एवं अनुष्ठानों की सूची यहाँ दी गई है।
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col rounded-[1.5rem] border border-[#E6D2A4] bg-white p-6 shadow-sacred transition hover:-translate-y-1 hover:border-[#C99A3B] hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EBD8] text-[#6B1420]">
                  <HandHeart className="h-5 w-5" />
                </span>
                <ArrowRight className="h-5 w-5 text-[#A17B26] transition group-hover:translate-x-1" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-[#450B14]">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#5A4632]">
                उज्जैन रामघाट पर वैदिक विधि से सम्पन्न होने वाली श्रद्धा-संवर्धक सेवा।
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#6B1420]">
                सेवा पृष्ठ देखें
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#E6D2A4] bg-[#1B1330] p-8 text-[#FBF6EA] shadow-sacred sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#E4C273]">क्यों चुनें</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            हमारी सेवा में विश्वास का कारण
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C99A3B]/20 text-[#E4C273]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#F7EFD7]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#A17B26]">श्रद्धालु अनुभव</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#450B14] sm:text-4xl">
              पंडित जी की सेवा पर श्रद्धालुओं की बात
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.5rem] border border-[#E6D2A4] bg-white p-6 shadow-sacred">
              <div className="flex items-center gap-1 text-[#C99A3B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-8 text-[#5A4632]">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-[#E6D2A4] pt-4">
                <p className="font-semibold text-[#450B14]">{testimonial.name}</p>
                <p className="text-sm text-[#8C6D4B]">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-[#E6D2A4] bg-white p-8 shadow-sacred sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#A17B26]">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#450B14] sm:text-4xl">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.2rem] border border-[#E6D2A4] bg-[#FFF9EF] p-5">
                <summary className="cursor-pointer list-none font-semibold text-[#450B14]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-[#5A4632]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#6B1420] via-[#450B14] to-[#2A1810] p-8 text-[#FBF6EA] shadow-sacred sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E4C273]">आज ही संपर्क करें</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              आज ही अपनी पूजा बुक करें
            </h2>
            <p className="mt-5 text-base leading-8 text-[#F7EFD7]">
              यदि आप उज्जैन रामघाट पर पितृ दोष पूजा, काल सर्प दोष पूजा, त्रिपिंडी श्राद्ध, नारायण बली, नाग बली अथवा अन्य वैदिक अनुष्ठान कराना चाहते हैं, तो आज ही पंडित अजय शर्मा जी से संपर्क करें।
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+919617711721"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C99A3B] px-7 py-3 font-semibold text-[#2A1810] transition hover:bg-[#E4C273]"
              >
                <Phone className="h-4 w-4" />
                📞 अभी कॉल करें
              </a>
              <a
                href="https://wa.me/919617711721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                💬 WhatsApp पर संपर्क करें
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
