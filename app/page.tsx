'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import FloatingShapes from '@/components/FloatingShapes'
// import Loader from '@/components/Loader'
// Alternative loaders available:
import Loader from '@/components/LoaderV2' // Terminal-style loader
// import Loader from '@/components/LoaderV3' // Minimalist loader

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <main className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-colors duration-300 overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <FloatingShapes />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
