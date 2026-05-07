import React from 'react'
import { SKILLS } from "@/data/skills";
import SmallCards from "@/components/ui/SmallCards";

const Skills: React.FC = () => {
    
  return (
    <>
      <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Modern tools for modern solutions.</p>
          </div>  
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill) => (
                <SmallCards 
                key={skill.name}
                name={skill.name} 
                color={skill.color} 
                icon={skill.icon} 
                />            
            ))}
          </div>
        </section>
    </>
  )
}

export default Skills
