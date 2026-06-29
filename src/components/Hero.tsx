"use client";
import { PERSONAL_INFO } from "@/constants";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      gsap.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      });
      
      // Infinite rotation for the decorative outline
      gsap.to(".hero-circle", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black pt-28 pb-12 lg:py-0">
      
      {/* Background Decorative Chevrons - Elite Aesthetic */}
      <div className="absolute right-1/10 top-1/5 opacity-10 hidden xl:block">
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M10 10L50 50L10 90" />
          <path d="M20 10L60 50L20 90" />
        </svg>
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        
        {/* LEFT SIDE: Professional Copywriting */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h2 className="hero-reveal text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter">
            Hello<span className="text-blue-500">.</span>
          </h2>
          
          <div className="hero-reveal flex items-center justify-center lg:justify-start gap-4">
            <div className="h-px w-12 md:w-16 bg-blue-500/50" />
            <h3 className="text-xl md:text-3xl xl:text-4xl text-white/90 font-medium tracking-tight uppercase">
              I&apos;m {PERSONAL_INFO.name}
            </h3>
          </div>

          <h1 className="hero-reveal text-4xl md:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight lg:leading-none uppercase">
            FULL STACK <br /> 
            <span className="text-gray-500 font-light italic">DEVELOPER</span>
          </h1>

          <div className="hero-reveal flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-6 md:pt-8">
            <a href="#Contact" className="px-8 md:px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-none hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
              Got a project?
            </a>
            <a 
              href="/Ali-Nisar-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 border border-blue-500/50 text-white font-bold uppercase tracking-widest text-[10px] rounded-none hover:bg-blue-600/10 transition-all"
            >
              My resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Image with Portal Design */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          
          {/* Rotating Outer Circles */}
          <div className="hero-circle absolute w-64 h-64 md:w-100 md:h-100 xl:w-125 xl:h-125 border border-blue-500/30 rounded-full flex items-center justify-center">
             <div className="w-[90%] h-[90%] border border-blue-500/10 rounded-full" />
          </div>
          
          {/* Ambient Background Glow */}
          <div className="absolute w-70 h-70 md:w-110 md:h-110 xl:w-150 xl:h-150 bg-blue-600/15 blur-[80px] md:blur-[120px] rounded-full z-0" />

          {/* 
             IMAGE CONTAINER: 
             - Circular form (aspect-square + rounded-full)
             - Balanced sizes for mobile, tablet, and desktop
          */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 xl:w-112.5 xl:h-112.5 aspect-square rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
            <Image 
              src="/logos/ali nisar.png" 
              alt="Ali Nisar Profile" 
              fill
              priority
              /* 
                 FIXED: Added 'sizes' prop for Next.js performance standards. 
                 This resolves the browser warning.
              */
              sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 450px"
              /* 
                 FIXED: Using 'object-center' to ensure the crop looks 
                 identical on every device screen.
              */
              className="object-cover object-center transition-transform hover:scale-110 duration-700"
            />
          </div>

          {/* Decorative Corner Arrow */}
          <div className="absolute right-0 bottom-0 opacity-20 hidden xl:block rotate-180">
            <svg width="60" height="100" viewBox="0 0 60 100" fill="none" stroke="#3b82f6" strokeWidth="2">
              <path d="M10 10L50 50L10 90" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}