'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MessageCircle, Coffee, Heart, Phone } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prasathbalasubramani30@gmail.com',
      href: 'mailto:prasathbalasubramani30@gmail.com',
      description: 'Drop me a line anytime!',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76398 27644',
      href: 'tel:+917639827644',
      description: 'Call or WhatsApp me',
      color: 'green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prasath-balasubramani',
      href: 'https://www.linkedin.com/in/prasath-balasubramani/',
      description: 'Let\'s connect professionally',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/prasath-b',
      href: 'https://github.com/prasath-b',
      description: 'Check out my code',
      color: 'gray'
    }
  ]


  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Let's <span className="gradient-text">Connect!</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Whether it's work, collaboration, or just anime recommendations, my inbox is open!
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-xl sm:text-2xl"
            >
              ☕
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-xl sm:text-2xl"
            >
              💬
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              className="text-xl sm:text-2xl"
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
              rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-full bg-${method.color}-100 dark:bg-${method.color}-900/30 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${method.color}-600 dark:text-${method.color}-400`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {method.label}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 break-all">
                {method.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Ready to work together? 🤝
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or just chat about technology, anime, or anything else that sparks your interest. 
            Don't hesitate to reach out!
          </p>
          
          <motion.a
            href="mailto:prasathbalasubramani30@gmail.com?subject=Hello from your portfolio!&body=Hi Prasath,%0D%0A%0D%0AI came across your portfolio and wanted to reach out..."
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Send me an email</span>
          </motion.a>
        </motion.div>

        {/* Fun Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
            </motion.span>
            <span>and lots of</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ☕
            </motion.span>
            <span>by Prasath</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-2">
            © 2024 Prasath Balasubramani. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
