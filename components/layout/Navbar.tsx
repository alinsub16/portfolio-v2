'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

  return (
    <nav className={`fixed w-full top-3 left-1/2 -translate-x-1/2 max-w-150 z-50 border border-white/20 rounded-full transition-all backdrop-blur-sm duration-300 ${scrolled ? 'bg-slate-900/60 backdrop-blur-sm border-b border-slate-800 py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Message Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-lg font-medium hover:text-cyan-400">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-cyan-400 font-bold">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
