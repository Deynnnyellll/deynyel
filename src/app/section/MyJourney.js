"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { GraduationCap, Briefcase, Building2 } from "lucide-react"

// ─── Data ──────────────────────────────────────────────────────────────────────
const JOURNEY = [
  {
    id: 0,
    milestone: "Education",
    year: "2020 – 2024",
    role: "BS Computer Science",
    company: "Polytechnic University of the Philippines",
    description: "Graduated Cum Laude with a focus on Web Development and Machine Learning.",
    icon: GraduationCap,
    glow: "99,102,241",
    accent: "from-indigo-500 to-violet-500",
    accentHex: "#6366f1",
    dot: "#818cf8",
  },
  {
    id: 1,
    milestone: "Internship",
    year: "2022",
    role: "Front End Developer",
    company: "LexMeet Inc.",
    description: "Built the user interface of a web portal for lawyers and their clients, shipping real production features.",
    icon: Briefcase,
    glow: "6,182,212",
    accent: "from-cyan-500 to-sky-400",
    accentHex: "#06b6d4",
    dot: "#38bdf8",
  },
  {
    id: 2,
    milestone: "Current Role",
    year: "2024 – Present",
    role: "Junior Web Developer",
    company: "International Business Machine",
    description: "Building internal web applications that power company operations across global teams.",
    icon: Building2,
    glow: "20,184,166",
    accent: "from-teal-400 to-emerald-500",
    accentHex: "#14b8a6",
    dot: "#2dd4bf",
  },
]

