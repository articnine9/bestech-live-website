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
import React, { useEffect, useState } from "react";
import { Metadata } from "../components/Section/Common/Metadata/Metadata";
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

  return (
    <html lang="en">
      <head>
        <title>{Metadata.title}</title>
        <meta name="description" content={Metadata.description} />

        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M6PZHR4B');`,
          }}
        />
        {/* ✅ End Google Tag Manager */}

        {/* Other Metadata icons */}
        {Metadata.icons && (
          <>
            {Metadata.icons.icon.map((icon, index) => (
              <link key={index} rel="icon" href={icon} />
            ))}
            {Metadata.icons.apple &&
              Metadata.icons.apple.map((appleIcon, index) => (
                <link key={index} rel="apple-touch-icon" href={appleIcon} />
              ))}
            {Metadata.icons.shortcut &&
              Metadata.icons.shortcut.map((shortcutIcon, index) => (
                <link key={index} rel="shortcut icon" href={shortcutIcon} />
              ))}
          </>
        )}
      </head>

      <body>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6PZHR4B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* ✅ End Google Tag Manager (noscript) */}

        <Loading isLoading={isLoading} />
        {!isLoading && (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
