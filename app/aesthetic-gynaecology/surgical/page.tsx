import ProcedureList from "@/component/aesthetic-gynaecology/surgical/ProcedureList";
import RecoveryTimeline from "@/component/aesthetic-gynaecology/surgical/RecoveryTimeline";
import SurgeonSafety from "@/component/aesthetic-gynaecology/surgical/SurgeonSafety";
import SurgicalIntro from "@/component/aesthetic-gynaecology/surgical/SurgicalIntro";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "Surgical Aesthetic Gynaecology | GyneClinics",
  description:
    "Expert Labioplasty, Vaginoplasty, and Perineoplasty. Permanent structural restoration by senior NHS consultants.",
};

export default function SurgicalPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Surgical Aesthetic Gynaecology"
        subtitle="Permanent, structural solutions for intimate comfort and confidence. Performed by accredited surgeons in a CQC-registered environment."
        images={sliderImages}
        breadcrumbs={[
          { label: "Aesthetic Gynaecology", href: "/aesthetic-gynaecology" },
          { label: "Surgical", href: "/aesthetic-gynaecology/surgical" },
        ]}
      />
      <SurgicalIntro />
      <ProcedureList />
      <RecoveryTimeline />
      <SurgeonSafety />
      <PageCTA
        title="Begin Your Transformation Journey"
        description="Schedule a confidential consultation with our expert surgeons. Discover how surgical solutions can restore your confidence and comfort."
        variant="primary"
      />
    </main>
  );
}
