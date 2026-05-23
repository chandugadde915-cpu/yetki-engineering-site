import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContentBand, CtaBand, PageShell } from "@/components/site/PageShell";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Engineering Services | 3D Scanning, CAD & Manufacturing Hyderabad";
const DESC =
  "Explore Yetki Engineering services including 3D scanning, reverse engineering, CAD modelling, mould design, precision manufacturing and industrial 3D scanner support.";

const services = [
  { to: "/3d-scanning-services", title: "3D Scanning Services", text: "Blue light, laser and metrology-grade scanning for industrial components." },
  { to: "/reverse-engineering-services", title: "Reverse Engineering", text: "Convert physical parts into accurate CAD, drawings and manufacturable data." },
  { to: "/cad-modelling-services", title: "CAD Modelling", text: "Parametric modelling, surfacing and product development for production teams." },
  { to: "/mould-design-manufacturing", title: "Mould Design & Manufacturing", text: "Injection mould design, tooling support and mould manufacturing workflows." },
  { to: "/precision-manufacturing", title: "Precision Manufacturing", text: "Prototype and batch manufacturing for industrial components and assemblies." },
  { to: "/3d-scanner-sales", title: "3D Scanner Sales", text: "Industrial 3D scanner supply, onboarding and technical support." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: seoMeta({ title: TITLE, description: DESC, path: "/services" }),
    links: [{ rel: "canonical", href: canonicalUrl("/services") }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title={<>Industrial engineering services from scan to production.</>}
      intro="Choose the service path that fits your part, product, tool or production requirement."
    >
      <ContentBand>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.to} to={service.to} className="group rounded-2xl glass-strong p-6 hover:bg-blue-500/5">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-300">
                View service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </ContentBand>
      <CtaBand />
    </PageShell>
  );
}
