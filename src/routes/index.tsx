import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/home/about";
import { Area } from "@/components/home/area";
import { Builders } from "@/components/home/builders";
import { EnquireBand } from "@/components/home/enquire-band";
import { Hero } from "@/components/home/hero";
import { OnSite } from "@/components/home/on-site";
import { Process } from "@/components/home/process";
import { Standard } from "@/components/home/standard";
import { Valley } from "@/components/home/valley";
import { Work } from "@/components/home/work";
import { SiteShell } from "@/components/site-shell";
import { bio, business, suburbs } from "@/lib/site";
import { SITE_URL, absUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: business.name,
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
  founder: {
    "@type": "Person",
    name: business.operator,
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
        <Standard />
        <Work />
        <OnSite />
        <Valley />
        <Process />
        <Area />
        <About />
        <Builders />
        <EnquireBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SiteShell>
  );
}
