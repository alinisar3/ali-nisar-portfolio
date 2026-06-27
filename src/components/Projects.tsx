"use client";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image"; 
import React from "react";

// --- FAILSAFE GITHUB SVG (Standard PascalCase for Lucide style) ---
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1.11 1.5-1.11 3.5 0 5 0 3.5 3 5.5 6 5.5-.32.54-.45 1.18-.45 1.83V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <section id="Projects" className="py-32 px-6 md:px-12 lg:px-24 xl:px-48 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">Case Studies</p>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Featured <br /> 
            <span className="text-gray-500">Projects.</span>
          </h2>
          <div className="w-px h-16 bg-linear-to-b from-blue-500 to-transparent mx-auto mt-8 hidden md:block" />
        </div>

        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, index) => {
            // FIX: Ensure paths work correctly for Next.js Image
            const imagePath = project.image.startsWith('public') 
              ? project.image.replace('public', '') 
              : project.image;

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* TEXT AREA */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase">
                      {project.title}
                    </h3>
                    <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-blue-400 font-mono text-[9px] uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.desc}
                  </p>

                  <div className="flex gap-4 pt-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5 flex items-center gap-3"
                    >
                      View Source Code <GithubIcon size={16} />
                    </a>
                  </div>
                </div>

                {/* IMAGE / VISUAL AREA */}
                <div className="flex-1 relative group w-full">
                  {/* Subtle outer glow */}
                  <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-500 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* FIX: Used 'rounded-4xl' (Canonical) and removed 'bg-black/40' to ensure full brightness */}
                  <div className="relative aspect-video rounded-4xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    
                    {/* 
                       FIXED VISIBILITY: 
                       - Changed 'object-cover' to 'object-contain' to ensure NO text is clipped on the edges.
                       - Removed dark overlays so text is 100% visible.
                       - 'priority' set for LCP performance.
                    */}
                    <Image 
                      src={imagePath} 
                      alt={project.title} 
                      fill
                      className="object-contain bg-[#020617] transition-all duration-500 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}