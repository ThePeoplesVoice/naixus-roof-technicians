export const business = {
  name: "Naixus Roof Technicians",
  short: "Naixus",
  operator: "Shawn Dhu",
  abn: "19 542 516 839",
  base: "Keysbrook, WA",
  years: 15,
  tagline: "New builds. Sarking to ridge capping. Peel corridor.",
  promise: "Serpentine–Jarrahdale, Armadale, Peel.",
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
    num: "01",
    name: "Sarking & roll insulation",
    summary:
      "The layer nobody sees. Sarking goes down first — keeping the build dry and insulated before a single sheet goes on.",
    image: "/images/day-ridge.jpg",
    alt: "Under-sheet roll insulation laid along the roof plane before corrugated sheeting",
  },
  {
    id: "sheeting",
    num: "02",
    name: "Roof sheeting",
    summary:
      "Residential new builds only. Sheets laid to a standard that holds up — proper lap, clean lines, no rush.",
    image: "/images/job-sheeting.jpg",
    alt: "Monument corrugated sheets going down over insulation on a new-build roof",
  },
  {
    id: "valleys",
    num: "03",
    name: "Valleys & ridge capping",
    summary:
      "Most roof failures start in the valley, not the sheeting. Proper fall, proper lap, no shortcuts.",
    image: "/images/valley.jpg",
    alt: "Metal valley tray with even fall and overlapping sheets",
  },
  {
    id: "flashings",
    num: "04",
    name: "Standard finishing flashings",
    summary:
      "The junctions that finish the job. Clean, tight, and done to the same standard as the rest of the roof.",
    image: "/images/flashings.jpg",
    alt: "Finishing flashing at a roof-to-wall junction on a new house",
  },
] as const;

export const spec = [
  { k: "Order", v: "Sarking first — before a single sheet." },
  { k: "Fall", v: "Valleys run with proper fall. Water has a path." },
  { k: "Lap", v: "Sheets, caps and flashings lap the right way." },
  { k: "Books", v: "Limited new builds each month. Peel corridor." },
] as const;

export const walk = [
  {
    num: "01",
    title: "Sarking",
    line: "The layer nobody sees. It goes down first — keeping the build dry and insulated before a single sheet goes on.",
    image: "/images/day-ridge.jpg",
    alt: "Under-sheet roll insulation laid along the roof plane before corrugated sheeting",
  },
  {
    num: "02",
    title: "Sheeting",
    line: "Residential new builds only. Proper lap, clean lines, no rush. This is the field of the roof — it has to sit true.",
    image: "/images/job-sheeting.jpg",
    alt: "Monument corrugated sheets going down over insulation on a new-build roof",
  },
  {
    num: "03",
    title: "Valleys",
    line: "Most roof failures start here, not in the sheeting. Proper fall, proper lap, no shortcuts.",
    image: "/images/valley.jpg",
    alt: "Metal valley tray with even fall and overlapping sheets",
  },
  {
    num: "04",
    title: "Ridge capping",
    line: "Clean cap line, even laps. The ridge is what you read from the street — it has to be straight.",
    image: "/images/ridge.jpg",
    alt: "Ridge capping along the peak of a new metal roof",
  },
  {
    num: "05",
    title: "Flashings",
    line: "The junctions that finish the job. Same standard as the rest of the roof — tight, straight, done once.",
    image: "/images/flashings.jpg",
    alt: "Finishing flashing at a roof-to-wall junction on a new house",
  },
] as const;

export const jobPlates = [
  {
    image: "/images/day-ridge.jpg",
    alt: "Roll insulation down one roof plane, corrugated sheets on the other",
    caption: "Insulation first, then the sheets",
  },
  {
    image: "/images/day-eave.jpg",
    alt: "Under-sheet roll insulation lapping the eave over corrugated cladding",
    caption: "Under-sheet roll",
  },
  {
    image: "/images/day-height.jpg",
    alt: "Two-storey new-build roof with insulation on open timber trusses",
    caption: "Two storey",
  },
  {
    image: "/images/day-frame.jpg",
    alt: "Open roof frame with foil sarking and roll insulation going down",
    caption: "Sarking on the frame",
  },
] as const;

export const roles = ["Builder", "Developer", "Owner-builder", "Owner"] as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#area", label: "Area" },
  { href: "/#about", label: "About" },
  { href: "/enquire", label: "Enquire" },
] as const;

export const bio =
  "Naixus Roof Technicians — specialist roof sheeting, valleys, and ridge capping for new-build residential projects in the Peel corridor: Serpentine–Jarrahdale, Armadale, and Peel. Based in Keysbrook. Sarking and insulation through to standard finishing flashings, done to a standard that holds up. 15 years in WA construction. Selective about what we take on. Currently taking on a limited number of new-build projects each month — get in touch early if you’re planning ahead.";
