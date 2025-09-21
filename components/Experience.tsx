'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Users, TrendingUp, Code, Zap, ChevronDown, ChevronUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set())

  const toggleExperience = (company: string) => {
    const newExpanded = new Set(expandedExperiences)
    if (newExpanded.has(company)) {
      newExpanded.delete(company)
    } else {
      newExpanded.add(company)
    }
    setExpandedExperiences(newExpanded)
  }

  const experiences = [
    {
      company: 'Refyne India',
      position: 'Software Engineer 2',
      duration: 'Aug 2023 – Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Building large-scale fintech applications that serve over 1 million users with 600K+ monthly active users.',
      achievements: [
        'Developed and maintained web application with 1M+ users using React/NextJS',
        'Built comprehensive lending workflows and payment integrations',
        'Implemented KYC automation systems improving user onboarding by 40%',
        'Created gamified user experiences to increase engagement',
        'Developed a React Design System as a private NPM package',
        'Improved SEO & performance with hybrid SSR migration',
        'Collaborated with cross-functional teams in an agile environment'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      company: 'Tvast',
      position: 'Software Engineer Intern',
      duration: 'Aug 2022 – Nov 2022',
      location: 'Remote',
      type: 'Internship',
      description: 'Built enterprise-scale and government applications serving 100K+ monthly users.',
      achievements: [
        'Developed enterprise-scale applications with 100K+ monthly users',
        'Built government applications with strict compliance requirements',
        'Improved system performance and optimized workflows',
        'Collaborated with senior developers on complex features',
        'Gained experience in large-scale system architecture'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Git'],
      icon: Code,
      color: 'green'
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            My journey in building scalable applications and solving real-world problems
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 lg:mb-0">
                  <div className={`p-2 sm:p-3 rounded-lg bg-${exp.color}-100 dark:bg-${exp.color}-900/30`}>
                    <exp.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${exp.color}-600 dark:text-${exp.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      <span>{exp.company}</span>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile expand/collapse button */}
                <button
                  onClick={() => toggleExperience(exp.company)}
                  className="lg:hidden self-start p-2 rounded-lg bg-white/50 dark:bg-dark-700/50 border border-gray-200 dark:border-dark-600 hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  {expandedExperiences.has(exp.company) ? (
                    <ChevronUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Detailed content - Hidden on mobile unless expanded, always visible on desktop */}
              <div className={`${expandedExperiences.has(exp.company) ? 'block' : 'hidden'} lg:block`}>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                        className="flex items-start space-x-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-500 mt-1 text-xs">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              The Journey Continues 🚀
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              From building my first "Hello World" to architecting systems that serve millions of users, 
              every project has been a learning experience. I'm excited to see what challenges and 
              opportunities lie ahead in this ever-evolving tech landscape!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
