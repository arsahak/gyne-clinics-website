"use client";

import { ScrollMotion } from "@/component/motion";
import { Activity, ChevronRight, Microscope, Umbrella } from "lucide-react";
import Link from "next/link";

const uroServices = [
  {
    category: "Incontinence (Bladder Leakage)",
    icon: Umbrella,
    description: "Solutions for accidental leakage and loss of control.",
    treatments: [
      {
        name: "Stress Incontinence (Cough/Sneeze)",
        link: "/service/stress-incontinence",
      },
      { name: "Overactive Bladder (Urge)", link: "/service/urge-incontinence" },
      { name: "Painful Bladder Syndrome", link: "/service/painful-bladder" },
      { name: "Recurrent UTIs", link: "/service/utis" },
    ],
  },
  {
    category: "Prolapse Problems",
    icon: Activity,
    description: "Repairing weakened support for the uterus and vaginal walls.",
    treatments: [
      {
        name: "Uterine Prolapse (Womb Drop)",
        link: "/service/uterine-prolapse",
      },
      { name: "Cystocele (Bladder Drop)", link: "/service/cystocele" },
      { name: "Rectocele (Bowel Drop)", link: "/service/rectocele" },
      { name: "Vaginal Laxity", link: "/service/vaginal-laxity" },
    ],
  },
  {
    category: "Advanced Diagnostics",
    icon: Microscope,
    description:
      "Precise testing to determine the exact cause of your symptoms.",
    treatments: [
      { name: "Urodynamics Testing", link: "/service/urodynamics" },
      { name: "Cystoscopy (Camera Test)", link: "/service/cystoscopy" },
      { name: "Pelvic Floor Ultrasound", link: "/service/ultrasound" },
      { name: "Biopsy Services", link: "/service/biopsy" },
    ],
  },
];

const UroServices = () => {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern & Decorations */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollMotion animation="fadeInUp" duration={0.5} className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Conditions We Treat
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of non-surgical and surgical options
            tailored to the severity of your condition, ensuring personalized
            care for every patient.
          </p>
        </ScrollMotion>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {uroServices.map((service, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.4}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col h-full group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 shadow-sm">
                <service.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.category}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 grow leading-relaxed">
                {service.description}
              </p>

              {/* Treatments List */}
              <div className="space-y-2">
                {service.treatments.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-50/50 hover:from-primary/5 hover:to-secondary/5 hover:border-primary/30 border border-gray-100 transition-all duration-300 group/item"
                  >
                    <span className="font-medium text-sm md:text-base text-gray-700 group-hover/item:text-primary transition-colors">
                      {item.name}
                    </span>
                    <ChevronRight
                      size={18}
                      className="text-gray-400 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UroServices;
