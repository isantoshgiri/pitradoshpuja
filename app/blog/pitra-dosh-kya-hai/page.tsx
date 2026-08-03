import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blog";

const post = blogPosts.find((item) => item.slug === "pitra-dosh-kya-hai");

if (!post) {
  throw new Error("Blog post not found");
}

const blogPost = post;

export const metadata: Metadata = {
  title: "पितृ दोष क्या है और इसे क्यों समझना आवश्यक है? | पंडित अजय शर्मा",
  description:
    "पितृ दोष की अवधारणा, इसके कारण, पारिवारिक प्रभाव और उज्जैन रामघाट पर किए जाने वाले वैदिक उपायों की विस्तृत जानकारी।",
  keywords: ["पितृ दोष", "पितृ दोष पूजा", "उज्जैन पूजा", "रामघाट", "वैदिक पूजा"],
  alternates: {
    canonical: "https://pitradoshpuja.com/blog/pitra-dosh-kya-hai"
  },
  openGraph: {
    title: "पितृ दोष क्या है और इसे क्यों समझना आवश्यक है? | पंडित अजय शर्मा",
    description:
      "उज्जैन रामघाट पर पितृ दोष पूजा और वैदिक अनुष्ठानों की गहन जानकारी।",
    url: "https://pitradoshpuja.com/blog/pitra-dosh-kya-hai"
  }
};

export default function PitraDoshBlogPage() {
  return (
    <BlogArticleLayout post={blogPost}>
      <section className="prose max-w-none prose-h2:font-display prose-h2:text-[#2B1B14] prose-h3:font-display prose-h3:text-[#2B1B14] prose-p:text-[#5A4632] prose-li:text-[#5A4632]">
        <p className="text-lg leading-8 text-[#5A4632]">
          पितृ दोष की अवधारणा भारतीय आध्यात्मिक परम्परा में बहुत गहरी और सम्मानजनक मानी जाती है। यह केवल एक धार्मिक शब्द नहीं, बल्कि हमारे पूर्वजों की स्मृति, पारिवारिक जिम्मेदारियों और आध्यात्मिक संतुलन से जुड़ा एक महत्वपूर्ण विचार है। जब जीवन में बार-बार बाधाएँ, तनाव या पारिवारिक असंतुलन दिखाई देते हैं, तो इसमें पितृ-सम्बन्धी शांति की आवश्यकता का संकेत माना जाता है।
        </p>
        {blogPost.sections.map((section, index) => (
          <section key={section.heading} id={section.heading.replace(/\s+/g, "-").toLowerCase()} className="mt-10">
            <h2 className="text-2xl font-semibold text-[#2B1B14] sm:text-3xl">
              {index + 1}. {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-8 text-[#5A4632]">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-6 list-disc space-y-3 pl-6">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="mt-10 rounded-[1.5rem] border border-[#E9D3A6] bg-[#FFF9EF] p-6">
          <h2 className="text-2xl font-semibold text-[#2B1B14]">निष्कर्ष</h2>
          <p className="mt-4 text-base leading-8 text-[#5A4632]">{blogPost.conclusion}</p>
        </section>
        <section className="mt-10 rounded-[1.5rem] border border-[#E9D3A6] bg-gradient-to-br from-[#6E1423] via-[#7F1D2C] to-[#A22433] p-8 text-white">
          <h2 className="font-display text-3xl font-semibold">अपनी पूजा आज ही बुक करें</h2>
          <p className="mt-4 text-base leading-8 text-white/90">
            यदि आप उज्जैन रामघाट पर पितृ दोष पूजा, काल सर्प दोष पूजा, त्रिपिंडी श्राद्ध, नारायण बली, नाग बली अथवा अन्य वैदिक अनुष्ठान कराना चाहते हैं तो अभी संपर्क करें।
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+919617711721" className="inline-flex items-center justify-center rounded-full bg-[#F3CB7B] px-6 py-3 text-sm font-semibold text-[#3A0B12]">
              📞 अभी कॉल करें
            </a>
            <a href="https://wa.me/919617711721" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
              💬 WhatsApp पर संपर्क करें
            </a>
          </div>
        </section>
      </section>
    </BlogArticleLayout>
  );
}
