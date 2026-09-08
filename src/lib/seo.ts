import { business } from "@/lib/site";

export const SITE_URL = "https://naixus-roof-technicians.vercel.app";

export const defaultTitle =
  "Naixus Roof Technicians — New-build roofing, Peel corridor";

export const defaultDescription =
  "Specialist roof sheeting, valleys and ridge capping for new-build residential projects in Serpentine–Jarrahdale, Armadale and Peel. Sarking through to finishing flashings. Keysbrook, WA.";

export function absUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function rootHead() {
  const url = absUrl("/");
  const image = absUrl("/og.jpg");
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { name: "theme-color", content: "#3e4a51" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: business.operator },
      { name: "geo.region", content: "AU-WA" },
      { name: "geo.placename", content: "Keysbrook" },
      { name: "geo.position", content: "-32.433;115.983" },
      { name: "ICBM", content: "-32.433, 115.983" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { property: "og:site_name", content: business.name },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      {
        property: "og:image:alt",
        content: `${business.name} — new-build roofing, Peel corridor`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: defaultDescription },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en-AU", href: url },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous" as const,
      },
      { rel: "dns-prefetch", href: "https://formsubmit.co" },
      { rel: "preload", as: "image", href: "/images/hero.webp", type: "image/webp" },
    ],
  };
}
