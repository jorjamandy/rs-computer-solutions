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

// The navy band directly under the Home page hero. An entry with no value
// shows its label as a single bold line (used for the Panasonic badge).
export const heroStats = [
  { icon: "calendar", value: `${new Date().getFullYear() - 2006}+`, unit: "Years", label: "In business since 2006" },
  { icon: "users", value: "100+", unit: "", label: "Businesses supported" },
  { icon: "clock", value: "24", unit: "Hr", label: "Response time or less" },
  { icon: "award", value: "", unit: "", label: "Panasonic Authorized Dealer" },
];

// The "Industries We Serve" photo reel on the Home page. Photos live in
// public/images/industries/. The first entry starts open.
export const reel = [
  { image: "dental-healthcare", focus: "55% center", icon: "tooth", title: "Dental & Healthcare", href: "industries/dental-healthcare/", text: "Practice networks, phones, and cameras, plus hands-on support for dental software like Carestream and Eaglesoft." },
  { image: "law-firms", focus: "80% center", icon: "gavel", title: "Law Firms", href: "industries/professional-offices/", text: "Secure file access, reliable phones, and protection for sensitive client information, with support when deadlines can't wait." },
  { image: "restaurants-retail", focus: "45% center", icon: "utensils", title: "Restaurants & Retail", href: "industries/retail-restaurants/", text: "Security cameras, phone lines, and networks that keep a busy counter running, from pizza shops to retail stores." },
  { image: "garages-parking", focus: "38% center", icon: "car", title: "Garages & Parking", href: "industries/commercial-properties/", text: "Camera systems for lots, garages, and commercial buildings, including multi-location operations, viewable from anywhere." },
  { image: "professional-offices", focus: "62% center", icon: "desktop", title: "Professional Offices", href: "industries/professional-offices/", text: "Networks, Microsoft 365, user accounts, and everyday IT support for offices of every size." },
  { image: "other-businesses", focus: "45% center", icon: "building", title: "Small & Growing Businesses", href: "contact/", text: "Whatever your business does, we install, connect, and support the technology it runs on, and grow it with you." },
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
    photo: "networking-cabinet",
    image: "network",
    title: "IT & Networking",
    card: "Network design, installation, structured cabling, Wi-Fi, servers, and ongoing infrastructure support.",
    text: "Professional network design, infrastructure installation, structured cabling, connectivity, and maintenance for businesses of all sizes.",
  },
  {
    id: "security-surveillance",
    icon: "camera",
    photo: "security-surveillance-camera",
    image: "camera",
    title: "Security & Surveillance",
    card: "Commercial security camera systems, professional installation, and ongoing maintenance.",
    text: "Commercial security camera systems, video surveillance, installation, configuration, and ongoing support for offices, retail locations, parking areas, and commercial facilities.",
  },
  {
    id: "business-communications",
    icon: "phone",
    photo: "business-communications-reception",
    image: "phone",
    title: "Business Communications",
    card: "Business phone systems, PBX installation, programming, and authorized Panasonic sales and service.",
    text: "Business telephone systems, PBX solutions, and communications infrastructure, with specialized experience in Panasonic systems.",
  },
  {
    id: "software-support",
    icon: "desktop",
    photo: "technical-support-workbench",
    image: "software",
    title: "Software & Technical Support",
    card: "Microsoft 365, business software, system troubleshooting, and hands-on IT support.",
    text: "Business software installation, configuration, troubleshooting, and everyday technical support, including Microsoft 365, QuickBooks, Microsoft Active Directory, and specialized practice-management applications.",
  },
  {
    id: "virus-removal",
    icon: "shield",
    photo: "virus-protection-laptop",
    image: "software",
    title: "Virus Removal & Protection",
    card: "Malware removal, antivirus protection, system recovery, and preventive security solutions.",
    text: "Removal of viruses, malware, and ransomware from business computers, followed by the antivirus protection, updates, and safeguards that keep your systems clean and your data safe.",
  },
];

