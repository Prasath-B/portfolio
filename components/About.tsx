'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Users, Zap, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Users Impacted', value: '1M+' },
    { icon: Zap, label: 'Projects Built', value: '15+' },
    { icon: Heart, label: 'Coffee Cups', value: '∞' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A passionate developer who loves turning ideas into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Hey there! 👋 I'm currently a <strong className="text-primary-600 dark:text-primary-400">Software Engineer 2</strong> at{' '}
                <strong className="text-primary-600 dark:text-primary-400">Refyne India</strong>, where I get to work on 
                large-scale fintech applications that serve over <strong>1 million users</strong>. Pretty cool, right?
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey has been quite the ride – from college days filled with curiosity, through internships 
                that taught me the ropes, to now building production-grade systems that people actually use. 
                There's something magical about seeing your code running in the wild! ✨
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me binge-watching anime (currently obsessed with Attack on Titan), 
                hitting the gym to stay sane, or building cool side projects that solve random problems I encounter. 
                I believe the best solutions come from understanding real-world problems.
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about creating software that's not just functional, but also delightful to use. 
                Whether it's optimizing performance, improving user experience, or architecting scalable systems, 
                I love the challenge of making technology work beautifully.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Fun Facts About Me 🎯
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <span>🎮</span>
                <span>Built a Chrome extension with 3 mini-games</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>☕</span>
                <span>Can't function without my morning coffee</span>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:col-span-2 lg:col-span-1">
                <span>🏋️</span>
                <span>Gym enthusiast who codes between sets</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
