import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/cad-inspection-services-india"];

export const Route = createFileRoute("/cad-inspection-services-india")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
