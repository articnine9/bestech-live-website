import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "~/db/testimonialData.json";
import styles from "./TestimonialMarquee.module.css";

// Each row needs enough cards to stay wider than the screen, so the list is
// repeated; the track then slides by exactly half its width for a seamless loop.
const MIN_CARDS_PER_HALF = 8;

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const fillRow = (items) => {
  const row = [];
  while (row.length < MIN_CARDS_PER_HALF) row.push(...items);
  return row;
};

const Card = ({ item, hidden }) => (
  <li className={styles.card} aria-hidden={hidden || undefined}>
    <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
    <p className={styles.text}>{item.description}</p>
    <div className={styles.person}>
      <span className={styles.avatar} aria-hidden="true">
        {initials(item.name)}
      </span>
      <span>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.role}>{item.role}</span>
      </span>
    </div>
  </li>
);

const Row = ({ items, reverse }) => {
  const half = fillRow(items);
  return (
    <div className={styles.row}>
      <ul className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}>
        {half.map((item, i) => (
          // Only the first pass through the list is exposed to screen readers.
          <Card key={`a-${i}`} item={item} hidden={i >= items.length} />
        ))}
        {half.map((item, i) => (
          <Card key={`b-${i}`} item={item} hidden />
        ))}
      </ul>
    </div>
  );
};

const TestimonialMarquee = () => {
  if (!testimonials.length) return null;

  // Offset the second row so the same card is not stacked above itself.
  const offset = Math.ceil(testimonials.length / 2);
  const secondRow = [...testimonials.slice(offset), ...testimonials.slice(0, offset)];

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.head}>
        <span className={styles.badge}>
          <span className={styles.badgeIcon} aria-hidden="true">
            ★
          </span>
          Customer feedback
        </span>
        <h2 id="testimonials-heading" className={styles.title}>
          Words from the teams who rely on our parts.
        </h2>
      </div>

      <div className={styles.rows}>
        <Row items={testimonials} />
        <Row items={secondRow} reverse />
      </div>
    </section>
  );
};

export default TestimonialMarquee;
