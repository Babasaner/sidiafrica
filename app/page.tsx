import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Globe, TrendingUp, Calendar, MapPin } from "lucide-react"
import CountUp from "@/components/count-up"
import NewsCard from "@/components/news-card"
import PartnerSlider from "@/components/partner-slider"
import AgendaPreview from "@/components/agenda-preview"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Image
                src="/logo.png"
                alt="SIDI Invest For Africa"
                width={300}
                height={100}
                className="h-20 w-auto mb-4"
                priority
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-secondary">SALON</span> <br />
                SUR LES INVESTISSEMENTS ET LE DÉVELOPPEMENT DES INFRASTRUCTURES EN AFRIQUE
              </h1>
              <p className="text-xl md:text-2xl font-light">Développement - Opportunités - Potentiels</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                  <Link href="/participer">PARTICIPER AU SALON</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/a-propos">EN SAVOIR PLUS</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                <Image
                  src="/simandou.png"
                  alt="SIDI Invest For Africa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex items-center">
              <Calendar className="text-secondary w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Date</h3>
                <p className="text-2xl font-bold text-secondary">30.05.25</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex items-center">
              <MapPin className="text-secondary w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Lieu</h3>
                <p className="text-lg">Noom Hotel, Conakry, Guinée</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex items-center lg:col-span-1 md:col-span-2">
              <Globe className="text-secondary w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Pays invités</h3>
                <p className="text-sm">Sénégal, Bénin, Burkina, Côte d'Ivoire, Gabon, Mali, Niger, RDC...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">AGENDA DU SALON</h2>

          <AgendaPreview />

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/programme">VOIR LE PROGRAMME COMPLET</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">AU SUJET</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Infrastructures</h3>
                <p className="text-gray-600">
                  Découvrez les projets d'infrastructures majeurs en Afrique et les opportunités d'investissement
                  associées.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Investissements</h3>
                <p className="text-gray-600">
                  Explorez les différentes opportunités d'investissement dans les secteurs clés du développement
                  africain.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Développement</h3>
                <p className="text-gray-600">
                  Contribuez au développement durable du continent africain à travers des projets innovants et
                  impactants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-gray-600">
                  Rencontrez des décideurs, investisseurs et experts du développement africain lors de notre salon.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/a-propos">EN SAVOIR PLUS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={13} />+
              </p>
              <p className="text-gray-600 mt-2">Pays Participants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={500} />+
              </p>
              <p className="text-gray-600 mt-2">Participants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={50} />+
              </p>
              <p className="text-gray-600 mt-2">Intervenants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={100} />+
              </p>
              <p className="text-gray-600 mt-2">Projets Présentés</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ACTUALITÉS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <NewsCard
              title="Lancement du Salon SIDI Invest For Africa 2024"
              excerpt="Le salon SIDI Invest For Africa se tiendra les 4 et 5 octobre 2024 à la Bibliothèque François Mitterrand de Paris."
              date="15 Mai 2024"
              image="https://sidinvest.africa/wp-content/uploads/2024/09/favicon-1.jpg"
              slug="/actualites/lancement-salon-2024"
            />

            <NewsCard
              title="SIDI 2021"
              excerpt="SIDI Paris 2021 : Spéciale émission Sama Keur consacrée à l’événement "
              date="10 Mai 2024"
              image="https://sidinvest.africa/wp-content/uploads/2024/09/Banner.jpg"
              slug="/actualites/opportunites-investissement"
            />

            <NewsCard
              title="Africa Bloom"
              excerpt="Africa Bloom Corporate expose son ambitieux programme au service du développement de l'immobilier."
              date="5 Mai 2024"
              image="https://sidinvest.africa/wp-content/uploads/2022/11/IMG-20211219-WA0055-ptwr8xgq161v6psiew05bvjqsj6bi93jcta36ch9vi.jpeg"
              slug="/actualites/partenariat-bad"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/actualites">VOIR TOUTES LES ACTUALITÉS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">NOS PARTENAIRES</h2>

          <PartnerSlider />

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/partenaires">VOIR TOUS NOS PARTENAIRES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participez au Forum Économique International de Guinée - Simandou 2040
          </h2>
          <p className="text-xl md:max-w-2xl mx-auto mb-8">
            Rejoignez-nous le 30 mai 2025 au Noom Hotel de Conakry pour découvrir les opportunités d'investissement dans
            l'ère Simandou 2040
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">PARTICIPER AU SALON</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
