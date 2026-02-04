import About from "~/components/Section/Home-1/About";
import Blog from "~/components/Section/Home-1/Blog";
import ChooseUs from "~/components/Section/Home-1/ChooseUs/ChooseUs";
import Faq from "~/components/Section/Home-1/Faq/Faq";
import Hero from "~/components/Section/Home-1/Hero";
import Service from "~/components/Section/Home-1/Service";

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
  return (
    <div className="body-dark-bg homeOne">
      <div className="fix">
        <Hero />
        <About />
        <Service />
        <ChooseUs />
        <Faq />
        <Blog />
      </div>
    </div>
  );
}
