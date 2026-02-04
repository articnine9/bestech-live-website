import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";

export const metadata = {
  title: "Best Elevator Spare Parts Supplier Sharjah | UAE Lift Products",
  description:
    "Choose Bestech, the best elevator spare parts supplier in Sharjah. Trusted lift spare parts supplier in Dubai & UAE with top-quality elevator products.",

  keywords: [
    "best elevator spare parts supplier Sharjah",
    "spare parts for elevators",
    "Lift spare parts supplier",
    "elevator products suppliers UAE",
  ],

  alternates: {
    canonical: "https://www.bestechparts.ae/about",
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    siteName: "Bestech Parts",
    title: "Best Elevator Spare Parts Supplier Sharjah | UAE Lift Products",
    description:
      "Choose Bestech, the best elevator spare parts supplier in Sharjah. Trusted lift spare parts supplier in Dubai & UAE with top-quality elevator products.",
    url: "https://www.bestechparts.ae/about",
    images: [
      {
        url: "https://www.bestechparts.ae/images/og-about.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Elevator Spare Parts Supplier Sharjah | UAE Lift Products",
    description:
      "Choose Bestech, the best elevator spare parts supplier in Sharjah. Trusted lift spare parts supplier in Dubai & UAE with top-quality elevator products.",
    images: ["https://www.bestechparts.ae/images/og-about.jpg"],
  },
};

const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="About Us" />
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
