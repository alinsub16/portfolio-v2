'use client';

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";


export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
