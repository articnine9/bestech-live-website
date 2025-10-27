// lib/blog.js

// Example blog data — in real usage, you might fetch from a CMS or database
export const blogPosts = [
  {
    slug: "most-common-elevator-electrical-mechanical-spare-parts-in-uae",
    title: "Most Common Elevator Electrical & Mechanical Spare Parts in UAE",
    date: "2025-01-15",
    description: "Tips for maintaining elevator cables safely and efficiently.",
  },
  {
    slug: "top-elevator-spare-parts-suppliers-in-dubai-how-to-choose-the-right-one",
    title:
      "Top Elevator Spare Parts Suppliers in Dubai: How to Choose the Right One",
    date: "2025-02-05",
    description: "Guide for selecting the best circuit breakers for elevators.",
  },
  {
    slug: "elevator-safety-essentials-door-locks-wheels-cables-in-dubai-sharjah",
    title:
      "Elevator Safety Essentials: Door Locks, Wheels & Cables in Dubai & Sharjah",
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
