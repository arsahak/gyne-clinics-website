"use client";

import Image from "next/image";
import { useState } from "react";

interface BeforeAfterCase {
  id: string;
  title: string;
  beforeImages: string[];
  afterImages: string[];
  category: string;
}

const BeforeAfterSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Procedure Title */}
        {/* <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide">
            {caseItem.title}
          </h3>
        </div> */}

        {/* Images Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div
              className="flex justify-center items-center"
              style={{ paddingBottom: "5%" }}
            >
              <Image
                src={"/assets/gallery/a1.png"}
                alt={"Before and After Case 1"}
                className="object-contain w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>

            <div
              className="flex justify-center items-center"
              style={{ paddingBottom: "5%" }}
            >
              <Image
                src={"/assets/gallery/a3.png"}
                alt={"Before and After Case 2"}
                className="object-contain w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>

            <div
              className="flex justify-center items-center"
              style={{ paddingBottom: "5%" }}
            >
              <Image
                src={"/assets/gallery/a4.png"}
                alt={"Before and After Case 3"}
                className="object-contain w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>

            <div
              className="flex justify-center items-center"
              style={{ paddingBottom: "5%" }}
            >
              <Image
                src={"/assets/gallery/a5.png"}
                alt={"Before and After Case 4"}
                className="object-contain w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>

            <div
              className="flex justify-center items-center md:col-span-2 max-w-2xl mx-auto"
              style={{ paddingBottom: "5%" }}
            >
              <Image
                src={"/assets/gallery/a6.png"}
                alt={"Before and After Case 5"}
                className="object-contain w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 mt-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Important Notice:</strong> These
              before and after photos are for illustrative purposes only.
              Individual results may vary. All procedures performed by our GMC
              Registered Specialist in a CQC-registered facility. Photos are
              used with patient consent and protected by medical
              confidentiality.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in learning more about our aesthetic procedures?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
