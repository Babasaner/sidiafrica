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
    title: "Un accord de 32 millions de dollars US signé avec la BAD, des rendez-vous avec la presse et une présence remarquée à la cérémonie de clôture. Le Ministre Mourana Soumah a bouclé une journée chargée et fructueuse à Abidjan.",
    excerpt:
      "C’est l’une des retombées concluantes et positives de la mission que le Ministre Mourana Soumah a mené dans la capitale ivoirienne… la signature avec la Direction des Opérations du Groupe de la BAD d’un important accord de financement doté d’une enveloppe de 32 millions 500 mille dollars US.",
    date: "30 Mai 2025",
    image: "/news/accord.jpg",
    slug: "/actualites/accord-bad-guinee-conakry",
    category: "Investissement",
  },
  {
    id: 2,
    title: "La Guinée Conakry « n’exclut pas d’accéder au marché international des capitaux »",
    excerpt:
      "Mourana Soumah, ministre de l’Économie et des Finances de la Guinée Conakry, a déclaré le 30 mai, lors d’un échange avec des journalistes",
    date: "10 Mai 2025",
    image: "/ministre/mourana-soumah.jpg",
    slug: "/actualites/la-guinee-conakry-exclut-pas-d-acceder-au-marche-international-des-capitaux",
    category: "Investissement",
  },
  

  {
    id: 3,
    title: "SIDI Paris 2021",
    excerpt: "Spéciale émission Sama Keur consacrée à l’événement",
    date: "5 Novembre 2021",
    image: "news/sidi2021.jpg",
    slug: "/actualites/sidi-paris-2021",
    category: "Événement",
  }
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
