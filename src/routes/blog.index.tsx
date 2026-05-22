import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES, CATEGORIES, type Category } from "@/lib/blog-data";
import { ArrowRight, Clock } from "lucide-react";

const TITLE = "Engineering Insights Blog | Yetki Engineering";
const DESC = "Practical insights on 3D scanning, reverse engineering, precision manufacturing, mould design and industrial product development from Yetki Engineering.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "engineering blog India, 3D scanning blog, reverse engineering articles, manufacturing insights, mould design articles" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-blue-200">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Engineering Insights
      </div>
      <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
        Notes from the <span className="text-gradient-blue">precision engineering</span> floor.
      </h1>
      <p className="mt-5 max-w-2xl text-base text-foreground/70 leading-relaxed">
        Field-tested writing on 3D scanning, reverse engineering, mould making, and the industrial product pipeline — from the Yetki Engineering team in Hyderabad.
      </p>

      {/* Category chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {(Object.keys(CATEGORIES) as Category[]).map((c) => (
          <Link
            key={c}
            to="/blog/category/$category"
            params={{ category: c }}
            className="rounded-full glass px-4 py-1.5 text-xs text-foreground/80 hover:bg-blue-500/10 hover:text-blue-100"
          >
            {CATEGORIES[c].label}
          </Link>
        ))}
      </div>

      {/* Featured */}
      <Link
        to="/blog/$slug"
        params={{ slug: featured.slug }}
        className="mt-12 grid lg:grid-cols-2 gap-6 rounded-3xl glass-strong overflow-hidden group glow-blue"
      >
        <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
          <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
        </div>
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-[0.22em] text-blue-300">{CATEGORIES[featured.category].label}</div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight">{featured.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{featured.excerpt}</p>
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} min read</span>
            <span>{new Date(featured.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-300">
            Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>

      {/* Grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((a) => (
          <Link
            key={a.slug}
            to="/blog/$slug"
            params={{ slug: a.slug }}
            className="group rounded-2xl glass-strong overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={a.cover} alt={a.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-blue-300">{CATEGORIES[a.category].label}</div>
              <h3 className="mt-2 text-base font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{a.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={11} /> {a.readTime} min</span>
                <span>•</span>
                <span>{new Date(a.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
