"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import NewsCard from "@/components/news-card"
import { staggerContainer, fadeIn } from "@/lib/motion"

// Données des articles récents
const recentPosts = [
  {
    id: 1,
    title: "Lancement du Salon SIDI Invest For Africa 2024",
    excerpt:
      "Le salon SIDI Invest For Africa se tiendra les 4 et 5 octobre 2024 à la Bibliothèque François Mitterrand de Paris.",
    date: "15 Mai 2024",
    image: "/news-1.png",
    slug: "/actualites/lancement-salon-2024",
    category: "Événement",
  },
  {
    id: 2,
    title: "Les opportunités d'investissement dans les infrastructures en Afrique",
    excerpt:
      "Découvrez les secteurs clés et les projets d'infrastructure qui façonnent l'avenir du continent africain.",
    date: "10 Mai 2024",
    image: "/news-2.png",
    slug: "/actualites/opportunites-investissement",
    category: "Investissement",
  },
  {
    id: 3,
    title: "Partenariat stratégique avec la Banque Africaine de Développement",
    excerpt:
      "SIDI Invest For Africa annonce un partenariat stratégique avec la BAD pour soutenir les projets d'infrastructure.",
    date: "5 Mai 2024",
    image: "/news-3.png",
    slug: "/actualites/partenariat-bad",
    category: "Partenariat",
  },
]

export default function HomeBlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Actualités & Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles concernant le Salon Guinée Invest et le développement économique en
              Afrique.
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="grid md:grid-cols-3 gap-8 mb-10">
            {recentPosts.map((post) => (
              <NewsCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="text-center">
            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <Link href="/actualites">Voir toutes les actualités</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
