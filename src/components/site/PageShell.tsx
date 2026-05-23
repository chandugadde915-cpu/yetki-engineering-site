import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

type PageShellProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-lg text-foreground/70 leading-relaxed">
              {intro}
            </p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function ContentBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 rounded-xl glass p-4 text-sm">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-strong p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to discuss an engineering project?</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Share your component, scan, CAD, mould or production requirement and our Hyderabad engineering team will respond with the next practical step.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Contact Yetki Engineering <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
