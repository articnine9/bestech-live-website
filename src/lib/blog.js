// lib/blog.js

// Example blog data — in real usage, you might fetch from a CMS or database
export const blogPosts = [
  {
    slug: "innovations-in-elevator-safety-systems",
    title: "Innovations in Elevator Safety Systems",
    date: "2025-01-15",
    description: "Tips for maintaining elevator cables safely and efficiently.",
  },
  {
    slug: "new-range-of-control-panels-launched-by-bestech",
    title: "New Range of Control Panels Launched by Bestech",
    date: "2025-02-05",
    description: "Guide for selecting the best circuit breakers for elevators.",
  },
  {
    slug: "how-smart-elevators-are-shaping-the-future",
    title: "How Smart Elevators Are Shaping the Future",
    date: "2025-03-10",
    description:
      "Overview of the most reliable lift contactors available in UAE.",
  },
  {
    slug: "successful-elevator-system-upgrade-in-sharjah-mall",
    title: "Successful Elevator System Upgrade in Sharjah Mall",
    date: "2025-03-10",
    description:
      "Overview of the most reliable lift contactors available in UAE.",
  },
];

// Function to fetch all blog posts
export async function getAllBlogPosts() {
  // If fetching from an API or CMS, replace the following line with fetch logic
  return blogPosts;
}

// Optional: fetch a single blog by slug
export async function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
