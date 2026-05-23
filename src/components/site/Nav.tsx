import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/3d-scanning-services", label: "3D Scanning" },
  { to: "/reverse-engineering-services", label: "Reverse Engineering" },
  { to: "/cad-modelling-services", label: "CAD Modelling" },
  { to: "/mould-design-manufacturing", label: "Mould Design" },
  { to: "/precision-manufacturing", label: "Manufacturing" },
  { to: "/3d-scanner-sales", label: "Scanners" },
  { to: "/blog", label: "Insights" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center gap-3 group" aria-label="Yetki Engineering home">
            <span className="grid h-10 w-12 place-items-center overflow-hidden transition-transform group-hover:scale-[1.03]">
              <span
                aria-hidden="true"
                className="block h-full w-full bg-gradient-to-br from-white via-blue-200 to-blue-500 drop-shadow-[0_0_14px_rgba(108,182,255,0.34)]"
                style={{
                  WebkitMask: "url('/yetki-mark.png?v=site') center / contain no-repeat",
                  mask: "url('/yetki-mark.png?v=site') center / contain no-repeat",
                }}
              />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-tight text-foreground">YETKI</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-blue-200/70">Engineering</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(60,130,255,0.4)] hover:shadow-[0_0_30px_rgba(60,130,255,0.6)] transition-all"
            >
              Request a Quote
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-4 flex flex-col gap-3">
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
