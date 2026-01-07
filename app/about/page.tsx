import { ScrollMotion } from "@/component/motion";
import { CommonHero, PageCTA } from "@/component/shared";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Medal,
  Shield,
  Stethoscope,
  Users,
  UserCheck,
  Globe,
  Calendar,
  Star,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Mr. Joe Daniels | Consultant Gynaecologist | GyneClinics",
  description:
    "Meet Mr. Joe Daniels, GMC registered Consultant Gynaecologist with over 20 years of experience in gynaecology, aesthetic procedures, and women's health.",
};

export default function AboutPage() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Medical Degree",
      detail: "MBBS - University of Medicine",
      year: "1998",
    },
    {
      icon: Award,
      title: "RCOG Fellowship",
      detail: "Fellow of Royal College of Obstetricians & Gynaecologists",
      year: "2005",
    },
    {
      icon: BadgeCheck,
      title: "GMC Registration",
      detail: "General Medical Council Specialist Register",
      year: "Current",
    },
    {
      icon: Medal,
      title: "Subspecialty Training",
      detail: "Advanced Training in Urogynaecology & Cosmetic Gynaecology",
      year: "2008",
    },
  ];

  const expertise = [
    {
      icon: Stethoscope,
      title: "General Gynaecology",
      areas: [
        "Menstrual disorders",
        "Pelvic pain management",
        "Fibroids & ovarian cysts",
        "Contraception & fertility",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Urogynaecology",
      areas: [
        "Urinary incontinence",
        "Pelvic organ prolapse",
        "Urodynamics testing",
        "Pelvic floor reconstruction",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Aesthetic Gynaecology",
      areas: [
        "Labiaplasty procedures",
        "Vaginal rejuvenation",
        "Non-surgical treatments",
        "Intimate wellness",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Briefcase,
      title: "Menopause Care",
      areas: [
        "Bio-identical HRT",
        "Hormone optimization",
        "Symptom management",
        "Long-term health planning",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    {
      icon: BookOpen,
      title: "Published Research",
      description:
        "Author of over 30 peer-reviewed publications in gynaecology and women's health journals.",
    },
    {
      icon: Users,
      title: "Patient Care",
      description:
        "Treated over 10,000 patients across general gynaecology, urogynaecology, and aesthetic procedures.",
    },
    {
      icon: Globe,
      title: "International Training",
      description:
        "Completed advanced fellowship training in Europe and North America in minimally invasive surgery.",
    },
    {
      icon: Award,
      title: "Teaching & Education",
      description:
        "Regular lecturer at national conferences and trainer for junior doctors and medical students.",
    },
  ];

  const values = [
    {
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is tailored to your unique needs, concerns, and goals. We listen first, then advise.",
      icon: Heart,
    },
    {
      title: "Evidence-Based Medicine",
      description:
        "All recommendations are grounded in the latest clinical research and best practice guidelines.",
      icon: BookOpen,
    },
    {
      title: "Confidentiality & Respect",
      description:
        "Your privacy is paramount. We provide a safe, non-judgmental space for sensitive health discussions.",
      icon: Shield,
    },
    {
      title: "Continuous Excellence",
      description:
        "Ongoing professional development ensures we offer the most advanced, safest treatments available.",
      icon: Star,
    },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Medical Degree",
      description: "Graduated with MBBS from prestigious medical university",
    },
    {
      year: "2003",
      title: "Specialist Training",
      description:
        "Completed Obstetrics & Gynaecology specialist training program",
    },
    {
      year: "2005",
      title: "RCOG Fellowship",
      description: "Became Fellow of Royal College of Obstetricians & Gynaecologists",
    },
    {
      year: "2008",
      title: "Subspecialty Certification",
      description:
        "Advanced training in Urogynaecology and Cosmetic Gynaecology",
    },
    {
      year: "2012",
      title: "Consultant Position",
      description: "Appointed Consultant Gynaecologist at major NHS Trust",
    },
    {
      year: "2018",
      title: "Private Practice",
      description: "Established GyneClinics to provide specialized women's healthcare",
    },
    {
      year: "2024",
      title: "Expanded Services",
      description:
        "Added comprehensive menopause care and aesthetic treatments",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CommonHero
        title="Meet Mr. Joe Daniels"
        subtitle="Consultant Gynaecologist | MBBS, FRCOG"
        images={["/assets/home/banner1.svg"]} // TODO: Replace with actual photo
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <ScrollMotion animation="fadeInLeft">
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl relative overflow-hidden border-4 border-white shadow-2xl">
                    {/* TODO: Replace with actual surgeon photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <UserCheck className="text-primary" size={64} />
                        </div>
                        <p className="text-primary font-bold text-lg uppercase tracking-wider">
                          Professional Photo
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          Mr. Joe Daniels
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Credentials Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border-2 border-primary/20">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">20+</p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollMotion>

              {/* Bio */}
              <ScrollMotion animation="fadeInRight">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs rounded-full mb-4">
                    Consultant Gynaecologist
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Dedicated to Women's Health Excellence
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Mr. Joe Daniels is a highly experienced Consultant
                      Gynaecologist with over <strong>20 years</strong> of
                      clinical practice in both NHS and private healthcare
                      settings.
                    </p>
                    <p>
                      As a Fellow of the Royal College of Obstetricians &
                      Gynaecologists (FRCOG) and GMC registered specialist, Mr.
                      Daniels has dedicated his career to providing
                      compassionate, evidence-based care across all areas of
                      women's health.
                    </p>
                    <p>
                      His expertise spans general gynaecology, urogynaecology,
                      aesthetic procedures, and menopause management. He is
                      particularly passionate about helping women regain
                      confidence and quality of life through both surgical and
                      non-surgical treatments.
                    </p>
                    <p className="text-primary font-semibold italic">
                      "My approach is simple: listen to my patients, understand
                      their concerns, and provide the best possible care with
                      empathy and expertise."
                    </p>
                  </div>
                </div>
              </ScrollMotion>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Qualifications & Certifications
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Rigorously trained and certified by the UK's leading medical
                  institutions
                </p>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualifications.map((qual, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <qual.icon className="text-white" size={28} />
                    </div>
                    <div className="text-xs text-secondary font-bold mb-2">
                      {qual.year}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {qual.title}
                    </h3>
                    <p className="text-sm text-gray-600">{qual.detail}</p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Areas of Expertise
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Comprehensive specialist care across all aspects of women's
                  health
                </p>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((area, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.15}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all shadow-md hover:shadow-xl group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <area.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {area.title}
                    </h3>
                    <ul className="space-y-3">
                      {area.areas.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <BadgeCheck
                            size={18}
                            className="text-secondary shrink-0 mt-1"
                          />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Achievements
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <achievement.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Career Journey
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
              </div>
            </ScrollMotion>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <ScrollMotion
                    key={index}
                    animation="slideUp"
                    delay={index * 0.1}
                  >
                    <div className="flex gap-8 items-start relative">
                      {/* Year Badge */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg relative z-10">
                        {item.year}
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all shadow-md hover:shadow-lg">
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </ScrollMotion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Core Values
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  The principles that guide every patient interaction and
                  treatment decision
                </p>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTA
        title="Ready to Start Your Journey?"
        description="Book a consultation with Mr. Joe Daniels to discuss your health concerns and explore personalized treatment options."
        variant="primary"
      />
    </main>
  );
}
