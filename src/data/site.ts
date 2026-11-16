// ─────────────────────────────────────────────────────────────
// Everything a non-developer is likely to change lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "RS Computer Solutions",
  legalName: "RS Computer Solutions, LLC",
  description:
    "RS Computer Solutions provides IT and networking, security and surveillance, business communications, and software and technical support for businesses across Pennsylvania, New Jersey, and Delaware.",

  // All inquiries go to this address. There is no public phone number.
  email: "ron@myvirusfreecomputer.com",
  // TODO: confirm the town (from a public directory listing).
  location: "Elkins Park, PA",
  serviceArea: "Pennsylvania, New Jersey, and Delaware",

  // TODO: confirm the exact current Panasonic designation before publishing.
  panasonicTitle: "Panasonic Authorized Dealer & Technician",

  // Contact form delivery: messages are relayed to the email above by
  // formsubmit.co. The first message ever sent triggers a one-time
  // confirmation email to that address, which must be clicked to activate it.
};

export const nav = [
  { label: "Home", href: "" },
  { label: "Services", href: "services/" },
  { label: "Industries", href: "industries/" },
  { label: "About", href: "about/" },
  { label: "Contact", href: "contact/" },
];

// Extra links shown only in the footer.
export const footerNav = [...nav, { label: "Panasonic Phone Systems", href: "panasonic-solutions/" }];

export const services = [
  {
    id: "it-networking",
    icon: "network",
    image: "network",
    title: "IT & Networking",
    card: "Reliable infrastructure, networking, cabling, and ongoing support.",
    text: "Professional network design, infrastructure installation, structured cabling, connectivity, and maintenance for businesses of all sizes.",
  },
  {
    id: "security-surveillance",
    icon: "camera",
    image: "camera",
    title: "Security & Surveillance",
    card: "Professional surveillance systems and security camera installation.",
    text: "Commercial security camera systems, video surveillance, installation, configuration, and ongoing support for offices, retail locations, parking areas, and commercial facilities.",
  },
  {
    id: "business-communications",
    icon: "phone",
    image: "phone",
    title: "Business Communications",
    card: "Business phone systems, PBX solutions, and connectivity.",
    text: "Business telephone systems, PBX solutions, and communications infrastructure, with specialized experience in Panasonic systems.",
  },
  {
    id: "software-support",
    icon: "desktop",
    image: "software",
    title: "Software & Technical Support",
    card: "Business software, Microsoft 365, troubleshooting, and IT assistance.",
    text: "Business software installation, configuration, troubleshooting, and everyday technical support, including Microsoft 365, QuickBooks, Microsoft Active Directory, and specialized practice-management applications.",
  },
];

export const why = [
  { icon: "users", title: "Experienced & Knowledgeable", text: "Practical technical expertise across different systems and business environments." },
  { icon: "shield", title: "Reliable Solutions", text: "Technology designed to support everyday business operations." },
  { icon: "bolt", title: "Business Focused", text: "Solutions based on how each customer operates." },
  { icon: "pin", title: "Local & Responsive", text: "Accessible, hands-on technical assistance." },
];

export const industries = [
  {
    icon: "tooth",
    image: "dental",
    title: "Dental & Healthcare Practices",
    text: "Dependable practice technology, networking, communications, and specialized software support.",
  },
  {
    icon: "building",
    image: "office",
    title: "Professional Offices",
    text: "IT infrastructure, business communications, and technical support for law firms and professional services.",
  },
  {
    icon: "store",
    image: "restaurant",
    title: "Retail & Restaurants",
    text: "Networking, security systems, and everyday technology support for customer-facing businesses.",
  },
  {
    icon: "parking",
    image: "commercial",
    title: "Commercial Properties",
    text: "Technology and surveillance solutions for garages, parking facilities, offices, and commercial buildings.",
  },
];

export const panasonic = [
  {
    icon: "phone",
    title: "New Systems & Installation",
    text: "New Panasonic business phone systems, supplied, installed, and programmed for the way your business takes calls.",
  },
  {
    icon: "wrench",
    title: "Service & Repair",
    text: "Troubleshooting and repair for Panasonic phone systems and PBX equipment, to keep your existing system working.",
  },
  {
    icon: "shield",
    title: "Programming & Ongoing Support",
    text: "Extensions, call routing, greetings, and voicemail updated as your business changes, with a technician available when you need help.",
  },
];

export const about = [
  { icon: "users", title: "Relationship-Driven Service", text: "Building lasting working relationships with customers." },
  { icon: "wrench", title: "Hands-On Expertise", text: "Practical knowledge across networking, communications, security, and business technology." },
  { icon: "shield", title: "Reliable Support", text: "Helping businesses resolve problems and keep their systems running." },
  { icon: "compass", title: "Solutions That Fit", text: "Recommending technology based on operational needs rather than unnecessary complexity." },
];
