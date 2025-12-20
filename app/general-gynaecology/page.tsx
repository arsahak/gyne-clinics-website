import {
  ConditionsWeTreat,
  GeneralFAQ,
  GeneralIntro,
  LatestArticlesSlider,
  SymptomMatcher,
} from "@/component/general-gynaecology";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "General Gynaecology | GyneClinics",
  description:
    "Expert private gynaecology care. Comprehensive treatment for fibroids, endometriosis, and menstrual problems.",
};

export default function GeneralGynaecologyPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Our Philosophy of Care"
        subtitle="Dedicated to empowering women through expert gynaecological health services and compassionate support."
        images={sliderImages}
        breadcrumbs={[
          { label: "General Gynaecology", href: "/general-gynaecology" },
        ]}
      />
      <GeneralIntro />
      <LatestArticlesSlider />
      <SymptomMatcher />
      <ConditionsWeTreat />
      <GeneralFAQ />
      <PageCTA
        title="Ready to Prioritize Your Health?"
        description="Book a confidential consultation with our expert gynaecology specialists today. We're here to support you every step of the way."
        variant="primary"
      />
    </main>
  );
}
