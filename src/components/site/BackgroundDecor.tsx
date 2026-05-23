/* Decorative wireframe / "3D model" background. Pure SVG + CSS 3D — purely visual, pointer-events: none.
   Sits fixed behind all content. Does not touch existing hero / scanner visuals. */
export function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-8%] h-[520px] w-[520px] rounded-full bg-blue-700/10 blur-[120px]" />
      <div className="absolute bottom-[5%] right-[-10%] h-[560px] w-[560px] rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="absolute top-[55%] left-[40%] h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />

      {/* Rotating wireframe sphere */}
      <div className="absolute top-[18%] right-[6%] h-[260px] w-[260px] opacity-30 mix-blend-screen">
        <div className="h-full w-full spin-slow">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <radialGradient id="bg-sphere" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6cb6ff" stopOpacity="0.0" />
                <stop offset="80%" stopColor="#2d7fff" stopOpacity="0.6" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="92" fill="none" stroke="url(#bg-sphere)" strokeWidth="0.6" />
            {Array.from({ length: 9 }).map((_, i) => (
              <ellipse key={`h${i}`} cx="100" cy="100" rx="92" ry={92 - i * 10}
                fill="none" stroke="#6cb6ff" strokeOpacity="0.35" strokeWidth="0.4" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={`v${i}`} cx="100" cy="100" rx={92 - i * 8} ry="92"
                fill="none" stroke="#2d7fff" strokeOpacity="0.25" strokeWidth="0.4" />
            ))}
          </svg>
        </div>
      </div>

      {/* Rotating gear */}
      <div className="absolute top-[60%] left-[4%] h-[220px] w-[220px] opacity-25 mix-blend-screen">
        <div className="h-full w-full spin-slow" style={{ animationDirection: "reverse", animationDuration: "55s" }}>
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <g fill="none" stroke="#6cb6ff" strokeWidth="0.6" strokeOpacity="0.7">
              <circle cx="100" cy="100" r="78" />
              <circle cx="100" cy="100" r="58" />
              <circle cx="100" cy="100" r="30" />
              {Array.from({ length: 24 }).map((_, i) => {
                const a = (i / 24) * Math.PI * 2;
                const x1 = 100 + Math.cos(a) * 78;
                const y1 = 100 + Math.sin(a) * 78;
                const x2 = 100 + Math.cos(a) * 92;
                const y2 = 100 + Math.sin(a) * 92;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Floating wireframe cube (CSS 3D) */}
      <div
        className="absolute hidden md:block"
        style={{
          top: "35%", left: "8%", width: 160, height: 160,
          perspective: 800,
        }}
      >
        <div
          className="relative h-full w-full opacity-30 mix-blend-screen"
          style={{
            transformStyle: "preserve-3d",
            animation: "cube-spin 28s linear infinite",
          }}
        >
          {[
            { t: "translateZ(80px)" },
            { t: "translateZ(-80px) rotateY(180deg)" },
            { t: "rotateY(90deg) translateZ(80px)" },
            { t: "rotateY(-90deg) translateZ(80px)" },
            { t: "rotateX(90deg) translateZ(80px)" },
            { t: "rotateX(-90deg) translateZ(80px)" },
          ].map((f, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-blue-400/50"
              style={{
                transform: f.t,
                background:
                  "linear-gradient(135deg, rgba(60,130,255,0.04), rgba(20,40,90,0.04))",
                boxShadow: "inset 0 0 30px rgba(80,140,255,0.18)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating wireframe octahedron */}
      <div
        className="absolute hidden lg:block"
        style={{ top: "12%", left: "44%", width: 140, height: 140, perspective: 800 }}
      >
        <div
          className="relative h-full w-full opacity-25 mix-blend-screen"
          style={{ transformStyle: "preserve-3d", animation: "cube-spin 40s linear infinite reverse" }}
        >
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
            <g fill="none" stroke="#9ec9ff" strokeWidth="0.6">
              <polygon points="100,10 190,100 100,190 10,100" />
              <line x1="100" y1="10" x2="100" y2="190" />
              <line x1="10" y1="100" x2="190" y2="100" />
              <polygon points="100,40 160,100 100,160 40,100" strokeOpacity="0.6" />
            </g>
          </svg>
        </div>
      </div>

      {/* Subtle scan grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

      <style>{`
        @keyframes cube-spin {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
