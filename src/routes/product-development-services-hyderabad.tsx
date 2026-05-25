import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/product-development-services-hyderabad"];

export const Route = createFileRoute("/product-development-services-hyderabad")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
