import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import hero from "@/assets/scanner.webp";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const TITLE = "Industrial 3D Scanner Supplier in India | Blue Light & Laser Scanners";
const DESC =
  "Authorized supplier and service partner for professional industrial 3D scanners in India — blue light scanners, laser scanners, and metrology systems.";

export const Route = createFileRoute("/3d-scanner-sales")({
  head: () => ({
    meta: [
      ...seoMeta({ title: TITLE, description: DESC, path: "/3d-scanner-sales", image: hero }),
      {
        name: "keywords",
        content:
          "industrial 3D scanner supplier India, blue light scanner India, laser scanner sales, jewellery 3D scanner, metrology scanner Hyderabad",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/3d-scanner-sales") }],
  }),
  component: () => (
    <ServicePage
      eyebrow="3D Scanner Sales & Support"
      title={
        <>
          Professional <span className="text-gradient-blue">3D Scanners</span> &amp; Metrology
          Systems.
        </>
      }
      intro="Yetki Engineering is a trusted supplier and support partner for professional industrial 3D scanners — including blue light scanners, laser scanners and metrology-grade systems. We deliver hardware, training, calibration and after-sales service across India."
      heroImage={hero}
      heroImageAlt="Industrial blue light and laser 3D scanner for metrology inspection"
      sections={[
        {
          heading: "Scanner Portfolio",
          body: "Our scanner portfolio covers industrial metrology, reverse engineering, inspection, jewellery and product design applications. Each system is selected and configured for the customer's accuracy, volume and workflow needs.",
          bullets: [
            "Industrial metrology scanners",
            "Blue light structured-light scanners",
            "Infrared laser scanners",
            "Jewellery 3D scanners",
            "Portable handheld scanners",
            "CMM-grade stationary systems",
          ],
        },
        {
          heading: "Technical Specifications",
          body: "Our flagship industrial scanners deliver sub-0.01 mm accuracy, 7.1 million measurements per second, infrared laser technology and full integration with leading reverse engineering and inspection software packages.",
          bullets: [
            "0.01 mm accuracy class",
            "7.1M measurements per second",
            "Multi-laser & structured light",
            "Wireless operation",
            "Geomagic / Polyworks compatible",
          ],
        },
        {
          heading: "Service, Training & Support",
          body: "Every scanner we supply is delivered with on-site installation, operator training, calibration support and ongoing service contracts. Our engineers stay involved long after delivery — ensuring the system pays back as a long-term measurement asset.",
          bullets: [
            "On-site installation",
            "Operator certification training",
            "Annual calibration",
            "AMC and service contracts",
            "Software upgrades and consumables",
          ],
        },
      ]}
      applications={[
        "Manufacturing QA labs",
        "Reverse engineering bureaus",
        "Aerospace inspection",
        "Automotive R&D",
        "Jewellery design",
        "Medical device R&D",
      ]}
      faqs={[
        {
          q: "Are you an authorized 3D scanner supplier?",
          a: "Yes. We supply professional industrial 3D scanners with full warranty, calibration and authorized service.",
        },
        {
          q: "Do you provide training with the scanner?",
          a: "Yes. Every scanner is delivered with operator training, software setup and calibration.",
        },
        {
          q: "Can I demo a 3D scanner before buying?",
          a: "Yes. We arrange product demonstrations on-site or at our facility in Hyderabad.",
        },
      ]}
      related={[
        { to: "/3d-scanning-services", label: "3D Scanning Services" },
        { to: "/reverse-engineering-services", label: "Reverse Engineering" },
        { to: "/cad-modelling-services", label: "CAD Modelling" },
      ]}
    />
  ),
});
