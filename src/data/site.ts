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
  serviceArea: "Pennsylvania, New Jersey, and Delaware",

  // TODO: confirm the exact current Panasonic designation before publishing.
  panasonicTitle: "Panasonic Authorized Dealer & Technician",

  // Contact form delivery: messages are relayed to the email above by
  // formsubmit.co. The first message ever sent triggers a one-time
  // confirmation email to that address, which must be clicked to activate it.
};

// The quick-stats band on the Home and About pages.
export const stats = [
  { value: `${new Date().getFullYear() - 2006}`, unit: "Years", label: "In business since 2006" },
  { value: "100+", unit: "", label: "Businesses supported" },
  { value: "24", unit: "Hr", label: "Response time or less" },
  { value: "500+", unit: "", label: "Systems installed" },
];

// What a business usually has to juggle, versus one provider.
export const vendors = ["An IT company", "A security camera installer", "A phone system vendor", "A software support contact"];

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
    card: "Business software, Microsoft 365, troubleshooting, and everyday IT assistance.",
    text: "Business software installation, configuration, troubleshooting, and everyday technical support, including Microsoft 365, QuickBooks, Microsoft Active Directory, and specialized practice-management applications.",
  },
  {
    id: "virus-removal",
    icon: "shield",
    image: "software",
    title: "Virus Removal & Protection",
    card: "Virus and malware cleanup, and the protection to keep it from coming back.",
    text: "Removal of viruses, malware, and ransomware from business computers, followed by the antivirus protection, updates, and safeguards that keep your systems clean and your data safe.",
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
    text: "Networking, phones, security cameras, and everyday technology support for pizza shops, restaurants, and retail stores.",
  },
  {
    icon: "parking",
    image: "commercial",
    title: "Commercial Properties",
    text: "Surveillance and technology for parking lots, garages, and commercial buildings, including multi-location operations.",
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

// ─── Individual service pages (/services/<id>/) ───────────────────────────────
type Detail = {
  headline: string;
  highlight: string;
  lede: string;
  includes: { title: string; text: string }[];
  when: string[];
  cta: string;
  link?: { title: string; text: string; href: string };
};

export const serviceDetails: Record<string, Detail> = {
  "it-networking": {
    headline: "IT & Networking Built to",
    highlight: "Keep You Running.",
    lede: "Your network is the foundation everything else in your business depends on. We design it, install it, and keep it working, so your team can simply get on with the day.",
    includes: [
      { title: "Network Design & Installation", text: "Wired and wireless networks planned around your space, your staff, and the way you work." },
      { title: "Structured Cabling", text: "Clean, labeled, professionally installed cabling for offices, shops, and commercial buildings." },
      { title: "Servers & User Accounts", text: "Servers, domains, shared files, and user access set up properly and kept organized." },
      { title: "Wi-Fi That Reaches Everywhere", text: "Reliable wireless coverage across the whole building, for staff and for guests." },
      { title: "Secure Remote Access", text: "Safe ways for owners and staff to reach what they need from home or another location." },
      { title: "Ongoing Maintenance & Support", text: "Monitoring, updates, and a technician who already knows your setup when something comes up." },
    ],
    when: ["You're opening or moving into a new location", "The network is slow or keeps dropping", "Your server is aging or out of space", "You're adding staff, offices, or locations"],
    cta: "Let's Build a Network You Can Rely On.",
  },
  "security-surveillance": {
    headline: "Security Cameras That",
    highlight: "Protect Your Business.",
    lede: "A camera system only helps if it covers the right places, records reliably, and lets you find what you need. We handle the design, installation, and support from start to finish.",
    includes: [
      { title: "System Design & Camera Placement", text: "A walk-through of your property and a plan that covers what matters, without blind spots." },
      { title: "Professional Installation", text: "Cameras mounted and cabled neatly, indoors and outdoors, by an experienced technician." },
      { title: "Recording & Storage", text: "Recording equipment sized for how much footage you need to keep and for how long." },
      { title: "View From Anywhere", text: "Live and recorded video on your phone, tablet, or computer, wherever you are." },
      { title: "Lots, Garages & Large Properties", text: "Coverage for entrances, exits, parking areas, and multi-level or multi-location sites." },
      { title: "Service & Expansion", text: "Repairs, upgrades, and additional cameras for systems that are already in place." },
    ],
    when: ["You're opening a new location", "Your current system has blind spots", "Footage is unreliable or hard to find", "You manage a parking lot, garage, or multiple sites"],
    cta: "Let's Design the Right Camera System for Your Property.",
  },
  "business-communications": {
    headline: "Phone Systems That",
    highlight: "Never Miss a Call.",
    lede: "Every missed call is missed business. We install, program, and support business phone systems so calls reach the right person and your customers always hear a professional greeting.",
    includes: [
      { title: "New Phone Systems & PBX", text: "Complete business phone systems supplied and installed for offices of every size." },
      { title: "Programming & Call Routing", text: "Extensions, ring groups, auto attendants, and after-hours greetings set up for how you take calls." },
      { title: "Voicemail", text: "Voicemail configured for each person and department, so messages reach the right place." },
      { title: "Moves, Adds & Changes", text: "New extensions and updates whenever your staff, offices, or hours change." },
      { title: "Service & Repair", text: "Troubleshooting and repair for the phone system you already have." },
      { title: "Panasonic Authorized", text: "Authorized dealer and technician for Panasonic business phone systems." },
    ],
    when: ["Customers say they can't get through", "You've outgrown your current system", "You're moving or opening an office", "Your existing system needs service"],
    cta: "Let's Get Your Phones Working the Way They Should.",
    link: { title: "Panasonic Phone Systems", text: "New systems, service, and support from an authorized dealer.", href: "panasonic-solutions/" },
  },
  "software-support": {
    headline: "Software & Support for",
    highlight: "Everyday Business.",
    lede: "The software your team uses every day should simply work. We install it, set it up correctly, and stay available when someone needs help.",
    includes: [
      { title: "Business Software Setup", text: "Installation and configuration of the programs your business depends on." },
      { title: "Microsoft 365 & Email", text: "Email, office applications, and accounts set up and supported for your whole team." },
      { title: "QuickBooks & Accounting Software", text: "Installation, upgrades, and troubleshooting for your accounting software." },
      { title: "Dental Practice Software", text: "Installation and support for practice software including Dentrix, Eaglesoft, and Carestream." },
      { title: "User Accounts & Access", text: "Logins, permissions, and Microsoft Active Directory managed so the right people have the right access." },
      { title: "Everyday Technical Support", text: "Remote and on-site help when a program, a computer, or a printer stops cooperating." },
    ],
    when: ["You're adding staff or new computers", "A program stopped working or runs slowly", "You're switching to new software", "Your dental practice needs software support"],
    cta: "Let's Keep Your Team Working.",
  },
  "virus-removal": {
    headline: "Virus Removal &",
    highlight: "Lasting Protection.",
    lede: "One bad click can slow a computer to a crawl or put your whole business at risk. We clean it up properly, then put protection in place so it doesn't happen again.",
    includes: [
      { title: "Virus & Malware Removal", text: "Thorough cleanup of infected computers, not a quick scan that leaves problems behind." },
      { title: "Ransomware Response", text: "Help containing the damage and getting your business back to work." },
      { title: "Antivirus Protection", text: "Reliable protection installed and kept current on every computer." },
      { title: "Security Updates", text: "Systems and software kept up to date to close the gaps attackers look for." },
      { title: "Safer Email & Passwords", text: "Practical guidance for your staff on avoiding the most common threats." },
      { title: "Security Checkups", text: "A review of your computers and network to find problems before they find you." },
    ],
    when: ["A computer is slow or full of pop-ups", "Someone clicked a suspicious link or attachment", "You see a ransom or warning message", "You want protection before something happens"],
    cta: "Let's Get Your Computers Clean and Protected.",
  },
};
