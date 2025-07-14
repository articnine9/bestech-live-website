import PageHeader from "~/components/Section/Common/PageHeader";
import BlogDetails from "~/components/Section/BlogDetails/BlogDetails";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";


export default function BlogDetailsPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
      <HeaderFour/>
        <PageHeader title="Blog Details" />
        <BlogDetails />
        <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
}
