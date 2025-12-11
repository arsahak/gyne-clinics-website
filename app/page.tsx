import BookConsultation from "@/component/home/BookConsultation";
import ConditionsSection from "@/component/home/ConditionsSection";
import HeroSection from "@/component/home/HeroSection";
import SearchSection from "@/component/home/SearchSection";
import ServicesSection from "@/component/home/ServicesSection";
import StoreSection from "@/component/home/StoreSection";
import WelcomeSection from "@/component/home/WelcomeSection";

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
      <ServicesSection />
      <WelcomeSection />
      <StoreSection />
      <ConditionsSection />
      <SearchSection />
      <BookConsultation />
    </div>
  );
}
