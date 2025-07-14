import FooterTwo from "~/components/Section/Common/Footer/FooterTwo";
import { HeaderTwo } from "~/components/Section/Common/Header";
import CtaTwo from "~/components/Section/Home-2/Cta/CtaTwo";
import About from "~/components/Section/Home-2/About/About";
import CompanyBenefit from "~/components/Section/Home-2/CompanyBenefit/CompanyBenefit";
import FaqSection from "~/components/Section/Home-2/FaqSection/FaqSection";
import GoogleMap from "~/components/Section/Home-2/GoogleMap/GoogleMap";
import Hero from "~/components/Section/Home-2/Hero/Hero";
import LatestProject from "~/components/Section/Home-2/LatestProject/LatestProject";
import Team from "~/components/Section/Home-2/Team/Team";
import Pricing from "~/components/Section/Home-2/Pricing/Pricing";
import ServiceSection from "~/components/Section/Home-2/ServiceSection/ServiceSection";
import Testimonials from "~/components/Section/Home-2/Testimonials/Testimonials";
import Fact from "~/components/Section/Home-2/Fact/Fact";
import LatestPost from "~/components/Section/Home-2/LatestPost/LatestPost";
 import "~/assets/css/color-1.css";
export default function HomeThreePage() {
  return (
    <div className="body-dark-bg homeTwo">
      <div className="fix">
        <HeaderTwo />
        <Hero />
        <About />
        <Fact />
        <ServiceSection />
        <CompanyBenefit />
        <Testimonials />
        <Pricing />
        <FaqSection />
        <LatestProject />
        <Team />
        <GoogleMap />
        <LatestPost/>
        <CtaTwo />
        <FooterTwo />
      </div>
    </div>
  );
}

