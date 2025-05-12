import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Award } from "lucide-react"
import DownloadPDFButton from "@/components/download-pdf-button"
import PanelAccordion from "@/components/panel-accordion"

// Données mises à jour du programme
const scheduleData = [
  {
    time: "09h00",
    activity: "Accueil et enregistrement des participants",
    speakers: [""],
  },
  {
    time: "10h00",
    activity: "Cérémonie d'ouverture",
    speakers: [
      "S.E.M. Amadou Oury BA - Premier Ministre de la République de Guinée",
      "M. Mouhamed FALL AL AMINE - Président Septafrique Group",
      "Représentant du Ministère de l'Économie et des Finances",
    ],
  },
  {
    time: "11h00",
    activity: "Présentation du programme Simandou 2040",
    speakers: ["Ministère des Mines et de la Géologie", "Ministère des Infrastructures et des Transports"],
  },
  {
    time: "12h00",
    activity: "PRÉSENTATION DE L'ENVIRONNEMENT DES AFFAIRES DE LA GUINÉE",
    speakers: [
      "Agence de Promotion des Investissements Privés (APIP)",
      "Chambre de Commerce et d'Industrie de Guinée",
      "Représentants du secteur privé guinéen",
    ],
  },
  {
    time: "13h30",
    activity: "PANEL 1 - INFRASTRUCTURES MINIÈRES ET LOGISTIQUES",
    speakers: [
      "Modérateur: Expert du secteur minier",
      "Représentants des compagnies minières",
      "Experts en logistique et transport",
      "Investisseurs internationaux",
    ],
  },
  {
    time: "15h00",
    activity: "PANEL 2 - FINANCEMENT DES INFRASTRUCTURES",
    speakers: [
      "Modérateur: Expert financier",
      "Représentants d'institutions financières",
      "Experts en partenariats public-privé",
      "Investisseurs institutionnels",
    ],
  },
  {
    time: "16h30",
    activity: "PANEL 3 - DÉVELOPPEMENT DURABLE ET IMPACT SOCIAL",
    speakers: [
      "Modérateur: Expert en développement durable",
      "Représentants des communautés locales",
      "Experts en RSE",
      "ONG et organisations internationales",
    ],
  },
  {
    time: "18h00",
    activity: "Cocktail de networking",
    speakers: ["Tous les participants"],
  },
]

// Panels pour l'affichage détaillé
const panels = [
  {
    id: "panel1",
    title: "PANEL 1 - INFRASTRUCTURES MINIÈRES ET LOGISTIQUES",
    time: "13h30",
    day: "30 Mai 2025",
    moderator: "Expert du secteur minier",
    panelists: [
      "Représentants des compagnies minières",
      "Experts en logistique et transport",
      "Investisseurs internationaux",
    ],
    description:
      "Ce panel abordera les défis et opportunités liés au développement des infrastructures minières et logistiques dans le cadre du projet Simandou. Les discussions porteront sur les besoins en infrastructures, les solutions innovantes et les modèles de financement adaptés.",
  },
  {
    id: "panel2",
    title: "PANEL 2 - FINANCEMENT DES INFRASTRUCTURES",
    time: "15h00",
    day: "30 Mai 2025",
    moderator: "Expert financier",
    panelists: [
      "Représentants d'institutions financières",
      "Experts en partenariats public-privé",
      "Investisseurs institutionnels",
    ],
    description:
      "Ce panel explorera les différentes options de financement pour les projets d'infrastructure liés à Simandou 2040. Les intervenants discuteront des mécanismes de financement innovants, des partenariats public-privé et des stratégies pour attirer les investissements internationaux.",
  },
  {
    id: "panel3",
    title: "PANEL 3 - DÉVELOPPEMENT DURABLE ET IMPACT SOCIAL",
    time: "16h30",
    day: "30 Mai 2025",
    moderator: "Expert en développement durable",
    panelists: ["Représentants des communautés locales", "Experts en RSE", "ONG et organisations internationales"],
    description:
      "Ce panel se concentrera sur les aspects sociaux et environnementaux du programme Simandou 2040. Les discussions porteront sur les stratégies pour maximiser les retombées positives pour les communautés locales, minimiser l'impact environnemental et assurer un développement durable et inclusif.",
  },
]

