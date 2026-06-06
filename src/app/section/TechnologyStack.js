"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STACK } from '@/constants/constants.js';
import { Code } from "lucide-react";

// ─── Glassmorphism tech chip ───────────────────────────────────────────────────
function TechChip({ item, groupDot, groupGlow, isSelected, onClick }) {
  const Icon = item.logo
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-left w-full"
      style={{
        background: isSelected
          ? `rgba(${groupGlow},0.14)`
          : "rgba(255,255,255,0.03)",
        border: isSelected
          ? `1px solid rgba(${groupGlow},0.4)`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      {/* selected left bar */}
      {isSelected && (
        <motion.div
          layoutId="chip-bar"
          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
          style={{ background: groupDot }}
        />
      )}
      <Icon
        size={22}
        style={{ color: isSelected ? groupDot : "rgba(255,255,255,0.4)", flexShrink: 0 }}
      />
      <span
        className="text-sm font-medium leading-tight"
        style={{ color: isSelected ? "#fff" : "rgba(255,255,255,0.55)" }}
      >
        {item.name}
      </span>
    </motion.button>
  )
}

// ─── Group card ────────────────────────────────────────────────────────────────
function GroupCard({ group, selectedId, onSelect, index }) {
  const GroupIcon = group.logo
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay: index * 0.07 }}
      className="rounded-2xl p-5 border border-white/[0.08] relative overflow-hidden"
      style={{ background: "rgba(8,9,20,0.65)", backdropFilter: "blur(24px)" }}
    >
      {/* Top accent strip matching detail panel */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${group.accent} opacity-40`}
      />
      {/* Group header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `rgba(${group.glow},0.15)`, border: `1px solid rgba(${group.glow},0.25)` }}
        >
          <GroupIcon size={15} style={{ color: group.dot }} />
        </div>
        <span className="text-sm font-bold text-white/80 tracking-wide">{group.tech}</span>
      </div>

      {/* Tech chips grid */}
      <div className="grid grid-cols-2 gap-2">
        {group.items.map((item) => (
          <TechChip
            key={item.id}
            item={item}
            groupDot={group.dot}
            groupGlow={group.glow}
            isSelected={selectedId === item.id}
            onClick={() => onSelect(item, group)}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ─── Detail panel (25%) ────────────────────────────────────────────────────────
function DetailPanel({ selected, group }) {
  if (!selected) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="w-16 h-16 rounded-2xl border border-white/[0.06] flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          <Code size={24} className="text-white/15" />
        </div>
        <p className="text-white/20 text-sm">Select a technology<br />to see details</p>
      </div>
    )
  }

  const Icon = selected.logo

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -16, filter: "blur(6px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full flex flex-col overflow-hidden rounded-2xl"
        style={{
          background: "rgba(8,9,20,0.7)",
          border: `1px solid rgba(${group.glow},0.2)`,
          backdropFilter: "blur(28px)",
        }}
      >
        {/* Subtle logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Icon
            style={{
              fontSize: 220,
              width: 220,
              height: 220,
              color: `rgba(${group.glow},0.06)`,
            }}
          />
        </div>

        {/* Top gradient strip */}
        <div
          className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${group.accent} rounded-t-2xl`}
        />

        {/* Glow orb */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${group.glow},0.18) 0%, transparent 70%)`,
            filter: "blur(32px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-7">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 22 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${group.accent} p-0.5 mb-6 self-start`}
          >
            <div className="w-full h-full rounded-2xl bg-gray-950/80 flex items-center justify-center">
              <Icon size={28} className="text-white" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white font-black text-2xl tracking-tight mb-1"
          >
            {selected.name}
          </motion.h3>

          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full self-start mb-5"
            style={{ background: `rgba(${group.glow},0.12)`, border: `1px solid rgba(${group.glow},0.25)` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: group.dot }} />
            <span className="text-xs font-medium" style={{ color: group.dot }}>{group.tech}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm leading-relaxed flex-1"
          >
            {selected.desc}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function TechnologyStack() {
  const [selected, setSelected] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const handleSelect = (item, group) => {
    if (selected?.id === item.id) {
      setSelected(null)
      setSelectedGroup(null)
    } else {
      setSelected(item)
      setSelectedGroup(group)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 px-6 lg:px-20">

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[10%] w-[440px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute right-[-4%] bottom-[8%] w-[380px] h-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase mb-3">Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technology{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            My expertise across front-end, back-end, and design technologies.
          </p>
        </motion.div>

        {/* 75 / 25 layout */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── 75% — tech groups ── */}
          <div className="flex-3 grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
            {STACK.map((group, i) => (
              <GroupCard
                key={group.tech}
                group={group}
                index={i}
                selectedId={selected?.id}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {/* ── 25% — detail panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 lg:min-w-[260px] lg:max-w-[300px] sticky self-center"
            style={{ minHeight: 480 }}
          >
            <div className="h-full rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
              <DetailPanel selected={selected} group={selectedGroup} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}