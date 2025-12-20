import { CommonHero, PageCTA } from "@/component/shared";
import TermsConditions from "@/component/termsConditions/TermsConditions";

export const metadata = {
  title: "Terms & Conditions | GyneClinics",
  description:
    "Read our terms and conditions for using GyneClinics services. Understand your rights and responsibilities as a patient.",
};

export default function TermsConditionsPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully. By using our services, you agree to be bound by these terms and conditions."
        images={sliderImages}
        breadcrumbs={[
          { label: "Terms & Conditions", href: "/terms-conditions" },
        ]}
      />
      <TermsConditions />
      <PageCTA
        title="Questions About Our Terms?"
        description="If you have any questions about our terms and conditions, please don't hesitate to contact us."
        variant="secondary"
      />
    </main>
  );
}
