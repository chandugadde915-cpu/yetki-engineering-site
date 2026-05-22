import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/components.jpg";

const TITLE = "Industrial Product Development Services in India | Yetki Engineering";
const DESC = "Industrial product development services — concept to production. CAD, prototyping, tooling and mass manufacturing for industrial, automotive, consumer and medical products.";

export const Route = createFileRoute("/industrial-product-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "industrial product development India, product design and manufacturing, prototype to production India, end-to-end product engineering Hyderabad" },
    ],
    links: [{ rel: "canonical", href: "/industrial-product-development" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Industrial Product Development"
      title={<>End-to-End <span className="text-gradient-blue">Product Development</span> for Industry.</>}
      intro="Yetki Engineering takes industrial products from concept to mass production — combining CAD engineering, rapid prototyping, tooling and scalable manufacturing inside a single engineering team."
      heroImage={hero}
      sections={[
        {
          heading: "Concept to Production Pipeline",
          body: "Our integrated pipeline shortens product development cycles by removing handoffs between design, prototyping and manufacturing. The same engineering team that models your product also runs DFM, tool design and production validation.",
          bullets: [
            "Requirement capture & specification",
            "Concept design and ideation",
            "Detailed CAD engineering",
            "Rapid prototyping",
            "DFM & tooling design",
            "Pilot and mass production",
          ],
        },
        {
          heading: "Where We Add Value",
          body: "We specialize in industrial, automotive, consumer and medical product categories where precision, repeatability and engineering rigor are non-negotiable. Our cross-discipline team brings mechanical design, materials, manufacturing and metrology expertise to every project.",
          bullets: [
            "Mechanical product engineering",
            "Plastic & metal component design",
            "Tooling and fixture development",
            "Pilot manufacturing",
            "Production scaling",
            "Continuous improvement",
          ],
        },
        {
          heading: "Engineering Discipline",
          body: "Every project is run with structured documentation, change tracking and quality gates — so what you approve in CAD is exactly what comes out of production.",
        },
      ]}
      applications={[
        "Automotive aftermarket products",
        "Industrial machinery accessories",
        "Consumer durables",
        "Medical equipment housings",
        "IoT and electronics enclosures",
        "Tooling and fixtures",
      ]}
      faqs={[
        { q: "Do you take products from idea to mass production?", a: "Yes — our team covers the full pipeline: concept, CAD, prototype, tooling and production." },
        { q: "Can you work under NDA on confidential products?", a: "Yes. All product development engagements are NDA-protected with strict IP controls." },
        { q: "What industries do you serve?", a: "Automotive, industrial machinery, consumer products, medical equipment, tooling, plastics and aerospace." },
      ]}
      related={[
        { to: "/cad-modelling-services", label: "CAD Modelling" },
        { to: "/mould-design-manufacturing", label: "Mould Design" },
        { to: "/precision-manufacturing", label: "Manufacturing" },
      ]}
    />
  ),
});
