'use client';
import React from 'react'
import { SKILLS } from "@/data/skills";
import SmallCards from "@/components/ui/SmallCards";
import { motion } from "motion/react";
import { container } from "@/animations/variants";

const Skills: React.FC = () => {
    
  return (
    <>
      <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Technologies and tools I use to build modern web applications.</p>
          </div>  
          <motion.div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          >
            {SKILLS.map((skill) => (
                <SmallCards 
                key={skill.name}
                name={skill.name} 
                color={skill.color} 
                icon={skill.icon} 
                />            
            ))}
          </motion.div>
        </section>
    </>
  )
}

export default Skills
