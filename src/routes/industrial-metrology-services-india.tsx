import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/industrial-metrology-services-india"];

export const Route = createFileRoute("/industrial-metrology-services-india")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
