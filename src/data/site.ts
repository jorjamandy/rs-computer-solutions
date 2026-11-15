// ─────────────────────────────────────────────────────────────
// Everything a non-developer is likely to change lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "RS Computer Solutions",
  legalName: "RS Computer Solutions, LLC",
  tagline: "One call for everything that plugs in.",
  description:
    "IT consulting, servers, security cameras, phone systems, and dental office technology for businesses in Pennsylvania. One local expert for all of it.",

  // TODO: CONFIRM before going live. Phone and town came from a public
  // business directory listing, not from the owner.
  phone: "(267) 625-8011",
  // Leave email empty ("") to hide the email link and the message form.
  email: "",
  location: "Elkins Park, PA",
  serviceArea: "Greater Philadelphia & southeastern Pennsylvania",
};

export const phoneHref = "tel:+1" + site.phone.replace(/\D/g, "");

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: "it-consulting",
    icon: "compass",
    title: "IT Consulting & Support",
    short:
      "Your outsourced IT department. Day-to-day support, planning, and someone who picks up when something breaks.",
    intro:
      "Most small businesses don't need a full-time IT person. They need one person who knows their whole setup and answers the phone. That's the job: keep everything running, fix what breaks, and plan ahead so the next problem never happens.",
    includes: [
      "On-site and remote support for staff",
      "Technology planning and budgeting",
      "New employee setup: accounts, email, workstation",
      "Vendor wrangling: internet, software, and equipment providers",
      "Software installation, licensing, and updates",
      "Straight answers about what to buy and what to skip",
    ],
    goodFor: "Any business that wants one accountable person for its technology.",
  },
  {
    slug: "servers-and-networks",
    icon: "server",
    title: "Servers, Domains & Networks",
    short:
      "Complete server and domain setups, built from scratch or rebuilt properly. Wired and wireless networks that stay up.",
    intro:
      "The server and network are the foundation everything else sits on. We design, install, and maintain the whole stack, from the domain controller in the back room to the Wi-Fi at the front desk.",
    includes: [
      "Server installation, migration, and replacement",
      "Domain setup: user accounts, permissions, shared drives",
      "Network design, switches, routers, and firewalls",
      "Business Wi-Fi with full coverage",
      "Secure remote access for owners and staff",
      "Ongoing monitoring and maintenance",
    ],
    goodFor: "Offices opening, moving, growing, or running on aging equipment.",
  },
  {
    slug: "security-cameras",
    icon: "camera",
    title: "Security Cameras",
    short:
      "Professional surveillance systems, designed and installed by a certified technician. Watch live from your phone.",
    intro:
      "A camera system is only useful if it captures the right angle, records reliably, and lets you find the footage when you need it. We handle design, installation, and setup end to end, for a single storefront or a multi-level garage.",
    includes: [
      "Site walk-through and camera placement plan",
      "Indoor and outdoor camera installation and cabling",
      "Recorders and storage sized for how long you need footage",
      "Remote viewing on phones, tablets, and computers",
      "Coverage for entrances, registers, lots, and garages",
      "Service and expansion of existing systems",
    ],
    goodFor: "Restaurants, retail, parking lots and garages, offices, and warehouses.",
  },
  {
    slug: "phone-systems",
    icon: "phone",
    title: "Business Phone Systems",
    short:
      "Full phone systems, start to finish. Extensions, auto attendants, voicemail, and handsets that just work.",
    intro:
      "Missed calls are missed business. We install and program complete phone systems, so calls reach the right person, after-hours callers hear the right message, and adding a new desk doesn't mean a week of waiting.",
    includes: [
      "New phone system design and installation",
      "Auto attendants, call routing, and ring groups",
      "Voicemail, including voicemail to email",
      "Handsets, cordless units, and conference phones",
      "Moves, adds, and changes as your staff changes",
      "Repair and reprogramming of existing systems",
    ],
    goodFor: "Front desks, multi-line offices, and any business that lives on the phone.",
  },
  {
    slug: "dental-office-it",
    icon: "tooth",
    title: "Dental Office Technology",
    short:
      "Practice software, servers, operatory computers, and imaging, set up by someone who knows how a dental office runs.",
    intro:
      "Dental offices have technology no other business has: practice management software, imaging, sensors, and a computer in every operatory, all of which have to talk to each other. We install the software and build the entire server and domain environment underneath it.",
    includes: [
      "Practice management software installation and upgrades",
      "Server and domain setup for the whole practice",
      "Operatory and front-desk workstations",
      "Imaging and X-ray software integration",
      "Backups that protect patient records",
      "New office build-outs and practice relocations",
    ],
    goodFor: "New practices, acquisitions, software changes, and offices outgrowing their setup.",
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    title: "Security & Virus Removal",
    short:
      "Clean up infections, lock the doors, and keep them locked. Protection for every computer in the building.",
    intro:
      "This is where the business started: keeping computers virus-free. Today that means layered protection, so one bad click from one employee doesn't take down the whole office.",
    includes: [
      "Virus, malware, and ransomware removal",
      "Managed antivirus on every computer",
      "Firewall setup and network lockdown",
      "Email and password security",
      "Security updates and patching",
      "Security check-ups for existing networks",
    ],
    goodFor: "Any business with client records, payment data, or a deadline.",
  },
  {
    slug: "backup-and-recovery",
    icon: "backup",
    title: "Backup & Recovery",
    short:
      "Automatic backups you never think about, and a real plan for the day a drive dies or a file disappears.",
    intro:
      "Every hard drive fails eventually. The only question is whether your data was somewhere else when it happened. We set up backups that run on their own, get checked regularly, and can actually be restored.",
    includes: [
      "Automatic on-site and off-site backups",
      "Server and workstation coverage",
      "Regular checks that backups can be restored",
      "File and full-system recovery",
      "Data transfer to new computers and servers",
      "Recovery planning for outages and disasters",
    ],
    goodFor: "Practices and firms whose records cannot be recreated.",
  },
  {
    slug: "hardware-and-setup",
    icon: "desktop",
    title: "Hardware & Office Setups",
    short:
      "Computers, printers, cabling, and point-of-sale. Purchased right, installed neatly, and ready on opening day.",
    intro:
      "Opening a location, moving, or replacing old machines? We spec the equipment, run the cable, set everything up, and make sure it all works together before you open the doors.",
    includes: [
      "Computer and laptop sales, setup, and repair",
      "Printers, scanners, and shared devices",
      "Network and low-voltage cabling",
      "Register and point-of-sale stations",
      "Office moves and new location build-outs",
      "Upgrades that extend the life of what you own",
    ],
    goodFor: "New locations, office moves, and equipment refreshes.",
  },
];

export const industries = [
  {
    icon: "tooth",
    title: "Dental offices",
    text: "Practice software, imaging, operatory computers, and the server that ties them together.",
  },
  {
    icon: "scale",
    title: "Law offices",
    text: "Reliable servers, secure documents, dependable phones, and backups for files that can't be lost.",
  },
  {
    icon: "pizza",
    title: "Pizza shops & restaurants",
    text: "Phones that survive a Friday rush, cameras over the counter and register, and networks that stay up.",
  },
  {
    icon: "parking",
    title: "Parking lots & garages",
    text: "Camera coverage for entrances, exits, and every level, with footage you can pull up from anywhere.",
  },
  {
    icon: "building",
    title: "Offices & small business",
    text: "The whole technology stack for the business that doesn't have, or want, an IT department.",
  },
];
