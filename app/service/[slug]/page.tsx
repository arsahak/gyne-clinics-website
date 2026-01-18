import ServiceDetails from "@/component/service/ServiceDetails";
import { servicesData } from "@/data/servicesData";
import { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Gyne Clinics",
    };
  }

  return {
    title: `${service.title} | Gyne Clinics`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Gyne Clinics`,
      description: service.shortDescription,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServiceDetails slug={slug} />;
}
