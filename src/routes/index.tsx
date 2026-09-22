import { createFileRoute } from "@tanstack/react-router";
import { Area } from "@/components/home/area";
import { EnquireBand } from "@/components/home/enquire-band";
import { Hero } from "@/components/home/hero";
import { OnSite } from "@/components/home/on-site";
import { Work } from "@/components/home/work";
import { SiteShell } from "@/components/site-shell";
import { bio, business, suburbs } from "@/lib/site";
import {
  SITE_URL,
  absUrl,
  defaultDescription,
  defaultTitle,
} from "@/lib/seo";

const homeUrl = absUrl("/");

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:url", content: homeUrl },
    ],
    links: [
      { rel: "canonical", href: homeUrl },
      { rel: "alternate", hrefLang: "en-AU", href: homeUrl },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: business.name,
  alternateName: ["Aaron's Roof Plumbing Keysbrook", "Dhu Roofing"],
  brand: { "@type": "Brand", name: business.name },
  url: SITE_URL,
  description: bio,
  image: absUrl("/og.jpg"),
  telephone: business.phoneTel,
  email: business.email,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Serpentine-Jarrahdale" },
    { "@type": "AdministrativeArea", name: "City of Armadale" },
    { "@type": "AdministrativeArea", name: "Peel region" },
    ...suburbs.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Western Australia" },
    })),
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Keysbrook",
    addressRegion: "WA",
    postalCode: "6126",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.433,
    longitude: 115.983,
  },
  knowsAbout: [
    "Roof sarking",
    "Roof sheeting",
    "Valley flashing",
    "Ridge capping",
    "New-build residential roofing",
  ],
};

function Home() {
  return (
    <SiteShell>
      <main id="main">
        <Hero />
        <Work />
        <OnSite />
        <Area />
        <EnquireBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SiteShell>
  );
}
