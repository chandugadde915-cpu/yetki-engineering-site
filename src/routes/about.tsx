import { createFileRoute } from "@tanstack/react-router";
import { CheckList, ContentBand, CtaBand, PageShell } from "@/components/site/PageShell";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "About Yetki Engineering | Precision Engineering Company Hyderabad";
const DESC =
  "Learn about Yetki Engineering, a Hyderabad precision engineering company providing 3D scanning, reverse engineering, CAD modelling, mould design and manufacturing services.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/about" }),
    links: [{ rel: "canonical", href: canonicalUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title={<>Precision engineering for industrial product teams.</>}
      intro="Yetki Engineering Pvt Ltd supports manufacturers, product developers and tooling teams with measurement-led engineering services from Hyderabad."
    >
      <ContentBand>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Who we are</h2>
            <p className="mt-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
              We combine industrial 3D scanning, CAD reconstruction, reverse engineering, mould design and precision manufacturing into one practical workflow. Our team helps clients turn physical components, legacy parts and early prototypes into production-ready data and reliable manufactured outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">What clients rely on</h2>
            <p className="mt-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
              Every project is handled with clear deliverables, engineering documentation, inspection discipline and confidentiality for sensitive product data.
            </p>
          </div>
        </div>
      </ContentBand>
      <ContentBand>
        <h2 className="mb-6 text-2xl font-semibold">Core capabilities</h2>
        <CheckList
          items={[
            "Industrial 3D scanning and metrology capture",
            "Reverse engineering for legacy and obsolete parts",
            "CAD modelling, surfacing and product development",
            "Injection mould design, tooling and manufacturing support",
            "Precision manufacturing for prototypes and production batches",
            "Engineering support for automotive, aerospace and industrial sectors",
          ]}
        />
      </ContentBand>
      <CtaBand />
    </PageShell>
  );
}
