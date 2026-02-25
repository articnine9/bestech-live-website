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
  {
    slug: "essential-control-system-components-for-elevators-buttons-sensors-inverters-more",
    title:
      "Essential Control System Components for Elevators: Buttons, Sensors, Inverters & More",
    date: "2025-03-10",
    description:
      "Explore elevator control parts from BESTECH, leading supplier of buttons, sensors, inverters, ARD, and signalization systems across UAE.",
  },
  {
    slug: "how-to-choose-the-right-elevator-cables-wires-safety-durability-compliance-in-the-uae",
    title:
      "How to Choose the Right Elevator Cables & Wires: Safety, Durability & Compliance in the UAE",
    date: "2025-03-10",
    description:
      "Learn how to choose safe elevator cables and wires in the UAE with simple steps covering safety types, rules, and buying tips for long use.",
  },
  {
    slug: "why-high-quality-control-system-components-matter-in-elevator-safety-performance",
    title:
      "Why High-Quality Control System Components Matter in Elevator Safety & Performance",
    date: "2025-03-10",
    description:
      "Discover why high-quality elevator control components are vital for safety, reliability, and performance across the UAE with Bestech Parts.",
  },
  {
    slug: "why-elevator-inverters-are-key-to-smooth-ride-quality-energy-efficiency",
    title:
      "Why Elevator Inverters Are Key to Smooth Ride Quality & Energy Efficiency",
    date: "2025-03-10",
    description:
      "Learn why elevator inverters are key for smooth rides, energy efficiency, and system reliability. Get quality inverters from the best elevator inverter supplier UAE.",
  },
  {
    slug: "elevator-circuit-breakers-guide-uae-lift-safety-parts",
    title: "Elevator Circuit Breakers Guide | UAE Lift Safety Parts",
    date: "2025-03-10",
    description:
      "Learn how circuit breakers protect elevator motors and controllers. Explore MCCB, MCB, and ELCB options and find UAE-approved breakers at Bestech Parts.",
  },
  {
    slug: "understanding-elevator-contactors-reliable-lift-operation-uae",
    title:
      "Understanding Elevator Contactors: The Heart of Reliable Lift Operation",
    date: "2025-03-10",
    description:
      "Understand how elevator contactors support safe lift movement. Learn about types, uses, failure signs, and where to buy trusted elevator contactors in the UAE from Bestech.",
  },
  {
    slug: "elevator-buttons-types-functions-selection-guide-uae",
    title:
      "Elevator Buttons: Types, Functions & How to Choose the Right Button for Your Elevator System",
    date: "2025-03-10",
    description:
      "Learn the types of elevator buttons and their functions with a simple guide on choosing the right buttons for your lift system across the UAE.",
  },
  {
    slug: "elevator-spare-parts-supplier-uae-buyer-guide",
    title:
      "Elevator Buttons: Types, Functions & How to Choose the Right Button for Your Elevator System",
    date: "2025-03-10",
    description:
      "Learn the types of elevator buttons and their functions with a simple guide on choosing the right buttons for your lift system across the UAE.",
  },
  {
    slug: "where-to-buy-genuine-elevator-spare-parts-uae",
    title:
      "Elevator Buttons: Types, Functions & How to Choose the Right Button for Your Elevator System",
    date: "2025-03-10",
    description:
      "Learn the types of elevator buttons and their functions with a simple guide on choosing the right buttons for your lift system across the UAE.",
  },
  {
    slug: "common-elevator-spare-parts-replacement-guide-uae",
    title: "Common Elevator Spare Parts Replacement Guide, UAE",
    date: "2025-03-10",
    description:
      "Learn the types of elevator buttons and their functions with a simple guide on choosing the right buttons for your lift system across the UAE.",
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
