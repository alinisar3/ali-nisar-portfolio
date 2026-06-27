"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- FAILSAFE SVG COMPONENTS ---
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-1.11 1.5-1.11 3.5 0 5 0 3.5 3 5.5 6 5.5-.32.54-.45 1.18-.45 1.83V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-100 transition-all duration-300 border-b",
        scrolled || isOpen
          ? "bg-black/90 backdrop-blur-xl border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* LEFT SIDE: BRAND LOGO */}
        <Link href="/" className="relative z-100 group">
          <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase">
            Ali<span className="text-blue-500"> Nisar.</span>
          </span>
        </Link>

        {/* CENTERED NAVIGATION LINKS (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-white transition-all hover:scale-110"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-4 md:gap-6 relative z-100">
          {/* Socials - Desktop/Tablet Only */}
          <div className="hidden sm:flex items-center gap-5">
            <a href="https://github.com/alinisar3" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ali-nisar-27aa67316" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>

          <div className="hidden md:block h-4 w-px bg-white/10"></div>

          <a href="#Contact" className="px-5 md:px-6 py-2 bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
            Hire Me
          </a>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 
          MOBILE MENU OVERLAY
          FIXED: Changed z-index and added solid bg-black to hide scrolled content.
      */}
      <div className={cn(
        "fixed inset-0 h-screen w-screen bg-black flex flex-col items-center justify-center transition-all duration-500 md:hidden z-50",
        isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        {/* Navigation links - FIXED: Reduced font size and balanced spacing */}
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-black tracking-[0.5em] uppercase text-white hover:text-blue-500 transition-all active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials inside mobile menu */}
        <div className="flex items-center gap-10 mt-12 pt-10 border-t border-white/5 w-40 justify-center">
            <a href="https://github.com/alinisar3" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <GithubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ali-nisar-27aa67316" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <LinkedinIcon size={22} />
            </a>
        </div>
      </div>
    </nav>
  );
}