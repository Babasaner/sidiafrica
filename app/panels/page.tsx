"use client"

import { motion } from "framer-motion"
import { Building2, Landmark, LightbulbIcon, LineChart, Truck } from "lucide-react"
import ThematicPanel from "@/components/thematic-panel"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function PanelsPage() {
  const panels = [
    {
      title: "Panel 1 : Le programme Simandou 2040 : moteur de transformation économique",
      description:
        "Ce panel explorera l'impact structurant du projet Simandou sur l'économie guinéenne et les opportunités de développement qu'il génère dans différents secteurs.",
      icon: <LineChart className="w-12 h-12" />,
    },
    {
      title: "Panel 2 : Infrastructures et logistique : leviers pour l'attractivité des investissements",
      description:
        "Discussion sur les projets d'infrastructures ferroviaires, portuaires et routières liés au programme Simandou et leur rôle dans l'amélioration de l'environnement des affaires.",
      icon: <Truck className="w-12 h-12" />,
    },
    {
      title: "Panel 3 : Financements innovants et partenariats public-privé",
      description:
        "Exploration des mécanismes de financement et des modèles de partenariat pour soutenir les grands projets d'infrastructure et de développement en Guinée.",
      icon: <Landmark className="w-12 h-12" />,
    },
    {
      title: "Panel 4 : Secteur privé guinéen : rôle, défis et perspectives",
      description:
        "Analyse des opportunités et défis pour les entreprises locales dans le contexte du programme Simandou 2040, et stratégies pour renforcer leur participation.",
      icon: <Building2 className="w-12 h-12" />,
    },
    {
      title: "Panel 5 : Zones industrielles, énergie et transition vers une économie durable",
      description:
        "Discussion sur le développement des zones industrielles, les projets énergétiques et les initiatives de développement durable dans le cadre du programme Simandou.",
      icon: <LightbulbIcon className="w-12 h-12" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-12 text-center"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
        >
          Panels Thématiques
        </motion.h1>
        <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-xl text-gray-600 max-w-3xl mx-auto">
          Des discussions de haut niveau sur les enjeux stratégiques du développement économique de la Guinée à l'ère du
          programme Simandou 2040.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <ThematicPanel
              key={index}
              title={panel.title}
              description={panel.description}
              index={index}
              icon={panel.icon}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="bg-blue-50 p-8 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Conférence Inaugurale</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Une session solennelle en présence de hauts responsables gouvernementaux, d'institutions financières, de
          diplomates et d'investisseurs, qui marquera l'ouverture officielle du Salon Guinée Invest 2025.
        </p>
      </motion.div>
    </div>
  )
}
