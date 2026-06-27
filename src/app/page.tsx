import Scene from "@/components/canvas/Scene";
import Navbar from "@/components/Navbar"; // Import the Navbar
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-transparent text-white min-h-screen relative">
      {/* Navbar sits on top of everything */}
      <Navbar />
      
      <Scene />

      <div className="relative z-10">
        <Hero />
        <div className="bg-black/60 backdrop-blur-3xl relative z-20">
           <Skills />
           <Projects />
           <Experience />
           <Contact />
        </div>
        
        <footer className="py-12 text-center text-gray-500 text-[10px] tracking-[0.3em] font-mono border-t border-white/5 bg-black">
          <p>© {new Date().getFullYear()} ALI NISAR • ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    </main>
  );
}