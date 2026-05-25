import type { SeoLandingPage } from "./seo-landing-data";
import {
  breadcrumbJsonLd,
  canonicalUrl,
  faqJsonLd,
  organizationJsonLd,
  seoMeta,
  serviceJsonLd,
} from "./seo";

export function seoLandingHead(page: SeoLandingPage) {
  return {
    meta: seoMeta({
      title: page.title,
      description: page.metaDescription,
      path: page.path,
    }),
    links: [{ rel: "canonical", href: canonicalUrl(page.path) }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationJsonLd()) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: page.h1,
            description: page.metaDescription,
            path: page.path,
            areaServed: page.areaServed,
            serviceType: page.serviceType,
          }),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(page.faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.h1, path: page.path },
          ]),
        ),
      },
    ],
  };
}
