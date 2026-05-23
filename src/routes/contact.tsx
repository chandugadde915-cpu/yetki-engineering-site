import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Contact Yetki Engineering | 3D Scanning & CAD Services Hyderabad";
const DESC =
  "Contact Yetki Engineering in Hyderabad for 3D scanning, reverse engineering, CAD modelling, mould design and precision manufacturing enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/contact" }),
    links: [{ rel: "canonical", href: canonicalUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
