"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../components/Button"

// ── Orb data ──────────────────────────────────────────────────────────────────
const ORBS = [
  { size: 520, color: "rgba(99,102,241,0.35)",  x: "10%",  y: "15%",  duration: 18 },
  { size: 400, color: "rgba(6,182,212,0.28)",   x: "75%",  y: "60%",  duration: 22 },
  { size: 350, color: "rgba(168,85,247,0.25)",  x: "55%",  y: "-5%",  duration: 26 },
  { size: 300, color: "rgba(20,184,166,0.22)",  x: "-5%",  y: "65%",  duration: 20 },
  { size: 260, color: "rgba(79,70,229,0.3)",    x: "85%",  y: "10%",  duration: 15 },
]

// ── Floating glassmorphism orbs ───────────────────────────────────────────────
function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at 35% 35%, ${orb.color}, transparent 70%)`,
            filter: "blur(72px)",
          }}
          animate={{
            x: ["0%", "6%", "-4%", "3%", "0%"],
            y: ["0%", "-5%", "4%", "-3%", "0%"],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  )
}

// ── 3-D tilt card ─────────────────────────────────────────────────────────────
function CodeCard() {
  const ref = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]),  { stiffness: 180, damping: 22 })

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5)
  }

  const handleLeave = () => { rawX.set(0); rawY.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-md mx-auto"
    >
      {/* glass card */}
      <div
        className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
      >
        {/* title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]"
          style={{ background: "rgba(0,0,0,0.2)" }}
        >
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs font-mono text-white/30">portfolio.js</span>
        </div>

        {/* code body */}
        <div className="p-6 font-mono text-sm leading-7 text-white/70">
          <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-pink-400">=</span> {"{"}</p>
          <p className="pl-4"><span className="text-emerald-300">name</span>: <span className="text-amber-200">"Danniel"</span>,</p>
          <p className="pl-4"><span className="text-emerald-300">role</span>: <span className="text-amber-200">"Web Developer"</span>,</p>
          <p className="pl-4"><span className="text-emerald-300">stack</span>: [<span className="text-amber-200">"React"</span>, <span className="text-amber-200">"Next.js"</span>],</p>
          <p className="pl-4"><span className="text-emerald-300">passion</span>: <span className="text-amber-200">"Clean code ✦"</span>,</p>
          <p>{"}"}</p>
          <p className="mt-2 text-white/25">{"// open to opportunities 🚀"}</p>
        </div>

        {/* status bar */}
        <div
          className="flex justify-between px-4 py-2 font-mono text-xs text-white/25 border-t border-white/[0.07]"
          style={{ background: "rgba(0,0,0,0.25)" }}
        >
          <span>JavaScript</span>
          <span className="text-cyan-400">● Live</span>
        </div>
      </div>

      {/* depth glow */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl opacity-40 blur-3xl"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(6,182,212,0.3))",
          transform: "translateY(24px) scale(0.9)",
        }}
      />
    </motion.div>
  )
}

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } }

// ── Hero ───────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">

      {/* subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Orbs />

      {/* edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(3,7,18,0.75) 100%)" }}
      />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          {/* available badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-xs font-medium tracking-widest text-cyan-300 uppercase">Available for work</span>
          </motion.div>

          {/* heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.06] tracking-tight text-white mb-4"
          >
            {"Hi, I'm"}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Danniel
            </span>
          </motion.h1>

          {/* role */}
          <motion.p variants={fadeUp} className="font-mono text-base text-cyan-400/70 tracking-widest mb-5">
            {">"} Web Developer_
          </motion.p>

          {/* bio */}
          <motion.p variants={fadeUp} className="text-white/50 leading-relaxed text-base mb-8 max-w-md mx-auto lg:mx-0">
            I craft beautiful, responsive, and user-friendly web experiences
            using modern technologies. Passionate about clean code and
            innovative design.
          </motion.p>

          {/* buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button type="primary">
              <span className="flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </span>
            </Button>
            <Button type="ghost" textColor="gray-400">Get in Touch</Button>
          </motion.div>

          {/* stats */}
          <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-8 mt-10">
            {[["3+", "Years exp."], ["20+", "Projects"], ["100%", "Passion"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white">{num}</p>
                <p className="text-[0.7rem] uppercase tracking-widest text-white/30 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeCard />
        </motion.div>

      </div>
    </section>
  )
}