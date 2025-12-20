import NonSurgicalIntro from "@/component/aesthetic-gynaecology/nonSurgical/NonSurgicalIntro";
import ResultsFAQ from "@/component/aesthetic-gynaecology/nonSurgical/ResultsFAQ";
import TechSpotlight from "@/component/aesthetic-gynaecology/nonSurgical/TechSpotlight";
import TreatmentMenu from "@/component/aesthetic-gynaecology/nonSurgical/TreatmentMenu";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "Non-Surgical Aesthetic Gynaecology | GyneClinics",
  description:
    "Laser Vaginal Tightening, PRP (O-Shot), and Labial Puffing. Pain-free rejuvenation with zero downtime.",
};

export default function NonSurgicalPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Non-Surgical Aesthetic Gynaecology"
        subtitle="Advanced laser and regenerative therapies to restore intimacy, sensation, and comfort without the need for surgery or downtime."
        images={sliderImages}
        breadcrumbs={[
          { label: "Aesthetic Gynaecology", href: "/aesthetic-gynaecology" },
          {
            label: "Non-Surgical",
            href: "/aesthetic-gynaecology/non-surgical",
          },
        ]}
      />
      <NonSurgicalIntro />
      <TreatmentMenu />
      <TechSpotlight />
      <ResultsFAQ />
      <PageCTA
        title="Experience the Lunchtime Lift"
        description="Book your consultation today and discover how non-surgical treatments can restore your confidence with zero downtime."
        variant="primary"
      />
    </main>
  );
}
