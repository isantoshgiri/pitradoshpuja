import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-4 text-center text-4xl font-bold">
          सभी पूजन सेवाएं
        </h1>

        <p className="mb-12 text-center text-gray-600">
          उज्जैन में उपलब्ध सभी वैदिक पूजन सेवाएँ
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-xl"
            >
              <Link href={`/services/${service.slug}`} className="flex flex-1 flex-col">
                <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.thumb || "/images/placeholder.jpg"}
                    alt={`${service.titleHi} की पूजा तस्वीर`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-bold">
                    {service.titleHi}
                  </h2>

                  <p className="mt-3 flex-1 text-gray-600">
                    {service.shortDescriptionHi}
                  </p>

                  <div className="mt-5 font-semibold text-orange-600">
                    विवरण देखें →
                  </div>
                </div>
              </Link>

              <div className="mt-auto px-6 pb-6">
                <a
                  href="https://wa.me/919617711721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-xl bg-green-600 px-4 py-3 font-semibold text-white"
                >
                  📲 व्हाट्सएप पर बुक करें
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}