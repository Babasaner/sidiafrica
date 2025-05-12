"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const timelineData = [
  {
    year: "1997",
    title: "Découverte du gisement",
    description: "Identification du gisement de fer de Simandou par Rio Tinto.",
  },
  {
    year: "2019",
    title: "Attribution des blocs",
    description:
      "Attribution des blocs 1 et 2 au consortium SMB-Winning et confirmation de Rio Tinto et Chinalco pour les blocs 3 et 4.",
  },
  {
    year: "2020",
    title: "Signature de la convention",
    description: "Signature de la convention de base pour le développement du projet Simandou.",
  },
  {
    year: "2022",
    title: "Début des travaux",
    description: "Lancement des travaux préliminaires d'infrastructure et d'exploitation.",
  },
  {
    year: "2025",
    title: "Construction des infrastructures",
    description: "Intensification de la construction du chemin de fer transguinéen et des installations portuaires.",
    isCurrent: true,
  },
  {
    year: "2026",
    title: "Première production",
    description: "Début de la production de minerai de fer sur les premiers blocs.",
    isFuture: true,
  },
  {
    year: "2030",
    title: "Pleine capacité",
    description: "Atteinte de la pleine capacité de production et d'exportation.",
    isFuture: true,
  },
  {
    year: "2040",
    title: "Vision à long terme",
    description: "Développement complet du corridor économique et diversification des activités.",
    isFuture: true,
  },
]

export default function ProjectTimeline() {
  const [activeYear, setActiveYear] = useState("2025")

  return (
    <div className="w-full">
      {/* Timeline Navigation */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>

        {timelineData.map((item, index) => (
          <button
            key={item.year}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all",
              activeYear === item.year
                ? "bg-primary text-white scale-125"
                : item.isFuture
                  ? "bg-gray-200 text-gray-500 hover:bg-gray-300"
                  : "bg-secondary text-primary hover:bg-secondary/80",
            )}
            onClick={() => setActiveYear(item.year)}
          >
            <span className="text-xs font-bold">{item.year}</span>
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className={cn("transition-all duration-300", activeYear === item.year ? "block" : "hidden")}
          >
            <div className="flex items-center mb-4">
              <span className={cn("text-3xl font-bold mr-4", item.isFuture ? "text-gray-400" : "text-primary")}>
                {item.year}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>

            {item.isCurrent && (
              <div className="mt-4 bg-primary/10 p-4 rounded-md">
                <p className="text-primary font-medium">
                  Nous sommes actuellement à cette étape du projet. Le Forum Économique International de Guinée -
                  Simandou 2040 vous permettra de découvrir les avancées et les prochaines étapes.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
