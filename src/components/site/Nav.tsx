import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/3d-scanning-services", label: "3D Scanning" },
  { to: "/reverse-engineering-services", label: "Reverse Engineering" },
  { to: "/cad-modelling-services", label: "CAD Modelling" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Insights" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let frame = 0;
    let previous = window.scrollY > 12;
    setScrolled(previous);
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 12;
        if (next !== previous) {
          previous = next;
          setScrolled(next);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-1" : "py-2"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-1 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link
            to="/"
            className="group flex h-14 w-44 shrink-0 items-center overflow-hidden sm:h-16 sm:w-52"
            aria-label="Yetki Engineering home"
          >
            <img
              src="/yetki-logo-dark.webp"
              alt="Yetki Engineering"
              width={640}
              height={320}
              className="h-auto w-full shrink-0 object-contain transition-transform group-hover:scale-[1.03]"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(60,130,255,0.4)] hover:shadow-[0_0_30px_rgba(60,130,255,0.6)] transition-all"
            >
              Request a Quote
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden flex h-11 w-11 items-center justify-center rounded-lg glass"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden mt-2 rounded-2xl glass-strong p-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
