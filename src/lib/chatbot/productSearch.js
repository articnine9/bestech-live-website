// Server-side product search over the catalog.
//
// Kept server-side deliberately: src/db/products.json is ~1.3MB, so importing it
// into a client component would ship the entire catalog to every visitor.
// The chatbot calls /api/chatSearch instead.

import catalog from "~/db/products.json";

// Hub categories list sub-category links rather than real products; those entries
// carry a two-letter code (BS-EL, BS-DD) instead of the usual BS-XX0000.
const NAV_CODE = /^BS-[A-Z]{2}$/i;

const normalize = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// "BS-CT0013" and "bs ct 0013" and "ct0013" should all match the same product.
const normalizeCode = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Conversational filler carries no catalogue signal. Without this, "where are you
// located" matches "squ-are" button and hijacks the FAQ answer.
const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "if", "of", "to", "in", "on", "at", "by",
  "for", "with", "from", "is", "are", "was", "were", "be", "been", "am", "do",
  "does", "did", "can", "could", "will", "would", "should", "shall", "have",
  "has", "had", "i", "me", "my", "we", "us", "our", "you", "your", "it", "its",
  "this", "that", "these", "those", "there", "here", "what", "which", "who",
  "how", "when", "where", "why", "any", "some", "all", "please", "hi", "hello",
  "hey", "need", "want", "looking", "look", "get", "got", "give", "show", "tell",
  "know", "about", "near", "they", "them", "so", "not", "no", "yes", "ok",
  "buy", "price", "cost", "much", "many", "available", "stock", "supply", "bs",
]);

const tokenize = (s) =>
  normalize(s)
    .split(" ")
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));

/**
 * Scores one query token against a product's token list.
 * Exact wins; prefix handles "contact"->"contactor"; a length-guarded substring
 * handles "110v"->"ac110v" without letting 3-letter tokens match mid-word.
 */
function tokenScore(qt, tokens, weights) {
  if (tokens.includes(qt)) return weights.exact;
  if (qt.length >= 3 && tokens.some((pt) => pt.startsWith(qt))) return weights.prefix;
  if (qt.length >= 4 && tokens.some((pt) => pt.includes(qt))) return weights.partial;
  return 0;
}

// The catalog contains a duplicate `door-sliders` category (one populated, one
// empty). Merge by slug so a category is never represented twice.
function getCategories() {
  const bySlug = new Map();

  for (const cat of catalog) {
    if (!cat?.slug) continue;

    const existing = bySlug.get(cat.slug);
    const items = (cat.items || []).filter((i) => i?.url && !NAV_CODE.test(i.code || ""));

    if (existing) {
      existing.items.push(...items);
      continue;
    }

    bySlug.set(cat.slug, {
      slug: cat.slug,
      name: cat.page_name || cat.slug,
      items,
    });
  }

  return [...bySlug.values()];
}

const CATEGORIES = getCategories();

// Flattened once at module load — the catalog is static, so this cost is paid
// a single time per server process rather than per request.
const INDEX = CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    name: item.name || "",
    description: item.description || "",
    code: item.code || "",
    image: item.image || "/img/product-default-img.jpg",
    url: `/products${item.url}`,
    categorySlug: cat.slug,
    categoryName: cat.name,
    _name: normalize(item.name),
    _code: normalizeCode(item.code),
    _nameTokens: normalize(item.name).split(" ").filter(Boolean),
    _descTokens: normalize(item.description).split(" ").filter(Boolean),
    _catTokens: normalize(cat.name).split(" ").filter(Boolean),
  }))
);

export function listCategories() {
  return CATEGORIES.filter((c) => c.items.length > 0)
    .map((c) => ({ slug: c.slug, name: c.name, count: c.items.length }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryProducts(slug, limit = 6) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return [];
  return cat.items.slice(0, limit).map((item) => ({
    name: item.name,
    description: item.description || "",
    code: item.code,
    image: item.image || "/img/product-default-img.jpg",
    url: `/products${item.url}`,
    categoryName: cat.name,
  }));
}

const toResult = (p) => ({
  name: p.name,
  description: p.description,
  code: p.code,
  image: p.image,
  url: p.url,
  categoryName: p.categoryName,
});

// Below this, a hit is a stray description word rather than a real match.
const MIN_SCORE = 50;

/**
 * Ranked search across product name, code, category and description.
 * Returns [] when the query carries no catalogue signal, which lets the caller
 * fall back to the FAQ.
 */
export function searchProducts(query, limit = 6) {
  const q = normalize(query);
  if (q.length < 2) return [];

  const qCode = normalizeCode(query);

  // A full part number is unambiguous — return it alone rather than padding the
  // list with weak matches.
  if (qCode.length >= 6) {
    const exact = INDEX.find((p) => p._code && p._code === qCode);
    if (exact) return [toResult(exact)];
  }

  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const scored = [];

  for (const p of INDEX) {
    let score = 0;

    if (p._code && qCode.length >= 4 && p._code.includes(qCode)) score += 500;

    if (p._name === q) score += 400;
    else if (p._name.includes(q)) score += 200;

    let matched = 0;
    for (const t of tokens) {
      const nameHit = tokenScore(t, p._nameTokens, { exact: 80, prefix: 55, partial: 40 });
      const catHit = nameHit ? 0 : tokenScore(t, p._catTokens, { exact: 30, prefix: 20, partial: 0 });
      const descHit = nameHit || catHit ? 0 : tokenScore(t, p._descTokens, { exact: 18, prefix: 12, partial: 0 });
      const hit = nameHit || catHit || descHit;
      if (hit) matched += 1;
      score += hit;
    }

    // Reward covering the whole query — "door lock" should beat a lone "door".
    if (matched === tokens.length && tokens.length > 1) score += 100;

    if (score >= MIN_SCORE) scored.push({ p, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.p.name.localeCompare(b.p.name))
    .slice(0, limit)
    .map(({ p }) => toResult(p));
}
