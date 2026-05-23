import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, CATEGORIES, type Category, type Article } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { canonicalUrl, seoMeta } from "@/lib/seo";

const VALID = Object.keys(CATEGORIES) as Category[];

export const Route = createFileRoute("/blog/category/$category")({
  loader: ({ params }) => {
    const cat = params.category as Category;
    if (!VALID.includes(cat)) throw notFound();
    const articles = ARTICLES.filter((a) => a.category === cat);
    return { cat, articles, meta: CATEGORIES[cat] };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.meta;
    const title = m
      ? `${m.label} Insights | Yetki Engineering Blog`
      : "Category | Yetki Engineering";
    const desc = m?.desc ?? "Engineering insights from Yetki Engineering.";
    return {
      meta: [
        ...seoMeta({
          title,
          description: desc,
          path: loaderData ? `/blog/category/${loaderData.cat}` : "/blog",
          image: loaderData?.articles[0]?.cover,
        }),
      ],
      links: loaderData
        ? [{ rel: "canonical", href: canonicalUrl(`/blog/category/${loaderData.cat}`) }]
        : [],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Category not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-blue-300">
        <ArrowLeft size={14} /> Back to blog
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Couldn't load this category</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
        Try again
      </button>
    </div>
  ),
});

function CategoryPage() {
  const { cat, articles, meta } = Route.useLoaderData() as {
    cat: Category;
    articles: Article[];
    meta: { label: string; desc: string };
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200"
      >
        <ArrowLeft size={12} /> All insights
      </Link>
      <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-blue-300">Category</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold">{meta.label}</h1>
      <p className="mt-3 max-w-2xl text-base text-foreground/70 leading-relaxed">{meta.desc}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {VALID.map((c) => (
          <Link
            key={c}
            to="/blog/category/$category"
            params={{ category: c }}
            className={`rounded-full px-4 py-1.5 text-xs ${c === cat ? "bg-blue-500/20 text-blue-100 border border-blue-400/40" : "glass text-foreground/80 hover:bg-blue-500/10"}`}
          >
            {CATEGORIES[c].label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((a) => (
          <Link
            key={a.slug}
            to="/blog/$slug"
            params={{ slug: a.slug }}
            className="group rounded-2xl glass-strong overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={a.cover}
                alt={a.title}
                width={1280}
                height={800}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{a.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {a.readTime} min
                </span>
                <span>•</span>
                <span>
                  {new Date(a.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-300">
                Read{" "}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
        {articles.length === 0 && (
          <div className="col-span-full glass rounded-2xl p-10 text-center text-sm text-muted-foreground">
            No articles in this category yet — check back soon.
          </div>
        )}
      </div>
    </div>
  );
}
