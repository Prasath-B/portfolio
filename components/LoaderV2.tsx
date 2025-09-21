'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoaderV2 = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    'Initializing portfolio...',
    'Loading awesome projects...',
    'Preparing animations...',
    'Almost ready...'
  ]

  useEffect(() => {
    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length)
    }, 800)

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          clearInterval(textInterval)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + Math.random() * 12 + 8
      })
    }, 120)

    return () => {
      clearInterval(progressTimer)
      clearInterval(textInterval)
    }
  }, [onComplete, loadingTexts.length])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-blue-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01, duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center">
          {/* Terminal-style Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-green-400 mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                _
              </motion.span>
              prasath@portfolio
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-gray-400 font-mono"
            >
              Software Engineer 2
            </motion.div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-80 mx-auto"
          >
            {/* Loading Text */}
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-green-400 font-mono text-sm mb-4 h-6 flex items-center justify-center"
            >
              {loadingTexts[currentText]}
            </motion.div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-gray-800 rounded-sm h-3 border border-gray-600 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Progress Text */}
              <motion.div
                className="absolute -bottom-6 left-0 text-xs text-gray-500 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>

          {/* Code-like Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 text-xs text-gray-600 font-mono text-left max-w-md mx-auto"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Loading components...</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-green-400">✓</span>
                <span>Initializing animations...</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-yellow-400"
                >
                  ⚡
                </motion.span>
                <span>Optimizing performance...</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['<', '>', '{', '}', '(', ')', ';', '='].map((char, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/30 font-mono text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoaderV2
