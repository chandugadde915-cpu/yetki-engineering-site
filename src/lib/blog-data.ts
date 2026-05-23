import componentsImg from "@/assets/components.webp";
import scannerImg from "@/assets/scanner.webp";
import cadImg from "@/assets/cad-wireframe.webp";
import mouldImg from "@/assets/mould.webp";
import heroImg from "@/assets/hero-factory.webp";

export type Category = "scanning" | "manufacturing" | "reverse-engineering" | "product-development";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: number;
  date: string;
  author: string;
  cover: string;
  body: { heading: string; content: string; bullets?: string[] }[];
  takeaways: string[];
  tags: string[];
  seoTitle?: string;
  seoDesc?: string;
}

export const CATEGORIES: Record<Category, { label: string; desc: string }> = {
  "scanning": { label: "3D Scanning", desc: "Industrial 3D scanning, metrology and inspection topics." },
  "manufacturing": { label: "Manufacturing", desc: "Precision manufacturing, moulding and mass production insights." },
  "reverse-engineering": { label: "Reverse Engineering", desc: "Scan-to-CAD, legacy part reconstruction and design recovery." },
  "product-development": { label: "Product Development", desc: "Concept to production engineering for industrial products." },
};

export const ARTICLES: Article[] = [
  {
    slug: "blue-light-vs-laser-3d-scanning",
    title: "Blue Light vs Laser 3D Scanning: Which One Should You Use?",
    excerpt: "A practical comparison of structured-light and laser 3D scanning for industrial metrology, reverse engineering, and inspection — and how to pick the right one for your part.",
    category: "scanning",
    readTime: 7,
    date: "2026-03-12",
    author: "Yetki Engineering",
    cover: scannerImg,
    body: [
      { heading: "Two technologies, two strengths",
        content: "Blue light (structured light) and laser scanning are the two dominant industrial 3D scanning technologies. Blue light scanners project a known pattern onto the part and triangulate distortion. Laser scanners project a line or point and capture geometry per-frame. Both can hit sub-0.01 mm accuracy — but they win in different scenarios." },
      { heading: "When blue light wins",
        content: "Blue light is faster on stationary parts and produces denser, cleaner data on matte and lightly reflective surfaces. It's the default for inspection, CAD comparison and short-cycle reverse engineering.",
        bullets: ["High point density per frame", "Excellent on matte surfaces", "Best for stationary, lab-style scans", "Fast capture of complex free-form geometry"] },
      { heading: "When laser wins",
        content: "Laser systems shine on dark, shiny, or hard-to-reach geometry. Handheld laser scanners are better for on-site work, large assemblies and parts where you can't fully stage the workpiece.",
        bullets: ["Better on dark / reflective parts", "Portable, on-site friendly", "Handles large or hard-to-reach geometry", "Forgiving of ambient light"] },
      { heading: "How to choose",
        content: "If the part is brought to a controlled lab, blue light is usually the first pick. If you're scanning installed equipment, large assemblies, or shiny dark surfaces, choose laser. For mixed workflows — exactly what most engineering shops face — a fleet that includes both is the right answer." },
    ],
    takeaways: [
      "Blue light = density and accuracy in lab conditions",
      "Laser = portability and tolerance to surface finish",
      "Match the scanner to the part, not the other way around",
      "A mixed fleet covers nearly every industrial use case",
    ],
    tags: ["3D scanning", "metrology", "blue light", "laser scanning"],
  },
  {
    slug: "reverse-engineering-legacy-parts",
    title: "Reverse Engineering Legacy Parts Without Drawings",
    excerpt: "How to rebuild obsolete components in parametric CAD from a single physical sample — and what to watch out for during scan-to-CAD reconstruction.",
    category: "reverse-engineering",
    readTime: 6,
    date: "2026-02-22",
    author: "Yetki Engineering",
    cover: cadImg,
    body: [
      { heading: "The legacy-part problem",
        content: "Manufacturing teams routinely lose access to OEM drawings — through end-of-life of the original supplier, mergers, or simple data loss. The part still has to be made. Reverse engineering closes that gap: a physical sample becomes a production-ready CAD model." },
      { heading: "A reliable scan-to-CAD workflow",
        content: "Reverse engineering legacy parts is methodical, not magical.",
        bullets: [
          "3D scan the part with sub-0.05 mm tolerance",
          "Align and clean the mesh in metrology software",
          "Identify primitive features (planes, cylinders, holes)",
          "Rebuild parametric CAD with explicit design intent",
          "Validate the CAD against the scan within tolerance",
          "Generate manufacturing drawings with GD&T",
        ] },
      { heading: "Watch-outs",
        content: "A scanned part captures its worn state — not its original intent. Good reverse engineering interprets wear, deformation and manufacturing-induced features rather than copying them blindly. This is where senior CAD engineering — not just scan software — earns its keep." },
    ],
    takeaways: [
      "Scan first, design intent second",
      "Always validate CAD against the scan",
      "GD&T turns a CAD copy into a manufacturable design",
      "Treat wear and deformation as signal, not geometry",
    ],
    tags: ["reverse engineering", "scan to CAD", "legacy parts"],
  },
  {
    slug: "mould-flow-analysis-basics",
    title: "Mould Flow Analysis: A Practical Primer for Designers",
    excerpt: "Why mould flow analysis catches expensive tooling mistakes before steel is cut — and the five issues it routinely prevents.",
    category: "manufacturing",
    readTime: 5,
    date: "2026-02-04",
    author: "Yetki Engineering",
    cover: mouldImg,
    body: [
      { heading: "What mould flow analysis actually does",
        content: "Mould flow analysis simulates the filling, packing, cooling and warpage of an injection-moulded part inside a candidate mould. The output is a heat map of what will go wrong — and where — before any steel is machined." },
      { heading: "Five things it routinely prevents",
        content: "Mould flow studies pay for themselves on the first tool revision they avoid.",
        bullets: [
          "Short shots in thin-wall sections",
          "Excessive warpage from uneven cooling",
          "Weld lines in cosmetic surfaces",
          "Hot spots that shorten tool life",
          "Sink marks at thick-thin transitions",
        ] },
      { heading: "When to run it",
        content: "Run mould flow during the CAD freeze stage — after the part is mostly defined but before the tool design is locked. Late-stage flow analysis still helps, but it can only confirm decisions that have already been made." },
    ],
    takeaways: [
      "Mould flow is risk reduction, not optimization theater",
      "Run it before tool design freeze, not after",
      "Cooling lines are the single biggest lever",
      "Use it to validate gate location and wall thickness",
    ],
    tags: ["mould design", "injection moulding", "DFM"],
  },
  {
    slug: "gd-t-for-precision-manufacturing",
    title: "Why GD&T Is Non-Negotiable in Precision Manufacturing",
    excerpt: "Drawings without geometric tolerancing leave money on the table — and parts on the reject pile. Here's the case for GD&T-first engineering.",
    category: "manufacturing",
    readTime: 6,
    date: "2026-01-18",
    author: "Yetki Engineering",
    cover: componentsImg,
    body: [
      { heading: "Plus-minus tolerancing isn't enough",
        content: "Plus-minus tolerancing tells the shop how much each dimension can vary in isolation. It says nothing about how those features relate to each other. For precision parts — especially in automotive, aerospace and medical — relationships matter more than dimensions." },
      { heading: "What GD&T adds",
        content: "Geometric Dimensioning and Tolerancing (ASME Y14.5) defines form, orientation, location and runout of features against datums. It tells the shop exactly what the part must do, not just how big it must be.",
        bullets: [
          "Datums anchor measurement",
          "True position controls hole patterns",
          "Profile controls free-form surfaces",
          "Runout controls rotating features",
        ] },
      { heading: "Manufacturing impact",
        content: "GD&T expands realistic tolerance budgets where they don't matter and tightens them where they do. Done well, it lowers cost and rejection rates simultaneously. Done badly, it does neither — so it pays to have engineers who write GD&T like they mean it." },
    ],
    takeaways: [
      "GD&T defines function, not just size",
      "Datums are the most important feature on the drawing",
      "Tighter ≠ better — meaningful is better",
      "Expect lower scrap and faster QA cycles",
    ],
    tags: ["GD&T", "precision manufacturing", "quality"],
  },
  {
    slug: "from-prototype-to-production",
    title: "From Prototype to Production: The Industrial Product Pipeline",
    excerpt: "What separates a prototype that ships from one that stalls — a look at the six-stage pipeline industrial product teams actually use.",
    category: "product-development",
    readTime: 8,
    date: "2025-12-30",
    author: "Yetki Engineering",
    cover: heroImg,
    body: [
      { heading: "Prototypes vs production parts",
        content: "A prototype proves the idea. A production part proves the process. The gap between them is where most industrial product programs stall — usually because nobody owned the transition." },
      { heading: "The six-stage pipeline",
        content: "Mature engineering teams run a structured pipeline that absorbs the prototype-to-production handoff inside one team.",
        bullets: [
          "Requirement capture & specification freeze",
          "Concept design with manufacturing constraints in mind",
          "CAD with DFM/DFA reviews built in",
          "Functional prototype using production-intent materials",
          "Tooling and process design with validation criteria",
          "Pilot run, inspection, and production handover",
        ] },
      { heading: "Where programs slip",
        content: "Most slip happens between stage 3 and 4: CAD looks great, the prototype works, but nobody asked whether the part can be tooled at volume. The fix is upstream DFM — and a single team that owns the design and the tool." },
    ],
    takeaways: [
      "Prototype proves the idea, production proves the process",
      "DFM belongs in CAD, not in tooling review",
      "Own the handoff inside one team to keep schedule",
      "Pilot runs are part of design, not just QA",
    ],
    tags: ["product development", "DFM", "pipeline"],
  },
  {
    slug: "industrial-scanning-on-site",
    title: "On-Site Industrial Scanning: When to Bring the Scanner to the Part",
    excerpt: "Some parts can't move. Here's how on-site 3D scanning is run safely and accurately in live industrial environments.",
    category: "scanning",
    readTime: 5,
    date: "2025-12-08",
    author: "Yetki Engineering",
    cover: heroImg,
    body: [
      { heading: "Why on-site scanning exists",
        content: "Installed machinery, mounted tooling, large fabrications, plant equipment — these don't fit in a metrology lab. On-site scanning brings the metrology to them, with portable scanning systems engineered for industrial environments." },
      { heading: "How a clean on-site capture is run",
        content: "On-site scanning succeeds when it's planned like a site visit, not a lab session.",
        bullets: [
          "Pre-survey the workpiece and access",
          "Plan targeting and reference points",
          "Manage ambient lighting and vibration",
          "Capture in overlapping passes",
          "Verify alignment before leaving site",
        ] },
      { heading: "What to expect",
        content: "Typical on-site captures land in the 0.05–0.1 mm range — more than enough for reverse engineering, retrofit and inspection of installed equipment. When tighter tolerance is needed, plan a hybrid: capture critical features in a lab follow-up." },
    ],
    takeaways: [
      "On-site scanning is a planned engagement, not a walk-in",
      "Targeting and alignment win the job",
      "Expect 0.05–0.1 mm typical accuracy on-site",
      "Hybrid lab + on-site flows cover the rest",
    ],
    tags: ["3D scanning", "on-site", "metrology"],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
export function getByCategory(cat: Category) {
  return ARTICLES.filter((a) => a.category === cat);
}
