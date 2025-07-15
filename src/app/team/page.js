import PageHeader from "~/components/Section/Common/PageHeader";
import Team from "~/components/Section/Team/Team";

export default function BlogPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Our Team" />
        <Team />
      </div>
    </div>
  );
}
