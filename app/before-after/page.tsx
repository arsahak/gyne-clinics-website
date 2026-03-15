import BeforeAfterSection from "@/component/beforeAfterPhotos/BeforeAfterSection";
import { CommonHero } from "@/component/shared";

const page = () => {
  return (
    <div>
      <CommonHero
        title="Before & After Gallery"
        subtitle="View real results from our expert aesthetic gynaecology procedures. All images shared with patient consent."
        images={["/assets/home/banner1.svg", "/assets/home/banner2.svg", "/assets/home/banner3.svg"]}
        breadcrumbs={[
          { label: "Before & After Gallery", href: "/before-after" },
        ]}
      />
      <BeforeAfterSection />
    </div>
  );
};

export default page;
