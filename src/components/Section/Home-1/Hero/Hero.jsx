"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSearch from "./HeroSearch";
import styles from "./Hero.module.css";

const BACKGROUNDS = [
  "/img/header/slider/1.webp",
  "/img/header/slider/2.webp",
  "/img/header/slider/3.webp",
];
const ROTATE_MS = 7000;

const POPULAR = [
  { name: "Buttons", slug: "buttons" },
  { name: "Contactors", slug: "contactors" },
  { name: "Door Locks", slug: "door-locks" },
  { name: "Sensors", slug: "sensors" },
  { name: "Encoders", slug: "encoders" },
  { name: "Guide Shoes", slug: "guide-shoes" },
];

const Hero = ({ partCount }) => {
  const [active, setActive] = useState(0);
  const [loadRest, setLoadRest] = useState(false);
  const [searching, setSearching] = useState(false);

  // Only the first background is needed for first paint; fetch the others once
  // the page has loaded.
  useEffect(() => {
    const load = () => setLoadRest(true);
    if (document.readyState === "complete") load();
    else window.addEventListener("load", load, { once: true });
    return () => window.removeEventListener("load", load);
  }, []);

  // Cross-fade the backgrounds, but hold still while the search is in use and
  // for visitors who prefer reduced motion.
  useEffect(() => {
    if (!loadRest || searching) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % BACKGROUNDS.length),
      ROTATE_MS
    );
    return () => clearInterval(timer);
  }, [loadRest, searching]);

  const countLabel = partCount ? `${partCount}+` : null;

  return (
    <section className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        {BACKGROUNDS.map((src, index) =>
          index === 0 || loadRest ? (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes="100vw"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`${styles.slide} ${
                index === active ? styles.slideActive : ""
              }`}
            />
          ) : null
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Elevator Spare Parts Supplier · UAE</span>

        <div className={styles.title}>
          Find the Right <span>Spare Part</span>
        </div>

        <p className={styles.sub}>
          Search {countLabel ? `${countLabel} ` : ""}elevator and escalator spare parts by name or part number. Fast, reliable supply across the UAE and GCC.
        </p>

        <div className={styles.search}>
          <HeroSearch onActiveChange={setSearching} />
        </div>

        <div className={styles.popular}>
          <span className={styles.popularLabel}>Popular:</span>
          {POPULAR.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className={styles.chip}
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/products" className={`${styles.chip} ${styles.chipAll}`}>
            All products <i className="icon-right-arrow" aria-hidden="true"></i>
          </Link>
        </div>
      </div>

      {/* <div className={styles.stats}>
        <ul className={styles.statsInner}>
          {countLabel && (
            <li>
              <span className={styles.statValue}>{countLabel}</span>
              <span className={styles.statLabel}>Parts listed</span>
            </li>
          )}
          <li>
            <span className={styles.statValue}>Since 2015</span>
            <span className={styles.statLabel}>Supplying elevator parts</span>
          </li>
          <li>
            <span className={styles.statValue}>UAE-wide</span>
            <span className={styles.statLabel}>Supply from Sharjah</span>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Hero;
