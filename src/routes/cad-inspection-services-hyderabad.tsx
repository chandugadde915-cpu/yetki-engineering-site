import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/cad-inspection-services-hyderabad"];

export const Route = createFileRoute("/cad-inspection-services-hyderabad")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
