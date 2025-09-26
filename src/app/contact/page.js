import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";
export const metadata = {
  title: "Contact Bestech | Elevator Spare Parts Supplier UAE",
  description:
    "Need elevator spare parts in Dubai or Sharjah? Contact Bestech, trusted elevator spare parts supplier in UAE. Quick support for Otis, Kone, Mitsubishi & Thyssenkrupp lifts.",
    keywords:"Elevator spare parts supplier contact Sharjah, Elevator spare parts contact in Dubai, UAE, Contact elevator spare parts"
};
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
