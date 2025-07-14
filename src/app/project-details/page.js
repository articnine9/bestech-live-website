import DetailsSection from "~/components/Section/ProjectDetails/DetailsSection";
import ProjectSection from "~/components/Section/ProjectDetails/ProjectSection";
import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import { HeaderFour } from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";


const ProjectDetailsPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
      <HeaderFour/>
        <PageHeader title="Project Details" />
        <DetailsSection />
        <ProjectSection />
        <CtaThree />
        <FooterThree />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
