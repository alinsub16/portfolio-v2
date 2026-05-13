import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import  logo from '@/assets/logo.png'

const Header: React.FC = () => {
  return (
    <header>
        <Image src={logo} alt="Topher.Dev Logo" className="absolute left-0 md:hidden w-50" />
        <Navbar />
    </header>
  )
}

export default Header
