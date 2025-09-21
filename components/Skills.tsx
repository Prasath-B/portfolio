'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Monitor, Server, Cloud, Code2, ChevronDown, ChevronUp } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'blue',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Redux Toolkit',
        'Tailwind CSS',
        'Accessibility',
        'Framer Motion',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'green',
      skills: [
        'Node.js',
        'NestJS',
        'Express',
        'REST APIs',
        'GraphQL',
        'PostgreSQL',
        'MongoDB',
        'Redis'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'purple',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS',
        'GitHub Actions',
        'CI/CD',
        'Monitoring',
        'Performance Optimization',
        'System Design'
      ]
    },
    {
      title: 'Others',
      icon: Code2,
      color: 'orange',
      skills: [
        'Git',
        'Jest',
        'Cypress',
        'Webpack',
        'Vite',
        'Chrome Extensions',
        'Design Systems',
        'Agile/Scrum'
      ]
    }
  ]

  const getSkillBadgeClass = (color: string) => {
    const baseClass = 'skill-badge'
    switch (color) {
      case 'blue':
        return `${baseClass} frontend`
      case 'green':
        return `${baseClass} backend`
      case 'purple':
        return `${baseClass} devops`
      case 'orange':
        return `${baseClass} frontend` // Using frontend style for others
      default:
        return baseClass
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div className={`p-2 sm:p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30 mr-3 sm:mr-4`}>
                    <category.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                {/* Mobile expand/collapse button */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="lg:hidden p-2 rounded-lg bg-white/50 dark:bg-dark-700/50 border border-gray-200 dark:border-dark-600 hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  {expandedCategories.has(category.title) ? (
                    <ChevronUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>
              
              {/* Skills - Hidden on mobile unless expanded, always visible on desktop */}
              <div className={`${expandedCategories.has(category.title) ? 'block' : 'hidden'} lg:block`}>
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className={`${getSkillBadgeClass(category.color)} text-xs sm:text-sm`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Always Learning 🚀
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              The tech world moves fast, and I love keeping up with it! I'm constantly exploring new technologies, 
              contributing to open source projects, and building side projects to expand my skill set. 
              Currently diving deeper into system design, microservices architecture, and performance optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
