import NewsCard from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Données des actualités
const newsData = [
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
  {
    id: 4,
    title: "Interview exclusive avec le Ministre des Infrastructures du Sénégal",
    excerpt:
      "Le Ministre des Infrastructures du Sénégal partage sa vision pour le développement des infrastructures dans son pays.",
    date: "1 Mai 2024",
    image: "/news-4.png",
    slug: "/actualites/interview-ministre-senegal",
    category: "Interview",
  },
  {
    id: 5,
    title: "Les défis du financement des infrastructures en Afrique",
    excerpt: "Analyse des défis et des solutions pour le financement des projets d'infrastructure en Afrique.",
    date: "25 Avril 2024",
    image: "/news-5.png",
    slug: "/actualites/defis-financement",
    category: "Finance",
  },
  {
    id: 6,
    title: "Le rôle des PPP dans le développement des infrastructures africaines",
    excerpt: "Comment les partenariats public-privé peuvent accélérer le développement des infrastructures en Afrique.",
    date: "20 Avril 2024",
    image: "/news-6.png",
    slug: "/actualites/role-ppp",
    category: "Partenariat",
  },
  {
    id: 7,
    title: "Les infrastructures numériques : un levier de croissance pour l'Afrique",
    excerpt: "L'importance des infrastructures numériques pour la transformation économique de l'Afrique.",
    date: "15 Avril 2024",
    image: "/news-7.png",
    slug: "/actualites/infrastructures-numeriques",
    category: "Numérique",
  },
  {
    id: 8,
    title: "SIDI Invest For Africa signe un accord avec la Côte d'Ivoire",
    excerpt: "Un accord de partenariat a été signé entre SIDI Invest For Africa et le gouvernement ivoirien.",
    date: "10 Avril 2024",
    image: "/news-8.png",
    slug: "/actualites/accord-cote-ivoire",
    category: "Partenariat",
  },
  {
    id: 9,
    title: "Les projets d'infrastructure prioritaires pour l'Afrique en 2024",
    excerpt: "Découvrez les projets d'infrastructure qui seront au cœur du développement africain en 2024.",
    date: "5 Avril 2024",
    image: "/news-9.png",
    slug: "/actualites/projets-prioritaires-2024",
    category: "Projets",
  },
  {
    id: 10,
    title: "L'impact des infrastructures sur le développement économique africain",
    excerpt:
      "Une étude révèle l'impact significatif des investissements en infrastructures sur la croissance économique en Afrique.",
    date: "1 Avril 2024",
    image: "/news-10.png",
    slug: "/actualites/impact-infrastructures-economie",
    category: "Économie",
  },
  {
    id: 11,
    title: "Les innovations technologiques au service des infrastructures africaines",
    excerpt:
      "Comment les nouvelles technologies transforment la conception, la construction et la gestion des infrastructures en Afrique.",
    date: "25 Mars 2024",
    image: "/news-11.png",
    slug: "/actualites/innovations-technologiques",
    category: "Innovation",
  },
  {
    id: 12,
    title: "Conférence préparatoire du Salon SIDI Invest For Africa à Dakar",
    excerpt:
      "Une conférence préparatoire du Salon SIDI Invest For Africa s'est tenue à Dakar avec la participation de nombreux acteurs locaux.",
    date: "20 Mars 2024",
    image: "/news-12.png",
    slug: "/actualites/conference-preparatoire-dakar",
    category: "Événement",
  },
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

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Rechercher une actualité..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>

            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "bg-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
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
                  src="/news/forum-guinee.jpg"
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
                    Le Forum Économique International de Guinée se tiendra le 30 mai 2025 à Conakry sous le thème
                    "Guinée, Terre d'Avenir – Investir dans l'ère Simandou 2040".
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">15 Mai 2024</span>
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
