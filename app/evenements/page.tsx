import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ÉVÉNEMENTS</h1>
          <p className="text-xl max-w-3xl">
            Découvrez les événements organisés pour promouvoir les investissements et le développement des
            infrastructures en Afrique.
          </p>
        </div>
      </section>

      {/* Main Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ÉVÉNEMENT PRINCIPAL</h2>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mt-12">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/event-main.png"
                  alt="Forum Économique International de Guinée - Simandou 2040"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:hidden">
                  <h3 className="text-2xl font-bold text-white">
                    Forum Économique International de Guinée - Simandou 2040
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 hidden md:block">
                  Forum Économique International de Guinée - Simandou 2040
                </h3>
                <p className="text-gray-600 mb-6">
                  Le Forum Économique International de Guinée - Simandou 2040 est l'événement incontournable pour tous
                  les acteurs impliqués dans le développement des infrastructures en Afrique. Rejoignez-nous pour une
                  journée de conférences, panels, networking et découvertes des opportunités d'investissement dans le
                  cadre du programme stratégique Simandou 2040.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">30 Mai 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Lieu</p>
                      <p className="text-gray-600">Noom Hotel, Conakry, Guinée</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-gray-600">09h00 - 18h00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Participants</p>
                      <p className="text-gray-600">300+ attendus</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/programme">VOIR LE PROGRAMME</Link>
                  </Button>
                  <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                    <Link href="/participer">PARTICIPER</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">ÉVÉNEMENTS PASSÉS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image src="/event-past-1.png" alt="Forum des investisseurs 2023" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Forum des investisseurs 2023</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>10-11 Octobre 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Le Forum des investisseurs 2023 a réuni plus de 300 participants à Dakar pour discuter des
                  opportunités d'investissement dans les infrastructures en Afrique de l'Ouest.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/event-past-2.png"
                  alt="Conférence sur les infrastructures numériques"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Conférence sur les infrastructures numériques</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>15 Mai 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Cette conférence a exploré les défis et opportunités liés au développement des infrastructures
                  numériques en Afrique, avec un focus sur la connectivité et l'inclusion digitale.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/event-past-3.png"
                  alt="Atelier sur le financement des projets d'infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Atelier sur le financement des projets d'infrastructure</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>22-23 Février 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Cet atelier a réuni des experts financiers et des porteurs de projets pour discuter des mécanismes de
                  financement innovants pour les infrastructures en Afrique.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Participez au prochain événement</h2>
          <p className="text-xl md:max-w-2xl mx-auto mb-8">
            Ne manquez pas le Forum Économique International de Guinée - Simandou 2040 au Noom Hotel de Conakry,
            l'événement incontournable pour tous les acteurs du développement des infrastructures en Afrique.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">PARTICIPER AU FORUM</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
