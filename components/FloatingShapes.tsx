'use client'

import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      size: 60,
      initialX: 10,
      initialY: 20,
      duration: 20,
      delay: 0,
      color: 'from-blue-400/20 to-purple-400/20'
    },
    {
      id: 2,
      size: 80,
      initialX: 80,
      initialY: 60,
      duration: 25,
      delay: 5,
      color: 'from-purple-400/20 to-pink-400/20'
    },
    {
      id: 3,
      size: 40,
      initialX: 20,
      initialY: 80,
      duration: 15,
      delay: 10,
      color: 'from-pink-400/20 to-red-400/20'
    },
    {
      id: 4,
      size: 100,
      initialX: 70,
      initialY: 10,
      duration: 30,
      delay: 15,
      color: 'from-green-400/20 to-blue-400/20'
    },
    {
      id: 5,
      size: 50,
      initialX: 90,
      initialY: 40,
      duration: 18,
      delay: 8,
      color: 'from-yellow-400/20 to-orange-400/20'
    }
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute bg-gradient-to-r ${shape.color} rounded-full blur-sm`}
          style={{
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
