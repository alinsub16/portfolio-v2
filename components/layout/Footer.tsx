import React from 'react'
import { GitFork, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter">
            DEV<span className="text-cyan-400">.</span>PORTFOLIO
          </div>
          <div className="text-slate-500 text-sm font-mono flex items-center">
            &copy; {new Date().getFullYear()} Made with <Heart className="text-red-500 mx-2" size={14} fill="currentColor" /> by Topher
          </div>
          <div className="flex gap-6">
            <GitFork className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
  )
}

export default Footer
