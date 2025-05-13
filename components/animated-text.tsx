"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "@/lib/motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  title: string
  textStyles?: string
  className?: string
}

export const AnimatedText = ({ title, textStyles, className = "" }: AnimatedTextProps) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} ${className}`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
)

interface AnimatedTitleProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const AnimatedTitle = ({ children, className = "", delay = 0 }: AnimatedTitleProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.h2>
)
