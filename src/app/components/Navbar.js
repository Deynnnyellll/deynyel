'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import Button from "./Button"

const NAV_ITEMS = [
  { id: 1, name: "Home",     link: "/"       },
  { id: 2, name: "About",    link: "/About"   },
  { id: 3, name: "Projects", link: "/Projects"},
  { id: 4, name: "Contact",  link: "/Contact" },
]

export default function Navbar() {
  const [active, setActive]     = useState(1)
  const [mobileOpen, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  // Thicken border + shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleNav(id, link) {
    setActive(id)
    router.push(link)
    setMobile(false)
  }

  return (
    <>
      {/* ── Main bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? "rgba(5,6,15,0.85)"
            : "rgba(5,6,15,0.6)",
          backdropFilter: "blur(28px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled
            ? "0 4px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.06)"
            : "none",
          transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
        }}
      >
        <div className="px-5 lg:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <motion.button
            onClick={() => handleNav(1, "/")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-mono text-lg font-bold tracking-tight select-none"
            style={{ color: "transparent", background: "linear-gradient(135deg,#818cf8,#38bdf8)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
          >
            {"<Deynyel />"}
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === active
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id, item.link)}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 outline-none"
                  style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.8)" }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
                >
                  {/* Active pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(99,102,241,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav(4, "/Contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                boxShadow: "0 0 16px rgba(99,102,241,0.25)",
              }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobile((p) => !p)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-40 bg-black/60"
              style={{ backdropFilter: "blur(4px)" }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                background: "rgba(8,9,20,0.97)",
                backdropFilter: "blur(32px)",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "-20px 0 80px rgba(0,0,0,0.6)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
                <span
                  className="font-mono text-base font-bold"
                  style={{ color: "transparent", background: "linear-gradient(135deg,#818cf8,#38bdf8)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
                >
                  {"<Deynyel />"}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobile(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = item.id === active
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.05, type: "spring", stiffness: 340, damping: 26 }}
                      onClick={() => handleNav(item.id, item.link)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-150"
                      style={{
                        background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                        border: isActive ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                      }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)" } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)" } }}
                    >
                      {/* Active dot */}
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: isActive ? "linear-gradient(135deg,#818cf8,#38bdf8)" : "rgba(255,255,255,0.2)" }}
                      />
                      <span className="text-base font-semibold">{item.name}</span>
                    </motion.button>
                  )
                })}
              </nav>

              {/* CTA at bottom */}
              <div className="px-4 pb-8">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNav(4, "/Contact")}
                  className="w-full py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#6366f1,#38bdf8)", boxShadow: "0 0 20px rgba(99,102,241,0.2)" }}
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}