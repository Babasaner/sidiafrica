"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface AnimatedLogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  variant?: "navbar" | "footer"
}

export default function AnimatedLogo({
  width = 180,
  height = 60,
  className = "h-10 sm:h-12 w-auto",
  priority = false,
  variant = "navbar",
}: AnimatedLogoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simuler un délai de chargement pour l'animation d'entrée
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Animation de base pour le logo
  const baseAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Animation de flottement subtil
  const floatAnimation = {
    animate: {
      y: [0, -3, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  }

  // Animation de brillance
  const shineAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.5, 0],
      x: [-100, 100],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 7,
        ease: "easeInOut",
      },
    },
  }

  // Animation au survol
  const hoverAnimation = {
    scale: isHovered ? 1.05 : 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : baseAnimation.initial}
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : {
                ...baseAnimation.animate,
                ...(isLoaded && !prefersReducedMotion ? floatAnimation.animate : {}),
              }
        }
        whileHover={prefersReducedMotion ? {} : hoverAnimation}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Image
          src="/logo-white-new.png"
          alt="SIDI Invest Africa"
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </motion.div>

      {/* Effet de brillance qui traverse le logo */}
      {!prefersReducedMotion && isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ width: "200%", left: "-50%" }}
          initial={shineAnimation.initial}
          animate={shineAnimation.animate}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
