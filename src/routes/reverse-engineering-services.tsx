import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/cad-wireframe.webp";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Reverse Engineering Services in Hyderabad | CAD Reconstruction India";
const DESC =
  "Professional reverse engineering services in India. CAD reconstruction, legacy part replication, redesign and manufacturing optimization. Hyderabad-based engineering team.";

export const Route = createFileRoute("/reverse-engineering-services")({
  head: () => ({
    meta: [
      ...seoMeta({
        title: TITLE,
        description: DESC,
        path: "/reverse-engineering-services",
        image: hero,
      }),
      {
        name: "keywords",
        content:
          "reverse engineering services India, reverse engineering Hyderabad, CAD reconstruction, legacy part replication, product redesign, scan to CAD",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/reverse-engineering-services") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Reverse Engineering"
      title={
        <>
          Reverse Engineering &amp; <span className="text-gradient-blue">CAD Reconstruction</span>{" "}
          Services.
        </>
      }
      intro="Yetki Engineering delivers professional reverse engineering services for CAD reconstruction, legacy component replication, product redesign and manufacturing optimization — built on metrology-grade 3D scanning and senior CAD engineering."
      heroImage={hero}
      heroImageAlt="Reverse engineered CAD model for manufacturing"
      sections={[
        {
          heading: "From Physical Part to Production-Ready CAD",
          body: "Our reverse engineering workflow turns physical parts into accurate, parametric, production-ready CAD models. We start with a high-resolution 3D scan, align and process the mesh, then rebuild the geometry in SolidWorks, Creo, NX or similar — preserving design intent, tolerances and manufacturing constraints.\n\nThis lets you replicate obsolete parts, optimize a legacy design, validate competitor components, or take a hand-built prototype straight into mass production.",
          bullets: [
            "Scan-to-CAD parametric rebuilds",
            "STL/mesh to STEP/IGES conversion",
            "Free-form and Class-A surface reconstruction",
            "GD&T extraction and tolerance analysis",
            "Design optimization for DFM/DFA",
            "Drawing creation & manufacturing data packages",
          ],
        },
        {
          heading: "Use Cases",
          body: "Reverse engineering is the fastest way to bridge a gap between a physical part and a manufacturable design. We support OEMs, MRO providers, mould makers, product companies and R&D teams across industries.",
          bullets: [
            "Obsolete spare parts with no drawings",
            "Heritage automotive components",
            "Worn or damaged moulds and dies",
            "Hand-sculpted prototypes to CAD",
            "Competitor benchmarking and teardown",
            "Re-engineering for cost-down or DFM",
          ],
        },
        {
          heading: "Tools & Standards",
          body: "Our reverse engineering team works in industry-standard CAD environments and produces traceable, fully documented engineering deliverables. Every project is run with version control, change tracking and ISO-aligned dimensional reporting.",
          bullets: [
            "SolidWorks, Creo, NX, Fusion 360",
            "Geomagic Design X, Polyworks, Inspector",
            "GD&T per ASME Y14.5",
            "Material and process documentation",
            "DFM/DFA optimization",
            "NDA-protected engagements",
          ],
        },
      ]}
      applications={[
        "Automotive aftermarket",
        "Aerospace MRO",
        "Industrial machinery",
        "Tooling & moulds",
        "Medical devices",
        "Consumer products",
        "Defense components",
        "Heritage restoration",
      ]}
      faqs={[
        {
          q: "What software do you use for reverse engineering?",
          a: "We use SolidWorks, Creo, NX, Fusion 360 along with Geomagic Design X and Polyworks for scan-to-CAD reconstruction.",
        },
        {
          q: "Can you reverse engineer parts without any drawings?",
          a: "Yes. We routinely reverse engineer parts using only the physical sample, producing fully parametric CAD models and manufacturing drawings.",
        },
        {
          q: "Do you provide manufacturing after reverse engineering?",
          a: "Yes. We offer end-to-end engineering — from scan and CAD reconstruction through mould making and mass production.",
        },
        {
          q: "How accurate is the reconstructed CAD?",
          a: "Reconstructed geometry typically matches the scanned part within ±0.05 mm or tighter, depending on requirements and material.",
        },
      ]}
      related={[
        { to: "/3d-scanning-services", label: "3D Scanning" },
        { to: "/cad-modelling-services", label: "CAD Modelling" },
        { to: "/mould-design-manufacturing", label: "Mould Design" },
      ]}
    />
  ),
});
