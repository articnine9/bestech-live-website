import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FactSection from "~/components/Section/About/FactSection";
import ProjectSection from "~/components/Section/About/ProjectSection";
import ServiceSection from "~/components/Section/About/ServiceSection";

import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";

import Team from "~/components/Section/Common/Team";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
export const metadata = {
  title: "Best Elevator Spare Parts Supplier Sharjah | UAE Lift Products",
  description:
    "Choose Bestech, the best elevator spare parts supplier in Sharjah. Trusted lift spare parts supplier in Dubai & UAE with top-quality elevator products.",
    keywords:"best elevator spare parts supplier Sharjah, spare parts for elevators, Lift spare parts supplier, elevator products suppliers UAE "
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
