import PageHeader from "~/components/Section/Common/PageHeader";
import ChooseUs from "~/components/Section/Services/ChooseUs";
import Pricing from "~/components/Section/Services/Pricing";
import Services from "~/components/Section/Services/Services";
import WorkProcess from "~/components/Section/Services/WorkProcess";

export default function BlogDetailsPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Our Services" />
        <Services />
        <WorkProcess />
        <ChooseUs />
        <Pricing />
      </div>
    </div>
  );
}
