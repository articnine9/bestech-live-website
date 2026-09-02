"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Section/Common/Loading/Loading";
import Footer from "./Section/Common/Footer";
import Header from "./Section/Common/Header";
import ChatPopup from "./ChatPopup";
import Chatbot from "./Chatbot/Chatbot";
import FloatingButtons from "./FloatingButtons";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const deferredStyles = ["/css/animate.min.css", "/css/custom-animate.css"];
    const load = () => {
      deferredStyles.forEach((href) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = href;
          document.head.appendChild(link);
        }
      });
    };

    if (document.readyState === "complete") load();
    else window.addEventListener("load", load, { once: true });
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          {children}
          <ChatPopup />
          <Chatbot />
          <FloatingButtons />
          <Footer />
        </>
      )}
    </>
  );
}
