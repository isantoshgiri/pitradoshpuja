import Image from "next/image";
import Link from "next/link";
import type { Temple } from "@/data/temples";

function createId(text: string) {
  return text.replace(/\s+/g, "-").toLowerCase();
}

export default function TempleArticleLayout({ temple }: { temple: Temple }) {
  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#8A6A3E]">
          <Link href="/" className="transition hover:text-[#6E1423]">
            होम
          </Link>
          <span>/</span>
          <Link href="/temples" className="transition hover:text-[#6E1423]">
            मंदिर
          </Link>
          <span>/</span>
          <span className="text-[#2B1B14]">{temple.title}</span>
        </nav>

        <section className="overflow-hidden rounded-[2rem] border border-[#E9D3A6] bg-white shadow-[0_30px_80px_-30px_rgba(110,20,35,0.22)]">
          <div className="relative h-[320px] sm:h-[420px]">
            <Image
              src={temple.image}
              alt={temple.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B14]/85 via-[#2B1B14]/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F3CB7B]">
                उज्जैन के प्रमुख मंदिर
              </p>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {temple.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#F7E7C4]">
                <span>पढ़ने का समय: {temple.readingTime}</span>
                <span>•</span>
                <span>अद्यतन: {temple.updatedAt}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.75fr_0.8fr] lg:p-12">
            <div className="space-y-10">
              <p className="text-lg leading-8 text-[#5A4632]">{temple.summary}</p>

              {temple.sections.map((section) => (
                <section key={section.heading} id={createId(section.heading)} className="rounded-[1.5rem] border border-[#E9D3A6] bg-[#FFF9EF] p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold text-[#2B1B14] sm:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-[#5A4632]">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-[#5A4632]">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="rounded-[1.5rem] border border-[#E9D3A6] bg-white p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-[#2B1B14]">
                  FAQs
                </h2>
                <div className="mt-6 space-y-5">
                  {temple.faq.map((item) => (
                    <div key={item.question} className="rounded-2xl border border-[#F0E0B7] bg-[#FFF9EF] p-4">
                      <p className="font-semibold text-[#2B1B14]">{item.question}</p>
                      <p className="mt-2 text-sm leading-7 text-[#5A4632]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-[#E9D3A6] bg-gradient-to-br from-[#6E1423] via-[#7F1D2C] to-[#A22433] p-8 text-white">
                <h2 className="font-display text-3xl font-semibold">
                  उज्जैन में वैदिक पूजा बुक करें
                </h2>
                <p className="mt-4 text-base leading-8 text-white/90">
                  यदि आप उज्जैन में पितृ दोष पूजा, काल सर्प दोष पूजा, त्रिपिंडी श्राद्ध, नारायण बली, नाग बली अथवा अन्य वैदिक अनुष्ठान कराना चाहते हैं तो पंडित अजय शर्मा जी से संपर्क करें।
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
            </div>

            <aside className="rounded-[1.5rem] border border-[#E9D3A6] bg-[#FFF9EF] p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-semibold text-[#2B1B14]">
                सामग्री सूची
              </h2>
              <nav className="mt-6 space-y-3 text-sm leading-7 text-[#5A4632]">
                {temple.sections.map((section) => (
                  <a key={section.heading} href={`#${createId(section.heading)}`} className="block rounded-xl border border-[#F0E0B7] px-3 py-2 transition hover:border-[#B5772F] hover:text-[#6E1423]">
                    {section.heading}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-[1.25rem] border border-[#E9D3A6] bg-white p-5">
                <h3 className="font-display text-xl font-semibold text-[#2B1B14]">
                  संबंधित सेवाएँ
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[#5A4632]">
                  {temple.relatedServices.map((service) => (
                    <li key={service.title}>
                      <Link href={service.href} className="transition hover:text-[#6E1423]">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
