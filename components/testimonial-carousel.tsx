"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  quote: string
  image: string
  category: "economic" | "social" | "environmental" | "infrastructure"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mamadou Diallo",
    role: "Agriculteur",
    location: "Beyla, Guinée",
    quote:
      "Grâce au projet Simandou, notre village a maintenant une route qui nous permet d'accéder plus facilement aux marchés. Avant, il nous fallait des heures pour transporter nos produits, maintenant c'est beaucoup plus rapide. Nos revenus ont augmenté et nous pouvons mieux subvenir aux besoins de nos familles.",
    image: "/simandou/testimonials/testimonial-1.png",
    category: "economic",
  },
  {
    id: 2,
    name: "Fatoumata Camara",
    role: "Directrice d'école",
    location: "Nzérékoré, Guinée",
    quote:
      "Le programme de développement communautaire de Simandou a permis la construction de trois nouvelles salles de classe dans notre école. Nous avons également reçu du matériel pédagogique et des formations pour nos enseignants. Nos élèves ont maintenant de bien meilleures conditions d'apprentissage.",
    image: "/simandou/testimonials/testimonial-2.jpg",
    category: "social",
  },
  {
    id: 3,
    name: "Ibrahim Touré",
    role: "Technicien ferroviaire",
    location: "Conakry, Guinée",
    quote:
      "J'ai été formé dans le cadre du programme de développement des compétences de Simandou. Aujourd'hui, je travaille sur le projet de chemin de fer transguinéen avec un bon salaire et des perspectives d'évolution. Ce projet a changé ma vie et celle de nombreux jeunes Guinéens comme moi.",
    image: "/simandou/testimonials/testimonial-3.png",
    category: "infrastructure",
  },
  {
    id: 4,
    name: "Dr. Aminata Koné",
    role: "Médecin",
    location: "Centre de santé de Forécariah",
    quote:
      "Le centre de santé où je travaille a été rénové et équipé grâce au projet Simandou. Nous pouvons maintenant offrir de meilleurs soins à la population locale. Le nombre de patients que nous pouvons traiter a doublé et les conditions sanitaires se sont nettement améliorées.",
    image: "/simandou/testimonials/testimonial-4.jpg",
    category: "social",
  },
  {
    id: 5,
    name: "Moussa Sylla",
    role: "Propriétaire de PME",
    location: "Kindia, Guinée",
    quote:
      "Mon entreprise fournit des services logistiques aux sous-traitants du projet Simandou. Nous avons pu nous développer, acquérir de nouveaux équipements et embaucher 15 personnes supplémentaires. L'effet économique du projet se fait sentir bien au-delà des zones d'exploitation directe.",
    image: "/simandou/testimonials/testimonial-5.png",
    category: "economic",
  },
  {
    id: 6,
    name: "Mariama Bah",
    role: "Responsable environnement",
    location: "ONG locale",
    quote:
      "Je collabore avec l'équipe environnementale du projet Simandou pour surveiller la biodiversité dans la région. Les mesures de protection mises en place sont rigoureuses et les programmes de reboisement commencent à porter leurs fruits. C'est un exemple de comment l'exploitation minière peut se faire de manière plus responsable.",
    image: "/simandou/testimonials/testimonial-6.png",
    category: "environmental",
  },
  {
    id: 7,
    name: "Souleymane Keita",
    role: "Chef de village",
    location: "Région de Simandou",
    quote:
      "Notre communauté a été consultée à chaque étape du projet. Les compensations ont été justes et les promesses d'emploi local ont été tenues. Bien sûr, il y a des défis, mais nous voyons des améliorations concrètes dans notre quotidien et pour l'avenir de nos enfants.",
    image: "/simandou/testimonials/testimonial-7.png",
    category: "social",
  },
  {
    id: 8,
    name: "Aissatou Barry",
    role: "Ingénieure environnementale",
    location: "Projet Simandou",
    quote:
      "Nous avons mis en place un système de gestion de l'eau qui minimise l'impact sur les ressources locales. Les technologies utilisées sont à la pointe et nous surveillons constamment la qualité de l'eau. Notre objectif est de préserver l'environnement pour les générations futures.",
    image: "/simandou/testimonials/testimonial-8.png",
    category: "environmental",
  },
  {
    id: 9,
    name: "Ousmane Balde",
    role: "Ingénieur civil",
    location: "Chemin de fer transguinéen",
    quote:
      "Le chemin de fer que nous construisons est conçu selon les normes internationales les plus strictes. C'est un projet d'infrastructure sans précédent en Guinée qui va désenclaver des régions entières et stimuler le développement économique bien au-delà du secteur minier.",
    image: "/simandou/testimonials/testimonial-9.png",
    category: "infrastructure",
  },
  {
    id: 10,
    name: "Fanta Doumbouya",
    role: "Commerçante",
    location: "Marché de Kankan",
    quote:
      "Depuis le début des travaux, j'ai vu une augmentation significative de mon activité commerciale. Il y a plus d'argent en circulation et plus de clients. Les nouvelles infrastructures routières facilitent aussi l'approvisionnement de mon commerce. C'est une période d'opportunités pour nous.",
    image: "/simandou/testimonials/testimonial-10.png",
    category: "economic",
  },
  {
    id: 11,
    name: "Abdoulaye Diallo",
    role: "Maire",
    location: "Commune rurale près de Simandou",
    quote:
      "Les taxes versées par le projet ont permis à notre commune d'investir dans des infrastructures essentielles : écoles, dispensaires, points d'eau. Nous travaillons en étroite collaboration avec les responsables du projet pour que les bénéfices profitent réellement à la population locale.",
    image: "/simandou/testimonials/testimonial-11.png",
    category: "social",
  },
  {
    id: 12,
    name: "Kadiatou Bah",
    role: "Spécialiste en développement durable",
    location: "Consultant international",
    quote:
      "Le projet Simandou a le potentiel de devenir un modèle de développement minier durable en Afrique. Les standards environnementaux et sociaux appliqués sont élevés, et l'approche de développement intégré est prometteuse. Le défi sera de maintenir ces standards sur le long terme.",
    image: "/simandou/testimonials/testimonial-12.png",
    category: "environmental",
  },
]

