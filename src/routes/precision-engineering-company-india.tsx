import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/precision-engineering-company-india"];

export const Route = createFileRoute("/precision-engineering-company-india")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
