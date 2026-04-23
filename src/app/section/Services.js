"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, animate } from "framer-motion"
import { Code, BrainCircuit, Accessibility, Palette } from "lucide-react"

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 0,
    icon: Code,
    heading: "Clean Code",
    paragraph: "Clean, maintainable, scalable code built on modern web standards — reliable and performant from day one.",
    glow: "99,102,241",
    accent: "from-indigo-500 to-cyan-500",
    tag: "01",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    id: 1,
    icon: BrainCircuit,
    heading: "Machine Learning",
    paragraph: "Smarter, data-driven web applications powered by machine learning and AI concepts that adapt over time.",
    glow: "6,182,212",
    accent: "from-cyan-500 to-teal-400",
    tag: "02",
    bg: "rgba(6,182,212,0.08)",
  },
  {
    id: 2,
    icon: Accessibility,
    heading: "Accessibility",
    paragraph: "Inclusive web experiences designed for every user — full keyboard support, screen readers, and WCAG compliance.",
    glow: "168,85,247",
    accent: "from-purple-500 to-pink-500",
    tag: "03",
    bg: "rgba(168,85,247,0.08)",
  },
  {
    id: 3,
    icon: Palette,
    heading: "UI/UX Design",
    paragraph: "Intuitive, visually stunning interfaces that deliver seamless and engaging experiences across all devices.",
    glow: "20,184,166",
    accent: "from-teal-400 to-indigo-500",
    tag: "04",
    bg: "rgba(20,184,166,0.08)",
  },
]

// ─── ReactBits BorderGlow ─────────────────────────────────────────────────────
function GlowCard({ children, glowColor = "99,102,241", className = "" }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -300, y: -300 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPos({ x: -300, y: -300 }) }}
      className={`relative rounded-2xl p-px h-full ${className}`}
      style={{
        background: hovered
          ? `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.6), rgba(${glowColor},0.1) 50%, rgba(255,255,255,0.05) 100%)`
          : "rgba(255,255,255,0.07)",
        transition: "background 0.08s",
      }}
    >
      <div
        className="relative rounded-2xl h-full overflow-hidden"
        style={{ background: "rgba(10,11,18,0.85)", backdropFilter: "blur(24px)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
            background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.09), transparent 70%)`,
          }}
        />
        {children}
      </div>
    </div>
  )
}

// ─── Full-screen card (phase 1: popping in large) ─────────────────────────────
function HeroCard({ service, progress }) {
  const Icon = service.icon

  // pop: scale 0.7 → 1, fade in
  const scale = useTransform(progress, [0, 0.35], [0.72, 1])
  const opacity = useTransform(progress, [0, 0.25], [0, 1])
  // shrink out: scale 1 → 0.55, move up + fade, as next card takes over
  const shrinkScale = useTransform(progress, [0.55, 1], [1, 0.6])
  const shrinkOpacity = useTransform(progress, [0.55, 0.85], [1, 0])
  const shrinkY = useTransform(progress, [0.55, 1], ["0%", "-18%"])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ opacity, pointerEvents: "none" }}
    >
      <motion.div
        className="w-full max-w-xl"
        style={{ scale, y: shrinkY, opacity: shrinkOpacity }}
      >
        <GlowCard glowColor={service.glow}>
          <div className="p-10 flex flex-col gap-6">
            {/* icon + tag row */}
            <div className="flex items-start justify-between">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} p-0.5`}>
                <div className="w-full h-full rounded-2xl bg-gray-950/80 flex items-center justify-center">
                  <Icon size={28} className="text-white" />
                </div>
              </div>
              <span className={`font-mono text-sm font-bold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent`}>
                {service.tag}
              </span>
            </div>
            {/* text */}
            <div>
              <h3 className="text-white text-2xl font-extrabold tracking-tight mb-3">{service.heading}</h3>
              <p className="text-white/50 text-base leading-relaxed">{service.paragraph}</p>
            </div>
            {/* bottom accent */}
            <div className={`h-px bg-gradient-to-r ${service.accent} opacity-25 rounded-full`} />
          </div>
        </GlowCard>
      </motion.div>
    </motion.div>
  )
}

