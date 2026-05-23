import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const OFFICE_ADDRESS = "#36, Phase 1 Road, TIE, Balanagar, Hyderabad 500037";
const LINKEDIN_URL = "https://in.linkedin.com/company/3d-levin-engineering-pvt-ltd";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="absolute inset-x-0 -top-px h-px divider-glow" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <div className="grid h-12 w-14 place-items-center overflow-hidden">
              <span
                aria-hidden="true"
                className="block h-full w-full bg-gradient-to-br from-white via-blue-200 to-blue-500 drop-shadow-[0_0_14px_rgba(108,182,255,0.34)]"
                style={{
                  WebkitMask: "url('/yetki-mark.png?v=site') center / contain no-repeat",
                  mask: "url('/yetki-mark.png?v=site') center / contain no-repeat",
                }}
              />
            </div>
            <div>
              <div className="text-base font-semibold">Yetki Engineering Pvt Ltd</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Future of Precision Engineering</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Precision engineering and advanced manufacturing — 3D scanning, reverse engineering, CAD reconstruction, mould design, and scalable production for industrial innovation.
          </p>
          <div className="mt-6 space-y-3 text-sm text-foreground/80">
            <div className="flex items-center gap-2"><Phone size={14} className="text-blue-400" /><span>+91-9505923789</span></div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-blue-400" /><span>info@yetkiengineering.com</span></div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-blue-400 mt-1 shrink-0" />
              <span>YETKI ENGINEERING PVT LTD, Office address, {OFFICE_ADDRESS}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/3d-scanning-services" className="hover:text-blue-300">3D Scanning Services</Link></li>
            <li><Link to="/reverse-engineering-services" className="hover:text-blue-300">Reverse Engineering</Link></li>
            <li><Link to="/cad-modelling-services" className="hover:text-blue-300">CAD Modelling</Link></li>
            <li><Link to="/mould-design-manufacturing" className="hover:text-blue-300">Mould Design & Making</Link></li>
            <li><Link to="/precision-manufacturing" className="hover:text-blue-300">Precision Manufacturing</Link></li>
            <li><Link to="/3d-scanner-sales" className="hover:text-blue-300">3D Scanner Sales</Link></li>
            <li><Link to="/industrial-product-development" className="hover:text-blue-300">Product Development</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><a href="/#industries" className="hover:text-blue-300">Industries</a></li>
            <li><Link to="/case-studies" className="hover:text-blue-300">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-300">Terms</Link></li>
          </ul>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-blue-300"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Yetki Engineering Pvt Ltd. All rights reserved.</div>
          <div>Precision Engineering • Hyderabad • India</div>
        </div>
      </div>
    </footer>
  );
}