export default function TestimonialCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>("economic")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const filteredTestimonials = testimonials.filter((t) => t.category === activeCategory)
  const totalTestimonials = filteredTestimonials.length

  useEffect(() => {
    // Reset index when category changes
    setCurrentIndex(0)
  }, [activeCategory])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, totalTestimonials, currentIndex])

  const handlePrevious = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
  }

  return (
    <div className="w-full">
      <Tabs
        defaultValue="economic"
        value={activeCategory}
        onValueChange={(value) => setActiveCategory(value)}
        className="w-full"
      >
        <div className="flex justify-center mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="economic" className="px-4 py-2">
              Impact Économique
            </TabsTrigger>
            <TabsTrigger value="social" className="px-4 py-2">
              Impact Social
            </TabsTrigger>
            <TabsTrigger value="environmental" className="px-4 py-2">
              Impact Environnemental
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="px-4 py-2">
              Infrastructures
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="economic" className="mt-0">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400",
                    )}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrentIndex(index)
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="social" className="mt-0">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400",
                    )}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrentIndex(index)
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="environmental" className="mt-0">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400",
                    )}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrentIndex(index)
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="infrastructure" className="mt-0">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400",
                    )}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrentIndex(index)
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 hover:bg-primary/20 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 h-full">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center">{testimonial.role}</p>
              <p className="text-gray-500 text-sm text-center">{testimonial.location}</p>
            </div>
            <div className="md:w-2/3 flex items-center">
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-10 h-10 text-primary/10 -translate-x-4 -translate-y-4" />
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
