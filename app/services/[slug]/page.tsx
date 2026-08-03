import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/services";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function DynamicServicePage({ params }: PageProps) {
  const service = services.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}