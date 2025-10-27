import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";

// ✅ Add generateMetadata function for SEO
export async function generateMetadata() {
  return {
    title: "Contact Bestech | Elevator Spare Parts Supplier UAE",
    description:
      "Need elevator spare parts in Dubai or Sharjah? Contact Bestech, trusted elevator spare parts supplier in UAE. Quick support for Otis, Kone, Mitsubishi & Thyssenkrupp lifts.",
    keywords:
      "Elevator spare parts supplier contact Sharjah, Elevator spare parts contact in Dubai, UAE, Contact elevator spare parts",
    alternates: {
      canonical: "https://www.bestechparts.ae/contact",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
}

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <ContactUsSection />
      <MapSection />
    </>
  );
};

export default ContactPage;
