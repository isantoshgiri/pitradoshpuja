import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blog";

const post = blogPosts.find((item) => item.slug === "tripindi-shradh-guide");

if (!post) {
  throw new Error("Blog post not found");
}

const blogPost = post;

export const metadata: Metadata = {
  title: "त्रिपिंडी श्राद्ध: एक वैदिक मार्गदर्शिका | पंडित अजय शर्मा",
  description:
    "त्रिपिंडी श्राद्ध की पद्धति, उद्देश्य और उज्जैन में इसके आयोजन की विस्तृत जानकारी।",
  keywords: ["त्रिपिंडी श्राद्ध", "श्राद्ध", "पितृ कर्म", "उज्जैन पूजा"],
  alternates: {
    canonical: "https://pitradoshpuja.com/blog/tripindi-shradh-guide"
  },
  openGraph: {
    title: "त्रिपिंडी श्राद्ध: एक वैदिक मार्गदर्शिका | पंडित अजय शर्मा",
    description: "उज्जैन रामघाट पर त्रिपिंडी श्राद्ध की वैदिक प्रक्रिया और अर्थ।",
    url: "https://pitradoshpuja.com/blog/tripindi-shradh-guide"
  }
};

export default function TripindiShradhBlogPage() {
  return (
    <BlogArticleLayout post={blogPost}>
      <section className="prose max-w-none prose-h2:font-display prose-h2:text-[#2B1B14] prose-h3:font-display prose-h3:text-[#2B1B14] prose-p:text-[#5A4632] prose-li:text-[#5A4632]">
        <p className="text-lg leading-8 text-[#5A4632]">
          त्रिपिंडी श्राद्ध एक ऐसा वैदिक अनुष्ठान है, जिसमें मनुष्य अपने पूर्वजों, अपनी स्मृति और अपने आध्यात्मिक दायित्वों के प्रति सम्मान व्यक्त करता है। यह अनुष्ठान केवल एक कर्म नहीं, बल्कि परम्परा, आस्था और भावनात्मक पुनर्स्थापन का एक महत्वपूर्ण माध्यम है।
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
