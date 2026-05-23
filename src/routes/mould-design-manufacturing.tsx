import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/mould.webp";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Injection Mould Design & Mould Manufacturing Hyderabad | Yetki Engineering";
const DESC =
  "Injection mould design and mould manufacturing services in India. Plastic and metal component moulds with industrial-grade dimensional accuracy and validated tool life.";

export const Route = createFileRoute("/mould-design-manufacturing")({
  head: () => ({
    meta: [
      ...seoMeta({
        title: TITLE,
        description: DESC,
        path: "/mould-design-manufacturing",
        image: hero,
      }),
      {
        name: "keywords",
        content:
          "mould design company India, injection mould manufacturing Hyderabad, plastic mould maker, mould tool design, mould flow analysis",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/mould-design-manufacturing") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Mould Design & Mould Making"
      title={
        <>
          <span className="text-gradient-blue">Injection Mould</span> Design &amp; Manufacturing.
        </>
      }
      intro="Yetki Engineering designs and manufactures injection moulds for plastic and metal components with industrial-grade dimensional accuracy, validated tool life and DFM-driven engineering. From single-cavity prototypes to multi-cavity production tools."
      heroImage={hero}
      heroImageAlt="Injection mould design and manufacturing process"
      sections={[
        {
          heading: "Mould Design Capability",
          body: "Our mould design team engineers tools that balance cycle time, cooling efficiency, draft, parting, gating and tool life. We deliver complete mould design data packs ready for tool-room manufacturing or for handover to your preferred mould maker.",
          bullets: [
            "2-plate and 3-plate mould design",
            "Hot runner and cold runner systems",
            "Multi-cavity & family moulds",
            "Slider, lifter and unscrewing mechanisms",
            "Cooling channel optimization",
            "Mould flow analysis support",
          ],
        },
        {
          heading: "Mould Manufacturing",
          body: "We manufacture injection moulds in P20, H13, S136, NAK80 and similar tool steels using CNC machining, EDM and precision grinding. Every tool is dimensionally verified against the CAD master using metrology-grade 3D scanning before delivery.",
          bullets: [
            "CNC, EDM, wire-cut, grinding",
            "Polishing and surface texturing",
            "Tool tryout and sample shots",
            "Dimensional inspection reports",
            "Mould maintenance and rework",
          ],
        },
        {
          heading: "Quality & Tool Life",
          body: "Our moulds are engineered for repeatability and longevity. We document tool life expectations, recommended process windows, and provide a structured handover that includes drawings, BOM, spares list and maintenance schedule.",
        },
      ]}
      applications={[
        "Automotive plastic components",
        "Consumer goods packaging",
        "Electrical enclosures",
        "Medical disposables",
        "Industrial housings",
        "Closures and caps",
      ]}
      faqs={[
        {
          q: "What mould steels do you work with?",
          a: "We work with P20, H13, S136, NAK80, 718H and other tool steels selected based on volume, material and surface finish requirements.",
        },
        {
          q: "Do you provide mould flow analysis?",
          a: "Yes — we perform mould flow analysis to optimize gate location, fill, cooling and warpage.",
        },
        {
          q: "Can you handle multi-cavity moulds?",
          a: "Yes. We design and manufacture single-cavity, multi-cavity and family moulds with hot or cold runner systems.",
        },
      ]}
      related={[
        { to: "/precision-manufacturing", label: "Precision Manufacturing" },
        { to: "/cad-modelling-services", label: "CAD Modelling" },
        { to: "/reverse-engineering-services", label: "Reverse Engineering" },
      ]}
    />
  ),
});
