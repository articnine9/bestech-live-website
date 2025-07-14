
import CtaThree from "~/components/Section/Common/Cta/CtaThree";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Team from "~/components/Section/Team/Team";

export default function BlogPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
      <HeaderFour/>
        <PageHeader title="Our Team" />
        <Team />
        <CtaThree/>
        <FooterThree />
      </div>
    </div>
  );
}
