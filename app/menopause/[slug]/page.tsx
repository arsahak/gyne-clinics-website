import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/menopauseServices";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Heart,
  PhoneCall,
  Flower2,
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
    title: `${service.title} | Menopause Care | GyneClinics`,
    description: service.shortDesc,
  };
}

export default async function MenopauseServiceDetailPage({
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
          { label: "Menopause Care", href: "/menopause" },
          { label: service.title, href: `/menopause/${service.slug}` },
        ]}
      />

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center gap-2">
              <Flower2 size={32} className="mb-2" />
              <p className="font-bold text-2xl">BMS</p>
              <p className="text-sm opacity-90">Accredited</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users size={32} className="mb-2" />
              <p className="font-bold text-2xl">5000+</p>
              <p className="text-sm opacity-90">Women Helped</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={32} className="mb-2" />
              <p className="font-bold text-2xl">Same Day</p>
              <p className="text-sm opacity-90">Appointments</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={32} className="mb-2" />
              <p className="font-bold text-2xl">Expert</p>
              <p className="text-sm opacity-90">Specialists</p>
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

      {/* Who It's For Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Who Is This For?
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  This treatment approach is particularly suited for:
                </p>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whoItsFor.map((item, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <CheckCircle size={20} />
                        </div>
                      </div>
                      <p className="text-gray-700 pt-2">{item}</p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Symptoms We Address
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  This treatment can help with these common menopausal symptoms:
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
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-md transition-all group border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                          ✓
                        </div>
                      </div>
                      <p className="text-gray-700 pt-1 font-medium">{symptom}</p>
                    </div>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.treatmentApproach.title}
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Comprehensive, evidence-based treatments tailored to your needs
                </p>
              </div>
            </ScrollMotion>

            <div className="space-y-6">
              {service.treatmentApproach.items.map((item, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-300 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center font-bold text-lg`}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-purple-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
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

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Benefits You Can Expect
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.05}
                >
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl hover:shadow-md transition-all">
                    <Heart size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </ScrollMotion>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose GyneClinics?
                </h2>
                <div className="w-20 h-1 bg-white/30 rounded-full mx-auto"></div>
              </div>
            </ScrollMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whyChooseUs.map((reason, index) => (
                <ScrollMotion
                  key={index}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle size={24} className="text-yellow-300" />
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
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-start gap-3">
                      <span className="text-purple-600 flex-shrink-0">Q:</span>
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

      {/* Other Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollMotion animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Other Menopause Services
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">
                  Explore our complete range of menopause care options
                </p>
              </div>
            </ScrollMotion>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/menopause"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
              >
                <PhoneCall size={18} />
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTA
        title={`Ready to Transform Your Menopause Experience?`}
        description="Book a confidential consultation with our menopause specialists. We're here to help you navigate this transition with confidence and support."
        variant="primary"
      />
    </main>
  );
}
