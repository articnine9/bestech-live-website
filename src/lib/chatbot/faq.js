import { companyInfo, mobileDisplay, landlineDisplay } from "./companyInfo";

// Keyword-matched FAQ. `keywords` are matched against the normalized user message;
// `weight` breaks ties when a message matches more than one entry.
export const faqEntries = [
  {
    id: "location",
    keywords: ["where", "location", "address", "shop", "store", "office", "located", "directions", "map", "find you", "sharjah", "dubai", "visit"],
    weight: 1,
    answer: `We are located at ${companyInfo.address}.`,
    links: [{ label: "Open in Google Maps", href: companyInfo.mapUrl, external: true }],
  },
  {
    id: "hours",
    keywords: ["hours", "open", "timing", "time", "closed", "close", "working", "sunday", "friday", "saturday", "weekend", "when"],
    weight: 1,
    answer: `Our working hours are ${companyInfo.hours}`,
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "call", "number", "mobile", "telephone", "email", "mail", "reach", "talk", "speak"],
    weight: 1,
    answer: `You can reach us on ${mobileDisplay} (mobile), ${landlineDisplay} (landline), or by email at ${companyInfo.email}.`,
    links: [
      { label: "Call now", href: `tel:${companyInfo.mobile}`, external: true },
      { label: "Email us", href: `mailto:${companyInfo.email}`, external: true },
      { label: "Contact page", href: "/contact" },
    ],
  },
  {
    id: "delivery",
    keywords: ["delivery", "deliver", "shipping", "ship", "courier", "dispatch", "send", "how long", "lead time"],
    weight: 1,
    answer:
      "We supply elevator spare parts across the UAE, including Dubai, Sharjah and Abu Dhabi. Delivery times depend on the part and quantity — share the part you need and our team will confirm availability and timing.",
  },
  {
    id: "price",
    keywords: ["price", "cost", "how much", "rate", "quote", "quotation", "pricing", "cheap", "discount", "offer"],
    weight: 2,
    answer:
      "Pricing depends on the part, quantity and current stock, so we quote each request individually. Tell me which part you need and I can pass your details to our sales team for a quote.",
  },
  {
    id: "stock",
    // "supply" is deliberately absent: "do you supply Otis parts?" is a brand
    // question, not a stock question.
    keywords: ["stock", "available", "availability", "in stock", "have"],
    weight: 1,
    answer:
      "Stock changes daily, so our sales team confirms availability directly. Search for the part here and I can arrange a callback to confirm stock for you.",
  },
  {
    id: "about",
    keywords: ["about", "who are you", "company", "bestech", "what do you do", "business"],
    weight: 1,
    answer: `Bestech has supplied elevator spare parts across the UAE since ${companyInfo.foundedYear} — control systems, door drives, motors, cables, sensors, buttons and more, for residential, commercial and industrial lifts.`,
    links: [{ label: "About us", href: "/about" }],
  },
  {
    id: "brands",
    keywords: ["brand", "brands", "otis", "kone", "schindler", "mitsubishi", "hyundai", "thyssen", "fuji", "compatible", "oem"],
    // A brand name is a high-confidence signal — it outranks generic verbs.
    weight: 2,
    answer:
      "We stock parts compatible with all major elevator brands, including Otis, Kone, Schindler, Mitsubishi, Hyundai and more. You can browse parts by brand, or tell me the brand and part you need.",
    links: [{ label: "Browse brands", href: "/brands" }],
  },
  {
    id: "install",
    keywords: ["install", "installation", "fit", "repair", "service", "maintenance", "technician", "fix"],
    weight: 1,
    answer:
      "We are a spare parts supplier rather than a maintenance contractor. For installation or repair guidance, our team can advise on the right part for your lift — I can arrange a callback.",
  },
  {
    id: "return",
    keywords: ["return", "refund", "warranty", "guarantee", "exchange", "faulty", "damaged"],
    weight: 1,
    answer:
      "For returns, warranty or replacement of a faulty part, please contact our sales team directly with your order details and they will assist you.",
    links: [{ label: "Contact us", href: "/contact" }],
  },
];

const normalize = (s) =>
  String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/**
 * Best-matching FAQ entry for a message, or null when nothing matches well.
 * Longer keyword hits score higher so "how much" beats a stray "much".
 */
export function matchFaq(message) {
  const text = ` ${normalize(message)} `;
  let best = null;
  let bestScore = 0;

  for (const entry of faqEntries) {
    let score = 0;
    for (const kw of entry.keywords) {
      const k = normalize(kw);
      if (k && text.includes(` ${k} `)) score += k.length * entry.weight;
      else if (k.includes(" ") && text.includes(k)) score += k.length * entry.weight;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore >= 4 ? best : null;
}
