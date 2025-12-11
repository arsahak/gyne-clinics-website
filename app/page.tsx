import HeroSection from "@/component/home/HeroSection";
import ServicesSection from "@/component/home/ServicesSection";

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
    </div>
  );
}
