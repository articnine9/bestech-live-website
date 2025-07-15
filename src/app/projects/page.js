import ProjectSection from "~/components/Section/Project/ProjectSection";

import PageHeader from "~/components/Section/Common/PageHeader";

const ProjectPage = () => {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Our Projects" />
        <ProjectSection />
      </div>
    </div>
  );
};

export default ProjectPage;
