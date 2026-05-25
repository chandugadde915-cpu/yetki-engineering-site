import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/site/SeoLandingPage";
import { seoLandingPageByPath } from "@/lib/seo-landing-data";
import { seoLandingHead } from "@/lib/seo-landing-head";

const page = seoLandingPageByPath["/reverse-engineering-company-india"];

export const Route = createFileRoute("/reverse-engineering-company-india")({
  head: () => seoLandingHead(page),
  component: () => <SeoLandingPage page={page} />,
});
