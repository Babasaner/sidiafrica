"use client"

import { motion } from "framer-motion"
import { Building, Briefcase, Globe, LandmarkIcon, BarChart4, Users, Radio, Building2 } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function TargetAudience() {
  const audiences = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Gouvernement",
      description: "Membres du gouvernement et autorités nationales",
    },
    {
      icon: <LandmarkIcon className="w-8 h-8" />,
      title: "Institutions financières",
      description: "BAD, Banque mondiale, BOAD et autres institutions financières",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Entreprises",
      description: "Entreprises locales et internationales des secteurs stratégiques",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Investisseurs",
      description: "Bailleurs de fonds et fonds d'investissement",
    },
    {
      icon: <BarChart4 className="w-8 h-8" />,
      title: "Agences économiques",
      description: "Chambres de commerce et agences de promotion",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organisations professionnelles",
      description: "Organisations patronales et associations sectorielles",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Corps diplomatique",
      description: "Représentations diplomatiques et organisations internationales",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Médias",
      description: "Médias économiques nationaux et internationaux",
    },
  ]

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
        >
          Public Cible
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.05 + 0.2, 0.75)}
              className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">{audience.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
