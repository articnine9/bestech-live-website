import Blog from "~/components/Section/Blog/Blog";

import PageHeader from "~/components/Section/Common/PageHeader";

export default function BlogPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Blog Gride" />
        <Blog />
      </div>
    </div>
  );
}
