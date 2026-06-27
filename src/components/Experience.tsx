import { EXPERIENCE, EDUCATION } from "@/constants";
import Image from "next/image"; // FIX: Imported Next.js Image component

export default function Experience() {
  return (
    <section id="Experience" className="py-24 px-6 md:px-24 lg:px-48 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">Milestones</p>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            CAREER & <br /> <span className="text-gray-500">KNOWLEDGE.</span>
          </h2>
        </div>

        {/* --- EXPERIENCE SECTION --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">Professional Path</h3>
            <div className="h-px flex-1 bg-blue-500/20"></div>
          </div>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <div 
                key={index}
                className="group relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 bg-white/3 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-blue-500/50 hover:bg-white/5 transition-all duration-500"
              >
                {/* Logo Area - FIXED: Added 'relative' and used Next.js <Image /> */}
                <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                  <Image 
                    src="/logos/care.png" 
                    alt={exp.company} 
                    fill
                    className="object-contain p-4 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>

                {/* Text Area */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">{exp.role}</h4>
                      <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">{exp.company}</p>
                    </div>
                    <span className="mt-2 md:mt-0 text-gray-500 font-mono text-xs border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed max-w-3xl text-sm md:text-base">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- EDUCATION SECTION --- */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">Academic Foundation</h3>
            <div className="h-px flex-1 bg-blue-500/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/2 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500 flex items-center gap-6"
              >
                {/* Logo Area - FIXED: Added 'relative' and used Next.js <Image /> */}
                <div className="relative w-20 h-20 shrink-0 bg-black/20 rounded-xl border border-white/5 group-hover:rotate-6 transition-transform overflow-hidden">
                  <Image 
                    src={edu.school.includes("SZABIST") ? "/logos/szabist.png" : "/logos/pcs.png"} 
                    alt={edu.school} 
                    fill
                    className="object-contain p-3"
                    sizes="80px"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white leading-tight mb-1">{edu.school}</h4>
                  <p className="text-gray-500 text-xs mb-3 font-mono">{edu.degree}</p>
                  
                  {/* Score Badges */}
                  <div className="flex gap-2">
                    {edu.gpa && (
                      <span className="text-[10px] font-black bg-blue-600/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded uppercase">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                    {edu.grade && (
                      <span className="text-[10px] font-black bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}