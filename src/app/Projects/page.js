'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import placeholderImage from "@/app/assets/placeholder-img.jpg";
import snakeletImg from "@/app/assets/snakelet.png";
import illuscanImg from "@/app/assets/Illuscan.png";
import teachMeImg from "@/app/assets/teach-me.png";
import digitalImg from "@/app/assets/digital.png";

const PROJECTS_DATA = [
  {   
    id: 1,
    name: "Bill Splitter", 
    caption: "Smart bill splitting app with expense tracking", 
    img: placeholderImage, 
    category: "front-end",
    stacks: [
      {id: 1, name: "Next"},
      {id: 2, name: "Tailwind CSS"},
      {id: 3, name: "Tesseract JS"}
    ],
  },
  {   
    id: 2,
    name: "Illuscan", 
    caption: "Machine learning image classification system", 
    img: illuscanImg, 
    category: "machine-learning",
    stacks: [
      {id: 1, name: "Python"},
      {id: 2, name: "Scikit-learn"},
      {id: 3, name: "Jupyter Notebook"}
    ],
  },
  {   
    id: 3,
    name: "Digital Portfolio", 
    caption: "Personal portfolio website with animations", 
    img: digitalImg, 
    category: "front-end",
    stacks: [
      {id: 1, name: "Next"},
      {id: 2, name: "Tailwind CSS"},
      {id: 3, name: "Framer Motion"}
    ],
  },
  {   
    id: 4,
    name: "Teach Me 'Bout the Doggie", 
    caption: "ML-powered dog breed identification system", 
    img: teachMeImg, 
    category: "machine-learning",
    stacks: [
      {id: 1, name: "Python"},
      {id: 2, name: "Jupyter Notebook"},
      {id: 3, name: "Tensorflow"},
      {id: 4, name: "Flask"}
    ],
  },
  {   
    id: 5,
    name: "Snakelet", 
    caption: "Terminal-based snake game implementation", 
    img: snakeletImg, 
    category: "front-end",
    stacks: [
      {id: 1, name: "Python"},
      {id: 2, name: "Pygame"}
    ],
  }
];

const TAB_FILTERS = [
  { id: "all", name: "All" },
  { id: "full-stack", name: "Full Stack" },
  { id: "front-end", name: "Front-end" },
  { id: "design", name: "Design" },
  { id: "machine-learning", name: "Machine Learning" }
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeTab);

  return (
    <>
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-white/40 text-base max-w-2xl mx-auto">
              A curated collection of my work across different domains. From sleek front-end interfaces to robust full-stack solutions, 
              and cutting-edge machine learning models.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {[
              { label: "Featured Projects", value: "8+" },
              { label: "Technologies", value: "15+" },
              { label: "Categories", value: "5" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="rounded-xl p-4 border border-white/[0.08]"
                style={{ background: "rgba(8,9,20,0.65)", backdropFilter: "blur(24px)" }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Tab Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {TAB_FILTERS.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {tab.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <ProjectCard 
                      title={project.name} 
                      caption={project.caption} 
                      img={project.img} 
                      stacks={project.stacks}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-white/40 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}