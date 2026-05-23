import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Contact, FAQ } from "./Sections";
import { faqJsonLd } from "@/lib/seo";

export interface ServicePageProps {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  applications: string[];
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
}

export function ServicePage(p: ServicePageProps) {
  return (
    <div className="min-h-screen relative">
      <Nav />
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={p.heroImage}
            alt={p.heroImageAlt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_260)]/70 via-[oklch(0.14_0.04_260)]/70 to-[oklch(0.14_0.04_260)]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> {p.eyebrow}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]"
          >
            {p.title}
          </motion.h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            {p.intro}
          </p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(60,130,255,0.4)]"
            >
              Request a Quote <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-14">
          {p.sections.map((s, i) => (
            <article key={i} className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-blue-300">
                  Section {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{s.heading}</h2>
              </div>
              <div className="lg:col-span-8 glass-strong rounded-2xl p-6">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
                {s.bullets && (
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-400 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}

          <article className="rounded-3xl glass-strong p-8">
            <h2 className="text-2xl font-semibold">Industry Applications</h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {p.applications.map((a) => (
                <div key={a} className="rounded-xl glass p-4 text-sm">
                  {a}
                </div>
              ))}
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">Related Services</h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {p.related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-xl glass p-4 text-sm flex items-center justify-between hover:bg-blue-500/5"
                >
                  {r.label} <ArrowRight size={14} className="text-blue-300" />
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(p.faqs)) }}
      />
      <FAQOverride faqs={p.faqs} />
      <Contact />
      <Footer />
    </div>
  );
}

function FAQOverride({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl glass overflow-hidden">
              <summary className="cursor-pointer list-none flex items-center justify-between p-5 text-sm sm:text-base font-medium">
                {f.q}
                <span className="text-blue-300 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Suppress unused import warning for FAQ
void FAQ;
