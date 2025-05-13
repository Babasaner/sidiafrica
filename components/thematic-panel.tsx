"use client"

import type React from "react"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Card, CardContent } from "@/components/ui/card"

interface ThematicPanelProps {
  title: string
  description: string
  index: number
  icon: React.ReactNode
}

export default function ThematicPanel({ title, description, index, icon }: ThematicPanelProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4 text-blue-700">{icon}</div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
