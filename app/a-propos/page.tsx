import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Users, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/logo-white.png"
                alt="SIDI Invest For Africa"
                width={300}
                height={100}
                className="h-20 w-auto mb-8"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                FORUM <br />
                <span className="text-secondary">ÉCONOMIQUE INTERNATIONAL DE GUINÉE - SIMANDOU 2040</span>
              </h1>
              <p className="text-xl mb-8">Guinée, Terre d'Avenir – Investir dans l'ère Simandou 2040</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-secondary font-bold mb-2">Date</h3>
                  <p className="text-2xl font-bold">30.05.25</p>
                </div>
                <div>
                  <h3 className="text-secondary font-bold mb-2">Lieu</h3>
                  <p className="text-xl">NOOM HOTEL, CONAKRY, GUINÉE</p>
                </div>
              </div>

              <div>
                <h3 className="text-secondary font-bold mb-2">Pays invités</h3>
                <p className="text-sm">
                  Sénégal - Bénin - Burkina - Côte d'Ivoire - Gabon - Mali - Niger - République du Congo - RDC - Rwanda
                  - Tchad - Togo - Cameroun
                </p>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/simandou.png"
                alt="SIDI Invest For Africa"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">AU SUJET</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">INFRASTRUCTURES</h3>
              <p className="text-gray-600">
                Le Forum Économique International de Guinée met en lumière les projets d'infrastructures stratégiques
                pour le développement du continent africain. Découvrez les opportunités dans les secteurs des
                transports, de l'énergie, des télécommunications et des infrastructures urbaines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">INVESTISSEMENTS</h3>
              <p className="text-gray-600">
                Notre forum facilite la rencontre entre les porteurs de projets africains et les investisseurs
                internationaux. Nous offrons une plateforme unique pour identifier les opportunités d'investissement les
                plus prometteuses et établir des partenariats stratégiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">DÉVELOPPEMENT</h3>
              <p className="text-gray-600">
                Notre mission est de contribuer au développement économique et social de l'Afrique à travers la
                promotion des investissements dans les infrastructures. Nous croyons fermement que des infrastructures
                de qualité sont essentielles pour la croissance inclusive et durable du continent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">NETWORKING</h3>
              <p className="text-gray-600">
                Le Forum Économique International de Guinée réunit des décideurs politiques, des investisseurs, des
                experts et des entrepreneurs pour favoriser les échanges et les collaborations. Notre forum est
                l'occasion idéale pour élargir votre réseau professionnel et nouer des contacts de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">NOTRE MISSION</h2>
              <p className="text-gray-700 mb-6">
                Le Forum Économique International de Guinée a été créé avec une vision claire : faciliter et accélérer
                le développement des infrastructures en Afrique en connectant les investisseurs internationaux avec les
                projets et opportunités du continent.
              </p>
              <p className="text-gray-700 mb-6">
                Notre mission est de créer une plateforme dynamique où les décideurs politiques, les investisseurs, les
                experts et les entrepreneurs peuvent se rencontrer, échanger et collaborer pour transformer le paysage
                infrastructurel africain.
              </p>
              <p className="text-gray-700">
                Nous croyons fermement que le développement des infrastructures est la clé de la croissance économique
                et du progrès social en Afrique. C'est pourquoi nous nous engageons à mettre en lumière les projets les
                plus prometteurs et à faciliter leur financement et leur mise en œuvre.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
              <Image
                src="/about-image.png"
                alt="SIDI Invest For Africa Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <Image
                src="/about-image-2.png"
                alt="SIDI Invest For Africa Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">NOTRE VISION</h2>
              <p className="text-gray-700 mb-6">
                Notre vision est de devenir le forum de référence pour les investissements en infrastructures en
                Afrique, reconnu pour son impact concret sur le développement du continent.
              </p>
              <p className="text-gray-700 mb-6">
                Nous aspirons à créer un écosystème où les projets d'infrastructure africains peuvent être présentés,
                évalués et financés de manière efficace et transparente, contribuant ainsi à combler le déficit
                d'infrastructures du continent.
              </p>
              <p className="text-gray-700">
                À long terme, nous visons à faciliter la réalisation de projets d'infrastructure transformateurs qui
                amélioreront la qualité de vie des populations africaines, stimuleront la croissance économique et
                favoriseront l'intégration régionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">NOS OBJECTIFS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Promouvoir les opportunités d'investissement</h3>
              <p className="text-gray-600">
                Mettre en lumière les projets d'infrastructure à fort potentiel en Afrique et les présenter aux
                investisseurs internationaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Faciliter les partenariats public-privé</h3>
              <p className="text-gray-600">
                Encourager la collaboration entre les secteurs public et privé pour le développement et le financement
                des infrastructures en Afrique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Renforcer les capacités locales</h3>
              <p className="text-gray-600">
                Contribuer au transfert de connaissances et de technologies pour renforcer les compétences locales dans
                le domaine des infrastructures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Promouvoir les solutions durables</h3>
              <p className="text-gray-600">
                Encourager le développement d'infrastructures respectueuses de l'environnement et adaptées aux défis du
                changement climatique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                5
              </div>
              <h3 className="text-xl font-bold mb-4">Favoriser l'intégration régionale</h3>
              <p className="text-gray-600">
                Soutenir les projets d'infrastructure transfrontaliers qui contribuent à l'intégration économique et à
                la coopération entre les pays africains.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                6
              </div>
              <h3 className="text-xl font-bold mb-4">Améliorer l'accès aux services essentiels</h3>
              <p className="text-gray-600">
                Contribuer à l'amélioration de l'accès aux services essentiels (eau, électricité, transport,
                télécommunications) pour les populations africaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez-nous pour façonner l'avenir des infrastructures en Afrique
          </h2>
          <p className="text-xl md:max-w-2xl mx-auto mb-8">
            Participez au Forum Économique International de Guinée - Simandou 2040 au Noom Hotel de Conakry et
            contribuez au développement du continent
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">PARTICIPER AU FORUM</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