// "Beyond Traditional IT Support" differentiators on the Home page.
export const beyond = [
  { icon: "wrench", title: "On-Site Expertise", text: "Professional installation, configuration, troubleshooting, and maintenance." },
  { icon: "grid", title: "Specialized Business Technology", text: "Experience supporting industry-specific software, business communications, and commercial security systems." },
  { icon: "users", title: "One Reliable Partner", text: "A single point of contact for your networking, security, communications, and ongoing technical needs." },
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
    id: "dental-healthcare",
    title: "Dental & Healthcare Practices",
    text: "Dependable practice technology, networking, communications, and specialized software support.",
  },
  {
    icon: "building",
    image: "office",
    id: "professional-offices",
    title: "Professional Offices",
    text: "IT infrastructure, business communications, and technical support for law firms and professional services.",
  },
  {
    icon: "store",
    image: "restaurant",
    id: "retail-restaurants",
    title: "Retail & Restaurants",
    text: "Networking, phones, security cameras, and everyday technology support for pizza shops, restaurants, and retail stores.",
  },
  {
    icon: "parking",
    image: "commercial",
    id: "commercial-properties",
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

// ─── Individual industry pages (/industries/<id>/) ────────────────────────────
type IndustryDetail = {
  headline: string;
  highlight: string;
  lede: string;
  includes: { title: string; text: string }[];
  projects: string[];
  cta: string;
};

export const industryDetails: Record<string, IndustryDetail> = {
  "dental-healthcare": {
    headline: "Technology for Dental &",
    highlight: "Healthcare Practices.",
    lede: "A practice can't see patients when its systems are down. We set up and support the technology behind the front desk and every operatory, so your team can focus on care.",
    includes: [
      { title: "Practice Software", text: "Installation and support for practice software including Dentrix, Eaglesoft, and Carestream." },
      { title: "Servers & Networks", text: "The server, network, and user accounts your practice software depends on, set up properly." },
      { title: "Operatory & Front-Desk Computers", text: "Workstations in every room, configured to work with your software and equipment." },
      { title: "Phone Systems", text: "Phones that route patients to the right person and handle after-hours calls professionally." },
      { title: "Security Cameras", text: "Coverage for entrances, reception, and parking areas, viewable from anywhere." },
      { title: "Virus Protection & Support", text: "Protection for the computers that hold your records, and fast help when something goes wrong." },
    ],
    projects: ["Opening a new practice", "Buying or merging a practice", "Switching practice software", "Adding operatories or a second location"],
    cta: "Let's Keep Your Practice Running Smoothly.",
  },
  "professional-offices": {
    headline: "Technology for",
    highlight: "Professional Offices.",
    lede: "Law firms and professional offices run on documents, deadlines, and the phone. We keep the systems behind all three dependable and secure.",
    includes: [
      { title: "Networks & Servers", text: "A reliable foundation for your files, your software, and everyone who needs access to them." },
      { title: "User Accounts & File Access", text: "The right people get access to the right files, in the office or working remotely." },
      { title: "Business Phone Systems", text: "Multi-line systems with extensions, call routing, and voicemail that reflect well on your firm." },
      { title: "Microsoft 365 & Email", text: "Email and office applications set up and supported for your whole team." },
      { title: "Business Software", text: "QuickBooks and the other programs your office relies on, installed and kept working." },
      { title: "Virus Protection & Support", text: "Protection for sensitive client information, with a technician available when you need one." },
    ],
    projects: ["Moving or expanding an office", "Setting up new staff", "Replacing an aging server", "Upgrading the phone system"],
    cta: "Let's Build Technology Your Office Can Depend On.",
  },
  "retail-restaurants": {
    headline: "Technology for Retail &",
    highlight: "Restaurants.",
    lede: "From neighborhood pizza shops to retail stores, customer-facing businesses can't afford downtime. We install and support the cameras, phones, and networks that keep you open and protected.",
    includes: [
      { title: "Security Cameras", text: "Coverage for the counter, register, kitchen, and entrances, installed neatly and built to last." },
      { title: "Watch From Anywhere", text: "Check on your shop from your phone, whether you're at home or at another location." },
      { title: "Phone Systems", text: "Phone lines and systems that keep up with takeout orders and a busy counter." },
      { title: "Network & Wi-Fi", text: "A dependable network for your registers, your staff, and your customers." },
      { title: "Computers & Office Systems", text: "Setup and support for the computers and software that run the back office." },
      { title: "Fast, Local Support", text: "Help from a technician who knows your setup when something stops working." },
    ],
    projects: ["Opening a new shop or location", "Adding or upgrading cameras", "Fixing phones that miss orders", "Replacing an unreliable network"],
    cta: "Let's Keep Your Business Open and Protected.",
  },
  "commercial-properties": {
    headline: "Technology for",
    highlight: "Commercial Properties.",
    lede: "Parking lots, garages, and commercial buildings need eyes on every entrance and systems that hold up outdoors. We design and support surveillance and technology for single sites and multi-location operations.",
    includes: [
      { title: "Camera Systems for Lots & Garages", text: "Coverage for entrances, exits, pay areas, and every level, with equipment suited to the conditions." },
      { title: "Multi-Location Operations", text: "Consistent systems across all of your sites, managed by one provider." },
      { title: "Remote Viewing", text: "Owners and managers can check any property from a phone or computer." },
      { title: "Networks & Cabling", text: "The cabling and network equipment that connect cameras and systems across a large property." },
      { title: "Phones & Communications", text: "Phone systems for offices, booths, and management." },
      { title: "Service & Expansion", text: "Repairs, upgrades, and added coverage as your properties change." },
    ],
    projects: ["Bringing a new lot or garage online", "Replacing an outdated camera system", "Adding coverage to existing sites", "Viewing multiple properties in one place"],
    cta: "Let's Protect Your Property.",
  },
};
