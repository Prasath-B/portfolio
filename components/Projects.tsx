'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Gamepad2, Shield, ChevronDown, ChevronUp } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())

  const toggleProject = (projectTitle: string) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(projectTitle)) {
      newExpanded.delete(projectTitle)
    } else {
      newExpanded.add(projectTitle)
    }
    setExpandedProjects(newExpanded)
  }

  const featuredProjects = [
    {
      title: 'GameBox',
      description: 'A Chrome extension that provides an offline mini-game arcade with classic games like Snake, Ping Pong, and Tic-Tac-Toe. Perfect for quick breaks during work!',
      longDescription: 'GameBox is a Chrome extension I built to solve the problem of finding quick, offline entertainment during work breaks. It features three classic games with smooth animations and responsive controls. The extension works completely offline and provides a nostalgic gaming experience.',
      features: [
        'Three classic games: Snake, Ping Pong, Tic-Tac-Toe',
        'Offline functionality - no internet required',
        'Smooth animations and responsive controls',
        'Chrome extension with popup interface',
        'Local high score tracking',
        'Retro-style UI design'
      ],
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Chrome Extension API', 'Local Storage'],
      github: 'https://github.com/prasath-b/gamebox',
      demo: 'https://chrome.google.com/webstore/detail/gamebox',
      icon: Gamepad2,
      color: 'purple',
      status: 'Live'
    },
    {
      title: 'SecureAuth',
      description: 'A scalable authentication system built with NestJS and MongoDB, featuring JWT tokens, Role-Based Access Control (RBAC), and TOTP for enhanced security.',
      longDescription: 'SecureAuth is a comprehensive authentication microservice designed for modern web applications. It provides enterprise-grade security features including multi-factor authentication, role-based access control, and secure token management.',
      features: [
        'JWT-based authentication with refresh tokens',
        'Role-Based Access Control (RBAC)',
        'Time-based One-Time Password (TOTP) support',
        'Password strength validation and hashing',
        'Rate limiting and brute force protection',
        'Comprehensive API documentation',
        'MongoDB integration with optimized queries',
        'Docker containerization'
      ],
      technologies: ['NestJS', 'MongoDB', 'JWT', 'bcrypt', 'Docker', 'Swagger', 'TypeScript'],
      github: 'https://github.com/prasath-b/secureauth',
      demo: null,
      icon: Shield,
      color: 'green',
      status: 'In Development'
    }
  ]


  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Some of my favorite projects that showcase my skills and passion for building cool stuff
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 sm:space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 lg:mb-0">
                  <div className={`p-2 sm:p-3 rounded-lg bg-${project.color}-100 dark:bg-${project.color}-900/30`}>
                    <project.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${project.color}-600 dark:text-${project.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                {/* Mobile expand/collapse button */}
                <button
                  onClick={() => toggleProject(project.title)}
                  className="lg:hidden self-start p-2 rounded-lg bg-white/50 dark:bg-dark-700/50 border border-gray-200 dark:border-dark-600 hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  {expandedProjects.has(project.title) ? (
                    <ChevronUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>

              {/* Detailed content - Hidden on mobile unless expanded, always visible on desktop */}
              <div className={`${expandedProjects.has(project.title) ? 'block' : 'hidden'} lg:block`}>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.05) }}
                        className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-500 mt-1 text-xs">•</span>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