export default function ProgrammePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PROGRAMME</h1>
          <p className="text-xl max-w-3xl mb-6">
            Découvrez le programme détaillé du Forum Économique International de Guinée - Simandou 2040 qui se tiendra
            le 30 mai 2025 au Noom Hotel de Conakry.
          </p>
          <DownloadPDFButton
            scheduleData={scheduleData}
            eventTitle="Forum Économique International de Guinée - Simandou 2040"
            eventDate="30 Mai 2025"
            eventLocation="Noom Hotel, Conakry, Guinée"
            variant="secondary"
            className="text-primary"
          />
        </div>
      </section>

      {/* Programme Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="section-title">PROGRAMME</h2>
                <p className="text-lg mb-8">30 Mai 2025</p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span className="text-xl font-bold">Planning</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex">
                        <span className="font-bold text-primary w-16">09h00</span>
                        <span>Accueil</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">10h00</span>
                        <span>Cérémonie d'ouverture</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">11h00</span>
                        <span>Présentation Simandou 2040</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">12h00</span>
                        <span>Environnement des affaires</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">13h30</span>
                        <span>Panel 1: Infrastructures</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">15h00</span>
                        <span>Panel 2: Financement</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">16h30</span>
                        <span>Panel 3: Développement durable</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-primary w-16">18h00</span>
                        <span>Cocktail de networking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-primary mr-2" />
                      <span className="text-xl font-bold">Invité d'honneur</span>
                    </div>
                    <ul className="space-y-4">
                      <li>
                        <p className="font-bold">S.E.M. Amadou Oury BA</p>
                        <p className="text-gray-600 text-sm">Premier Ministre de la République de Guinée</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/participer">PARTICIPER AU FORUM</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="section-title">PANELS DÉTAILLÉS</h2>
              <p className="text-lg mb-8">
                Découvrez les panels thématiques qui seront présentés lors du Forum Économique International de Guinée -
                Simandou 2040.
              </p>

              <div className="space-y-6">
                {panels.map((panel) => (
                  <PanelAccordion key={panel.id} panel={panel} />
                ))}
              </div>

              <h2 className="section-title mt-16">PRÉSENTATION SPÉCIALE</h2>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">PRÉSENTATION DU PROGRAMME SIMANDOU 2040</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Horaire:</span> 11h00
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Intervenants:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Ministère des Mines et de la Géologie</li>
                    <li>Ministère des Infrastructures et des Transports</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Cette présentation spéciale mettra en lumière les objectifs, les composantes et les opportunités du
                  programme stratégique Simandou 2040, un projet majeur pour le développement économique de la Guinée.
                </p>
              </div>

              <div className="mt-12 text-center">
                <DownloadPDFButton
                  scheduleData={scheduleData}
                  eventTitle="Forum Économique International de Guinée - Simandou 2040"
                  eventDate="30 Mai 2025"
                  eventLocation="Noom Hotel, Conakry, Guinée"
                  className="mb-4"
                />
                <div className="mt-4">
                  <Button asChild className="bg-secondary text-primary hover:bg-secondary/90">
                    <Link href="/participer">PARTICIPER AU FORUM</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Schedule Section */}
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programme Mobile</h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold text-lg text-primary mb-2">09h00</div>
              <div className="font-medium mb-1">Accueil et enregistrement des participants</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold text-lg text-primary mb-2">10h00</div>
              <div className="font-medium mb-1">Cérémonie d'ouverture</div>
              <div className="text-sm text-gray-600 mt-2">
                <div className="font-medium">Intervenants:</div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>S.E.M. Amadou Oury BA</li>
                  <li>M. Mouhamed FALL AL AMINE</li>
                  <li>Représentant du Ministère de l'Économie et des Finances</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold text-lg text-primary mb-2">11h00</div>
              <div className="font-medium mb-1">Présentation du programme Simandou 2040</div>
              <div className="text-sm text-gray-600 mt-2">
                <div className="font-medium">Intervenants:</div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Ministère des Mines et de la Géologie</li>
                  <li>Ministère des Infrastructures et des Transports</li>
                </ul>
              </div>
            </div>

            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="#more">VOIR PLUS</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
