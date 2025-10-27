

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
};


const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="About Us" />
        <AboutSection />
        {/* <FactSection /> */}
        {/* <ServiceSection />
        <ProjectSection />
        <Team />
        <BlogSection />
        <BrandSection /> */}
      </div>
    </div>
  );
};

export default AboutPage;
