import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/cnc-manufacturing-services-hyderabad"];

export const Route = createFileRoute("/cnc-manufacturing-services-hyderabad")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
