"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Section/Common/Loading/Loading";
import Header from "./Section/Common/Header";
import Footer from "./Section/Common/Footer";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
