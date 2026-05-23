export const SITE_URL = "https://yetkiengineering.com";
export const SITE_HOST = "yetkiengineering.com";
export const SITE_NAME = "Yetki Engineering";
export const COMPANY_NAME = "Yetki Engineering Pvt Ltd";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/yetki-mark.png`;
const INDEXABLE_HOSTS = new Set([SITE_HOST, `www.${SITE_HOST}`]);

type SeoMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

type FaqItem = {
  q: string;
  a: string;
};

function readEnv(name: string): string | undefined {
  const globalWithProcess = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  };

  return globalWithProcess.process?.env?.[name];
}

function stripProtocol(value: string): string {
  return value
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .toLowerCase();
}

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function canonicalUrl(path = "/"): string {
  return absoluteUrl(path);
}

export function seoMeta({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: SeoMetaInput) {
  const url = canonicalUrl(path);
  const imageUrl = absoluteUrl(image);

  return [
    { title },
    { name: "description", content: description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

export function robotsContentForHost(hostname: string): "index, follow" | "noindex, nofollow" {
  return INDEXABLE_HOSTS.has(stripProtocol(hostname)) ? "index, follow" : "noindex, nofollow";
}

export function robotsContentFromEnv(): "index, follow" | "noindex, nofollow" {
  const productionUrl = readEnv("VERCEL_PROJECT_PRODUCTION_URL");
  const siteUrl = readEnv("SITE_URL") ?? readEnv("PUBLIC_SITE_URL");

  if (siteUrl && INDEXABLE_HOSTS.has(stripProtocol(siteUrl))) {
    return "index, follow";
  }

  if (productionUrl && INDEXABLE_HOSTS.has(stripProtocol(productionUrl))) {
    return "index, follow";
  }

  return "noindex, nofollow";
}

export function robotsTxtForHost(hostname: string): string {
  if (robotsContentForHost(hostname) === "index, follow") {
    return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  }

  return `User-agent: *
Disallow: /
`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "EngineeringService"],
        name: COMPANY_NAME,
        url: SITE_URL,
        telephone: "+91-9505923789",
        email: "info@yetkiengineering.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "#36, Phase 1 Road, TIE, Balanagar",
          addressLocality: "Hyderabad",
          postalCode: "500037",
          addressCountry: "IN",
        },
        areaServed: "India",
        serviceType: [
          "3D Scanning",
          "Reverse Engineering",
          "CAD Modelling",
          "Mould Design",
          "Precision Manufacturing",
          "3D Scanner Sales",
        ],
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
