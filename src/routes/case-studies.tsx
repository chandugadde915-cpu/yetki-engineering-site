import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, CtaBand, PageShell } from "@/components/site/PageShell";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Engineering Case Studies | Yetki Engineering Hyderabad";
const DESC =
  "Review Yetki Engineering case studies for automotive reverse engineering, mould manufacturing and CAD reconstruction projects in Hyderabad.";

const cases = [
  {
    title: "Automotive bracket reverse engineering",
    sector: "Automotive",
    result: "Legacy aluminium bracket scanned, reconstructed in CAD and prepared for tolerance-controlled manufacturing.",
  },
  {
    title: "Plastic housing mould development",
    sector: "Consumer products",
    result: "Injection mould design and machining support for repeatable high-volume plastic housing production.",
  },
  {
    title: "Medical component CAD reconstruction",
    sector: "Medical equipment",
    result: "Critical component geometry captured and rebuilt into clean CAD data for controlled manufacturing review.",
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/case-studies" }),
    links: [{ rel: "canonical", href: canonicalUrl("/case-studies") }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Case Studies"
      title={<>Measured engineering outcomes for industrial teams.</>}
      intro="Selected examples of how scanning, CAD and manufacturing support solve real production and product-development problems."
    >
      <ContentBand>
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="rounded-2xl glass-strong p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-blue-300">{item.sector}</div>
              <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.result}</p>
            </article>
          ))}
        </div>
      </ContentBand>
      <CtaBand />
    </PageShell>
  );
}
