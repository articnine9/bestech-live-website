import DetailsSection from "~/components/Section/ProjectDetails/DetailsSection";
import ProjectSection from "~/components/Section/ProjectDetails/ProjectSection";

import PageHeader from "~/components/Section/Common/PageHeader";

import CtaThree from "~/components/Section/Common/Cta/CtaThree";

const ProjectDetailsPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Project Details" />
        <DetailsSection />
        <ProjectSection />
        <CtaThree />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
