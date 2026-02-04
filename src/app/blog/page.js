import Blog from "~/components/Section/Blog/Blog";
import PageHeader from "~/components/Section/Common/PageHeader";

// ✅ Metadata for the Blog page (SEO + OG + Twitter)
export const metadata = {
  title: "Bestech Parts UAE Blog | Elevator Spare Parts Insights",
  description:
    "Explore expert articles on elevator spare parts, safety tips and supplier insights in UAE with Bestech Parts blog.",

  keywords:
    "elevator spare parts UAE, elevator parts blog UAE, elevator safety components, door locks supplier UAE, door wheels Dubai, wire rope Sharjah, elevator maintenance UAE, Bestech Parts blog",

  alternates: {
    canonical: "https://www.bestechparts.ae/blog",
  },

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    type: "website",
    siteName: "Bestech Parts",
    title: "Bestech Parts UAE Blog | Elevator Spare Parts Insights",
    description:
      "Explore expert articles on elevator spare parts, safety tips and supplier insights in UAE with Bestech Parts blog.",
    url: "https://www.bestechparts.ae/blog",
    images: [
      {
        url: "https://www.bestechparts.ae/images/og-blog.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bestech Parts UAE Blog | Elevator Spare Parts Insights",
    description:
      "Explore expert articles on elevator spare parts, safety tips and supplier insights in UAE with Bestech Parts blog.",
    images: ["https://www.bestechparts.ae/images/og-blog.jpg"],
  },
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
