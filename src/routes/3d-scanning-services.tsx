import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/scanner.jpg";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "3D Scanning Services in Hyderabad & India | Yetki Engineering";
const DESC =
  "High-accuracy 3D scanning services in Hyderabad, India. Industrial blue light and laser 3D scanning for automotive, aerospace, tooling and manufacturing. Sub-0.01mm precision.";

export const Route = createFileRoute("/3d-scanning-services")({
  head: () => ({
    meta: [
      ...seoMeta({ title: TITLE, description: DESC, path: "/3d-scanning-services", image: hero }),
      {
        name: "keywords",
        content:
          "3D scanning services India, industrial 3D scanning Hyderabad, blue light 3D scanner, laser 3D scanning, metrology scanning, reverse engineering scanning",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/3d-scanning-services") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="3D Scanning Services"
      title={
        <>
          Industrial <span className="text-gradient-blue">3D Scanning</span> with Metrology-Grade
          Precision.
        </>
      }
      intro="Yetki Engineering delivers high-accuracy industrial 3D scanning services across India using advanced blue light, structured light and laser scanning technology — engineered for automotive, aerospace, tooling and precision manufacturing applications."
      heroImage={hero}
      heroImageAlt="Industrial blue light 3D scanner for metrology inspection"
      sections={[
        {
          heading: "Advanced 3D Scanning Technology",
          body: "Our scanning facility in Hyderabad operates a fleet of industrial-grade 3D scanners including blue-light structured-light systems, infrared laser scanners and metrology-grade portable scanners. We capture full geometry, free-form surfaces and complex internal features with sub-0.01 mm accuracy and millions of measurement points per second.\n\nEvery scan is processed by our engineering team into watertight meshes, point clouds, STEP/IGES surfaces or fully parametric CAD models — ready for inspection, reverse engineering or production.",
          bullets: [
            "Blue light structured-light scanning",
            "Infrared and laser metrology scanning",
            "Portable and stationary scanner deployment",
            "Mesh, STL, OBJ, STEP, IGES outputs",
            "GD&T compliant inspection reporting",
            "On-site and in-lab scanning",
          ],
        },
        {
          heading: "What We Scan",
          body: "We scan everything from micro consumer components to large industrial assemblies. Our process captures legacy parts without drawings, validates production parts against CAD, digitizes physical prototypes for design iteration, and reverse-engineers competitor components for benchmarking.",
          bullets: [
            "Automotive body, chassis and engine components",
            "Aerospace structures and tooling",
            "Injection moulds and dies",
            "Medical instruments and prosthetics",
            "Consumer electronics enclosures",
            "Heritage and obsolete legacy parts",
          ],
        },
        {
          heading: "Scanning Process",
          body: "1. Briefing — we capture tolerance, application and deliverable requirements.\n2. Setup — workpiece preparation, targeting and scanner calibration.\n3. Capture — multi-angle scanning to build a dense point cloud.\n4. Processing — alignment, meshing and noise reduction in metrology software.\n5. Deliverable — STL, STEP, inspection report, or parametric CAD as required.",
        },
        {
          heading: "Why Yetki for 3D Scanning",
          body: "Our scanning team has delivered measurement-driven engineering across hundreds of industrial components. We combine professional hardware with calibrated workflows and qualified operators to ensure each deliverable is repeatable, traceable and production-grade.",
          bullets: [
            "Sub-0.01 mm accuracy",
            "7.1M measurements per second",
            "ISO-aligned metrology workflow",
            "Fast turnaround — typical 24–72 hours",
            "Confidential NDA scanning",
            "Pan-India on-site service",
          ],
        },
      ]}
      applications={[
        "Automotive Manufacturing",
        "Aerospace Components",
        "Industrial Machinery",
        "Tooling & Dies",
        "Medical Equipment",
        "Consumer Electronics",
        "Plastic Components",
        "Heavy Engineering",
        "Heritage Restoration",
      ]}
      faqs={[
        {
          q: "What accuracy can your 3D scanning achieve?",
          a: "Our industrial scanners deliver sub-0.01 mm accuracy depending on part geometry, scanner selection and environmental conditions.",
        },
        {
          q: "Do you offer on-site 3D scanning across India?",
          a: "Yes. We provide on-site 3D scanning across India, including Hyderabad, Bengaluru, Chennai, Pune, Mumbai, Delhi and industrial clusters nationwide.",
        },
        {
          q: "What file formats do you deliver?",
          a: "We deliver STL, OBJ, PLY, STEP, IGES, X_T and native CAD formats, along with PDF inspection reports.",
        },
        {
          q: "Can you scan very large or very small parts?",
          a: "Yes — our fleet covers micro components down to a few millimetres and large assemblies several metres in scale.",
        },
        {
          q: "How quickly can scans be delivered?",
          a: "Typical turnaround is 24–72 hours depending on complexity, deliverable and on-site logistics.",
        },
      ]}
      related={[
        { to: "/reverse-engineering-services", label: "Reverse Engineering" },
        { to: "/cad-modelling-services", label: "CAD Modelling" },
        { to: "/3d-scanner-sales", label: "3D Scanner Sales" },
      ]}
    />
  ),
});