// ─── Individual flip card ──────────────────────────────────────────────────────
function JourneyCard({ item, isActive, isPast }) {
  const Icon = item.icon
  const [flipped, setFlipped] = useState(false)

  // Auto-flip to front when card becomes active
  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setFlipped(true), 300)
      return () => clearTimeout(t)
    } else {
      setFlipped(false)
    }
  }, [isActive])

  const cardScale   = isActive ? 1 : isPast ? 0.82 : 0.75
  const cardOpacity = isActive ? 1 : isPast ? 0.55 : 0.3
  const cardZ       = isActive ? 1 : -1

  return (
    <motion.div
      animate={{ scale: cardScale, opacity: cardOpacity, z: cardZ }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="relative shrink-0"
      style={{ width: 320, height: 420, perspective: 1100 }}
    >
      {/* Glow behind card */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 rounded-3xl blur-3xl -z-10"
        style={{ background: `radial-gradient(circle, rgba(${item.glow},0.35) 0%, transparent 70%)`, transform: "scale(1.15) translateY(10%)" }}
      />

      {/* Flip container */}
      <motion.div
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", position: "relative" }}
      >
        {/* ── BACK FACE (year / milestone teaser) ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="w-full h-full rounded-3xl flex flex-col items-center justify-center gap-4 p-8 border border-white/10"
            style={{ background: "rgba(10,11,22,0.9)", backdropFilter: "blur(20px)" }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} p-0.5`}>
              <div className="w-full h-full rounded-2xl bg-gray-950/80 flex items-center justify-center">
                <Icon size={28} className="text-white" />
              </div>
            </div>
            <p className="font-mono text-xs tracking-[0.22em] uppercase" style={{ color: item.dot }}>{item.milestone}</p>
            <p className="text-white/20 text-sm font-mono">flip to reveal →</p>
            <div className={`h-px w-16 bg-gradient-to-r ${item.accent} opacity-40 rounded-full`} />
            <p className="text-4xl font-black text-white/10 font-mono tabular-nums">{item.year.slice(0, 4)}</p>
          </div>
        </div>

        {/* ── FRONT FACE (full detail) ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-full h-full rounded-3xl flex flex-col p-8 border border-white/10 overflow-hidden"
            style={{ background: "rgba(10,11,22,0.92)", backdropFilter: "blur(24px)" }}
          >
            {/* Top gradient stripe */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} rounded-t-3xl`} />

            {/* Icon + milestone */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} p-0.5`}>
                <div className="w-full h-full rounded-xl bg-gray-950/80 flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: item.dot }}>{item.milestone}</p>
                <p className="font-mono text-xs text-white/30">{item.year}</p>
              </div>
            </div>

            {/* Role */}
            <h3 className="text-white font-black text-xl leading-tight mb-2 tracking-tight">{item.role}</h3>

            {/* Company pill */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg mb-5 self-start"
              style={{ background: `rgba(${item.glow},0.12)`, border: `1px solid rgba(${item.glow},0.25)` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.dot }} />
              <span className="text-xs font-medium" style={{ color: item.dot }}>{item.company}</span>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed flex-1">{item.description}</p>

            {/* Bottom accent */}
            <div className={`h-px bg-gradient-to-r ${item.accent} opacity-20 rounded-full mt-6`} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Animated road / rail track ───────────────────────────────────────────────
function RailTrack({ progress, total }) {
  return (
    <div className="relative w-full flex items-center" style={{ height: 2 }}>
      {/* Base rail */}
      <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
      {/* Filled progress */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 rounded-full"
        style={{
          width: `${(progress / (total - 1)) * 100}%`,
          background: "linear-gradient(90deg, #6366f1, #06b6d4, #14b8a6)",
          boxShadow: "0 0 12px rgba(99,102,241,0.5)",
          transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      {/* Stop dots */}
      {JOURNEY.map((item, i) => (
        <div
          key={item.id}
          className="absolute flex items-center justify-center"
          style={{ left: `${(i / (total - 1)) * 100}%`, transform: "translateX(-50%)", top: "50%", marginTop: "-7px" }}
        >
          <motion.div
            animate={{
              scale: i <= progress ? 1 : 0.6,
              boxShadow: i <= progress ? `0 0 16px ${item.dot}` : "none",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="w-3.5 h-3.5 rounded-full border-2"
            style={{
              background: i <= progress ? item.dot : "rgba(255,255,255,0.15)",
              borderColor: i <= progress ? item.dot : "rgba(255,255,255,0.1)",
            }}
          />
        </div>
      ))}
    </div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function MyJourney() {
  const containerRef = useRef(null)
  const N = JOURNEY.length   // 3

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Active card index driven by scroll
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Each card occupies 1/N of progress
      const idx = Math.min(Math.floor(v * N), N - 1)
      setActiveIdx(idx)
    })
  }, [scrollYProgress])

  // Horizontal translate of the card track
  // 0 progress → card 0 centered, 1 progress → card N-1 centered
  const CARD_W   = 320
  const GAP      = 64
  const STEP     = CARD_W + GAP

  // raw X offset
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(STEP * (N - 1))]
  )
  const smoothX = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.8 })

  // Camera Z — rush forward between cards (cinematic momentum)
  const rawZ = useTransform(
    scrollYProgress,
    JOURNEY.flatMap((_, i) => {
      const base = i / N
      const mid  = (i + 0.5) / N
      return [base, mid]
    }).concat(1),
    JOURNEY.flatMap(() => [0, 60]).concat(0)
  )
  const smoothZ = useSpring(rawZ, { stiffness: 60, damping: 18 })

  // Background color tint per active card
  const bgTints = ["rgba(99,102,241,0.04)", "rgba(6,182,212,0.04)", "rgba(20,184,166,0.04)"]

  // Particle stars (static, decorative)
  const STARS = Array.from({ length: 36 }, (_, i) => ({
    x: `${(i * 97 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    size: (i % 3) + 1,
    opacity: 0.06 + (i % 4) * 0.04,
    dur: 3 + (i % 5),
  }))

  return (
    /* Outer scroll driver — N full screens */
    <div ref={containerRef} style={{ height: `${N * 100}vh` }} className="relative">

      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(15,16,30,1) 0%, #030509 100%)",
          transition: "background 0.8s",
        }}
      >
        {/* Active tint */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ background: bgTints[activeIdx] }}
          transition={{ duration: 0.8 }}
        />

        {/* Stars */}
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ left: s.x, top: s.y, width: s.size, height: s.size, opacity: s.opacity }}
            animate={{ opacity: [s.opacity, s.opacity * 3, s.opacity] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}

        {/* Perspective tunnel lines (speed lines) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, transparent 40%, rgba(99,102,241,0.03) 100%)",
          }}
        />

        {/* Section heading */}
        <motion.div
          className="absolute top-12 left-0 right-0 text-center z-10 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.28em] text-indigo-400/50 uppercase mb-2">Career Path</p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* ── Cinematic 3D camera wrapper ── */}
        <motion.div
          className="absolute top-[50%] translate-y-[-50%] left-[25%] xl:left-[50%] flex items-center justify-center"
          style={{ perspective: 1400, perspectiveOrigin: "50% 50%" }}
        >
          <motion.div style={{ z: smoothZ, transformStyle: "preserve-3d" }}>
            {/* ── Horizontal card track ── */}
            <motion.div
              className="flex items-center"
              style={{
                gap: GAP,
                x: smoothX,
                transformStyle: "preserve-3d",
              }}
            >
              {JOURNEY.map((item, i) => (
                <JourneyCard
                  key={item.id}
                  item={item}
                  isActive={i === activeIdx}
                  isPast={i < activeIdx}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Rail track bar ── */}
        <div className="absolute bottom-20 left-0 right-0 px-16 lg:px-32 z-10">
          <RailTrack progress={activeIdx} total={N} />
        </div>

        {/* Active card label */}
        <div className="absolute bottom-28 left-0 right-0 flex justify-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs tracking-widest text-white/25 uppercase"
            >
              {JOURNEY[activeIdx].milestone} &nbsp;·&nbsp; {JOURNEY[activeIdx].year}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll hint */}
        <AnimatePresence>
          {activeIdx === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1.5 pointer-events-none"
            >
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase">scroll to travel</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
