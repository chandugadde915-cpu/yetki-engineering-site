import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Layers, Boxes } from "lucide-react";
import heroBg from "@/assets/hero-factory.webp";
import cad from "@/assets/cad-wireframe.webp";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-24">
      {/* Background factory */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Industrial precision engineering manufacturing facility"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_260)]/70 via-[oklch(0.14_0.04_260)]/50 to-[oklch(0.14_0.04_260)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* moving particles */}
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-300/70"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `floaty ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
              boxShadow: "0 0 12px rgba(120,180,255,0.8)",
            }}
          />
        ))}
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-blue-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Precision Engineering • Hyderabad, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02]"
          >
            <span className="text-gradient">Precision Engineering.</span>
            <br />
            <span className="text-gradient-blue">Scalable Manufacturing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed"
          >
            Advanced 3D Scanning, Reverse Engineering & Manufacturing Solutions for industrial innovation — built for automotive, aerospace, medical and consumer sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(60,130,255,0.4)] hover:shadow-[0_0_40px_rgba(60,130,255,0.7)] transition-all"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/5 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { v: "0.01mm", l: "Scan Accuracy", i: Activity },
              { v: "500+", l: "Components", i: Boxes },
              { v: "99%", l: "Precision", i: Cpu },
              { v: "50+", l: "Projects", i: Layers },
            ].map((m, i) => (
              <div key={i} className="glass rounded-xl p-4">
                <m.i size={16} className="text-blue-400" />
                <div className="mt-2 text-2xl font-semibold text-gradient">{m.v}</div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">{m.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CAD visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-[80px]" />
            <div className="absolute inset-6 rounded-3xl glass-strong overflow-hidden glow-blue">
              <img
                src={cad}
                alt="CAD wireframe model of an automotive engine"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover floaty"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="scanline absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
              </div>
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-200/80 glass px-2 py-1 rounded">SCAN.LIVE</div>
                <div className="text-[10px] text-blue-200/80 glass px-2 py-1 rounded font-mono">7.1M pts/s</div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-blue-200/80">
                <span className="glass px-2 py-1 rounded">Δ 0.008mm</span>
                <span className="glass px-2 py-1 rounded">XYZ: 124.3 / 88.1 / 42.7</span>
              </div>
            </div>
            {/* rotating ring */}
            <div className="absolute inset-0 spin-slow opacity-40">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#g)" strokeWidth="1" strokeDasharray="2 8" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#g)" strokeWidth="0.5" strokeDasharray="1 12" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#6cb6ff" />
                    <stop offset="1" stopColor="#2d7fff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* floating spec cards */}
            <div className="hidden md:block absolute -left-4 top-12 glass-strong rounded-xl p-3 text-xs floaty" style={{ animationDelay: "0.8s" }}>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Mesh Resolution</div>
              <div className="text-sm font-semibold text-gradient-blue">0.02 mm</div>
            </div>
            <div className="hidden md:block absolute -right-4 bottom-16 glass-strong rounded-xl p-3 text-xs floaty" style={{ animationDelay: "1.5s" }}>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Tolerance</div>
              <div className="text-sm font-semibold text-gradient-blue">± 5 µm</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
