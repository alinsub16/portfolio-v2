import React from 'react'
import Image from "next/image";
import { User,Download } from 'lucide-react'
import Me from "@/assets/me.jpg";
import { motion } from "motion/react";
import { fadeUp, fadeLeftToRight, fadeRightToLeft } from '@/animations/variants';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="py-32 px-6 bg-slate-900/30" >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <motion.div className="aspect-square rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl relative group"
                variants={fadeLeftToRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={Me}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors"></div>
              </motion.div>
              <div className="absolute -bottom-6 md:-right-6 right-4 bg-cyan-500 text-slate-900 p-6 rounded-2xl shadow-xl transform rotate-3">
                <span className="text-4xl font-black block">2+</span>
                <p className="text-xs font-bold uppercase tracking-widest">Years Exp.</p>
              </div>
            </div>
            
            <motion.div className="w-full md:w-1/2 space-y-6"
              variants={fadeRightToLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            
            >
              <h2 className="text-4xl font-bold flex items-center gap-4">
                <User className="text-cyan-400" /> About Me
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I am Christopher Alinsub, a Web Developer with 2 years of experience building responsive and scalable web applications using modern technologies such as React, Node.js, TypeScript, and WordPress. I specialize in developing clean, user-friendly interfaces and integrating backend APIs to deliver seamless user experiences. Adaptable and detail-oriented, I am committed to continuous learning and improving development practices within collaborative team environments.
              </p>
              <div className="w-full block max-w-60 gap-6 pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer block group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-400 text-xl font-bold group-hover:translate-x-1 transition-transform">
                        Resume
                      </p>
                      <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">
                        View / Download PDF
                      </p>
                    </div>

                    <Download className="text-cyan-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                </a>
            </div>
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default About
