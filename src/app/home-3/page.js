import BlogSection from "~/components/Section/About/BlogSection";
import BrandSection from "~/components/Section/About/BrandSection";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderThree } from "~/components/Section/Common/Header";
import ChooseUs from "~/components/Section/Home-3/ChooseUs";
import Faq from "~/components/Section/Home-3/Faq";
import Hero from "~/components/Section/Home-3/Hero";
import Project from "~/components/Section/Home-3/Project";
import RequestServices from "~/components/Section/Home-3/RequestServices";
import Services from "~/components/Section/Home-3/Services";
import Team from "~/components/Section/Common/Team";
import Testimonials from "~/components/Section/Home-3/Testimonials";
import WorkProcess from "~/components/Section/Home-3/WorkProcess";
import AboutSection from "~/components/Section/About/AboutSection";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

export default function HomeThreePage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <HeaderThree />
        <Hero />
        <AboutSection />
        <Services />
        <ChooseUs />
        <WorkProcess />
        <Faq /> 
        <RequestServices />
         <Project />
        <Testimonials />
        <Team />
        <BlogSection /> 
         <BrandSection /> 
         <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
}
