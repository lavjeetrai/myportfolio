"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/lib/resume";
import Scene from "@/components/Scene";
import CursorTrail from "@/components/CursorTrail";
import PixelBackground from "@/components/PixelBackground";
import { useRef, useState, useEffect, useTransition } from "react";
import { Github, Linkedin, Send, Loader2, Mail } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { sendEmail } from "./actions";
import { toast } from "sonner";


function Section({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 relative z-10 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasMoved) setHasMoved(true);
    };

    window.addEventListener("mousemove", handleInteraction, { once: true });
    window.addEventListener("touchmove", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [hasMoved]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully!");
        form.reset();
      }
    });
  }

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <main ref={containerRef} className="relative text-white overflow-hidden selection:bg-blue-500/30 bg-transparent">
      <Scene />
      <PixelBackground isVisible={!hasMoved} />
      <CursorTrail />
      
      {/* Floating Links */}
      <div className="fixed top-8 right-8 z-50 flex flex-col md:flex-row items-end md:items-center gap-4">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-full hover:bg-red-500/20 transition-all group"
        >
          <SiGmail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium hidden md:block text-red-500">Gmail</span>
        </motion.a>
        <motion.a
          href={resumeData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all group"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium hidden md:block">GitHub</span>
        </motion.a>
        <motion.a
          href={resumeData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-all group"
        >
          <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium hidden md:block text-blue-400">LinkedIn</span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-8">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
          >
            {resumeData.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 font-light tracking-widest uppercase mb-8"
          >
            {resumeData.role}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              <SiGmail className="w-5 h-5" />
              Gmail
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Scroll to explore</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section title="About">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl text-zinc-300 max-w-4xl leading-tight font-light"
        >
          {resumeData.about}
        </motion.p>
      </Section>

      {/* Experience Section */}
      <Section title="Experience">
        <div className="grid gap-12 max-w-5xl">
          {resumeData.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border-l border-zinc-800 pl-8 relative"
            >
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-2" />
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-blue-400 font-medium mb-2">{exp.company} | {exp.period}</p>
              <p className="text-zinc-400 text-lg leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Capabilities">
        <div className="flex flex-wrap gap-4 max-w-4xl">
          {resumeData.skills.map((skill, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300 hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Selected Works">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {resumeData.projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                  View Live Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education & Contact */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-zinc-950/50">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white">Education</h2>
            {resumeData.education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                <p className="text-zinc-400">{edu.degree} | {edu.period}</p>
              </motion.div>
            ))}

            <div className="mt-20">
              <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Let's connect.</h2>
              <div className="flex gap-4 mt-12">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-colors group"
                  title="Email me"
                >
                  <SiGmail className="w-8 h-8 text-red-500" />
                </motion.a>
                <motion.a 
                  href={resumeData.contact.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Github className="w-8 h-8" />
                </motion.a>
                <motion.a 
                  href={resumeData.contact.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-400" />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-8 tracking-tight">Leave your information</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="px-8 md:px-24 py-8 border-t border-zinc-900 flex justify-between text-zinc-600 text-xs uppercase tracking-widest">
        <p>© 2026 {resumeData.name}</p>
        <p>Built with Next.js & Three.js</p>
      </footer>
    </main>
  );
}
