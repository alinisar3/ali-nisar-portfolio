"use client";
import { motion, Variants } from "framer-motion";
import { 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiMysql, 
  SiGithub, 
  SiGit 
} from "react-icons/si";

const SKILLS_DATA = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, color: "rgba(227, 79, 38, 0.2)" },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" />, color: "rgba(21, 114, 182, 0.2)" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "rgba(6, 182, 212, 0.2)" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "rgba(247, 223, 30, 0.2)" },
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, color: "rgba(97, 218, 251, 0.2)" },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, color: "rgba(51, 153, 51, 0.2)" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, color: "rgba(255, 255, 255, 0.1)" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "rgba(71, 162, 72, 0.2)" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "rgba(255, 255, 255, 0.1)" },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, color: "rgba(68, 121, 161, 0.2)" },
  { name: "GitHub", icon: <SiGithub className="text-white" />, color: "rgba(255, 255, 255, 0.1)" },
  { name: "Git", icon: <SiGit className="text-[#F05032]" />, color: "rgba(240, 80, 50, 0.2)" },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <section id="Skills" className="py-32 px-6 md:px-24 lg:px-48 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.4em] mb-4 text-left">Technical Stack</h2>
          
          {/* 
             FIXED HEADING SIZE: 
             - text-[2.6rem] ensures 'TECHNOLOGIES.' fits on iPhone/Android without clipping.
             - sm:text-5xl and md:text-7xl matches the massive Jensen design on larger screens.
             - leading-[0.85] creates the tight, high-end architectural look from your screenshot.
          */}
          <h3 className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter text-white text-left uppercase leading-[0.85]">
            SKILLS & <br /> <span className="text-gray-500">TECHNOLOGIES.</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {SKILLS_DATA.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                {skill.icon}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors text-center">
                {skill.name}
              </p>
              
              {/* Dynamic Glow Background (Bypasses oklab color error) */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-[-1]" 
                style={{ backgroundColor: skill.color }}
              />
              
              {/* Hover Border highlight */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}