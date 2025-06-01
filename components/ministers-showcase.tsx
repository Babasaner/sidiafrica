"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Données des ministres participants
const ministers = [
  {
    id: 1,
    name: "M. Djiba DIAKITÉ",
    title: " Ministre, Directeur de Cabinet de la Présidence – République de Guinée",
    country: "Guinée",
    image: "/ministre/djiba-diakite.jpg",
    bio: "M. Djiba DIAKITÉ est Ministre Directeur de Cabinet de la Présidence de la République de Guinée, Expert informatique, Chercheur, Ingénieur financier & Analyste des données financières.",
  },
  {
    id: 2,
    name: "M. Amara Camara",
    title: "Ministre, Porte -parole de la présidence – République de Guinée",
    country: "Guinée",
    image: "/ministre/amara-camara.jpg",
    bio: "Homme d’État engagé, M. Amara Camara joue un rôle clé dans la communication gouvernementale et la coordination des actions publiques.",
  },
  {
    id: 3,
    name: "M. Mourana Soumah",
    title: "Ministre de l’Economie et des Finances – République de Guinée",
    country: "Guinée",
    image: "/ministre/mourana-soumah.jpg",
    bio: "Figure centrale de la stratégie économique nationale, Mourana Soumah œuvre pour un climat d’affaires attractif et une gestion rigoureuse des finances publiques.",
  },
  { 
    id: 4,
    name: "M. Ismael Nabé",
    title: "Ministre du Plan et de la Coopération Internationale – République de Guinée",
    country: "Guinée",
    image: "/ministre/ismael-nabe.jpg",
    bio: "Économiste chevronné et stratège du développement, il joue un rôle central dans la définition et la mise en œuvre des politiques nationales de planification économique.",
  },
  {
    id: 5,
    name: "Dre. Diaka Sidibé",
    title: "Ministre du Commerce, de l’Industrie et des PME – République de Guinée",
    country: "France",
    image: "/ministre/diaka-sidibe.jpeg",
    bio: "Dre. Diaka Sidibé, Ministre du Commerce, de l’Industrie et des PME, Engagée pour la transformation industrielle du pays, elle œuvre aujourd’hui à renforcer le tissu entrepreneurial national, à promouvoir le commerce et à faire des PME un levier stratégique du développement économique de la Guinée.",
  },

  {
    id: 6,
    name: "M. Bouna Sylla",
    title: "Ministre des Mines et de la Géologie - République de Guinée",
    country: "Guinée",
    image: "https://mines.gov.gn/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-25-a-19.47.13_a27aa9c9.jpg",
    bio: "M. Bouna Sylla est chargé de piloter la valorisation durable des ressources minières du pays, en veillant à l’attraction des investissements et au respect des normes environnementales. Sa mission est de promouvoir une gestion transparente et responsable des richesses minérales afin de contribuer significativement au développement économique et social de la Guinée.",
  },

  {

    id: 7,
    name: "M. Mahamadou Abdoulaye DIALLO",
    title: "Ministre des Infrastructures et des Travaux Publics",
    country: "Guinée",
    image: "/ministre/abdoulaye-diallo.jpg",
    bio: " M. Mahamadou Abdoulaye Diallo est le Ministre des Infrastructures et des Travaux Publics de la Guinée. Il supervise les grands projets d’aménagement et de développement des infrastructures essentielles pour le pays.",
  },

  {
    id: 8,
    name: "M. Mory Conde",
    title: "Ministre de l'Urbanisme, de l'Habitat et de l'Amenagement du Territoire -République de Guinée",
    country: "Guinée",
    image: "/ministre/mory-conde.jpg",
    bio: "M. Mory Condé est le Ministre de l’Urbanisme, de l’Habitat et de l’Aménagement du Territoire de la République de Guinée. Il œuvre à la modernisation des villes et à une gestion durable du territoire national.",
  },

  {
    id: 9,
    name: "M. Ansoumane Kaba",
    title: "Président de la CGEGUI",
    country: "Guinée",
    image: "/ministre/ansoumane-kaba.jpg",
    bio: "M. Ansoumane Kaba Ansoumane Kaba, Président du Conseil d’Administration de la Confédération Générale des Entreprises de Guinée (CGE-GUI) Homme d’affaires influent, Ansoumane Kaba est le fondateur et PDG de GUITER S.A., leader national dans les secteurs du BTP, des mines et de l’énergie. Élu en avril 2024 à la tête de la CGE-GUI, il œuvre pour l’unification du patronat guinéen et la promotion d’un secteur privé dynamique, capable de stimuler la croissance économique et l’emploi.",
  },

  
  {
    id: 10,
    name: "M. Mamadou Baldé",
    title: "Président de la Chambre de Commerce, d’Industrie et d’Artisanat de Guinée (CCIAG)",
    country: "Guinée",
    image: "/ministre/mamadou-balde.jpg",
    bio: "Élu en mars 2022 à la tête de la CCIAG, M. Mamadou Baldé, est un acteur majeur du secteur privé guinéen. Il s'engage activement dans la promotion de l'entrepreneuriat local et le renforcement des capacités des entreprises nationales, contribuant ainsi au développement économique du pays.",
  },

  {
    id: 11,
    name: "M. Souleymane Bérété",
    title: "Président de la Chambre Nationale d'Agriculture de Guinée CNA",
    country: "Guinée",
    image: "/ministre/souleymane-berete.jpg",
    bio: "M. Souleymane Bérété, s'engage activement dans la réforme du secteur agricole guinéen. Sous sa direction, la CNA a initié des partenariats stratégiques, notamment avec des entreprises internationales, pour moderniser l'agriculture, améliorer la distribution des intrants et promouvoir l'irrigation. Son leadership vise à faire de l'agriculture un moteur de croissance économique et de développement durable en Guinée.",
  }

  
]

export default function MinistersShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextMinister = () => {
    setActiveIndex((prev) => (prev === ministers.length - 1 ? 0 : prev + 1))
  }

  const prevMinister = () => {
    setActiveIndex((prev) => (prev === 0 ? ministers.length - 1 : prev - 1))
  }

  const activeMinister = ministers[activeIndex]

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ministres & Personnalités</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Des décideurs de haut niveau participeront au Salon Guinée Invest pour partager leur vision et explorer les
            opportunités d'investissement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={activeMinister.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
              <Image
                src={activeMinister.image || "/placeholder.svg"}
                alt={activeMinister.name}
                fill
                className="object-cover object-[center_0px]"
                priority
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <Badge className="bg-yellow-500 text-blue-900 mb-3 text-sm font-bold px-3 py-1">
                  {activeMinister.country}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{activeMinister.name}</h3>
                <p className="text-lg text-blue-100 mb-2">{activeMinister.title}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              key={`bio-${activeMinister.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Biographie</h3>
              <p className="text-lg text-blue-100 mb-6">{activeMinister.bio}</p>
              
            </motion.div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-blue-200">
                {activeIndex + 1} / {ministers.length}
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={prevMinister}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={nextMinister}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {ministers.map((minister, index) => (
                <button
                  key={minister.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative min-w-[80px] h-[80px] rounded-lg overflow-hidden border-2 transition-all ${
                    index === activeIndex ? "border-yellow-500 scale-105" : "border-transparent opacity-70"
                  }`}
                >
                  <Image src={minister.image || "/placeholder.svg"} alt={minister.name} fill className="object-cover " />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
