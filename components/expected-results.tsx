"use client"

import { motion } from "framer-motion"
import { Award, FileCheck, Handshake, LineChart, Users } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function ExpectedResults() {
  const results = [
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Valorisation des projets structurants",
      description: "Mise en lumière des projets majeurs qui transforment l'économie guinéenne",
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Mobilisation d'investissements",
      description: "Attraction de nouveaux partenaires économiques et financiers",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Visibilité des entreprises guinéennes",
      description: "Renforcement de la présence des acteurs économiques locaux",
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Recommandations concrètes",
      description: "Élaboration de propositions pour un climat des affaires plus attractif",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Signature de partenariats",
      description: "Conclusion de protocoles d'accord et d'alliances stratégiques",
    },
  ]

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
        >
          Résultats Attendus
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1 + 0.2, 0.75)}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{result.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
