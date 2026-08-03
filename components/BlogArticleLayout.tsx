import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogArticleLayout({
  post,
  children
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FFF9EF]">
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5772F]">
            {post.publishedAt}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#2B1B14] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-[#8A6A3E]">
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>वैदिक मार्गदर्शन</span>
          </div>
        </header>

        <div className="mx-auto mt-12 grid gap-10 lg:grid-cols-[1.7fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#E9D3A6] bg-white p-8 shadow-[0_25px_60px_-30px_rgba(110,20,35,0.2)] sm:p-10 lg:p-12">
            {children}
          </div>

          <aside className="rounded-[2rem] border border-[#E9D3A6] bg-white p-8 shadow-[0_20px_45px_-25px_rgba(110,20,35,0.2)] lg:sticky lg:top-24">
            <h2 className="font-display text-2xl font-semibold text-[#2B1B14]">
              सामग्री सूची
            </h2>
            <nav className="mt-6 space-y-3 text-sm leading-7 text-[#5A4632]">
              {post.sections.map((section) => (
                <a key={section.heading} href={`#${section.heading.replace(/\s+/g, "-").toLowerCase()}`} className="block rounded-xl border border-[#F0E0B7] px-3 py-2 transition hover:border-[#B5772F] hover:text-[#6E1423]">
                  {section.heading}
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-[1.25rem] border border-[#E9D3A6] bg-[#FFF9EF] p-5">
              <h3 className="font-display text-xl font-semibold text-[#2B1B14]">
                संबंधित सेवाएँ
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#5A4632]">
                {post.relatedServices.map((service) => (
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
      </article>
    </main>
  );
}
