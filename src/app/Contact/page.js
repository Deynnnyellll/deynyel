"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, User, Mail, MessageSquare, ExternalLink } from "lucide-react"
import { RiLinkedinLine, RiInstagramLine, RiFacebookLine, RiMailLine } from "react-icons/ri"

// ─── Social links ──────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Danniel",
    href: "https://linkedin.com/in/danniel-martinez-9b8398283/",
    icon: RiLinkedinLine,
    glow: "99,102,241",
    accent: "from-indigo-500 to-blue-500",
    dot: "#818cf8",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@danniel",
    href: "https://instagram.com/shimeypey",
    icon: RiInstagramLine,
    glow: "236,72,153",
    accent: "from-pink-500 to-rose-400",
    dot: "#f472b6",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Danniel",
    href: "https://facebook.com/shimeypey",
    icon: RiFacebookLine,
    glow: "6,182,212",
    accent: "from-cyan-500 to-blue-400",
    dot: "#38bdf8",
  },
  {
    id: "gmail",
    label: "Gmail",
    handle: "dannielmartinez04@gmail.com",
    href: "mailto:dannielmartinez04@gmail.com",
    icon: RiMailLine,
    glow: "20,184,166",
    accent: "from-teal-400 to-emerald-500",
    dot: "#2dd4bf",
  },
]

// ─── ReactBits glow card wrapper ───────────────────────────────────────────────
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
          ? `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.55), rgba(${glowColor},0.08) 50%, rgba(255,255,255,0.04) 100%)`
          : "rgba(255,255,255,0.07)",
        transition: "background 0.08s",
      }}
    >
      <div
        className="relative rounded-2xl h-full overflow-hidden"
        style={{ background: "rgba(8,9,20,0.8)", backdropFilter: "blur(24px)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
            background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.07), transparent 70%)`,
          }}
        />
        {children}
      </div>
    </div>
  )
}

// ─── Floating input field ──────────────────────────────────────────────────────
function FloatingField({ label, icon: Icon, type = "text", value, onChange, name, multiline = false }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0
  const isActive = focused || hasValue

  const inputClass = `
    w-full bg-transparent outline-none text-white text-sm pt-5 pb-2 px-4 resize-none
    placeholder-transparent
  `

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${focused ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)"}`,
        background: focused ? "rgba(99,102,241,0.04)" : "rgba(255,255,255,0.02)",
        transition: "border-color 0.2s, background 0.2s",
        boxShadow: focused ? "0 0 0 3px rgba(99,102,241,0.08)" : "none",
      }}
    >
      {/* Floating label */}
      <motion.label
        animate={{
          top: isActive ? "6px" : "50%",
          y: isActive ? 0 : "-50%",
          fontSize: isActive ? "10px" : "13px",
          color: focused ? "#818cf8" : "rgba(255,255,255,0.35)",
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-10 pointer-events-none font-medium tracking-wide uppercase"
        style={{ letterSpacing: isActive ? "0.1em" : "0.02em" }}
      >
        {label}
      </motion.label>

      {/* Icon */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: focused ? "#818cf8" : "rgba(255,255,255,0.2)" }}>
        <Icon size={16} />
      </div>

      {/* Input / Textarea */}
      {multiline ? (
        <textarea
          name={name}
          rows={10}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          style={{ paddingTop: "1.75rem", paddingLeft: "2.5rem" }}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
          style={{ paddingLeft: "2.5rem", height: "4rem" }}
        />
      )}
    </div>
  )
}

// ─── Social pill card ──────────────────────────────────────────────────────────
function SocialCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 280, damping: 24, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="block"
    >
      <GlowCard glowColor={item.glow}>
        <div className="flex items-center gap-4 px-5 py-4">
          {/* Icon bubble */}
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} p-0.5 shrink-0`}>
            <div className="w-full h-full rounded-xl bg-gray-950/80 flex items-center justify-center">
              <Icon size={20} className="text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-mono uppercase tracking-widest mb-0.5" style={{ color: item.dot }}>{item.label}</p>
            <p className="text-white/70 text-sm font-medium truncate">{item.handle}</p>
          </div>

          {/* Arrow */}
          <ExternalLink size={14} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
        </div>

        {/* Bottom accent */}
        <div className={`h-px mx-5 mb-4 bg-gradient-to-r ${item.accent} opacity-20 rounded-full`} />
      </GlowCard>
    </motion.a>
  )
}

// ─── Main Contact page ─────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    // Simulate send — wire up your own API / EmailJS / Resend here
    await new Promise((r) => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950 py-24 px-6 lg:px-20 flex items-center">

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", filter: "blur(72px)" }} />
        <div className="absolute right-[-4%] bottom-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(72px)" }} />
        <div className="absolute left-[40%] bottom-[20%] w-[320px] h-[320px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p custom={0} variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase mb-3">
            Get in Touch
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp}
            className="text-white/40 text-base max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* ── LEFT: Form ── */}
          <motion.div
            className="flex-[3]"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowCard glowColor="99,102,241" className="h-full">
              <div className="p-8 lg:p-10 relative">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 via-cyan-400 to-transparent rounded-t-2xl" />

                {/* Form header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)" }}>
                      <Send size={14} style={{ color: "#818cf8" }} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Send a Message</h3>
                  </div>
                  <p className="text-white/30 text-sm ml-11">I'll get back to you within 24 hours.</p>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    /* ── Success state ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 20 }}
                      >
                        <CheckCircle size={52} style={{ color: "#2dd4bf" }} />
                      </motion.div>
                      <h4 className="text-white font-bold text-xl">Message Sent!</h4>
                      <p className="text-white/40 text-sm max-w-xs">Thanks for reaching out, Danniel will reply shortly.</p>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }) }}
                        className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
                        style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                      >
                        Send Another
                      </motion.button>
                    </motion.div>
                  ) : (
                    /* ── Form fields ── */
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      className="flex flex-col gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FloatingField
                          label="Name"
                          icon={User}
                          name="name"
                          value={form.name}
                          onChange={onChange}
                        />
                        <FloatingField
                          label="Email"
                          icon={Mail}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                        />
                      </div>

                      <FloatingField
                        label="Message"
                        icon={MessageSquare}
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        multiline
                      />

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={sending}
                        whileHover={!sending ? { scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.45)" } : {}}
                        whileTap={!sending ? { scale: 0.98 } : {}}
                        className="mt-2 w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2"
                        style={{
                          background: sending
                            ? "rgba(99,102,241,0.4)"
                            : "linear-gradient(135deg,#6366f1,#38bdf8)",
                          boxShadow: "0 0 20px rgba(99,102,241,0.2)",
                          cursor: sending ? "not-allowed" : "pointer",
                          transition: "box-shadow 0.25s",
                        }}
                      >
                        {sending ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </GlowCard>
          </motion.div>

          {/* ── RIGHT: Socials + blurb ── */}
          <motion.div
            className="flex-[2] flex flex-col gap-4"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Info card */}
            <GlowCard glowColor="6,182,212">
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-transparent rounded-t-2xl" />
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400/60 mb-3">Availability</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                  </span>
                  <span className="text-white font-semibold text-sm">Open to opportunities</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  Currently open for freelance projects, collaborations, and full-time roles. Based in the Philippines 🇵🇭
                </p>
              </div>
            </GlowCard>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {SOCIALS.map((item, i) => (
                <SocialCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}