"use client"

import { motion } from "framer-motion"
import { Globe, Newspaper, Radio, Tv, FileText, Smartphone } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function CommunicationInfo() {
  const channels = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Télévision",
      description: "Couverture par les chaînes nationales et internationales",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Radio",
      description: "Diffusion sur les stations locales et internationales",
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Presse écrite",
      description: "Articles dans les journaux et magazines économiques",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Réseaux sociaux",
      description: "Campagne digitale sur toutes les plateformes",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Site web et application",
      description: "Plateforme digitale dédiée à l'événement",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Catalogue des investissements",
      description: "Publication des opportunités d'investissement en Guinée",
    },
  ]

  const mediaPartners = ["La Présidence", "La Primature", "Le Conseil national de Transition", "Le Ministére de l’Economie et des Finances", "Le Ministére du Plan et de la Coopération Internationale", "Le Ministére des Infrastructures et des Travaux Publics", "Le Ministère de l’Industrie et du Commerce" , "La Chambre de Commerce, d’Industrie et d’Artisanat de Guinée (CCIAG)", "La Confédération Générale des Entreprises de Guinée (CGE-GUI)", "La Chambre Nationale d’Agriculture", "La Chambre des Mines de Guinée", "APIP"]

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
          Dispositif de Communication
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.05 + 0.2, 0.75)}
              className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">{channel.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{channel.title}</h3>
              <p className="text-gray-600 text-sm">{channel.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="bg-blue-50 p-6 rounded-xl border border-blue-100 container mx-auto"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Partenaires Institutionnels et Techniques </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm font-semibold text-blue-700">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
