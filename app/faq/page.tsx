import FAQPage from "@/component/faq/page";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "Frequently Asked Questions | GyneClinics",
  description:
    "Find answers to common questions about our gynaecological services, treatments, appointments, and more.",
};

export default function FAQ() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, treatments, and what to expect during your visit."
        images={sliderImages}
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <FAQPage />
      <PageCTA
        title="Still Have Questions?"
        description="Our team is here to help. Contact us today to speak with one of our specialists or schedule a consultation."
        variant="primary"
      />
    </main>
  );
}

