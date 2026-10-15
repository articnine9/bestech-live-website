import dynamic from "next/dynamic";
import blogData from "~/db/blogsData.json";
import catalog from "~/db/products.json";
import Hero from "~/components/Section/Home-1/Hero";

// Hub categories list sub-category links (two-letter codes such as BS-EL), not
// real parts, so they are left out of the count. Rounded down so the headline
// figure stays true as the catalogue changes.
const NAV_CODE = /^BS-[A-Z]{2}$/i;
const partTotal = catalog.reduce(
  (sum, cat) =>
    sum +
    (cat.items || []).filter((i) => i?.url && !NAV_CODE.test(i.code || "")).length,
  0
);
// const partCount = Math.floor(partTotal / 50) * 50;
const partCount = 1000;


// Below-fold sections — loaded after page is interactive
const About   = dynamic(() => import("~/components/Section/Home-1/About"));
const Service = dynamic(() => import("~/components/Section/Home-1/Service"));
const ChooseUs = dynamic(() => import("~/components/Section/Home-1/ChooseUs/ChooseUs"));
const Testimonials = dynamic(() => import("~/components/Section/Home-1/Testimonial/TestimonialMarquee"));
const Faq     = dynamic(() => import("~/components/Section/Home-1/Faq/Faq"));
const Blog    = dynamic(() => import("~/components/Section/Home-1/Blog"));

export const metadata = {
  title: "Elevator Spare Parts Supplier in Dubai, UAE | Bestech Parts",
  description:
    "Elevator spare parts supplier in Dubai, UAE for quality lift parts. Trusted elevator spare parts suppliers in Sharjah and dealers all over UAE.",

  alternates: {
    canonical: "https://www.bestechparts.ae/",
  },

  keywords: [
    "Elevator spare parts supplier in Dubai",
    "lift parts supplier in Dubai",
    "elevator spare parts suppliers in Sharjah",
    "elevator spare parts dealers UAE",
  ],

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    siteName: "Bestech Parts",
    title: "Elevator Spare Parts Supplier in Dubai, UAE | Bestech Parts",
    description:
      "Elevator spare parts supplier in Dubai, UAE for quality lift parts. Trusted elevator spare parts suppliers in Sharjah and dealers all over UAE.",
    url: "https://www.bestechparts.ae/",
    images: [
      {
        url: "https://www.bestechparts.ae/images/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elevator Spare Parts Supplier in Dubai, UAE | Bestech Parts",
    description:
      "Elevator spare parts supplier in Dubai, UAE for quality lift parts. Trusted elevator spare parts suppliers in Sharjah and dealers all over UAE.",
    images: ["https://www.bestechparts.ae/images/og-home.jpg"],
  },
};

export default function Home() {
  // const websiteSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   "name": "Bestech Parts",
  //   "url": "https://www.bestechparts.ae",
  //   "potentialAction": {
  //     "@type": "SearchAction",
  //     "target": "https://www.bestechparts.ae/search?q={search_term_string}",
  //     "query-input": "required name=search_term_string"
  //   }
  // };
  return (
    <>
    {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      /> */}
    <div className="body-dark-bg homeOne">
      <div className="fix">
        <Hero partCount={partCount} />
        <About />
        <Service />
        <ChooseUs />
        <Testimonials />
        <Faq />
        <Blog data={blogData.map(({ link, image, category, title, author, date }) => ({
          link, image, category, title, author, date,
        }))} />
      </div>
    </div>
    </>
  );
}
