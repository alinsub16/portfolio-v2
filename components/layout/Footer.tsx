import React from 'react'
import Image from 'next/image'
import { Heart } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import  logo from '@/assets/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="py-5 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter">
            <Image src={logo} alt="Topher.Dev Logo" className="w-60" />
          </div>
          <div className="text-slate-500 text-sm font-mono flex items-center">
            &copy; {new Date().getFullYear()} Made with <Heart className="text-red-500 mx-2" size={14} fill="currentColor" /> by Topher
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/alinsub16" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-slate-400 hover:text-white cursor-pointer transition-colors text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/christopher-alinsub/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-slate-400 hover:text-white cursor-pointer transition-colors text-3xl" />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
