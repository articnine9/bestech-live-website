import CtaThree from "./../components/Section/Common/Cta/CtaThree";
import FooterThree from "@/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "@/components/Section/Common/Header";
import PageHeader from "@/components/Section/Common/PageHeader";
import ErrorSection from "@/components/Section/ErrorSection";

const NotFoundPage = () => {
  return (
    <>
      <PageHeader title="404" />
      <ErrorSection />
    </>
  );
};

export default NotFoundPage;
