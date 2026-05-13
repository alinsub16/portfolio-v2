'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import  logo from '@/assets/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <>
      <nav
        className={`md:fixed  absolute top-3 right-0 md:left-1/2 md:-translate-x-1/2 md:max-w-150 z-50 md:w-full md:border md:border-white/20  md:backdrop-blur-sm rounded-full transition-all duration-300
        ${
          scrolled
            ? 'md:bg-slate-900/60 md:backdrop-blur-sm md:border md:border-white/10 py-3'
            : 'md:bg-transparent md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-end">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
            >
              Message Me
            </a>
          </div>

          {/* Mobile Burger */}
          
          <button
            className={`md:hidden ${
              isOpen
                ? 'hidden'
                : 'block'
            }`}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
        ${
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 w-full h-screen sm:w-[80%] sm:max-w-[320px] bg-slate-900/30 border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-end p-6 absolute top-0 right-0">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-8 pt-4">
        <Image src={logo} alt="Topher.Dev Logo" className="w-50 mb-10 " />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium hover:text-cyan-400 transition-colors py-4 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-cyan-500 text-slate-900 text-center py-3 rounded-full font-bold mt-10"
          >
            Message Me
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar