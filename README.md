# RS Computer Solutions website

Astro static site with six pages: Home, Services, Industries, Panasonic Solutions, About, Contact.

- Business details and all page copy lists: `src/data/site.ts`
- Colors and fonts: top of `src/styles/global.css`
- Logo: `src/components/Logo.astro`

## Photos

Drop photos into `public/images/` using these names (`.jpg`, `.webp`, or `.png`).
Until a file exists, the site shows an illustrated placeholder in its place.

| File name    | Where it appears                                  |
|--------------|---------------------------------------------------|
| `tech-rack`  | Home hero                                         |
| `technician` | About hero, Panasonic installation row            |
| `network`    | Services hero, IT & Networking                    |
| `camera`     | Security & Surveillance                           |
| `phone`      | Panasonic hero, Business Communications           |
| `software`   | Software & Technical Support                      |
| `office`     | Industries hero, Professional Offices, About      |
| `dental`     | Dental & Healthcare Practices                     |
| `restaurant` | Retail & Restaurants                              |
| `commercial` | Commercial Properties                             |
| `workspace`  | Contact hero and contact photo                    |

## Commands

- `npm install` then `npm run dev` to preview locally
- `npm run build` to produce the site in `dist/`
- Vercel detects Astro automatically; no settings needed
