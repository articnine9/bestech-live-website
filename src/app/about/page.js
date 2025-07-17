import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FactSection from "~/components/Section/About/FactSection";
import ProjectSection from "~/components/Section/About/ProjectSection";
import ServiceSection from "~/components/Section/About/ServiceSection";

import PageHeader from "~/components/Section/Common/PageHeader";
import AboutSection from "~/components/Section/About/AboutSection";

import Team from "~/components/Section/Common/Team";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const AboutPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="About Us" />
        <AboutSection />
        <FactSection />
        <ServiceSection />
        <ProjectSection />
        <Team />
        <BlogSection />
        <BrandSection />
      </div>
    </div>
  );
};

export default AboutPage;
