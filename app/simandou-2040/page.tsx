import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Train, Building, Users, Globe, DollarSign } from "lucide-react"
import CountUp from "@/components/count-up"

export default function Simandou2040Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-sidi-blue text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PROGRAMME SIMANDOU 2040</h1>
          <p className="text-xl max-w-3xl mb-8">
            Découvrez le programme stratégique qui transformera l'économie guinéenne et créera un pôle de développement
            majeur en Afrique de l'Ouest.
          </p>
          <Button asChild className="bg-sidi-gold text-sidi-dark hover:bg-sidi-gold/90">
            <Link href="/contact">PARTICIPER AU SALON</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">QU'EST-CE QUE SIMANDOU 2040 ?</h2>
              <p className="text-gray-700 mb-6">
                Le programme Simandou 2040 est une initiative stratégique de développement économique centrée autour de
                l'exploitation des gisements de minerai de fer de Simandou, l'un des plus grands et des plus riches
                gisements de minerai de fer non exploités au monde.
              </p>
              <p className="text-gray-700 mb-6">
                Situé dans le sud-est de la Guinée, le projet Simandou ne se limite pas à l'extraction minière, mais
                englobe un vaste programme de développement d'infrastructures comprenant un chemin de fer transguinéen
                de plus de 600 km et des installations portuaires de classe mondiale.
              </p>
              <p className="text-gray-700">
                Simandou 2040 représente une vision à long terme pour transformer ces ressources naturelles en un moteur
                de croissance économique durable, de création d'emplois et de développement régional pour la Guinée et
                l'ensemble de l'Afrique de l'Ouest.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sidi-gold/20 rounded-full blur-2xl"></div>
              <Image
                src="/simandou_logo.png"
                alt="Carte du projet Simandou"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">CHIFFRES CLÉS</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-sidi-blue" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-sidi-blue">
                <CountUp end={2} />
                Mds
              </p>
              <p className="text-gray-600 mt-2">Tonnes de minerai de fer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-sidi-blue" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-sidi-blue">
                <CountUp end={670} />
                km
              </p>
              <p className="text-gray-600 mt-2">De chemin de fer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-sidi-blue" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-sidi-blue">
                <CountUp end={15} />
                Mds$
              </p>
              <p className="text-gray-600 mt-2">D'investissement total</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sidi-blue" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-sidi-blue">
                <CountUp end={45000} />+
              </p>
              <p className="text-gray-600 mt-2">Emplois créés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">COMPOSANTES DU PROGRAMME</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/exploitation-minieres.jpg"
                alt="Opérations minières à Simandou"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-sidi-blue">Exploitation Minière</h3>
              <p className="text-gray-700 mb-4">
                Le gisement de Simandou contient plus de 2 milliards de tonnes de minerai de fer de haute qualité,
                avec une teneur moyenne supérieure à 65%. Cette qualité exceptionnelle en fait une ressource
                stratégique dans un contexte mondial où la demande pour des minerais à faible empreinte carbone est
                croissante.
              </p>
              <p className="text-gray-700 mb-4">Le projet minier est divisé en quatre blocs :</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>
                    <strong>Blocs 1 & 2 (Nord)</strong> : Développés par le consortium SMB-Winning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>
                    <strong>Blocs 3 & 4 (Sud)</strong> : Développés par Rio Tinto, Chinalco et le gouvernement
                    guinéen
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                À pleine capacité, le projet devrait produire jusqu'à 120 millions de tonnes de minerai de fer par
                an, plaçant la Guinée parmi les plus grands exportateurs mondiaux.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-sidi-blue">Infrastructures</h3>
              <p className="text-gray-700 mb-4">
                Le programme Simandou 2040 comprend le développement d'infrastructures majeures qui bénéficieront
                bien au-delà du secteur minier :
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-sidi-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Train className="w-5 h-5 text-sidi-blue" />
                  </div>
                  <div>
                    <strong className="block">Chemin de fer transguinéen</strong>
                    <p className="text-gray-600">
                      Une ligne ferroviaire de 670 km reliant les mines de Simandou à la côte atlantique, traversant
                      le pays d'est en ouest.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-sidi-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Building className="w-5 h-5 text-sidi-blue" />
                  </div>
                  <div>
                    <strong className="block">Port en eau profonde</strong>
                    <p className="text-gray-600">
                      Construction d'un port moderne capable d'accueillir des navires de grande capacité pour
                      l'exportation du minerai.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-sidi-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Globe className="w-5 h-5 text-sidi-blue" />
                  </div>
                  <div>
                    <strong className="block">Infrastructures connexes</strong>
                    <p className="text-gray-600">
                      Développement de routes, d'installations électriques, de systèmes d'approvisionnement en eau
                      et de télécommunications.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-gray-700">
                Ces infrastructures sont conçues pour être multi-usages, permettant le transport de passagers et
                d'autres marchandises, contribuant ainsi au désenclavement de régions entières de la Guinée.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/infrastructures.jpg"
                alt="Construction du chemin de fer transguinéen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative md:order-1 order-2">
              <Image
                src="/eco.jpg"
                alt="Développement économique en Guinée"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:order-2 order-1">
              <h3 className="text-2xl font-bold mb-4 text-sidi-blue">Développement Économique</h3>
              <p className="text-gray-700 mb-4">
                Simandou 2040 vise à créer un véritable corridor de développement économique le long du tracé
                ferroviaire, avec :
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>Création de plus de 45 000 emplois directs et indirects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>Développement de zones économiques spéciales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>Émergence d'industries de transformation locale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>Renforcement du secteur agricole grâce à un meilleur accès aux marchés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sidi-blue font-bold mr-2">•</span>
                  <span>Augmentation significative des recettes fiscales de l'État</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Le programme devrait contribuer à une augmentation du PIB guinéen de plus de 15% à terme,
                transformant fondamentalement l'économie du pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">OPPORTUNITÉS D'INVESTISSEMENT</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Train className="w-8 h-8 text-sidi-blue" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-sidi-blue">Infrastructure ferroviaire</h3>
                <p className="text-gray-600 mb-4">
                  Opportunités dans la construction et la maintenance du réseau ferroviaire transguinéen.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="inline-block bg-sidi-blue/5 text-sidi-blue border-sidi-blue/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    500M$ - 2Mds$
                  </span>
                  <span className="inline-block bg-sidi-gold/10 text-sidi-blue border-sidi-gold/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    Transport
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-sidi-blue" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-sidi-blue">Infrastructures portuaires</h3>
                <p className="text-gray-600 mb-4">
                  Développement et exploitation des installations portuaires en eau profonde.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="inline-block bg-sidi-blue/5 text-sidi-blue border-sidi-blue/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    300M$ - 1Md$
                  </span>
                  <span className="inline-block bg-sidi-gold/10 text-sidi-blue border-sidi-gold/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    Maritime
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-sidi-blue" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-sidi-blue">Énergie</h3>
                <p className="text-gray-600 mb-4">
                  Production et distribution d'électricité pour alimenter le projet et les communautés environnantes.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="inline-block bg-sidi-blue/5 text-sidi-blue border-sidi-blue/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    200M$ - 800M$
                  </span>
                  <span className="inline-block bg-sidi-gold/10 text-sidi-blue border-sidi-gold/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    Énergie
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-sidi-blue" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-sidi-blue">Financement</h3>
                <p className="text-gray-600 mb-4">
                  Possibilité de financement pour la construction et l'exploitation des projets.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="inline-block bg-sidi-blue/5 text-sidi-blue border-sidi-blue/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    500M$ - 2Mds$
                  </span>
                  <span className="inline-block bg-sidi-gold/10 text-sidi-blue border-sidi-gold/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    Financement
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sidi-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-sidi-blue" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-sidi-blue">Partenariats</h3>
                <p className="text-gray-600 mb-4">
                  Possibilité de partenariats avec des entreprises et des organisations internationales.
                </p>              
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="inline-block bg-sidi-blue/5 text-sidi-blue border-sidi-blue/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    500M$ - 2Mds$
                  </span>
                  <span className="inline-block bg-sidi-gold/10 text-sidi-blue border-sidi-gold/20 border px-2.5 py-0.5 text-xs font-semibold rounded-full">
                    Financement
                  </span>
                </div>
              </CardContent>
            </Card>            
          </div>
        </div>
      </section>      
    </>
  )
}