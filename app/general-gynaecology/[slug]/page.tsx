import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/generalGynaecologyServices";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Stethoscope,
  Heart,
  PhoneCall,
} from "lucide-react";
import { CommonHero, PageCTA } from "@/component/shared";
import { ScrollMotion } from "@/component/motion";

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | GyneClinics",
    };
  }

  return {
    title: `${service.title} | General Gynaecology | GyneClinics`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <CommonHero
        title={service.title}
        subtitle={service.shortDesc}
        images={[service.heroImage]}
        breadcrumbs={[
          { label: "General Gynaecology", href: "/general-gynaecology" },
          { label: service.title, href: `/general-gynaecology/${service.slug}` },
        ]}
      />

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-primary to-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock size={32} className="mb-2" />
              <p className="font-bold text-2xl">Same Day</p>
              <p className="text-sm opacity-90">Appointments</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={32} className="mb-2" />
              <p className="font-bold text-2xl">GMC</p>
              <p className="text-sm opacity-90">Registered</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users size={32} className="mb-2" />
              <p className="font-bold text-2xl">Expert</p>
              <p className="text-sm opacity-90">Consultants</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart size={32} className="mb-2" />
              <p className="font-bold text-2xl">5000+</p>
              <p className="text-sm opacity-90">Patients Treated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}
                >
                  <ServiceIcon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Overview
                  </h2>
                  <div className="w-20 h-1 bg-secondary rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.overview}
              </p>
            </ScrollMotion>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  When to Seek Help
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  You should consider consulting us if you experience any of
                  these symptoms:
                </p>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 gap-4">
              {service.symptoms.map((symptom, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.05}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle size={20} />
                        </div>
                      </div>
                      <p className="text-gray-700 pt-2">{symptom}</p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Approach Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Stethoscope size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.diagnosticApproach.title}
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.diagnosticApproach.items.map((item, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.treatmentOptions.title}
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  {service.treatmentOptions.description}
                </p>
              </div>
            </ScrollMotion>

            <div className="space-y-6">
              {service.treatmentOptions.options.map((option, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center font-bold text-lg`}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                          {option.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose GyneClinics?
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whyChooseUs.map((reason, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle size={24} className="text-secondary" />
                      </div>
                      <p className="leading-relaxed">{reason}</p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">
                  Common questions about {service.title.toLowerCase()}
                </p>
              </div>
            </ScrollMotion>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-start gap-3">
                      <span className="text-secondary flex-shrink-0">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {/* <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Other Services
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">
                  Explore our other general gynaecology services
                </p>
              </div>
            </ScrollMotion>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/general-gynaecology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg"
              >
                <PhoneCall size={18} />
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <PageCTA
        title={`Ready to Address Your ${service.title} Concerns?`}
        description="Book a confidential consultation with our expert gynaecology specialists today. We're here to support you every step of the way."
        variant="primary"
      />
    </main>
  );
}
