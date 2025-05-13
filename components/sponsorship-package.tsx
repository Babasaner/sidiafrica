"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeIn } from "@/lib/motion"

interface SponsorshipPackageProps {
  title: string
  price: string
  features: string[]
  highlighted?: boolean
  index: number
  ctaText?: string
  onContactClick: () => void
}

export default function SponsorshipPackage({
  title,
  price,
  features,
  highlighted = false,
  index,
  ctaText = "Devenir sponsor",
  onContactClick,
}: SponsorshipPackageProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative flex flex-col p-6 rounded-2xl shadow-lg ${
        highlighted
          ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-2 border-yellow-400"
          : "bg-white border border-gray-200"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold">
          Recommandé
        </div>
      )}

      <h3 className={`text-xl font-bold mb-2 ${highlighted ? "text-white" : "text-blue-800"}`}>{title}</h3>

      <div className="mb-6">
        <span className={`text-3xl font-bold ${highlighted ? "text-white" : "text-blue-900"}`}>{price}</span>
      </div>

      <ul className="flex-grow space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${highlighted ? "text-white" : "text-blue-600"}`} />
            <span className={highlighted ? "text-white" : "text-gray-700"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onContactClick}
        className={`w-full ${
          highlighted ? "bg-white text-blue-700 hover:bg-gray-100" : "bg-blue-700 text-white hover:bg-blue-800"
        }`}
      >
        {ctaText}
      </Button>
    </motion.div>
  )
}