// ─── Small column card (phase 2: settled in grid) ─────────────────────────────
function ColumnCard({ service, visible, index = 0 }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: "spring", stiffness: 320, damping: 24, delay: index * 0.08 }}
      className="w-full h-full"
    >
      <GlowCard glowColor={service.glow}>
        <div className="p-5 flex flex-col gap-4">
          {/* icon + tag */}
          <div className="flex items-start justify-between">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.accent} p-0.5`}>
              <div className="w-full h-full rounded-xl bg-gray-950/80 flex items-center justify-center">
                <Icon size={18} className="text-white" />
              </div>
            </div>
            <span className={`font-mono text-xs font-semibold bg-gradient-to-r ${service.accent} bg-clip-text text-transparent`}>
              {service.tag}
            </span>
          </div>
          {/* text */}
          <div>
            <h3 className="text-white font-bold text-sm leading-tight mb-2">{service.heading}</h3>
            <p className="text-white/45 text-xs leading-relaxed">{service.paragraph}</p>
          </div>
          <div className={`h-px bg-gradient-to-r ${service.accent} opacity-20 rounded-full`} />
        </div>
      </GlowCard>
    </motion.div>
  )
}

// ─── Main Services ────────────────────────────────────────────────────────────
export default function Services() {
  // The outer container is SERVICES.length + 1 screens tall (extra gives breathing room)
  const containerRef = useRef(null)
  const stickyRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // scrollYProgress 0→1 across the full sticky scroll distance
  // Each card occupies 1/(N+1) of the progress:
  //   card 0: 0.00 → 0.20   card 1: 0.20 → 0.40 ... etc
  //   last 0.20 = column view stays visible until section ends
  const N = SERVICES.length          // 4
  const STEP = 1 / (N + 1)          // 0.2

  // Which cards are "settled" into the column (progress past their step + a bit)
  const [settledCount, setSettledCount] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // card i settles when progress crosses (i+1)*STEP
      let count = 0
      for (let i = 0; i < N; i++) {
        if (v >= (i + 1) * STEP) count = i + 1
      }
      setSettledCount(count)
    })
  }, [scrollYProgress])

  // Per-card progress (0→1) within its own scroll window
  const cardProgress = SERVICES.map((_, i) => {
    const start = i * STEP
    const end = (i + 1) * STEP
    return useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true })
  })

  // Background color shifts per active card
  const bgColor = useTransform(
    scrollYProgress,
    SERVICES.map((_, i) => i * STEP),
    SERVICES.map((s) => `rgba(${s.glow},0.04)`)
  )

  // Whether we're in "all settled" column view
  const allSettled = settledCount >= N

  return (
    <>
      {/* Tall outer container that drives scroll */}
      <div
        ref={containerRef}
        style={{ height: `${(N + 1) * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen overflow-hidden bg-gray-950"
        >
          {/* Ambient background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: bgColor }}
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[15%] w-[500px] h-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", filter: "blur(70px)" }} />
            <div className="absolute right-[-5%] bottom-[10%] w-[420px] h-[420px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(70px)" }} />
          </div>

          {/* Dot grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          {/* Section heading — fades out when column appears */}
          <motion.div
            className="absolute top-12 left-0 right-0 text-center z-10 px-6"
            animate={{ opacity: allSettled ? 0 : 1, y: allSettled ? -12 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase mb-2">What I Do</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Services &{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </motion.div>

          {/* ── Phase 1: Hero cards (fullscreen pop) ── */}
          <div className="absolute inset-0">
            {SERVICES.map((service, i) => {
              // Only render while this card is "active" (before all settled)
              const isActive = !allSettled
              return isActive ? (
                <HeroCard key={service.id} service={service} progress={cardProgress[i]} />
              ) : null
            })}
          </div>

          {/* ── Phase 2: Column view ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            animate={{ opacity: allSettled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ pointerEvents: allSettled ? "auto" : "none" }}
          >
            <div className="w-full max-w-6xl flex flex-col gap-4">
              {/* Section label above row */}
              <motion.div
                className="text-center mb-2"
                initial={{ opacity: 0, y: 16 }}
                animate={allSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase mb-1">What I Do</p>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  Services &{" "}
                  <span className="bg-linear-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICES.map((service, i) => (
                  <ColumnCard
                    key={service.id}
                    service={service}
                    visible={allSettled}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
            animate={{ opacity: allSettled ? 0 : 0.5 }}
          >
            <p className="font-mono text-xs text-white/40 tracking-widest uppercase">scroll</p>
            <motion.div
              className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Progress dots — bottom center */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 pointer-events-none">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                className="rounded-full"
                animate={{
                  width: i < settledCount ? 16 : 4,
                  height: 4,
                  backgroundColor: i < settledCount
                    ? `rgba(${s.glow},0.9)`
                    : "rgba(255,255,255,0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}