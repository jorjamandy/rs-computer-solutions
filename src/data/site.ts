// ─────────────────────────────────────────────────────────────
// Everything a non-developer is likely to change lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "RS Computer Solutions",
  legalName: "RS Computer Solutions, LLC",
  tagline: "IT support, security cameras, and phone systems for Pennsylvania businesses.",
  description:
    "RS Computer Solutions installs and supports servers, networks, security cameras, phone systems, and dental practice software for businesses in southeastern Pennsylvania.",

  // Color scheme: "blue", "red", or "dark".
  theme: "blue",

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
  tags: string[];
  intro: string;
  includes: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: "it-consulting",
    icon: "compass",
    title: "IT Consulting & Support",
    short: "Ongoing support for your staff and equipment, on-site and remote, plus planning for what to replace and when.",
    tags: ["On-site support", "Remote support", "New-hire setup", "Purchasing advice"],
    intro:
      "RS acts as the IT department for businesses that don't have one. We support your staff, maintain your equipment, deal with your internet and software vendors, and plan upgrades before old hardware fails.",
    includes: [
      "On-site and remote support for staff",
      "Technology planning and budgeting",
      "New employee setup: accounts, email, workstation",
      "Dealing with internet, software, and equipment vendors",
      "Software installation, licensing, and updates",
      "Advice on what to buy and what to skip",
    ],
    goodFor: "Businesses with 3 to 50 computers and no in-house IT staff.",
  },
  {
    slug: "servers-and-networks",
    icon: "server",
    title: "Servers, Domains & Networks",
    short: "Windows servers and domains installed, migrated, and maintained. Firewalls, switches, cabling, and Wi-Fi.",
    tags: ["Windows Server", "Active Directory domains", "Firewalls", "Wi-Fi", "Remote access"],
    intro:
      "We build the complete server and network environment for an office: the server, the domain, user accounts and permissions, shared drives, the firewall, the switches, and the Wi-Fi. We also replace and migrate aging servers without losing data.",
    includes: [
      "Server installation, migration, and replacement",
      "Domain setup: user accounts, permissions, shared drives",
      "Routers, switches, and firewalls",
      "Wi-Fi coverage for the whole building",
      "Secure remote access for owners and staff",
      "Monitoring and maintenance",
    ],
    goodFor: "Offices opening, moving, expanding, or running on an old server.",
  },
  {
    slug: "security-cameras",
    icon: "camera",
    title: "Security Camera Systems",
    short: "Camera systems designed, cabled, and installed by a Panasonic certified technician. Live and recorded video on your phone.",
    tags: ["Panasonic certified", "Indoor & outdoor", "Recorders & storage", "Phone viewing"],
    intro:
      "We design and install complete camera systems: placement, cabling, cameras, recorder, and remote viewing. Systems range from a few cameras over a counter and register to full coverage of a multi-level parking garage.",
    includes: [
      "Site walk-through and camera placement plan",
      "Indoor and outdoor cameras, mounted and cabled",
      "Recorders with storage sized to how many days you need to keep",
      "Live and recorded viewing on phones and computers",
      "Coverage of entrances, registers, lots, and garage levels",
      "Repair and expansion of existing systems",
    ],
    goodFor: "Restaurants, retail stores, parking lots and garages, offices, and warehouses.",
  },
  {
    slug: "phone-systems",
    icon: "phone",
    title: "Business Phone Systems",
    short: "Multi-line phone systems installed and programmed: extensions, auto attendant, call routing, and voicemail.",
    tags: ["Multi-line systems", "Auto attendant", "Voicemail to email", "Moves & changes"],
    intro:
      "We install and program complete business phone systems, including the handsets, extensions, auto attendant, after-hours greetings, and call routing. We also service and reprogram systems that are already in place.",
    includes: [
      "New phone system design and installation",
      "Auto attendant, call routing, and ring groups",
      "Voicemail, including voicemail to email",
      "Desk phones, cordless phones, and conference phones",
      "Adding, moving, and changing extensions",
      "Repair and reprogramming of existing systems",
    ],
    goodFor: "Front desks, multi-line offices, and restaurants that take orders by phone.",
  },
  {
    slug: "dental-office-it",
    icon: "tooth",
    title: "Dental Office Technology",
    short: "Practice management software, imaging, operatory computers, and the server and domain they all run on.",
    tags: ["Practice software", "X-ray & imaging", "Operatory PCs", "Server & domain"],
    intro:
      "We install dental practice management software and build the full server and domain environment behind it. That includes the computer in every operatory, the front desk, the imaging and X-ray software, and the backups that protect patient records.",
    includes: [
      "Practice management software installation and upgrades",
      "Server and domain setup for the whole practice",
      "Operatory and front-desk workstations",
      "Imaging and X-ray software integration",
      "Backup of patient records",
      "New office build-outs and practice relocations",
    ],
    goodFor: "New practices, practice purchases, software conversions, and expansions.",
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    title: "Security & Virus Removal",
    short: "Virus and ransomware removal, managed antivirus, firewalls, and patching for every computer in the office.",
    tags: ["Virus removal", "Managed antivirus", "Firewalls", "Patching"],
    intro:
      "We remove viruses, malware, and ransomware, then put protection in place so it doesn't happen again: antivirus on every machine, a properly configured firewall, current security updates, and safer email and passwords.",
    includes: [
      "Virus, malware, and ransomware removal",
      "Managed antivirus on every computer",
      "Firewall setup and configuration",
      "Email and password security",
      "Security updates and patching",
      "Security review of an existing network",
    ],
    goodFor: "Any business holding client records, patient records, or payment data.",
  },
  {
    slug: "backup-and-recovery",
    icon: "backup",
    title: "Backup & Data Recovery",
    short: "Automatic on-site and off-site backups for servers and workstations, tested so they can be restored.",
    tags: ["On-site backup", "Off-site backup", "Restore testing", "Data transfer"],
    intro:
      "We set up automatic backups of servers and workstations, keep a copy off-site, and test that the backups can be restored. When a drive fails or a file is deleted, we recover it.",
    includes: [
      "Automatic on-site and off-site backups",
      "Server and workstation coverage",
      "Regular restore tests",
      "File and full-system recovery",
      "Data transfer to new computers and servers",
      "Recovery planning for outages",
    ],
    goodFor: "Dental practices, law firms, and any office whose records can't be recreated.",
  },
  {
    slug: "hardware-and-setup",
    icon: "desktop",
    title: "Hardware & Office Setups",
    short: "Computers, printers, cabling, and point-of-sale stations supplied, installed, and repaired.",
    tags: ["Computers", "Printers", "Network cabling", "Point of sale"],
    intro:
      "We supply and install the equipment for a new or relocating business: computers, printers, network cabling, and register stations. We also repair and upgrade the equipment you already own.",
    includes: [
      "Computer and laptop sales, setup, and repair",
      "Printers, scanners, and shared devices",
      "Network and low-voltage cabling",
      "Register and point-of-sale stations",
      "Office moves and new location build-outs",
      "Upgrades for existing equipment",
    ],
    goodFor: "New locations, office moves, and equipment replacement.",
  },
];

