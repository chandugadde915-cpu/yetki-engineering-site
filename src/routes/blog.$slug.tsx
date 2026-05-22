import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, CATEGORIES, getArticle, type Article } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} | Yetki Engineering Blog` : "Article | Yetki Engineering";
    const desc = a?.excerpt ?? "Engineering insights from Yetki Engineering.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: a?.tags.join(", ") ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a?.cover ?? "" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: a?.cover ?? "" },
      ],
      links: a ? [{ rel: "canonical", href: `/blog/${a.slug}` }] : [],
      scripts: a ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          author: { "@type": "Organization", name: a.author },
          image: a.cover,
          keywords: a.tags.join(", "),
          articleSection: CATEGORIES[a.category].label,
        }),
      }] : [],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-blue-300"><ArrowLeft size={14} /> Back to blog</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Couldn't load this article</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Try again</button>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200">
        <ArrowLeft size={12} /> Back to insights
      </Link>
      <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-blue-300">
        {CATEGORIES[article.category].label}
      </div>
      <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">{article.title}</h1>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} min read</span>
        <span>•</span>
        <span>{new Date(article.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
        <span>•</span>
        <span>{article.author}</span>
      </div>

      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl glass-strong glow-blue">
        <img src={article.cover} alt={article.title} className="h-full w-full object-cover" />
      </div>

      <p className="mt-8 text-lg text-foreground/85 leading-relaxed">{article.excerpt}</p>

      <div className="mt-10 space-y-10">
        {article.body.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl sm:text-2xl font-semibold">{s.heading}</h2>
            <p className="mt-3 text-base text-foreground/80 leading-relaxed">{s.content}</p>
            {s.bullets && (
              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl glass-strong p-6">
        <h3 className="text-sm uppercase tracking-[0.22em] text-blue-300">Key takeaways</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {article.takeaways.map((t) => (
            <li key={t} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />{t}</li>
          ))}
        </ul>
      </aside>

      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((t) => (
          <span key={t} className="rounded-full glass px-3 py-1 text-[11px] text-muted-foreground">#{t}</span>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h3 className="text-lg font-semibold">More in {CATEGORIES[article.category].label}</h3>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group rounded-xl glass p-4 hover:bg-blue-500/5">
                <div className="text-sm font-medium leading-snug">{a.title}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-blue-300">Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16 rounded-3xl glass-strong p-8 text-center glow-blue">
        <h3 className="text-2xl font-semibold">Have an engineering project?</h3>
        <p className="mt-2 text-sm text-muted-foreground">Talk to our team about 3D scanning, reverse engineering or precision manufacturing.</p>
        <Link to="/" hash="contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white">
          Request a Quote <ArrowRight size={14} />
        </Link>
      </section>
    </article>
  );
}
