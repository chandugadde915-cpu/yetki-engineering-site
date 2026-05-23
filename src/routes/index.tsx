import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Services,
  Industries,
  Showcase,
  ScannerTech,
  WhyChooseUs,
  CaseStudies,
  FAQ,
  Contact,
  LogoStrip,
} from "@/components/site/Sections";
import heroImage from "@/assets/hero-factory.webp";
import { canonicalUrl, organizationJsonLd, seoMeta } from "@/lib/seo";

const TITLE = "Yetki Engineering | 3D Scanning, Reverse Engineering & CAD Services Hyderabad";
const DESC =
  "Yetki Engineering provides 3D scanning, reverse engineering, CAD modelling, mould design and precision manufacturing services in Hyderabad for automotive, aerospace and industrial sectors.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...seoMeta({ title: TITLE, description: DESC, path: "/", image: heroImage }),
      {
        name: "keywords",
        content:
          "3D Scanning Services India, Reverse Engineering Hyderabad, CAD Modelling Services, Mould Design Company, Injection Mould Manufacturing, Industrial 3D Scanner Supplier, Precision Manufacturing Company, Product Development Services",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationJsonLd()) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <Industries />
        <Showcase />
        <ScannerTech />
        <WhyChooseUs />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
