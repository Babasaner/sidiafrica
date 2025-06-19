import NewsCard from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Données des actualités
const newsData = [
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

// Catégories d'actualités
const categories = [
  "Toutes",
  "Événement",
  "Investissement",
  "Partenariat",
  "Interview",
  "Finance",
  "Numérique",
  "Projets",
  "Économie",
  "Innovation",
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACTUALITÉS</h1>
          <p className="text-xl max-w-3xl">
            Restez informé des dernières nouvelles concernant SIDI Invest For Africa et le développement des
            infrastructures en Afrique.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured News */}
          <div className="mb-16">
            <h2 className="section-title mb-8">À LA UNE</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src="/news/forum-guinee-2025.png"
                  alt="Forum Économique International de Guinée - Simandou 2040"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Événement
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Forum Économique International de Guinée - Simandou 2040
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    Le Forum Économique International de Guinée se tiendra le 12 juillet 2025 à Conakry sous le thème
                    "Guinée, Terre d'Avenir – Investir dans l'ère Simandou 2040".
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">15 Mai 2025</span>
                    <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90">
                      <a href="/actualites/forum-guinee-simandou-2040">Lire la suite</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {newsData.slice(1, 4).map((news) => (
                  <div key={news.id} className="flex gap-4 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-1/3 min-w-[120px]">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 w-2/3">
                      <span className="inline-block bg-gray-100 text-primary text-xs font-bold px-2 py-1 rounded-full mb-2">
                        {news.category}
                      </span>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{news.date}</span>
                        <Button asChild size="sm" variant="link" className="p-0 h-auto text-primary">
                          <a href={news.slug}>Lire</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All News */}
          <h2 className="section-title mb-8">TOUTES LES ACTUALITÉS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                image={news.image}
                slug={news.slug}
                category={news.category}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Précédent
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-primary text-sm font-medium text-white"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Suivant
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-gray-600 mb-8">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et informations sur le Salon SIDI
              Invest For Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">S'abonner</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
