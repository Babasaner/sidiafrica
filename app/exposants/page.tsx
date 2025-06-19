import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  Users,
  Briefcase,
  PresentationIcon as PresentationScreen,
  BarChart3,
  CheckCircle2,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react"

export default function ExposantsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 md:px-8">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Exposition Économique</h1>
            <p className="text-xl text-blue-100 mb-8">
              Présentez vos produits, innovations et solutions à un public ciblé de décideurs et investisseurs lors du
              plus grand salon économique prévu en 2025 en République de Guinée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <Building2 className="text-yellow-400 mr-3 h-6 w-6" />
                <span className="text-white">50 entreprises exposantes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <Users className="text-yellow-400 mr-3 h-6 w-6" />
                <span className="text-white">300+ décideurs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <Briefcase className="text-yellow-400 mr-3 h-6 w-6" />
                <span className="text-white">Zone B2B dédiée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pourquoi exposer au Salon Guinée Invest ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PresentationScreen className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Visibilité maximale</h3>
              <p className="text-gray-700">
                Associez votre image à la croissance et au futur économique de la Guinée et renforcez votre visibilité
                auprès des décideurs publics et privés.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Networking stratégique</h3>
              <p className="text-gray-700">
                Rencontrez des partenaires potentiels, des investisseurs et des clients dans un cadre professionnel
                dédié aux opportunités d'affaires.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Positionnement stratégique</h3>
              <p className="text-gray-700">
                Positionnez votre marque comme un acteur clé du développement économique guinéen à l'ère du programme
                Simandou 2040.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Opportunités commerciales</h3>
              <p className="text-gray-700">
                Accédez à des opportunités commerciales, de partenariats et d'affaires B2B dans un environnement
                favorable aux échanges.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-yellow-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Couverture médiatique</h3>
              <p className="text-gray-700">
                Bénéficiez d'une couverture médiatique internationale (TV, presse, digital, radio) avec nos partenaires
                médias.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-yellow-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Présentation de solutions</h3>
              <p className="text-gray-700">
                Présentez vos produits, technologies et solutions aux décideurs nationaux et internationaux intéressés
                par le marché guinéen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Secteurs représentés</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {sector.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-900">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Options de stands -->
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Options de stands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-6">
                <h3 className="text-2xl font-bold text-blue-900 text-center">Stand Standard</h3>
                <div className="text-3xl font-bold text-center text-blue-700 mt-4">2 000 €</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Espace de 6 m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Mobilier de base (table, chaises)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Signalétique avec nom de l'entreprise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>2 badges exposants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Mention dans le catalogue officiel</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/participer"
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                  >
                    Réserver un stand standard
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMANDÉ
              </div>
              <div className="bg-blue-700 p-6">
                <h3 className="text-2xl font-bold text-white text-center">Stand Premium</h3>
                <div className="text-3xl font-bold text-center text-yellow-400 mt-4">3 500 €</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Espace de 12 m²</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Mobilier premium (comptoir d'accueil, présentoir)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Signalétique personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>4 badges exposants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>½ page dans le catalogue officiel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    <span>Accès prioritaire à la zone B2B</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/participer"
                    className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                  >
                    Réserver un stand premium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Zone B2B -->
      <section className="py-16 px-4 md:px-8 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Zone B2B dédiée</h2>
              <p className="text-blue-100 mb-6">
                Une zone spéciale sera dédiée aux rencontres d'affaires, signatures de partenariats et networking entre
                exposants et visiteurs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-yellow-400 h-5 w-5 mr-3 mt-0.5" />
                  <span>Espaces de réunion privés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-yellow-400 h-5 w-5 mr-3 mt-0.5" />
                  <span>Plateforme de prise de rendez-vous</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-yellow-400 h-5 w-5 mr-3 mt-0.5" />
                  <span>Assistance pour les mises en relation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-yellow-400 h-5 w-5 mr-3 mt-0.5" />
                  <span>Espace de signature de contrats</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/business-meeting-conference-room.png" alt="Zone B2B" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Informations pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Date</h3>
              <p className="text-center text-gray-700">12 juillet 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Lieu</h3>
              <p className="text-center text-gray-700">Hôtel NOOM, Conakry</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Tarifs</h3>
              <p className="text-center text-gray-700">À partir de 2 000 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Réservez votre espace d'exposition dès maintenant</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ne manquez pas cette opportunité unique de présenter vos produits et services aux décideurs économiques de
            la Guinée et de la région.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* 
            <Link
              href="/participer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Réserver un stand
            </Link>
            */}
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const sectors = [
  {
    name: "Mines",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "BTP",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "Énergie",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "Logistique",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "Industrie",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "Finance",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "TIC",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
  {
    name: "Agriculture",
    icon: <Building2 className="text-blue-700 h-8 w-8" />,
  },
]
