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

export const Route = createFileRoute("/")({
  component: Home,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: business.name,
  description: bio,
  areaServed: suburbs.map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Keysbrook",
    addressRegion: "WA",
    postalCode: "6126",
    addressCountry: "AU",
  },
  founder: {
    "@type": "Person",
    name: business.operator,
  },
  telephone: business.phoneTel,
  email: business.email,
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
