import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/components.jpg";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Precision Component Manufacturing & Mass Production India | Yetki Engineering";
const DESC =
  "Scalable precision manufacturing and mass production services in India for automotive, industrial machinery, consumer products and engineering components.";

export const Route = createFileRoute("/precision-manufacturing")({
  head: () => ({
    meta: [
      ...seoMeta({
        title: TITLE,
        description: DESC,
        path: "/precision-manufacturing",
        image: hero,
      }),
      {
        name: "keywords",
        content:
          "precision manufacturing company India, mass production services, industrial component manufacturing, CNC machining Hyderabad, plastic component manufacturing",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/precision-manufacturing") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Precision Manufacturing"
      title={
        <>
          Scalable <span className="text-gradient-blue">Precision Manufacturing</span> &amp; Mass
          Production.
        </>
      }
      intro="Yetki Engineering offers scalable manufacturing solutions for automotive, industrial machinery, consumer products and precision engineering components — backed by validated tooling, in-process inspection and metrology-grade quality control."
      heroImage={hero}
      heroImageAlt="Precision machined component manufacturing"
      sections={[
        {
          heading: "Manufacturing Capabilities",
          body: "Our production lines combine CNC machining, injection moulding, sheet metal, finishing and assembly under a single quality framework. We deliver prototype-to-production runs from a few hundred to several hundred thousand parts a year.",
          bullets: [
            "3, 4 and 5-axis CNC machining",
            "Plastic injection moulding",
            "Sheet metal and fabrication",
            "Surface finishing & coating",
            "Sub-assembly and packaging",
            "Just-in-time delivery",
          ],
        },
        {
          heading: "Industrial Component Manufacturing",
          body: "We manufacture custom industrial components for heavy machinery, engineering systems and production equipment. Every batch is dimensionally inspected against the CAD master and shipped with a quality report.",
          bullets: [
            "Custom mechanical components",
            "Wear parts and bushings",
            "Brackets, housings and assemblies",
            "Plastic injection-moulded parts",
            "Reverse-engineered replacement parts",
          ],
        },
        {
          heading: "Quality Assurance",
          body: "Our QA workflow integrates metrology-grade 3D scanning, CMM and conventional inspection — ensuring traceable, repeatable quality across batches and across years of production.",
          bullets: [
            "First Article Inspection (FAI)",
            "In-process dimensional control",
            "Final inspection with reporting",
            "3D scan-based verification",
            "Material certifications",
          ],
        },
      ]}
      applications={[
        "Automotive Tier-1 / Tier-2",
        "Industrial machinery OEMs",
        "Consumer products",
        "Tooling & dies",
        "Medical equipment",
        "Heavy engineering",
      ]}
      faqs={[
        {
          q: "What production volumes do you support?",
          a: "We support volumes ranging from prototype runs to several hundred thousand parts per year, depending on process and tooling.",
        },
        {
          q: "Do you handle export orders?",
          a: "Yes — we manufacture and ship for clients across India and internationally.",
        },
        {
          q: "Can you handle full make-to-print or design-to-deliver?",
          a: "Both. We manufacture to client drawings, or design and engineer the part end-to-end and deliver finished components.",
        },
      ]}
      related={[
        { to: "/mould-design-manufacturing", label: "Mould Design" },
        { to: "/cad-modelling-services", label: "CAD Modelling" },
        { to: "/industrial-product-development", label: "Product Development" },
      ]}
    />
  ),
});
