'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoaderV3 = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    // Dots animation
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          clearInterval(dotsInterval)
          setTimeout(onComplete, 600)
          return 100
        }
        return prev + Math.random() * 10 + 5
      })
    }, 150)

    return () => {
      clearInterval(progressTimer)
      clearInterval(dotsInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      >
        <div className="text-center">
          {/* Minimalist Name Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="inline-block"
              >
                Prasath
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg text-gray-500 dark:text-gray-400 font-light mt-4"
            >
              Software Engineer
            </motion.div>
          </motion.div>

          {/* Minimalist Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-64 mx-auto"
          >
            {/* Simple Line Progress */}
            <div className="relative">
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full bg-gray-900 dark:bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Progress Number */}
              <motion.div
                className="absolute -top-8 left-0 text-sm text-gray-500 dark:text-gray-400 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-12 text-sm text-gray-400 dark:text-gray-500 font-light"
          >
            Loading{dots}
          </motion.div>

          {/* Subtle Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-200 dark:border-gray-700 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-gray-200 dark:border-gray-700 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoaderV3
