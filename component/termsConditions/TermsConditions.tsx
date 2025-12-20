"use client";

import { ScrollMotion } from "@/component/motion";
import {
  AlertCircle,
  CreditCard,
  FileText,
  Mail,
  Phone,
  Scale,
  Shield,
} from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-4">
          <p>
            By accessing and using GyneClinics website and services, you accept
            and agree to be bound by these Terms and Conditions. If you do not
            agree to these terms, please do not use our services.
          </p>
          <p>
            These terms apply to all visitors, users, and others who access or
            use our services. We reserve the right to modify these terms at any
            time, and such modifications shall be effective immediately upon
            posting.
          </p>
        </div>
      ),
    },
    {
      icon: Scale,
      title: "2. Medical Services",
      content: (
        <div className="space-y-4">
          <p>
            GyneClinics provides private gynaecological, urogynaecological, and
            aesthetic services. All medical services are provided by qualified
            healthcare professionals.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              All consultations and treatments are subject to clinical
              assessment and medical discretion
            </li>
            <li>
              We reserve the right to refuse treatment if it is not in the
              patient&apos;s best interest
            </li>
            <li>Treatment outcomes may vary and cannot be guaranteed</li>
            <li>
              Emergency situations should be directed to NHS 111 or A&amp;E
              services
            </li>
            <li>
              Our services are not a substitute for emergency medical care
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: AlertCircle,
      title: "3. Appointments and Cancellations",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Booking Appointments:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>Appointments can be booked online, by phone, or in person</li>
            <li>
              We require accurate personal and medical information at the time
              of booking
            </li>
            <li>Appointment availability is subject to clinician schedules</li>
          </ul>
          <p>
            <strong>Cancellation Policy:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              24 hours notice is required for cancellations or rescheduling
            </li>
            <li>
              Cancellations with less than 24 hours notice may incur a
              cancellation fee
            </li>
            <li>
              No-show appointments will be charged at the full consultation rate
            </li>
            <li>
              Emergency cancellations will be considered on a case-by-case basis
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: CreditCard,
      title: "4. Payment Terms",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Payment Methods:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              Payment is required at the time of service unless prior
              arrangements have been made
            </li>
            <li>We accept cash, credit/debit cards, and bank transfers</li>
            <li>
              Insurance claims should be arranged prior to treatment where
              applicable
            </li>
          </ul>
          <p>
            <strong>Fees and Charges:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              All fees are clearly displayed and communicated before treatment
            </li>
            <li>
              Additional charges may apply for tests, procedures, or follow-up
              consultations
            </li>
            <li>
              Prices are subject to change without notice, but confirmed
              appointments will be honored at the quoted price
            </li>
            <li>
              Refunds are at the discretion of GyneClinics and subject to our
              refund policy
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: Shield,
      title: "5. Patient Responsibilities",
      content: (
        <div className="space-y-4">
          <p>As a patient, you are responsible for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              Providing accurate and complete medical history and information
            </li>
            <li>Following medical advice and treatment plans as prescribed</li>
            <li>Attending scheduled appointments on time</li>
            <li>
              Informing us of any changes to your contact details or medical
              condition
            </li>
            <li>Making payment for services rendered in a timely manner</li>
            <li>Treating staff and other patients with respect and courtesy</li>
            <li>Complying with clinic policies and procedures</li>
          </ul>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "6. Medical Records and Confidentiality",
      content: (
        <div className="space-y-4">
          <p>
            We maintain strict confidentiality of all patient records in
            accordance with data protection laws and medical ethics.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              Medical records are stored securely and accessed only by
              authorized personnel
            </li>
            <li>We comply with GDPR and UK data protection regulations</li>
            <li>
              You have the right to access your medical records upon request
            </li>
            <li>
              Information may be shared with other healthcare providers only
              with your consent or as required by law
            </li>
            <li>
              Records are retained in accordance with legal requirements
              (typically 7-10 years)
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: AlertCircle,
      title: "7. Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            While we strive to provide the highest quality medical care,
            GyneClinics shall not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              Any indirect, incidental, or consequential damages arising from
              treatment
            </li>
            <li>Treatment outcomes that do not meet patient expectations</li>
            <li>
              Complications that may arise from medical procedures (which will
              be managed appropriately)
            </li>
            <li>Loss of data or information due to technical failures</li>
            <li>
              Delays or cancellations due to circumstances beyond our control
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            Our liability is limited to the cost of the service provided. All
            medical treatments carry inherent risks, which will be discussed
            during consultation.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "8. Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            All content on the GyneClinics website, including text, graphics,
            logos, images, and software, is the property of GyneClinics or its
            content suppliers and is protected by copyright and trademark laws.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              You may not reproduce, distribute, or use any content without our
              written permission
            </li>
            <li>
              Personal use of website content for information purposes is
              permitted
            </li>
            <li>Commercial use of our content is strictly prohibited</li>
          </ul>
        </div>
      ),
    },
    {
      icon: AlertCircle,
      title: "9. Website Use",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Acceptable Use:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>You agree to use our website only for lawful purposes</li>
            <li>
              You must not use the website in any way that could damage,
              disable, or impair the site
            </li>
            <li>
              You must not attempt to gain unauthorized access to any part of
              the website
            </li>
            <li>You must not transmit any viruses, malware, or harmful code</li>
          </ul>
          <p>
            <strong>Website Availability:</strong>
          </p>
          <p className="text-gray-600">
            We do not guarantee that our website will be available at all times.
            We may suspend, withdraw, or restrict availability for business or
            operational reasons.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "10. Complaints and Disputes",
      content: (
        <div className="space-y-4">
          <p>
            If you have a complaint about our services, please contact us in
            writing. We will investigate and respond within a reasonable
            timeframe.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              Complaints should be submitted in writing to our registered
              address
            </li>
            <li>We aim to resolve complaints within 28 days</li>
            <li>
              If you are not satisfied with our response, you may contact
              relevant regulatory bodies
            </li>
            <li>
              These terms are governed by English law and subject to the
              exclusive jurisdiction of English courts
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "11. Changes to Terms",
      content: (
        <div className="space-y-4">
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting on our
            website.
          </p>
          <p>
            Your continued use of our services after any changes constitutes
            acceptance of the new terms. We encourage you to review these terms
            periodically.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "12. Severability",
      content: (
        <div className="space-y-4">
          <p>
            If any provision of these Terms and Conditions is found to be
            unenforceable or invalid, that provision shall be limited or
            eliminated to the minimum extent necessary, and the remaining
            provisions shall remain in full force and effect.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Last Updated */}
        <ScrollMotion animation="fadeInUp" duration={0.5} className="mb-8">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </ScrollMotion>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <ScrollMotion
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                duration={0.5}
                className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {section.title}
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed ml-16">
                  {section.content}
                </div>
              </ScrollMotion>
            );
          })}
        </div>

        {/* Contact Section */}
        <ScrollMotion
          animation="fadeInUp"
          duration={0.5}
          delay={1.2}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <Mail size={28} />
              Contact Us
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:info@gyneclinics.com"
                    className="text-primary hover:underline"
                  >
                    info@gyneclinics.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:02071176456"
                    className="text-primary hover:underline"
                  >
                    0207-117-6456
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    GyneClinics
                    <br />
                    10 Harley Street, London. W1G 9PF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default TermsConditions;
