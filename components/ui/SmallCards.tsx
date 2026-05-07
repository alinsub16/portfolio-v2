import React from 'react'
import { SmallCardProps } from "@/types/index";




const SmallCards: React.FC<SmallCardProps> = ({ name, color, icon: Icon, size = 40 }) => {
  return (
    <>
      <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 text-center">
        <div className={`mb-4 flex justify-center transform group-hover:scale-110 transition-transform ${color}`}>
            <Icon size={size} />
        </div>
        <p className="font-bold tracking-tight">{name}</p>
      </div>
    </>
  )
}

export default SmallCards
