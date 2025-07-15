import PageHeader from "~/components/Section/Common/PageHeader";
import TeamDetails from "~/components/Section/TeamDetails/TeamDetails";
import Team from "~/components/Section/Common/Team";

import TeamTwo from "~/components/Section/Common/Team/TeamTwo";

export default function BlogPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Team Details" />
        <TeamDetails />
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <TeamTwo bgColor="#f5f5f5" />
        </div>
      </div>
    </div>
  );
}
