export const business = {
  name: "Dhu Roofing",
  short: "Dhu",
  operator: "Shawn Dhu",
  abn: "19 542 516 839",
  base: "Keysbrook, WA",
  years: 15,
  tagline: "New-build residential roofs.",
  promise: "Clean work. On time. Fair price.",
  cta: "Message us",
  email: "sbt.family.trust@gmail.com",
  phone: "0415 713 371",
  phoneTel: "+61415713371",
} as const;

export const suburbs = [
  "Serpentine",
  "Dandalup",
  "Keysbrook",
  "Mundijong",
  "Whitby",
  "Jarrahdale",
  "Mundella",
  "Hopelands",
  "Baldivis",
  "Byford",
  "Pinjarra",
  "Hilbert",
  "Haynes",
  "Armadale",
  "Mt Richon",
  "Casuarina",
  "Wellard",
  "Bertram",
] as const;

export const areaGroups = [
  {
    label: "Serpentine–Jarrahdale",
    places: [
      "Serpentine",
      "Dandalup",
      "Keysbrook",
      "Mundijong",
      "Whitby",
      "Jarrahdale",
      "Mundella",
      "Hopelands",
    ],
  },
  {
    label: "Armadale",
    places: ["Armadale", "Mt Richon", "Hilbert", "Haynes"],
  },
  {
    label: "Peel corridor",
    places: ["Baldivis", "Byford", "Pinjarra", "Casuarina", "Wellard", "Bertram"],
  },
] as const;

export const services = [
  {
    id: "sarking",
    name: "Sarking & insulation",
    image: "/images/day-ridge.jpg",
    alt: "Under-sheet roll insulation laid before corrugated sheeting",
  },
  {
    id: "sheeting",
    name: "Roof sheeting",
    image: "/images/done-ridge.jpg",
    alt: "Finished corrugated sheeting with ridge and hip capping on a new-build roof",
  },
  {
    id: "valleys",
    name: "Valleys & ridge capping",
    image: "/images/done-valley.jpg",
    alt: "Valley tray with even fall between corrugated roof planes",
  },
  {
    id: "flashings",
    name: "Finishing flashings",
    image: "/images/done-hip.jpg",
    alt: "Hip and ridge capping junctions on a finished new-build roof",
  },
] as const;

export const jobPlates = [
  {
    image: "/images/done-ridge.jpg",
    alt: "Finished corrugated sheeting, hips and ridge capping on a new-build roof",
  },
  {
    image: "/images/done-valley.jpg",
    alt: "Valley tray with even fall between corrugated roof planes",
  },
  {
    image: "/images/done-hip.jpg",
    alt: "Hip and ridge capping cut clean on a new-build roof",
  },
  {
    image: "/images/done-planes.jpg",
    alt: "Hip intersections and sheet planes on a finished residential roof",
  },
] as const;

export const roles = ["Builder", "Developer", "Owner-builder", "Owner"] as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#area", label: "Area" },
  { href: "/#about", label: "About" },
  { href: "/enquire", label: "Enquire" },
] as const;

export const bio =
  "Dhu Roofing — new-build residential roofs in Keysbrook, Serpentine, Jarrahdale, Armadale and the Peel corridor. Sarking, sheeting, valleys, ridge capping and finishing flashings. Clean work. On time. Fair price.";
