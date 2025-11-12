"use client";

import "../assets/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/custom-animate.css";
import "../assets/css/responsive.css";
import "../assets/css/icomoon.css";
import "../assets/css/color-2.css";
import "../assets/css/color-3.css";
import "../assets/css/react-adjustment.css";
import "../assets/css/module-css/about.css";
import "../assets/css/module-css/footer.css";
import "../assets/css/module-css/header.css";

import Loading from "../components/Section/Common/Loading/Loading";
import Footer from "../components/Section/Common/Footer";
import Header from "../components/Section/Common/Header";
import ChatPopup from "@/components/ChatPopup";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  // ✅ JSON-LD Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.bestechparts.ae/#organisation",
        name: "Bestech",
        url: "https://www.bestechparts.ae/",
        logo: "https://www.bestechparts.ae/wp-content/uploads/logo.png",
        email: "mailto:sales@bestechparts.ae",
        telephone: "+9715453093833",
        foundingDate: "2015",
        description:
          "Supplier of high-quality elevator spare parts across the UAE — control systems, motors, cables, sensors and other elevator components.",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+9715453093833",
            contactType: "customer service",
            areaServed: "AE",
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+97165227299",
            contactType: "landline",
            areaServed: "AE",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "Store",
        "@id": "https://www.bestechparts.ae/#store",
        name: "Bestech (Elevator Spare Parts)",
        image: "https://www.bestechparts.ae/wp-content/uploads/logo.png",
        description:
          "Bestech supplies premium elevator spare parts in Sharjah and UAE, serving residential, commercial and industrial customers.",
        url: "https://www.bestechparts.ae/",
        telephone: "+9715453093833",
        email: "mailto:sales@bestechparts.ae",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shops 2-3-4, Building 1080, Fire Station Road, Muwaileh, Near to Muwaileh bus station",
          addressLocality: "Muwaileh, Sharjah",
          addressRegion: "Sharjah",
          postalCode: "",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.29891,
          longitude: 55.44419,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/bestechparts",
          "https://www.instagram.com/bestechparts",
          "https://www.linkedin.com/company/bestechparts",
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.bestechparts.ae/#website",
        url: "https://www.bestechparts.ae/",
        name: "Bestech - Elevator Spare Parts",
        publisher: { "@id": "https://www.bestechparts.ae/#organisation" },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.bestechparts.ae/#product-catalog",
        name: "Bestech Product Categories",
        itemListOrder: "ItemListOrder",
        numberOfItems: 10,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: "https://www.bestechparts.ae/products/electrical",
            name: "Electrical",
          },
          {
            "@type": "ListItem",
            position: 2,
            url: "https://www.bestechparts.ae/products/mechanical",
            name: "Mechanical",
          },
          {
            "@type": "ListItem",
            position: 3,
            url: "https://www.bestechparts.ae/products/cables-and-wires",
            name: "Cables and Wires",
          },
          {
            "@type": "ListItem",
            position: 4,
            url: "https://www.bestechparts.ae/products/contactors",
            name: "Contactors",
          },
          {
            "@type": "ListItem",
            position: 5,
            url: "https://www.bestechparts.ae/products/circuit-breakers",
            name: "Circuit Breakers",
          },
          {
            "@type": "ListItem",
            position: 6,
            url: "https://www.bestechparts.ae/products/buttons",
            name: "Buttons",
          },
          {
            "@type": "ListItem",
            position: 7,
            url: "https://www.bestechparts.ae/products/switches",
            name: "Switches",
          },
          {
            "@type": "ListItem",
            position: 8,
            url: "https://www.bestechparts.ae/products/cabinet-set",
            name: "Cabinet Set",
          },
          {
            "@type": "ListItem",
            position: 9,
            url: "https://www.bestechparts.ae/products/encoders",
            name: "Encoders",
          },
          {
            "@type": "ListItem",
            position: 10,
            url: "https://www.bestechparts.ae/products/guide-shoes",
            name: "Guide Shoes",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="5G_g1LOKIRxZsx5OK2FRy3fE6BTHyqjaYx6oILOgRAs"
        />

        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6PZHR4B');
            `,
          }}
        />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>

      <body>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6PZHR4B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Page Loading Spinner */}
        <Loading isLoading={isLoading} />

        {/* ✅ Main Layout */}
        {!isLoading && (
          <>
            <Header />
            {children}
            <ChatPopup />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
