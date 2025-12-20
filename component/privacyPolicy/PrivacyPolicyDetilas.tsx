"use client";

import { ScrollMotion } from "@/component/motion";
import { Eye, FileText, Lock, Mail, Phone, Shield } from "lucide-react";

const PrivacyPolicyDetilas = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Introduction",
      content: (
        <div className="space-y-4">
          <p>
            GyneClinics ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website, use our
            services, or interact with us.
          </p>
          <p>
            By using our services, you agree to the collection and use of
            information in accordance with this policy. If you do not agree with
            our policies and practices, please do not use our services.
          </p>
        </div>
      ),
    },
    {
      icon: Eye,
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-primary mb-2">
              Personal Information
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
              <li>
                Name, date of birth, and contact information (email, phone,
                address)
              </li>
              <li>
                Medical history, health records, and treatment information
              </li>
              <li>Payment and billing information</li>
              <li>Insurance details</li>
              <li>Emergency contact information</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">
              Automatically Collected Information
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              <strong>Medical Services:</strong> To provide, maintain, and
              improve our medical services and treatments
            </li>
            <li>
              <strong>Appointments:</strong> To schedule, manage, and confirm
              your appointments
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries, send
              appointment reminders, and provide medical updates
            </li>
            <li>
              <strong>Billing:</strong> To process payments and manage your
              account
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with legal
              obligations and regulatory requirements
            </li>
            <li>
              <strong>Improvement:</strong> To analyze usage patterns and
              improve our website and services
            </li>
            <li>
              <strong>Marketing:</strong> To send you promotional materials
              (with your consent) about our services
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "4. Information Sharing and Disclosure",
      content: (
        <div className="space-y-4">
          <p>
            We do not sell your personal information. We may share your
            information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              <strong>Medical Professionals:</strong> With your treating
              physicians and healthcare providers
            </li>
            <li>
              <strong>Service Providers:</strong> With third-party service
              providers who assist us in operating our business (e.g., IT
              services, payment processors)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or government regulation
            </li>
            <li>
              <strong>Emergency Situations:</strong> To protect your health and
              safety or that of others
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets (with notice to you)
            </li>
            <li>
              <strong>With Your Consent:</strong> When you have given explicit
              consent to share your information
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: Shield,
      title: "5. Data Security",
      content: (
        <div className="space-y-4">
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure servers and databases</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication procedures</li>
            <li>Staff training on data protection</li>
          </ul>
          <p className="text-sm text-gray-500">
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. While we strive to protect your information,
            we cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "6. Your Rights",
      content: (
        <div className="space-y-4">
          <p>Under data protection laws, you have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              <strong>Access:</strong> Request a copy of the personal
              information we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information (subject to legal and medical record retention
              requirements)
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your personal
              information for certain purposes
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing in
              certain circumstances
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your data to
              another service provider
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent where
              processing is based on consent
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            To exercise these rights, please contact us using the information
            provided in the "Contact Us" section below.
          </p>
        </div>
      ),
    },
    {
      icon: Eye,
      title: "7. Cookies and Tracking Technologies",
      content: (
        <div className="space-y-4">
          <p>
            We use cookies and similar tracking technologies to track activity
            on our website and store certain information. Cookies are files with
            a small amount of data that may include an anonymous unique
            identifier.
          </p>
          <p>Types of cookies we use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors interact with our website
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your preferences and
              settings
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant
              advertisements (with your consent)
            </li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our website.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "8. Data Retention",
      content: (
        <div className="space-y-4">
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>
              <strong>Medical Records:</strong> Retained in accordance with
              legal and regulatory requirements (typically 7-10 years or longer)
            </li>
            <li>
              <strong>Financial Records:</strong> Retained for accounting and
              tax purposes (typically 7 years)
            </li>
            <li>
              <strong>Marketing Data:</strong> Retained until you opt out or
              withdraw consent
            </li>
            <li>
              <strong>Website Data:</strong> Retained as long as necessary for
              website functionality and analytics
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "9. Children's Privacy",
      content: (
        <div className="space-y-4">
          <p>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            are a parent or guardian and believe your child has provided us with
            personal information, please contact us immediately.
          </p>
          <p>
            For patients under 18, we require parental or guardian consent for
            treatment and data processing, in accordance with applicable laws
            and medical ethics.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "10. International Data Transfers",
      content: (
        <div className="space-y-4">
          <p>
            Your information may be transferred to and maintained on computers
            located outside of your state, province, country, or other
            governmental jurisdiction where data protection laws may differ.
          </p>
          <p>
            If you are located outside the United Kingdom and choose to provide
            information to us, please note that we transfer the data to the UK
            and process it there. By using our services, you consent to the
            transfer of your information to the UK.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "11. Changes to This Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
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
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
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
          delay={1.1}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <Mail size={28} />
              Contact Us
            </h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:privacy@gyneclinics.com"
                    className="text-primary hover:underline"
                  >
                    privacy@gyneclinics.com
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

export default PrivacyPolicyDetilas;
