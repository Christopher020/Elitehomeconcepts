import type { StaticImageData } from "next/image";

import livingCover from "@/assets/images/living-cover.jpg";
import living1 from "@/assets/images/living-1.jpg";
import living2 from "@/assets/images/living-2.jpg";
import living3 from "@/assets/images/living-3.jpg";
import bedroomCover from "@/assets/images/bedroom-cover.jpg";
import bedroom1 from "@/assets/images/bedroom-1.jpg";
import bedroom2 from "@/assets/images/bedroom-2.jpg";
import bedroom3 from "@/assets/images/bedroom-3.jpg";
import diningCover from "@/assets/images/dining-cover.jpg";
import dining1 from "@/assets/images/dining-1.jpg";
import dining2 from "@/assets/images/dining-2.jpg";
import dining3 from "@/assets/images/dining-3.jpg";
import officeCover from "@/assets/images/office-cover.jpg";
import office1 from "@/assets/images/office-1.jpg";
import office2 from "@/assets/images/office-2.jpg";
import office3 from "@/assets/images/office-3.jpg";
import outdoorCover from "@/assets/images/outdoor-cover.jpg";
import outdoor1 from "@/assets/images/outdoor-1.jpg";
import outdoor2 from "@/assets/images/outdoor-2.jpg";
import outdoor3 from "@/assets/images/outdoor-3.jpg";
import decorCover from "@/assets/images/decor-cover.jpg";
import decor1 from "@/assets/images/decor-1.jpg";
import decor2 from "@/assets/images/decor-2.jpg";
import decor3 from "@/assets/images/decor-3.jpg";

export type Collection = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  pieces: string[];
  cover: StaticImageData;
  gallery: { src: StaticImageData; alt: string }[];
};

/**
 * Collections shown on the site. Confirm the list, copy and pieces with the
 * client, then replace the placeholder photos in src/assets/images/.
 */
export const collections: Collection[] = [
  {
    slug: "living-room",
    name: "Living Room",
    summary: "Sofas, lounge chairs and tables made for gathering.",
    intro:
      "The living room carries the most life in a home. We put together sofas, sectionals, lounge chairs, coffee and side tables, and media units that hold up to everyday use and still look composed when guests arrive.",
    pieces: ["Sofas & sectionals", "Lounge & accent chairs", "Coffee & side tables", "Media & TV units", "Ottomans & poufs"],
    cover: livingCover,
    gallery: [
      { src: living1, alt: "Living room arrangement" },
      { src: living2, alt: "Lounge chair detail" },
      { src: living3, alt: "Coffee table styling" },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    summary: "Beds, wardrobes and bedside pieces for calm rooms.",
    intro:
      "A bedroom should slow you down. Our bedroom pieces pair solid frames and generous upholstery with storage that keeps the room clear: beds, bedside tables, dressers, wardrobes and benches.",
    pieces: ["Beds & headboards", "Bedside tables", "Dressers & chests", "Wardrobes", "Benches"],
    cover: bedroomCover,
    gallery: [
      { src: bedroom1, alt: "Bedroom with upholstered bed" },
      { src: bedroom2, alt: "Bedside table detail" },
      { src: bedroom3, alt: "Bedroom storage" },
    ],
  },
  {
    slug: "dining",
    name: "Dining",
    summary: "Tables, chairs and sideboards for long evenings.",
    intro:
      "From a four-seat breakfast nook to a table for the whole family, we help you choose dining tables, chairs, sideboards and bar seating that fit the room and the way you host.",
    pieces: ["Dining tables", "Dining chairs", "Sideboards & buffets", "Bar stools", "Display cabinets"],
    cover: diningCover,
    gallery: [
      { src: dining1, alt: "Dining table set" },
      { src: dining2, alt: "Dining chair detail" },
      { src: dining3, alt: "Sideboard styling" },
    ],
  },
  {
    slug: "home-office",
    name: "Home & Office",
    summary: "Desks, seating and storage for focused work.",
    intro:
      "Good work needs a good room. We furnish home studies and offices with desks, task and executive chairs, meeting tables and storage that keep things organised and comfortable through a long day.",
    pieces: ["Desks & workstations", "Task & executive chairs", "Meeting tables", "Bookcases & shelving", "Filing & storage"],
    cover: officeCover,
    gallery: [
      { src: office1, alt: "Home office desk" },
      { src: office2, alt: "Office chair detail" },
      { src: office3, alt: "Office shelving" },
    ],
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    summary: "Lounge and dining pieces for terraces and poolsides.",
    intro:
      "Outdoor spaces in Lagos get sun, rain and humidity. We source lounge sets, dining sets and loungers in materials chosen to handle the climate, so your terrace, balcony or poolside gets used all year.",
    pieces: ["Outdoor lounge sets", "Outdoor dining", "Sun loungers", "Planters", "Umbrellas & shade"],
    cover: outdoorCover,
    gallery: [
      { src: outdoor1, alt: "Terrace lounge set" },
      { src: outdoor2, alt: "Sun lounger detail" },
      { src: outdoor3, alt: "Outdoor dining" },
    ],
  },
  {
    slug: "decor",
    name: "Décor & Accents",
    summary: "Lighting, rugs, mirrors and art that finish a room.",
    intro:
      "The last ten percent is what makes a room feel finished. Lighting, rugs, mirrors, art, cushions and vases: we help you layer them so the space feels considered rather than crowded.",
    pieces: ["Lighting", "Rugs", "Mirrors", "Wall art", "Cushions & throws", "Vases & objects"],
    cover: decorCover,
    gallery: [
      { src: decor1, alt: "Lighting and accessories" },
      { src: decor2, alt: "Mirror and console styling" },
      { src: decor3, alt: "Rug and cushion layering" },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
