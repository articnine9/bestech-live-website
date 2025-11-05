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
    }, 200); // Adjust loading duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="5G_g1LOKIRxZsx5OK2FRy3fE6BTHyqjaYx6oILOgRAs"
        />

        {/* Google Tag Manager */}
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
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6PZHR4B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Loading */}
        <Loading isLoading={isLoading} />

        {/* Main content */}
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
