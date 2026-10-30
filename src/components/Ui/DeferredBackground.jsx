"use client";

import { useEffect, useId, useRef, useState } from "react";

// CSS backgrounds have no native loading="lazy". Keep the original div and
// background rules, but request its image well before it enters the viewport.
export default function DeferredBackground({ src, className, style }) {
  const ref = useRef(null);
  const id = useId();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "2000px 0px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const backgroundImage = `url("${src}")`;
  return (
    <>
      <div ref={ref} data-deferred-background={id} className={className}
        style={{ ...style, ...(ready ? { backgroundImage } : {}) }} />
      <noscript>
        <style>{`[data-deferred-background="${id}"]{background-image:${backgroundImage}}`}</style>
      </noscript>
    </>
  );
}
