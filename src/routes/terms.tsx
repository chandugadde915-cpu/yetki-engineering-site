import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageShell } from "@/components/site/PageShell";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Terms of Use | Yetki Engineering";
const DESC =
  "Read the Yetki Engineering website terms for service information, enquiries, quotations, intellectual property and acceptable use.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/terms" }),
    links: [{ rel: "canonical", href: canonicalUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of Use"
      intro="These terms apply to the use of the Yetki Engineering website and enquiry forms."
    >
      <ContentBand>
        <div className="space-y-8 text-sm sm:text-base text-foreground/75 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Website information</h2>
            <p className="mt-3">Service descriptions are provided for general information. Final scope, price, delivery and technical requirements are confirmed through written communication or quotation.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Project enquiries</h2>
            <p className="mt-3">Submitting a form does not create a contract. Our team may request additional technical details before confirming feasibility or timelines.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-3">Website content, images and branding belong to Yetki Engineering or their respective owners and may not be reused without permission.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">For terms or service questions, email info@yetkiengineering.com.</p>
          </section>
        </div>
      </ContentBand>
    </PageShell>
  );
}
