'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0)
  
  const taglines = [
    'Building at Refyne',
    'React & Node.js', 
    'System Design',
    'Anime & Gym',
    'Side Projects'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [taglines.length])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4"
          >
            <MapPin className="h-4 w-4" />
            <span>Based in India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          >
            Hey, I'm{' '}
            <span className="gradient-text">Prasath</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6"
          >
            Software Engineer 2 at Refyne India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6"
          >
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I build web applications that scale. Currently working on fintech products 
              that serve over 1M users, with a focus on performance and user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for opportunities</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>3+ years experience</span>
            </div>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-6"
          >
            <div className="h-6 sm:h-8 flex items-center justify-center">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mr-2">Currently:</span>
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400"
              >
                {taglines[currentTagline]}
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100 text-sm sm:text-base"
            >
              View Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm sm:text-base"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-white/10 dark:bg-dark-800/10 border border-white/20 dark:border-dark-700/20 hover:bg-white/20 dark:hover:bg-dark-800/20 transition-colors duration-200"
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
