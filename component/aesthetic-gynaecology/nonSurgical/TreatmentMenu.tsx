"use client";

import { ScrollMotion } from "@/component/motion";
import { ArrowRight, Droplet, Sparkles, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    category: "Laser Technology",
    icon: Sun,
    title: "Vaginal Laser Rejuvenation",
    subtitle: "For Tightening & Dryness",
    desc: "Uses thermal energy to stimulate collagen production. Excellent for post-menopausal dryness, mild laxity, and stress incontinence.",
    tags: ["3 Sessions Recommended", "Pain-free", "Improves Lubrication"],
    image: "/assets/aesthetic/laser-probe.jpg",
  },
  {
    category: "Regenerative Medicine",
    icon: Droplet,
    title: "PRP (The O-Shot)",
    subtitle: "For Sensation & Lichen Sclerosus",
    desc: "We use your own blood platelets to regenerate healthy tissue. Proven to help with sexual dysfunction and skin conditions like Lichen Sclerosus.",
    tags: ["Natural", "Increases Sensitivity", "1-Hour Appointment"],
    image: "/assets/aesthetic/prp-vial.jpg",
  },
  {
    category: "Aesthetic Injectables",
    icon: Sparkles,
    title: "Labial Puffing (Fillers)",
    subtitle: "For Volume & Symmetry",
    desc: "Hyaluronic acid fillers (similar to lip fillers) are used to restore volume to the outer labia, creating a youthful, symmetrical appearance.",
    tags: ["Instant Results", "Lasts 12-18 Months", "Local Anaesthetic Cream"],
    image: "/assets/aesthetic/filler-illustration.jpg",
  },
];

const TreatmentMenu = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTIzNDIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16 md:space-y-24">
          {treatments.map((item, index) => (
            <ScrollMotion
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 0.15}
              duration={0.5}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="text-secondary" size={40} />
                      </div>
                      <span className="text-primary font-bold tracking-widest uppercase text-sm">
                        {item.title} Image
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-4 py-1.5 bg-secondary/10 text-secondary font-bold uppercase tracking-wider text-xs rounded-full flex items-center gap-2">
                    <item.icon size={16} />
                    {item.category}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary font-semibold text-lg md:text-xl mb-6">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white border-2 border-secondary/20 rounded-full text-sm text-gray-700 font-medium hover:border-secondary hover:bg-secondary/5 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors group"
                >
                  View Treatment Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentMenu;
