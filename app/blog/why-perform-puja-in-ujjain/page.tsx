import type { Metadata } from "next";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogPosts } from "@/data/blog";

const post = blogPosts.find((item) => item.slug === "why-perform-puja-in-ujjain");

if (!post) {
  throw new Error("Blog post not found");
}

const blogPost = post;

export const metadata: Metadata = {
  title: "उज्जैन में पूजा क्यों करनी चाहिए? | पंडित अजय शर्मा",
  description:
    "उज्जैन में पूजा करने के कारण, यहाँ की पावनता, परम्परा और वैदिक अनुष्ठानों की प्रासंगिकता पर विस्तृत जानकारी।",
  keywords: ["उज्जैन पूजा", "रामघाट", "वैदिक अनुष्ठान", "धार्मिक यात्रा"],
  alternates: {
    canonical: "https://pitradoshpuja.com/blog/why-perform-puja-in-ujjain"
  },
  openGraph: {
    title: "उज्जैन में पूजा क्यों करनी चाहिए? | पंडित अजय शर्मा",
    description: "उज्जैन रामघाट पर पूजा करने के कारणों और आध्यात्मिक महत्त्व पर लेख।",
    url: "https://pitradoshpuja.com/blog/why-perform-puja-in-ujjain"
  }
};

export default function WhyPujaInUjjainBlogPage() {
  return (
    <BlogArticleLayout post={blogPost}>
      <section className="prose max-w-none prose-h2:font-display prose-h2:text-[#2B1B14] prose-h3:font-display prose-h3:text-[#2B1B14] prose-p:text-[#5A4632] prose-li:text-[#5A4632]">
        <p className="text-lg leading-8 text-[#5A4632]">
          उज्जैन का धार्मिक महत्व केवल एक शहर की पहचान नहीं, बल्कि एक जीवन-दृष्टि से भी जुड़ा हुआ है। यहाँ की पावनता, शास्त्रीय परम्परा और आध्यात्मिक ऊर्जा मनुष्य को अपने भीतर की शांति की ओर ले जाती है।
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