export const pillars = [
  {
    icon: "server",
    title: "IT & Servers",
    href: "servers-and-networks",
    points: ["Windows servers and domains", "Networks, firewalls, Wi-Fi", "Staff support, on-site and remote"],
  },
  {
    icon: "camera",
    title: "Security Cameras",
    href: "security-cameras",
    points: ["Panasonic certified installer", "Indoor, outdoor, lots, garages", "View live video on your phone"],
  },
  {
    icon: "phone",
    title: "Phone Systems",
    href: "phone-systems",
    points: ["Multi-line systems installed", "Auto attendant and call routing", "Voicemail and extensions"],
  },
  {
    icon: "tooth",
    title: "Dental Software",
    href: "dental-office-it",
    points: ["Practice software installed", "X-ray and imaging integration", "Operatory and front-desk PCs"],
  },
];

export const industries = [
  {
    icon: "tooth",
    title: "Dental offices",
    text: "The complete technology build for a practice.",
    setups: [
      "Practice management software",
      "Server and domain",
      "A computer in every operatory",
      "X-ray and imaging software",
      "Patient record backups",
      "Phones and cameras",
    ],
  },
  {
    icon: "scale",
    title: "Law offices",
    text: "Dependable systems for firms that run on documents and deadlines.",
    setups: [
      "File server with user permissions",
      "Secure remote access",
      "On-site and off-site backup",
      "Multi-line phone system",
      "Network security and antivirus",
      "Printers and scanners",
    ],
  },
  {
    icon: "pizza",
    title: "Pizza shops & restaurants",
    text: "Equipment that holds up in a busy kitchen and at a busy counter.",
    setups: [
      "Cameras over the counter, register, and kitchen",
      "Phone lines for takeout orders",
      "Register and point-of-sale stations",
      "Network and Wi-Fi",
      "Video you can check from home",
    ],
  },
  {
    icon: "parking",
    title: "Parking lots & garages",
    text: "Camera coverage for large and multi-level properties.",
    setups: [
      "Cameras at every entrance and exit",
      "Coverage of each garage level",
      "Outdoor, weather-rated cameras",
      "Recorders with long retention",
      "Remote viewing for owners and managers",
    ],
  },
];

export const projects = [
  {
    title: "New dental office build-out",
    text: "Server and domain, operatory and front-desk computers, practice software, imaging, phone system, and cameras, all installed before opening day.",
  },
  {
    title: "Server replacement",
    text: "A new server installed and every user account, shared drive, and program moved over from the old one, with the office back at work the next business day.",
  },
  {
    title: "Camera system for a parking garage",
    text: "Cameras on every level and at each entrance and exit, cabled back to a recorder, with live and recorded video available remotely.",
  },
  {
    title: "Phone system for a multi-line office",
    text: "Handsets at every desk, an auto attendant, ring groups, after-hours greetings, and voicemail delivered to email.",
  },
  {
    title: "Restaurant cameras and phones",
    text: "Cameras covering the counter, register, kitchen, and back door, plus phone lines set up to handle takeout orders.",
  },
  {
    title: "Ransomware cleanup",
    text: "Infected computers cleaned, files restored from backup, and antivirus, firewall, and backups put in place to prevent a repeat.",
  },
];

export const steps = [
  { title: "Call", text: "Tell us what you need installed or what isn't working." },
  { title: "Site visit", text: "We look at your space and your current equipment." },
  { title: "Quote", text: "You get a price and a list of exactly what will be installed." },
  { title: "Installation", text: "We install, configure, and test everything, and show your staff how to use it." },
  { title: "Support", text: "The same person who installed it is the one you call afterward." },
];
