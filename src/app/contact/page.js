import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";

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
