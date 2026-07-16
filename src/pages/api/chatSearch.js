// pages/api/chatSearch.js
// Backs the chatbot's product lookup. Server-side so the ~1.3MB catalog never
// reaches the browser bundle.

import {
  searchProducts,
  listCategories,
  getCategoryProducts,
} from "~/lib/chatbot/productSearch";

const MAX_QUERY_LENGTH = 100;

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { q, category, categories } = req.query;

  try {
    if (categories) {
      return res.status(200).json({ categories: listCategories() });
    }

    if (category) {
      const slug = String(category).slice(0, MAX_QUERY_LENGTH);
      return res.status(200).json({ results: getCategoryProducts(slug) });
    }

    if (typeof q === "string" && q.trim()) {
      const query = q.trim().slice(0, MAX_QUERY_LENGTH);
      return res.status(200).json({ results: searchProducts(query) });
    }

    return res.status(400).json({ message: "Provide q, category or categories" });
  } catch (err) {
    console.error("chatSearch failed:", err);
    return res.status(500).json({ message: "Search failed" });
  }
}
