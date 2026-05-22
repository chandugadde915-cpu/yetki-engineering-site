import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import {
  About, Services, Industries, Showcase, ScannerTech,
  WhyChooseUs, CaseStudies, FAQ, Contact, LogoStrip,
} from "@/components/site/Sections";

const TITLE = "Yetki Engineering | Precision 3D Scanning, Reverse Engineering & Manufacturing";
const DESC = "Yetki Engineering Pvt Ltd — industrial 3D scanning, reverse engineering, CAD modelling, mould design, precision manufacturing and 3D scanner sales in Hyderabad, India.";
const OFFICE_ADDRESS = "#36, Phase 1 Road, TIE, Balanagar";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yetki Engineering Pvt Ltd",
  url: "https://yetkiengineering.com",
  telephone: "+91-9505923789",
  email: "info@yetkiengineering.com",
  address: { "@type": "PostalAddress", streetAddress: OFFICE_ADDRESS, addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500037", addressCountry: "IN" },
  description: DESC,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "3D Scanning Services India, Reverse Engineering Hyderabad, CAD Modelling Services, Mould Design Company, Injection Mould Manufacturing, Industrial 3D Scanner Supplier, Precision Manufacturing Company, Product Development Services" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgJsonLd) }],
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
