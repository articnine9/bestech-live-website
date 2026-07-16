// Single source of truth for the facts the chatbot is allowed to state.
// Mirrors the Organization/Store JSON-LD in src/app/layout.js — if the business
// details change, update both.

export const companyInfo = {
  name: "Bestech",
  mobile: "+971543093833",
  landline: "+97165227299",
  email: "sales@bestechparts.ae",
  whatsapp: "https://wa.me/971543093833",
  address:
    "Shops 2-3-4, Building 1080, Fire Station Road, Muwaileh, near Muwaileh bus station, Sharjah, UAE",
  mapUrl: "https://maps.google.com/?q=25.29891,55.44419",
  hours: "Monday to Saturday, 8:00 AM to 6:00 PM. Closed on Sunday.",
  foundedYear: "2015",
};

// Display form: +971 54 309 3833
export const mobileDisplay = "+971 54 309 3833";
export const landlineDisplay = "+971 6 522 7299";
