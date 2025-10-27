import Blog from "~/components/Section/Blog/Blog";
import PageHeader from "~/components/Section/Common/PageHeader";

// ✅ Metadata for the Blog page
export const metadata = {
  title: "Bestech Parts UAE Blog | Elevator Spare Parts Insights",
  description:
    "Explore expert articles on elevator spare parts, safety tips and supplier insights in UAE with Bestech Parts blog.",
  keywords:
    "elevator spare parts UAE, elevator parts blog UAE, elevator safety components, door locks supplier UAE, door wheels Dubai, wire rope Sharjah, elevator maintenance UAE, Bestech Parts blog",
  alternates: {
    canonical: "https://www.bestechparts.ae/blog",
  },
  robots: "index, follow",
};

export default function BlogPage() {
  return (
    <div className="body-dark-bg">
      <div className="fix">
        <PageHeader title="Blog" />
        <Blog />
      </div>
    </div>
  );
}
