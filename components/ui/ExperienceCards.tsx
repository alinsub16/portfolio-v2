import React from 'react'
import {Calendar} from 'lucide-react'
import { ExperienceTypes } from '@/types/index'

const ExperienceCards:React.FC<ExperienceTypes> = ({role,company,period,description,stacks}) => {
  return (
    <div className="relative pl-10 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:scale-125 transition-transform duration-300 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/30 transition-all duration-300 hover:translate-x-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{role}</h3>
                <p className="text-cyan-500 font-medium text-sm">{company}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-xs bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} />
                {period}
                </div>
            </div>
            
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {stacks.map((item, i) => (
                <span key={i} className="text-[11px] font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/50">
                    {item}
                </span>
                ))}
            </div>
            </div>
        </div>
  )
}

export default ExperienceCards