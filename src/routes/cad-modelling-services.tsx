import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/cad-wireframe.webp";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "CAD Modelling & Product Development Services | Yetki Engineering";
const DESC =
  "Precision CAD modelling and product development for industrial products, plastic components, tooling systems and production-ready manufacturing designs.";

export const Route = createFileRoute("/cad-modelling-services")({
  head: () => ({
    meta: [
      ...seoMeta({ title: TITLE, description: DESC, path: "/cad-modelling-services", image: hero }),
      {
        name: "keywords",
        content:
          "CAD modelling services, product development India, 3D CAD design Hyderabad, SolidWorks design services, plastic part design, DFM engineering",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/cad-modelling-services") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="CAD Modelling & Product Development"
      title={
        <>
          Precision <span className="text-gradient-blue">CAD Modelling</span> &amp; Product
          Engineering.
        </>
      }
      intro="Yetki Engineering provides end-to-end CAD modelling and product development services — from concept and 3D design to DFM, prototype and production-ready engineering data packages for industrial, plastic, tooling and consumer products."
      heroImage={hero}
      heroImageAlt="CAD modelling and product development wireframe for manufacturing"
      sections={[
        {
          heading: "From Concept to Production-Ready CAD",
          body: "We design products and components in industry-standard CAD environments — SolidWorks, Creo, NX, Fusion 360 — with a focus on manufacturability, tolerance stack-up, material selection and assembly. Every project is delivered as a complete engineering package: 3D models, 2D drawings, BOM, GD&T and DFM notes.",
          bullets: [
            "Concept design and ideation",
            "Industrial component & assembly modelling",
            "Plastic part design with DFM",
            "Sheet metal & weldment design",
            "Tooling design and fixture engineering",
            "2D drawings with GD&T (ASME Y14.5)",
          ],
        },
        {
          heading: "Product Development Pipeline",
          body: "We run a structured product development pipeline that compresses time-to-market without compromising quality: requirements → concept → CAD → DFM/DFA review → prototype → validation → tooling → production.",
          bullets: [
            "Requirement capture and brief",
            "Multiple concept iterations",
            "Detailed CAD and engineering review",
            "Rapid prototyping and validation",
            "Tooling and process design",
            "Pilot run and production handover",
          ],
        },
        {
          heading: "Engineering Standards",
          body: "Our CAD and product engineering deliverables follow international standards for dimensioning, materials and documentation — ensuring your designs are buildable, scalable and audit-ready.",
        },
      ]}
      applications={[
        "Industrial machinery components",
        "Plastic injection-moulded parts",
        "Automotive sub-assemblies",
        "Medical equipment",
        "Consumer electronics enclosures",
        "Tooling, jigs and fixtures",
        "Aerospace brackets",
      ]}
      faqs={[
        {
          q: "Which CAD software do you work in?",
          a: "Primarily SolidWorks, Creo, NX and Fusion 360. We can also deliver in client-specified CAD formats.",
        },
        {
          q: "Do you handle full product development?",
          a: "Yes — from concept and CAD through prototyping, tooling and mass production under one engineering roof.",
        },
        {
          q: "Can you sign NDAs?",
          a: "Absolutely. All product development engagements are run under strict NDA and IP protection.",
        },
      ]}
      related={[
        { to: "/reverse-engineering-services", label: "Reverse Engineering" },
        { to: "/mould-design-manufacturing", label: "Mould Design" },
        { to: "/industrial-product-development", label: "Product Development" },
      ]}
    />
  ),
});
