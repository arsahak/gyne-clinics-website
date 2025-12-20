import { CommonHero, PageCTA } from "@/component/shared";
import BladderCheck from "@/component/urogynaecology/BladderCheck";
import UroIntro from "@/component/urogynaecology/UroIntro";
import UroServices from "@/component/urogynaecology/UroServices";

export const metadata = {
  title: "Urogynaecology & Incontinence | GyneClinics",
  description:
    "Expert treatment for bladder weakness, prolapse and pelvic floor disorders in a dignified private setting.",
};

export default function UrogynaecologyPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Urogynaecology & Pelvic Health"
        subtitle="Expert treatment for bladder weakness, prolapse, and pelvic floor disorders in a dignified, private setting."
        images={sliderImages}
        breadcrumbs={[{ label: "Urogynaecology", href: "/urogynaecology" }]}
      />
      <UroIntro />
      <UroServices />
      <BladderCheck />
      <PageCTA
        title="Live Without Limits"
        description="Book a confidential consultation with our Urogynaecology specialists today. Take the first step towards regaining your confidence and comfort."
        variant="primary"
      />
    </main>
  );
}
