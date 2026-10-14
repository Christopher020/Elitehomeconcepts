/**
 * Single source of truth for business details.
 * Every page, the footer, metadata and structured data read from here.
 */
export const site = {
  name: "Elite Home Concepts",
  tagline: "Furniture · Interiors · Décor",
  description:
    "Elite Home Concepts is a Lagos furniture, interiors and décor company. Shop living, bedroom, dining, office and outdoor furniture, or work with us on a complete interior.",
  url: "https://www.elitehomeconcepts.com",
  email: "sunkanmiomotosho@elitehomeconcepts.com",
  phone: {
    display: "0803 704 2832",
    intl: "+2348037042832",
  },
  whatsapp: "2348037042832",
  address: {
    street: "10, Anuoluwapo Close, Agbaokun Estate",
    area: "Allen Avenue",
    locality: "Lagos",
    region: "Lagos State",
    country: "Nigeria",
    countryCode: "NG",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.area}, ${site.address.region}, ${site.address.country}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/interiors", label: "Interiors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
