"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function ObjectivesSection() {
  const objectives = [
    "Présenter les projets prioritaires dans les secteurs des infrastructures, mines, énergie, transports, BTP et zones industrielles",
    "Favoriser les partenariats public-privé et les échanges entre acteurs locaux et internationaux",
    "Valoriser les entreprises qui portent le développement économique de la Guinée",
    "Promouvoir l'image de la Guinée comme destination économique fiable et attractive",
  ]

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
        >
          Nos Objectifs
        </motion.h2>

        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-xl text-blue-800 font-semibold">
            Créer un cadre de dialogue stratégique et de mobilisation des investisseurs autour de projets économiques
            majeurs en Guinée, en particulier ceux liés à la mise en œuvre du programme Simandou 2040.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.75)}
              className="flex items-start bg-white p-5 rounded-lg shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{objective}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
