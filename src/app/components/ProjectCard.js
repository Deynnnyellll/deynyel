'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function ProjectCard({ img, title, caption, stacks }) {
    return (
        <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative h-full overflow-hidden rounded-2xl"
        >
            {/* Glassmorphism container */}
            <div 
                className="relative h-full flex flex-col border border-white/[0.08] backdrop-blur-xl rounded-2xl overflow-hidden"
                style={{
                    background: "rgba(8,9,20,0.65)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                }}
            >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 via-cyan-400 to-transparent opacity-40" />

                {/* Glow orb on hover */}
                <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                        filter: "blur(40px)"
                    }}
                />

                {/* Image Section */}
                <motion.div
                    className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                    whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                    
                    {/* Placeholder with gradient */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                                background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)"
                            }}
                        />

                        <Image src={img} className="h-full" alt="" />
                    </div>

                    {/* External link icon - appears on hover */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ExternalLink size={20} className="text-white" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-5 relative z-10">
                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
                    >
                        {title}
                    </motion.h3>

                    {/* Caption */}
                    <p className="text-sm text-white/50 mb-4 line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
                        {caption}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex items-center flex-wrap gap-2 mt-auto">
                        {stacks.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300"
                                style={{
                                    background: "rgba(99,102,241,0.1)",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    color: "#c7d2fe"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(99,102,241,0.2)"
                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(99,102,241,0.1)"
                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"
                                }}
                            >
                                {item.name}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 opacity-20" />
            </div>
        </motion.div>
    )
}