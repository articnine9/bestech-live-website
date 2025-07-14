import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import ServiceDetails from "~/components/Section/Common/ServiceDetails";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";

export default function RailTransportPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
      <HeaderFour/>
        <PageHeader title="Rail Transport" />
        <ServiceDetails title="Rail Transport Services" transportType="rail"
           thumbnailOne="/img/service/services-details-img1.jpg"
           thumbnailTwo="/img/service/services-details-img2.jpg"
        />
        <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
}
