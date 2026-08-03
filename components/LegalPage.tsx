"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function LegalPage({
  page
}: {
  page: "privacy" | "terms" | "refund";
}) {
  const { t } = useLanguage();
  const content = t.legalPages[page];

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">{content.title}</h1>
        <div className="prose prose-sm mt-8 max-w-none text-ink/75 [&_h2]:font-display [&_h2]:text-maroon [&_p]:leading-relaxed">
          {content.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
