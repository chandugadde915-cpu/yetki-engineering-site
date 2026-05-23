import { createFileRoute } from "@tanstack/react-router";
import { ContentBand, PageShell } from "@/components/site/PageShell";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Privacy Policy | Yetki Engineering";
const DESC =
  "Read the Yetki Engineering privacy policy for website enquiries, lead data, analytics and contact information handling.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/privacy-policy" }),
    links: [{ rel: "canonical", href: canonicalUrl("/privacy-policy") }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains how Yetki Engineering handles information submitted through this website."
    >
      <ContentBand>
        <div className="space-y-8 text-sm sm:text-base text-foreground/75 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-3">We collect contact details and project information you submit through enquiry forms, phone calls or email. This may include name, company, email, phone, selected service and project details.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">How we use information</h2>
            <p className="mt-3">We use submitted information to respond to enquiries, prepare engineering discussions, provide quotations and improve our website experience.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Analytics and security</h2>
            <p className="mt-3">The site may use analytics tools to understand aggregate traffic and performance. We do not sell submitted lead information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">For privacy questions, email info@yetkiengineering.com.</p>
          </section>
        </div>
      </ContentBand>
    </PageShell>
  );
}
