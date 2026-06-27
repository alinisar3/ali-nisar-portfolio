"use client";
import { PERSONAL_INFO } from "@/constants";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwvjeyoe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Automatically refresh fields
        // Hide success message after 5 seconds
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="Contact" className="py-32 px-6 md:px-12 lg:px-20 xl:px-48 relative overflow-hidden bg-transparent">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-10 w-full">
            <div>
              <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">Availability: Open</p>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                LET&apos;S BUILD <br /> 
                <span className="text-gray-500">SOMETHING.</span>
              </h2>
              <p className="text-gray-400 mt-8 max-w-md leading-relaxed text-lg font-light">
                I am currently looking for new engineering opportunities. I turn complex requirements into high-performance reality.
              </p>
            </div>

            <div className="space-y-6 max-w-md">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-black/50"
              >
                <div className="p-4 bg-blue-600/10 rounded-xl text-blue-500 group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-white font-medium truncate">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <div className="group flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-2xl shadow-black/50">
                <div className="p-4 bg-blue-600/10 rounded-xl text-blue-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Glass Form */}
          <div className="w-full bg-white/3 backdrop-blur-2xl border border-white/10 p-6 md:p-10 xl:p-12 rounded-[2.5rem] shadow-2xl relative">
            
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center shadow-xl shadow-blue-600/20 rotate-12 hidden xl:flex z-20">
              <MessageSquare className="text-white" size={28} />
            </div>

            {/* SUCCESS NOTIFICATION */}
            {status === "SUCCESS" && (
              <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="text-blue-500 mb-4" size={64} />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Message Sent!</h3>
                <p className="text-gray-400 mt-2">I will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus("IDLE")}
                  className="mt-6 text-blue-500 font-mono text-xs uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white font-bold uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-blue-500 focus:bg-black/60 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white font-bold uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-blue-500 focus:bg-black/60 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white font-bold uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-blue-500 focus:bg-black/60 focus:outline-none transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "SUBMITTING"}
                className="w-full py-5 bg-blue-600 text-white rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-blue-700 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "SUBMITTING" ? "Sending..." : "Send Message"} 
                <Send size={16} />
              </button>
              
              {status === "ERROR" && (
                <p className="text-red-500 text-xs text-center font-mono mt-2 uppercase tracking-widest">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}