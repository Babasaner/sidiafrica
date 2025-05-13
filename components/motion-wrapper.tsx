"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"
import type { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MotionWrapper({ children, className = "", delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
