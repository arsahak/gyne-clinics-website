import BookConsultation from "@/component/bookAppointment/BookAppointment";
import { CommonHero } from "@/component/shared";

export const metadata = {
  title: "Book Appointment | GyneClinics",
  description:
    "Schedule your consultation with our expert gynaecology specialists. Private, confidential care tailored to your needs.",
};

export default function BookAppointmentPage() {
  const sliderImages = [
    "/assets/home/banner1.svg",
    "/assets/home/banner2.svg",
    "/assets/home/banner3.svg",
  ];

  return (
    <main className="min-h-screen bg-white">
      <CommonHero
        title="Book Your Consultation"
        subtitle="Schedule an appointment with our expert specialists. We're here to provide compassionate, confidential care tailored to your needs."
        images={sliderImages}
        breadcrumbs={[
          { label: "Book Appointment", href: "/book-appointment" },
        ]}
      />
      <BookConsultation />
    </main>
  );
}
