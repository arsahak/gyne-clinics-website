import PrivacyPolicyDetilas from "@/component/privacyPolicy/PrivacyPolicyDetilas";
import { CommonHero, PageCTA } from "@/component/shared";

export const metadata = {
  title: "Privacy Policy | GyneClinics",
  description:
    "Learn how GyneClinics collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPolicyPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
        images={sliderImages}
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <PrivacyPolicyDetilas />
      <PageCTA
        title="Have Questions About Your Privacy?"
        description="Contact us if you have any questions about our privacy practices or wish to exercise your data protection rights."
        variant="secondary"
      />
    </main>
  );
}
