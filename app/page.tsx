import AestheticSection from "@/component/home/AestheticSection";
import BookConsultation from "@/component/home/BookConsultation";
import GeneralGynaecologySection from "@/component/home/GeneralGynaecologySection";
import HeroSection from "@/component/home/HeroSection";
import MenopauseSection from "@/component/home/MenopauseSection";
import StoreSection from "@/component/home/StoreSection";
import Urogynaecology from "@/component/home/Urogynaecology";

export const metadata = {
  title: "GyneClinics – Expertise Professionalism and Excellence",
  description:
    "We uphold the highest standards of medical ethics, ensuring total confidentiality, safety, and respect for every patient.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <ServicesSection /> */}
      <GeneralGynaecologySection />
      {/* <WelcomeSection /> */}
      <Urogynaecology />
      <AestheticSection />
      <MenopauseSection />
      {/* 
      <SearchSection /> */}
      <StoreSection />
      <BookConsultation />
    </div>
  );
}
