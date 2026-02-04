import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";

// ✅ Add generateMetadata function for SEO + OG + Twitter
export async function generateMetadata() {
  const title = "Contact Bestech | Elevator Spare Parts Supplier UAE";
  const description =
    "Need elevator spare parts in Dubai or Sharjah? Contact Bestech, trusted elevator spare parts supplier in UAE. Quick support for Otis, Kone, Mitsubishi & Thyssenkrupp lifts.";

  const url = "https://www.bestechparts.ae/contact";
  const ogImage = "https://www.bestechparts.ae/images/og-contact.jpg";

  return {
    title,
    description,
    keywords:
      "Elevator spare parts supplier contact Sharjah, Elevator spare parts contact in Dubai, UAE, Contact elevator spare parts",

    alternates: {
      canonical: url,
    },

    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    openGraph: {
      type: "website",
      siteName: "Bestech Parts",
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
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
