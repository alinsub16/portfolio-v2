import React from 'react'
import {Calendar} from 'lucide-react'
import { ExperienceData } from '@/data/experience'
import ExperienceCards from '@/components/ui/ExperienceCards'

const Experience:React.FC = () => {
  return (
    <section id="experience" className="py-32 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">Career Path</h2>
            <p className="text-slate-500">My journey through the tech industry.</p>
        </div>

        <div className="relative border-l-2  border-slate-800 ml-4 md:ml-0 space-y-12">
            {ExperienceData.map((exp) => (
            <ExperienceCards 
                key={exp.role}
                role={exp.role}
                company={exp.company}
                description={exp.description}
                period={exp.period}
            />
            ))}
        </div>
        </div>
    </section>
  )
}

export default Experience