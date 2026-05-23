import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ScanLine,
  Cog,
  Layers3,
  Boxes,
  Factory,
  Wrench,
  ShoppingBag,
  Car,
  HeartPulse,
  Cpu,
  Plane,
  Hammer,
  Package,
  Building2,
  ShieldCheck,
  Zap,
  Gauge,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import components from "@/assets/components.webp";
import mould from "@/assets/mould.webp";
import scanner from "@/assets/scanner.webp";
import cad from "@/assets/cad-wireframe.webp";
import { faqJsonLd } from "@/lib/seo";

const OFFICE_ADDRESS = "#36, Phase 1 Road, TIE, Balanagar, Hyderabad 500037";
const MAP_COORDINATES = "17.4703437,78.4429305";
const MAP_QUERY = encodeURIComponent(MAP_COORDINATES);

// ---------------- Section heading ----------------
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-blue-200">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> {children}
    </div>
  );
}
function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

// ---------------- Counter ----------------
function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const [v, setV] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const finalValue = `${prefix}${to.toLocaleString()}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          setV(0);
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} aria-label={finalValue}>
      {prefix}
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}

// ---------------- About ----------------
export function About() {
  const stats = [
    { v: 500, suffix: "+", label: "Components Developed" },
    { v: 99, suffix: "%", label: "Precision Accuracy" },
    { v: 50, suffix: "+", label: "Manufacturing Projects" },
    { v: 24, suffix: "/7", label: "Quality Assurance" },
  ];
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionTitle
            kicker="About Yetki Engineering"
            title={
              <>
                Trusted partner in <span className="text-gradient-blue">industrial precision</span>{" "}
                and reverse engineering.
              </>
            }
          />
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Yetki Engineering Pvt Ltd is an industrial engineering company delivering high-precision
            manufacturing and reverse engineering solutions for automotive, industrial machinery,
            consumer, and medical sectors. We bridge advanced metrology, CAD reconstruction, and
            scalable production under one engineering roof.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Advanced 3D scanning & blue-light metrology",
              "CAD reconstruction & legacy part redesign",
              "Mould design and injection mould manufacturing",
              "End-to-end product development & mass production",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-blue-400 mt-0.5" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong glow-blue">
            <img
              src={components}
              alt="Precision machined industrial components"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-3xl font-semibold text-gradient">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Services ----------------
const SERVICES = [
  {
    icon: ScanLine,
    title: "3D Scanning",
    to: "/3d-scanning-services",
    desc: "High-accuracy industrial 3D scanning with blue-light and laser technology for automotive, aerospace, tooling, and manufacturing applications.",
  },
  {
    icon: Cog,
    title: "Reverse Engineering",
    to: "/reverse-engineering-services",
    desc: "Professional reverse engineering for CAD reconstruction, product redesign, legacy component replication, and manufacturing optimization.",
  },
  {
    icon: Layers3,
    title: "CAD Modelling & Product Development",
    to: "/cad-modelling-services",
    desc: "Precision CAD modelling and engineering for industrial products, plastic components, tooling systems, and production-ready designs.",
  },
  {
    icon: Hammer,
    title: "Mould Design & Mould Making",
    to: "/mould-design-manufacturing",
    desc: "Injection mould design and manufacturing for plastic and metal components with industrial-grade dimensional accuracy.",
  },
  {
    icon: Factory,
    title: "Mass Production",
    to: "/precision-manufacturing",
    desc: "Scalable mass manufacturing for automotive, industrial machinery, consumer products, and precision engineering components.",
  },
  {
    icon: Boxes,
    title: "Industrial Component Manufacturing",
    to: "/precision-manufacturing",
    desc: "Custom industrial component manufacturing for heavy machinery, engineering systems, and production equipment.",
  },
  {
    icon: ShoppingBag,
    title: "3D Scanner Sales & Support",
    to: "/3d-scanner-sales",
    desc: "Supply and service of professional industrial 3D scanners — blue-light, laser, and metrology-grade systems.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Capabilities"
          title={
            <>
              Engineering services that <span className="text-gradient-blue">scale precision</span>{" "}
              from prototype to production.
            </>
          }
          sub="From first scan to mass production — a unified engineering pipeline trusted across industries."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all" />
              <div className="relative">
                <div className="inline-grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-400/20">
                  <s.icon size={20} className="text-blue-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to={s.to}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-300 hover:text-blue-200"
                >
                  Learn more{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Industries ----------------
const INDUSTRIES = [
  { icon: Car, name: "Automotive Manufacturing" },
  { icon: Factory, name: "Industrial Machinery" },
  { icon: HeartPulse, name: "Medical Equipment" },
  { icon: Cpu, name: "Consumer Electronics" },
  { icon: Wrench, name: "Tooling & Manufacturing" },
  { icon: Package, name: "Plastic Product Engineering" },
  { icon: Plane, name: "Aerospace Components" },
  { icon: Building2, name: "Heavy Industries" },
];
export function Industries() {
  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 animated-gradient opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Industries we serve"
          title={
            <>
              Engineering across <span className="text-gradient-blue">mission-critical</span>{" "}
              sectors.
            </>
          }
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 hover:border-blue-400/40 hover:bg-blue-500/5 transition-all"
            >
              <it.icon size={22} className="text-blue-300" />
              <div className="mt-4 text-sm font-medium">{it.name}</div>
              <div className="absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-blue-500/0 group-hover:bg-blue-500/20 blur-2xl transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Product showcase ----------------
export function Showcase() {
  const items = [
    {
      img: components,
      t: "Precision Machined Parts",
      alt: "Precision machined industrial components for manufacturing",
      d: "Sub-micron tolerances for critical assemblies.",
    },
    {
      img: mould,
      t: "Injection Moulds",
      alt: "Injection mould design and manufacturing process",
      d: "Hardened steel moulds for high-volume production.",
    },
    {
      img: cad,
      t: "Reverse Engineered CAD",
      alt: "Reverse engineered CAD model for manufacturing",
      d: "Legacy components rebuilt as production-ready models.",
    },
    {
      img: scanner,
      t: "3D Scanner Systems",
      alt: "Industrial blue light 3D scanner for metrology inspection",
      d: "Blue-light and laser scanners with metrology accuracy.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Product showcase"
          title={
            <>
              What we <span className="text-gradient-blue">design, scan, and manufacture</span>.
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass-strong"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.04_260)] via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="text-base font-semibold">{p.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Scanner tech ----------------
export function ScannerTech() {
  const stats = [
    { v: "0.01", u: "mm", l: "Accuracy" },
    { v: "7.1", u: "M/s", l: "Measurements" },
    { v: "IR", u: "Laser", l: "Technology" },
    { v: "ISO", u: "Grade", l: "Metrology" },
  ];
  const scanners = [
    { name: "Metrology Scanner", tag: "Industrial Metrology", spec: "Sub-0.01mm accuracy" },
    { name: "Blue Light Scanner", tag: "Reverse Engineering", spec: "Structured-light precision" },
    { name: "Jewellery 3D Scanner", tag: "Fine Detail", spec: "Micro-feature capture" },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-700/15 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <SectionTitle
            kicker="Scanner technology"
            title={
              <>
                Metrology-grade <span className="text-gradient-blue">3D scanning systems</span> for
                industrial precision.
              </>
            }
            sub="Professional blue-light, laser, and infrared scanning systems engineered for tolerances that production environments demand."
          />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="text-3xl font-semibold text-gradient">
                  {s.v}
                  <span className="text-base text-blue-300 ml-1">{s.u}</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong glow-blue">
            <img
              src={scanner}
              alt="Industrial blue light 3D scanner for metrology inspection"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.04_260)]/80 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 grid sm:grid-cols-3 gap-3">
              {scanners.map((s) => (
                <div key={s.name} className="glass-strong rounded-xl p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-blue-300">
                    {s.tag}
                  </div>
                  <div className="text-sm font-semibold mt-1">{s.name}</div>
                  <div className="text-[11px] text-muted-foreground">{s.spec}</div>
                </div>
              ))}
            </div>
            <div className="scanline absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Why choose us ----------------
export function WhyChooseUs() {
  const items = [
    {
      i: ShieldCheck,
      t: "Industrial-Grade Quality",
      d: "Every component is verified against tolerance and material specs.",
    },
    {
      i: Gauge,
      t: "High Precision Engineering",
      d: "Sub-micron accuracy backed by metrology-grade scanning.",
    },
    { i: Zap, t: "Fast Turnaround", d: "Streamlined pipeline from scan to delivered part." },
    {
      i: Factory,
      t: "Scalable Production",
      d: "From prototype to mass production with consistent quality.",
    },
    {
      i: Cpu,
      t: "Advanced Scanner Technology",
      d: "Latest blue-light, laser & infrared systems in-house.",
    },
    {
      i: Users,
      t: "Expert Engineering Team",
      d: "Mechanical, manufacturing and CAD specialists under one roof.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Why Yetki"
          title={
            <>
              An engineering partner <span className="text-gradient-blue">built for industry</span>.
            </>
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl glass p-6 hover:bg-blue-500/5 transition-colors"
            >
              <it.i size={22} className="text-blue-300" />
              <div className="mt-4 font-semibold">{it.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Case studies ----------------
export function CaseStudies() {
  const cases = [
    {
      title: "Automotive Bracket — Reverse Engineering",
      tag: "Automotive",
      img: components,
      alt: "Reverse engineered automotive bracket manufactured to tolerance",
      stat: ["48h", "delivery"],
      desc: "Legacy aluminum bracket scanned, reconstructed in CAD, and produced at OEM tolerance.",
    },
    {
      title: "Plastic Housing — Mould Manufacturing",
      tag: "Consumer",
      img: mould,
      alt: "Injection mould manufactured for plastic housing production",
      stat: ["100k", "shots"],
      desc: "Injection mould designed and machined for high-volume housing production.",
    },
    {
      title: "Medical Component — CAD Reconstruction",
      tag: "Medical",
      img: cad,
      alt: "Medical component CAD reconstruction for precision manufacturing",
      stat: ["±5", "µm"],
      desc: "Critical surgical component reverse-engineered to medical-grade dimensional accuracy.",
    },
  ];
  return (
    <section id="case-studies" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Case studies"
          title={
            <>
              Engineering outcomes, <span className="text-gradient-blue">measured</span>.
            </>
          }
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl glass-strong overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={c.img}
                  alt={c.alt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] glass px-2 py-1 rounded">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-semibold text-gradient">{c.stat[0]}</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {c.stat[1]}
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-blue-300 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- FAQ ----------------
export function FAQ() {
  const faqs = [
    {
      q: "What 3D scanning services does Yetki Engineering provide?",
      a: "We provide industrial blue-light, laser and infrared 3D scanning for automotive, aerospace, tooling, medical and consumer sectors — with sub-0.01mm accuracy and metrology-grade reporting.",
    },
    {
      q: "Do you offer reverse engineering for legacy components?",
      a: "Yes. We reverse engineer legacy and obsolete parts into production-ready CAD models for redesign, replication and manufacturing optimization.",
    },
    {
      q: "Can you manufacture injection moulds?",
      a: "We design and manufacture injection moulds for plastic and metal components with industrial-grade dimensional tolerances and validated tool life.",
    },
    {
      q: "Where are you located?",
      a: "Yetki Engineering Pvt Ltd is headquartered in Hyderabad, Telangana, India and serves clients across India and globally.",
    },
    {
      q: "Do you sell industrial 3D scanners?",
      a: "Yes — we are a supplier and service partner for professional 3D scanners including blue-light, laser, metrology, and jewellery-grade scanning systems.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <section id="faq" className="relative py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Frequently asked"
            title={
              <>
                Answers about our <span className="text-gradient-blue">engineering services</span>.
              </>
            }
          />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl glass overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between text-left p-5"
                >
                  <span className="text-sm sm:text-base font-medium">{f.q}</span>
                  <span
                    className={`text-blue-300 transition-transform ${open === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  hidden={open !== i}
                  className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed"
                >
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ---------------- Contact ----------------
export function Contact() {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          projectDetails: formData.get("projectDetails"),
          website: formData.get("website"),
          page: window.location.href,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      const message =
        typeof payload.message === "string"
          ? payload.message
          : "We could not send your request right now. Please call or email us directly.";

      if (!response.ok) {
        throw new Error(message);
      }

      setSubmitState("sent");
      setSubmitMessage(message);
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request right now. Please call or email us directly.",
      );
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle
            kicker="Contact"
            title={
              <>
                Engineer your next <span className="text-gradient-blue">precision project</span>{" "}
                with us.
              </>
            }
            sub="Tell us about your component, scan, mould or production requirement. Our engineering team will respond within one business day."
          />
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 glass rounded-xl p-4">
              <Phone size={18} className="text-blue-300" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Phone
                </div>
                <a href="tel:+919505923789" className="text-sm font-medium">
                  +91-9505923789
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 glass rounded-xl p-4">
              <Mail size={18} className="text-blue-300" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </div>
                <a href="mailto:info@yetkiengineering.com" className="text-sm font-medium">
                  info@yetkiengineering.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 glass rounded-xl p-4">
              <MapPin size={18} className="text-blue-300 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Location
                </div>
                <div className="text-sm font-medium leading-relaxed">
                  YETKI ENGINEERING PVT LTD
                  <br />
                  Office address
                  <br />
                  {OFFICE_ADDRESS}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden glass aspect-[16/9] mt-4">
              <iframe
                title="YETKI ENGINEERING PVT LTD — Balanagar, Hyderabad"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`}
                className="h-full w-full grayscale-[40%] opacity-90"
                loading="lazy"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-blue-100"
            >
              Open in Google Maps <ArrowRight size={15} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl glass-strong p-6 sm:p-8 glow-blue">
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" />
          </div>
          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Service
            </label>
            <select
              name="service"
              className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-blue-400/60 outline-none"
            >
              <option>3D Scanning</option>
              <option>Reverse Engineering</option>
              <option>CAD Modelling & Product Development</option>
              <option>Mould Design & Manufacturing</option>
              <option>Precision Manufacturing / Mass Production</option>
              <option>3D Scanner Purchase</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Project details
            </label>
            <textarea
              name="projectDetails"
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-blue-400/60 outline-none resize-none"
              placeholder="Describe your component, tolerances, volume, or scanning needs."
            />
          </div>
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(60,130,255,0.4)] hover:shadow-[0_0_40px_rgba(60,130,255,0.7)] transition-all disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "sending" ? "Sending..." : "Request a Quote"} <ArrowRight size={16} />
          </button>
          {submitMessage && (
            <p
              role={submitState === "error" ? "alert" : "status"}
              className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                submitState === "error"
                  ? "border-red-400/30 bg-red-500/10 text-red-100"
                  : "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-blue-400/60 outline-none"
      />
    </div>
  );
}

// ---------------- Marquee ----------------
export function LogoStrip() {
  const items = [
    "Automotive",
    "Aerospace",
    "Medical",
    "Tooling",
    "Consumer",
    "Industrial",
    "Plastics",
    "Robotics",
  ];
  return (
    <div className="relative border-y border-white/5 py-6 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap animate-[spin-slow_60s_linear_infinite]"
        style={{ animation: "none" }}
      >
        <div className="flex gap-12 animate-marquee">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {it} •
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
