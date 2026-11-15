// ─────────────────────────────────────────────────────────────
// Everything a non-developer is likely to change lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "RS Computer Solutions",
  legalName: "RS Computer Solutions, LLC",
  tagline: "Boutique technology firm. Owner-operated.",
  description:
    "RS Computer Solutions is an owner-operated technology firm providing IT, networking, security cameras, phone systems, and dental practice technology to businesses in southeastern Pennsylvania.",

  // Color layout: "1" charcoal, "2" cream, "3" maroon, "4" powder blue.
  look: "1",

  // TODO: CONFIRM before going live. Phone and town came from a public
  // business directory listing, not from the owner.
  phone: "(267) 625-8011",
  // Leave email empty ("") to hide the email link and the message form.
  email: "",
  location: "Elkins Park, PA",
  serviceArea: "Philadelphia, Montgomery, Bucks, Delaware, and Chester counties",
};

export const phoneHref = "tel:+1" + site.phone.replace(/\D/g, "");

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  // Optional product names, shown only on the service's own page. Use [] to hide.
  familiar: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: "it-consulting",
    icon: "compass",
    title: "IT Consulting & Support",
    short: "A dedicated technology partner for your business: guidance, day-to-day support, and someone accountable when it matters.",
    intro:
      "I act as the technology department for businesses that don't have one. That means keeping your systems running, supporting your staff, and helping you make sound decisions about what to buy, replace, and protect.",
    includes: [
      "Ongoing support, on-site and remote",
      "Technology planning and purchasing guidance",
      "Security and data protection",
      "Setup for new employees and new equipment",
      "Coordination with your other technology vendors",
    ],
    familiar: [],
    goodFor: "Businesses that want one trusted person responsible for their technology.",
  },
  {
    slug: "networking-and-infrastructure",
    icon: "server",
    title: "Networking & Infrastructure",
    short: "The foundation your business runs on: networks, servers, and cabling, designed and installed properly.",
    intro:
      "Everything else depends on the network and the server behind it. I design and install the complete infrastructure for an office, from the cabling in the walls to the systems that manage your users and files.",
    includes: [
      "Wired and wireless networks",
      "Structured cabling",
      "Servers and user management",
      "Secure remote access",
      "Upgrades and replacements for aging systems",
    ],
    familiar: ["Active Directory"],
    goodFor: "Offices that are opening, moving, expanding, or outgrowing what they have.",
  },
  {
    slug: "security-cameras",
    icon: "camera",
    title: "Security Camera Systems",
    short: "Professional surveillance for your property, from a single storefront to a multi-level garage.",
    intro:
      "I design and install complete camera systems that cover what matters, record reliably, and let you check in from anywhere.",
    includes: [
      "System design and camera placement",
      "Professional installation and cabling",
      "Recording and storage",
      "Remote viewing from your phone or computer",
      "Service and expansion of existing systems",
    ],
    familiar: [],
    goodFor: "Restaurants, retail, parking lots and garages, offices, and warehouses.",
  },
  {
    slug: "phone-systems",
    icon: "phone",
    title: "Business Phone Systems",
    short: "Complete phone systems, installed, programmed, and supported by a Panasonic authorized dealer and technician.",
    intro:
      "I install and support complete business phone systems, so every call reaches the right person and your callers always hear a professional greeting.",
    includes: [
      "New phone system installation",
      "Call handling and greetings set up for how you work",
      "Voicemail",
      "Changes as your staff and offices change",
      "Service for existing systems",
    ],
    familiar: ["Panasonic PBX"],
    goodFor: "Front desks, multi-line offices, and any business that depends on the phone.",
  },
  {
    slug: "dental-practice-technology",
    icon: "tooth",
    title: "Dental Practice Technology",
    short: "The complete technology environment for a dental office, including installation and support of practice software.",
    intro:
      "A dental practice runs on specialized software that has to work in every operatory, every day. I install and support that software and build the entire technology environment around it.",
    includes: [
      "Practice management software installation and support",
      "Imaging software integration",
      "Operatory and front-desk systems",
      "Servers and networks for the practice",
      "New office build-outs and relocations",
    ],
    familiar: ["Dentrix", "Eaglesoft", "Carestream"],
    goodFor: "New practices, practice transitions, software changes, and expansions.",
  },
  {
    slug: "business-software",
    icon: "desktop",
    title: "Business Software & Email",
    short: "The everyday software your team relies on, set up correctly and kept running.",
    intro:
      "I set up and support the software your business uses every day, including email, office applications, and accounting, so your team can simply get to work.",
    includes: [
      "Email and office applications",
      "Accounting software setup and support",
      "User accounts and access",
      "Moving to new software or new computers",
      "Troubleshooting when something stops working",
    ],
    familiar: ["Microsoft 365", "QuickBooks"],
    goodFor: "Any office that depends on email, shared files, and accounting software.",
  },
];

export const industries = [
  {
    icon: "tooth",
    title: "Dental offices",
    text: "The complete technology environment for a practice, from the front desk to every operatory.",
  },
  {
    icon: "scale",
    title: "Law offices",
    text: "Dependable, secure systems for firms that run on documents and deadlines.",
  },
  {
    icon: "pizza",
    title: "Pizza shops & restaurants",
    text: "Cameras, phones, and networks that hold up through the busiest service.",
  },
  {
    icon: "parking",
    title: "Parking lots & garages",
    text: "Surveillance for large and multi-level properties, viewable from anywhere.",
  },
  {
    icon: "building",
    title: "Offices & small businesses",
    text: "Everything a growing business needs, without hiring an IT department.",
  },
];

export const promises = [
  { title: "One number", text: "The person who answers the phone is the person who does the work." },
  { title: "One technician", text: "The same specialist designs, installs, and supports your systems." },
  { title: "Every system", text: "Your technology is planned as a whole, so it works as a whole." },
];

// TODO: owner should review. These lists are a starting point, not confirmed policy.
export const fit = {
  yes: [
    "Small and mid-sized offices, practices, and shops",
    "Owners who want one person accountable for their technology",
    "New locations, moves, and build-outs",
    "Businesses tired of vendors blaming each other",
  ],
  no: [
    "Companies that need a staffed 24/7 help desk",
    "Large enterprises with their own IT department",
  ],
};

export const steps = [
  { title: "Call", text: "Tell me what you need or what isn't working." },
  { title: "Site visit", text: "I look at your space and your current systems." },
  { title: "Proposal", text: "You get a clear plan and a price." },
  { title: "Installation", text: "I install and test everything, and walk your staff through it." },
  { title: "Support", text: "The person who installed it is the person you call afterward." },
];
