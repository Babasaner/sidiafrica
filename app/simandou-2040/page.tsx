import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mountain, TrendingUp, Train, Building, Users, Globe, Leaf, DollarSign, Clock } from "lucide-react"
import ProjectTimeline from "@/components/project-timeline"
import InvestmentOpportunityCard from "@/components/investment-opportunity-card"
import CountUp from "@/components/count-up"
// Ajouter l'import pour le composant TestimonialCarousel
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Simandou2040Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PROGRAMME SIMANDOU 2040</h1>
          <p className="text-xl max-w-3xl mb-8">
            Découvrez le programme stratégique qui transformera l'économie guinéenne et créera un pôle de développement
            majeur en Afrique de l'Ouest.
          </p>
          <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">PARTICIPER AU FORUM</Link>
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
              <Image
                src="/simandou/simandou-map.png"
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
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={2} />
                Mds
              </p>
              <p className="text-gray-600 mt-2">Tonnes de minerai de fer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={670} />
                km
              </p>
              <p className="text-gray-600 mt-2">De chemin de fer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <CountUp end={15} />
                Mds$
              </p>
              <p className="text-gray-600 mt-2">D'investissement total</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary">
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

          <Tabs defaultValue="mining" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="mining" className="flex items-center gap-2">
                  <Mountain className="h-4 w-4" />
                  <span>Exploitation Minière</span>
                </TabsTrigger>
                <TabsTrigger value="infrastructure" className="flex items-center gap-2">
                  <Train className="h-4 w-4" />
                  <span>Infrastructures</span>
                </TabsTrigger>
                <TabsTrigger value="economic" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Développement Économique</span>
                </TabsTrigger>
                <TabsTrigger value="sustainable" className="flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  <span>Développement Durable</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mining">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/simandou/mining-operations.png"
                    alt="Opérations minières à Simandou"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Exploitation Minière</h3>
                  <p className="text-gray-700 mb-4">
                    Le gisement de Simandou contient plus de 2 milliards de tonnes de minerai de fer de haute qualité,
                    avec une teneur moyenne supérieure à 65%. Cette qualité exceptionnelle en fait une ressource
                    stratégique dans un contexte mondial où la demande pour des minerais à faible empreinte carbone est
                    croissante.
                  </p>
                  <p className="text-gray-700 mb-4">Le projet minier est divisé en quatre blocs :</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>
                        <strong>Blocs 1 & 2 (Nord)</strong> : Développés par le consortium SMB-Winning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
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
            </TabsContent>

            <TabsContent value="infrastructure">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Infrastructures</h3>
                  <p className="text-gray-700 mb-4">
                    Le programme Simandou 2040 comprend le développement d'infrastructures majeures qui bénéficieront
                    bien au-delà du secteur minier :
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Train className="w-5 h-5 text-primary" />
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
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Building className="w-5 h-5 text-primary" />
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
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Globe className="w-5 h-5 text-primary" />
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
                    src="/simandou/railway-construction.png"
                    alt="Construction du chemin de fer transguinéen"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="economic">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/simandou/economic-development.png"
                    alt="Développement économique en Guinée"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Développement Économique</h3>
                  <p className="text-gray-700 mb-4">
                    Simandou 2040 vise à créer un véritable corridor de développement économique le long du tracé
                    ferroviaire, avec :
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Création de plus de 45 000 emplois directs et indirects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Développement de zones économiques spéciales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Émergence d'industries de transformation locale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Renforcement du secteur agricole grâce à un meilleur accès aux marchés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Augmentation significative des recettes fiscales de l'État</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Le programme devrait contribuer à une augmentation du PIB guinéen de plus de 15% à terme,
                    transformant fondamentalement l'économie du pays.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sustainable">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Développement Durable</h3>
                  <p className="text-gray-700 mb-4">
                    Le programme Simandou 2040 intègre des principes de développement durable à tous les niveaux :
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Leaf className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Protection environnementale</strong>
                        <p className="text-gray-600">
                          Mise en œuvre de normes environnementales strictes, programmes de reboisement et protection de
                          la biodiversité.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Développement communautaire</strong>
                        <p className="text-gray-600">
                          Investissements dans l'éducation, la santé et les infrastructures sociales pour les
                          communautés locales.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Transfert de compétences</strong>
                        <p className="text-gray-600">
                          Programmes de formation et de développement des compétences pour maximiser l'emploi local.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    L'objectif est de faire de Simandou un modèle de développement minier responsable, créant de la
                    valeur partagée pour toutes les parties prenantes.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/simandou/sustainable-development.png"
                    alt="Initiatives de développement durable"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">CHRONOLOGIE DU PROJET</h2>

          <ProjectTimeline />
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">OPPORTUNITÉS D'INVESTISSEMENT</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InvestmentOpportunityCard
              title="Infrastructure ferroviaire"
              description="Opportunités dans la construction et la maintenance du réseau ferroviaire transguinéen."
              icon={<Train className="w-8 h-8 text-primary" />}
              investmentRange="500M$ - 2Mds$"
              sector="Transport"
            />

            <InvestmentOpportunityCard
              title="Infrastructures portuaires"
              description="Développement et exploitation des installations portuaires en eau profonde."
              icon={<Building className="w-8 h-8 text-primary" />}
              investmentRange="300M$ - 1Md$"
              sector="Maritime"
            />

            <InvestmentOpportunityCard
              title="Énergie"
              description="Production et distribution d'électricité pour alimenter le projet et les communautés environnantes."
              icon={<Globe className="w-8 h-8 text-primary" />}
              investmentRange="200M$ - 800M$"
              sector="Énergie"
            />

            <InvestmentOpportunityCard
              title="Transformation du minerai"
              description="Installations de traitement et de valorisation du minerai de fer en Guinée."
              icon={<Mountain className="w-8 h-8 text-primary" />}
              investmentRange="1Md$ - 3Mds$"
              sector="Industrie"
            />

            <InvestmentOpportunityCard
              title="Services logistiques"
              description="Services de logistique, de transport et de manutention pour soutenir les opérations."
              icon={<Clock className="w-8 h-8 text-primary" />}
              investmentRange="50M$ - 200M$"
              sector="Logistique"
            />

            <InvestmentOpportunityCard
              title="Développement urbain"
              description="Projets immobiliers et d'infrastructures urbaines le long du corridor de développement."
              icon={<Users className="w-8 h-8 text-primary" />}
              investmentRange="100M$ - 500M$"
              sector="Immobilier"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/participer">EXPLORER LES OPPORTUNITÉS AU FORUM</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">PARTENAIRES DU PROJET</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/simandou/partners/guinea-gov.png"
                    alt="Gouvernement de la République de Guinée"
                    width={120}
                    height={80}
                    className="max-h-full w-auto"
                  />
                </div>
                <h3 className="text-center font-bold">Gouvernement de la République de Guinée</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/simandou/partners/rio-tinto.png"
                    alt="Rio Tinto"
                    width={120}
                    height={80}
                    className="max-h-full w-auto"
                  />
                </div>
                <h3 className="text-center font-bold">Rio Tinto</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/simandou/partners/chinalco.png"
                    alt="Chinalco"
                    width={120}
                    height={80}
                    className="max-h-full w-auto"
                  />
                </div>
                <h3 className="text-center font-bold">Chinalco</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/simandou/partners/winning.png"
                    alt="SMB-Winning Consortium"
                    width={120}
                    height={80}
                    className="max-h-full w-auto"
                  />
                </div>
                <h3 className="text-center font-bold">SMB-Winning Consortium</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-16">TÉMOIGNAGES ET IMPACT</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Découvrez comment le programme Simandou 2040 transforme déjà la vie des communautés locales, crée des
            opportunités économiques et contribue au développement durable de la Guinée.
          </p>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participez au Forum Économique International de Guinée - Simandou 2040
          </h2>
          <p className="text-xl md:max-w-2xl mx-auto mb-8">
            Rejoignez-nous le 30 mai 2025 au Noom Hotel de Conakry pour découvrir en détail les opportunités
            d'investissement dans le cadre du programme Simandou 2040.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">RÉSERVER VOTRE PLACE</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
