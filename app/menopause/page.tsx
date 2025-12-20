import HolisticCare from "@/component/menopause/HolisticCare";
import HrtMythBuster from "@/component/menopause/HrtMythBuster";
import MenopauseIntro from "@/component/menopause/MenopauseIntro";
import MenopauseServices from "@/component/menopause/MenopauseServices";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "Menopause & HRT Clinic | GyneClinics",
  description:
    "Specialist support for Perimenopause, Menopause, and Bio-identical HRT. Personalized care plans for your long-term health.",
};

export default function MenopausePage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Navigating the Change"
        subtitle="Menopause is a natural transition, not a condition to be endured. We provide expert guidance on HRT, symptom management, and long-term wellness."
        images={sliderImages}
        breadcrumbs={[{ label: "Menopause", href: "/menopause" }]}
      />
      <MenopauseIntro />
      <MenopauseServices />
      <HrtMythBuster />
      <HolisticCare />
      <PageCTA
        title="Take Control of Your Menopause Journey"
        description="Book a consultation with our menopause specialists. Get personalized HRT guidance and comprehensive support for this important life transition."
        variant="primary"
      />
    </main>
  );
}
