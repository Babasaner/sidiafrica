import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

export default function ForumGuineePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-secondary mb-4">
            <Link href="/actualites" className="hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Retour aux actualités
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Forum Économique International de Guinée - Simandou 2040
          </h1>
          <div className="flex items-center text-sm gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publié le 15 Mai 2024</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Par Mouhamed FALL AL Amine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/news/forum-guinee-2025.png"
                    alt="Forum Économique International de Guinée"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>Un nouveau forum économique d'envergure internationale</h2>
                <p>
                  Nous sommes heureux d'annoncer l'organisation prochaine du Forum Économique International de Guinée,
                  sous le thème <strong>"Guinée, Terre d'Avenir – Investir dans l'ère Simandou 2040"</strong>.
                </p>

                <p>
                  Cet événement d'envergure, placé sous la haute présidence de Son Excellence Monsieur Amadou Oury BA,
                  Premier Ministre de la République de Guinée, réunira à Conakry plus de 300 invités, dont des
                  représentants de gouvernements, d'institutions financières internationales, des investisseurs, ainsi
                  que 50 entreprises exposantes venues de divers horizons.
                </p>

                <p>
                  Il s'agira d'une plateforme de dialogue stratégique et de promotion des opportunités d'investissement
                  autour du projet Simandou et de ses impacts sur l'économie nationale.
                </p>

                <h2>Objectifs du forum</h2>
                <p>
                  Organisé par Septafrique, structure panafricaine reconnue pour son expertise dans l'organisation
                  d'événements institutionnels à fort impact, ce forum vise à :
                </p>

                <ul>
                  <li>Mobiliser le secteur privé guinéen et international</li>
                  <li>Favoriser les partenariats public-privé</li>
                  <li>Contribuer à la visibilité internationale du programme Simandou 2040</li>
                </ul>

                <h2>Informations pratiques</h2>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-gray-600">05 juillet 2025</p>
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
                      <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Participants</p>
                        <p className="text-gray-600">Plus de 300 invités attendus</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Le Forum Économique International de Guinée - Simandou 2040 s'inscrit dans le cadre de
                  l'accompagnement des grandes ambitions économiques portées par la République de Guinée, notamment à
                  travers la mise en œuvre du programme stratégique Simandou 2040.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/participer">PARTICIPER AU FORUM</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">À propos de l'organisateur</h3>
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image src="/team/mouhamed-fall.jpg" alt="Mouhamed FALL AL Amine" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">Mouhamed FALL AL Amine</h4>
                      <p className="text-sm text-gray-600">Président – Septafrique Group</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Septafrique est une structure panafricaine reconnue pour son expertise dans l'organisation
                    d'événements institutionnels à fort impact.
                  </p>
                </div>

                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Participez au forum</h3>
                  <p className="mb-6">
                    Rejoignez-nous le 05 juillet 2025 au Noom Hotel de Conakry pour découvrir les opportunités
                    d'investissement dans l'ère Simandou 2040.
                  </p>
                  <Button asChild className="w-full bg-secondary text-primary hover:bg-secondary/90">
                    <Link href="/participer">S'INSCRIRE</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
