"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { menopauseServices } from "@/data/menopauseServices";

const pathways = menopauseServices.map((service) => ({
  slug: service.slug,
  title: service.title,
  icon: service.icon,
  desc: service.shortDesc,
  points: service.treatmentApproach.items.slice(0, 4).map((item) => item.name),
  color: service.iconGradient,
}));

const MenopauseServices = () => {
  const iconColors = [
    "from-blue-500/20 to-blue-600/20 text-blue-600",
    "from-green-500/20 to-green-600/20 text-green-600",
    "from-red-500/20 to-red-600/20 text-red-600",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollMotion animation="fadeInUp" duration={0.5} className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full">
              Treatment Options
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Personalized Treatment Pathways
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We don't believe in a 'one size fits all' prescription.
          </p>
        </ScrollMotion>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {pathways.map((path, index) => (
            <ScrollMotion
              key={index}
              animation="slideUp"
              delay={index * 0.15}
              duration={0.4}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col group"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${iconColors[index]} group-hover:scale-110 transition-transform`}
              >
                <path.icon size={32} />
              </div>

              <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {path.title}
              </h3>
              <p className="text-gray-600 mb-6 grow leading-relaxed">
                {path.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {path.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 group-hover:text-gray-800 transition-colors"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 text-secondary shrink-0 group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm md:text-base font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/menopause/${path.slug}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-center border-2 border-gray-200 rounded-xl font-bold text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group/link"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenopauseServices;
