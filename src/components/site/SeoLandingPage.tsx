import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CheckList, ContentBand, CtaBand, PageShell } from "./PageShell";
import type { SeoLandingPage as SeoLandingPageData } from "@/lib/seo-landing-data";

export function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  return (
    <PageShell eyebrow={page.eyebrow} title={page.h1} intro={page.intro}>
      <ContentBand>
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Service overview</h2>
          {page.overview.map((paragraph) => (
            <p key={paragraph} className="text-sm sm:text-base text-foreground/75 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Applications</h2>
        <CheckList items={page.applications} />
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Industries served</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.industries.map((industry) => (
            <div key={industry} className="rounded-xl glass p-4 text-sm">
              {industry}
            </div>
          ))}
        </div>
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Process steps</h2>
        <div className="space-y-3">
          {page.process.map((step, index) => (
            <div key={step} className="rounded-2xl glass-strong p-5">
              <h3 className="text-sm font-semibold text-blue-300">Step {index + 1}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Why choose Yetki Engineering</h2>
        <CheckList items={page.whyChoose} />
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Technical capabilities</h2>
        <CheckList items={page.capabilities} />
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Related services</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {page.related.map((item) => (
            <Link
              key={`${item.to}-${item.label}`}
              to={item.to}
              className="group flex items-center justify-between rounded-xl glass p-4 text-sm hover:bg-blue-500/5"
            >
              {item.label}
              <ArrowRight
                size={14}
                className="text-blue-300 transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </ContentBand>

      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          {page.faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl glass overflow-hidden">
              <summary className="cursor-pointer list-none p-5 text-sm sm:text-base font-medium">
                {faq.q}
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </ContentBand>

      <CtaBand />
    </PageShell>
  );
}
