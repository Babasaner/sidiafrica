"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Landmark, LightbulbIcon, LineChart, Truck } from "lucide-react"
import { Clock, Award } from "lucide-react"
import PanelAccordion from "@/components/panel-accordion"
import SimpleCalendar from "@/components/simple-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgrammePage() {
  // Données du programme
  const panels = [
    {
      id: "panel1",
      title: "Panel 1 : Le programme Simandou 2040 : moteur de transformation économique",
      description:
        "Ce panel explorera l'impact structurant du projet Simandou sur l'économie guinéenne et les opportunités de développement qu'il génère dans différents secteurs.",
      icon: <LineChart className="w-12 h-12" />,
      time: "10h30",
      day: "05 juillet 2025",
      moderator: "Expert du secteur minier",
      panelists: [
        "Représentant du Ministère des Mines",
        "Directeur du programme Simandou",
        "Expert en développement économique",
      ],
    },
    {
      id: "panel2",
      title: "Panel 2 : Infrastructures et logistique : leviers pour l'attractivité des investissements",
      description: "Discussion sur les projets d'infrastructures ferroviaires, portuaires et routières",
      icon: <Building2 className="w-12 h-12" />,
      time: "11h30",
      day: "05 juillet 2025",
      moderator: "Expert en infrastructures",
      panelists: ["Ministre des Infrastructures", "Directeur des grands projets", "Représentant du secteur privé"],
    },
    {
      id: "panel3",
      title: "Panel 3 : Financements innovants et Partenariats Public-Privé (PPP)",
      description:
        "Ce panel se penchera sur les mécanismes de financement innovants et les modèles de PPP qui peuvent catalyser le développement des infrastructures en Guinée.",
      icon: <Landmark className="w-12 h-12" />,
      time: "14h00",
      day: "05 juillet 2025",
      moderator: "Expert financier",
      panelists: [
        "Représentant de la Banque Africaine de Développement",
        "Directeur des partenariats public-privé",
        "Investisseur international",
      ],
    },
    {
      id: "panel4",
      title: "Panel 4 : Secteur privé guinéen : rôle, défis et perspectives",
      description:
        "Ce panel mettra en lumière le rôle crucial du secteur privé guinéen dans le développement économique du pays, en explorant les défis auxquels il est confronté et les opportunités offertes par le programme Simandou 2040.",
      icon: <LightbulbIcon className="w-12 h-12" />,
      time: "15h30",
      day: "05 juillet 2025",
      moderator: "Représentant du patronat guinéen",
      panelists: [
        "Président de la Chambre de Commerce",
        "Chef d'entreprise guinéen",
        "Expert en développement du secteur privé",
      ],
    },
    {
      id: "panel5",
      title: "Panel 5 : Zones industrielles, énergie et transition vers une économie durable",
      description:
        "Ce panel abordera les questions liées au développement des zones industrielles, à l'approvisionnement énergétique et à la transition vers une économie durable.",
      icon: <Truck className="w-12 h-12" />,
      time: "17h00",
      day: "05 juillet 2025",
      moderator: "Expert en développement durable",
      panelists: ["Ministre de l'Énergie", "Directeur des zones industrielles", "Expert en transition énergétique"],
    },
  ]

  const scheduleData = [
    {
      time: "09h00",
      activity: "Accueil et enregistrement des participants",
      speakers: [""],
    },
    {
      time: "10h00",
      activity: "Conférence inaugurale",
      speakers: [
        "S.E.M. Amadou Oury BA - Premier Ministre de la République de Guinée",
        "M. Mouhamed FALL AL AMINE - Président Septafrique Group",
        "Représentant du Ministère de l'Économie et des Finances",
      ],
    },
    {
      time: "10h30",
      activity: "PANEL 1 - LE PROGRAMME SIMANDOU 2040 : MOTEUR DE TRANSFORMATION ÉCONOMIQUE",
      speakers: [
        "Modérateur: Expert du secteur minier",
        "Représentant du Ministère des Mines",
        "Directeur du programme Simandou",
        "Expert en développement économique",
      ],
    },
    {
      time: "11h30",
      activity: "PANEL 2 - INFRASTRUCTURES ET LOGISTIQUE : LEVIERS POUR L'ATTRACTIVITÉ DES INVESTISSEMENTS",
      speakers: [
        "Modérateur: Expert en infrastructures",
        "Ministre des Infrastructures",
        "Directeur des grands projets",
        "Représentant du secteur privé",
      ],
    },
    {
      time: "13h00",
      activity: "Déjeuner networking",
      speakers: ["Tous les participants"],
    },
    {
      time: "14h00",
      activity: "PANEL 3 - FINANCEMENTS INNOVANTS ET PARTENARIATS PUBLIC-PRIVÉ",
      speakers: [
        "Modérateur: Expert financier",
        "Représentant de la Banque Africaine de Développement",
        "Directeur des partenariats public-privé",
        "Investisseur international",
      ],
    },
    {
      time: "15h30",
      activity: "PANEL 4 - SECTEUR PRIVÉ GUINÉEN : RÔLE, DÉFIS ET PERSPECTIVES",
      speakers: [
        "Modérateur: Représentant du patronat guinéen",
        "Président de la Chambre de Commerce",
        "Chef d'entreprise guinéen",
        "Expert en développement du secteur privé",
      ],
    },
    {
      time: "17h00",
      activity: "PANEL 5 - ZONES INDUSTRIELLES, ÉNERGIE ET TRANSITION VERS UNE ÉCONOMIE DURABLE",
      speakers: [
        "Modérateur: Expert en développement durable",
        "Ministre de l'Énergie",
        "Directeur des zones industrielles",
        "Expert en transition énergétique",
      ],
    },
    {
      time: "18h30",
      activity: "Cocktail de clôture et networking",
      speakers: ["Tous les participants"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-sidi-blue text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PROGRAMME</h1>
          <p className="text-xl max-w-3xl mb-6">
            Découvrez le programme détaillé du Salon Guinée Invest qui se tiendra le 05 juillet 2025 à l'hôtel NOOM de
            Conakry.
          </p>
        </div>
      </section>

      {/* Programme Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="liste" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="liste">Vue Liste</TabsTrigger>
              <TabsTrigger value="calendrier">Vue Calendrier</TabsTrigger>
            </TabsList>

            <TabsContent value="liste">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="section-title">PROGRAMME</h2>
                    <p className="text-lg mb-8">05 juillet 2025</p>

                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <Clock className="w-5 h-5 text-sidi-blue mr-2" />
                          <span className="text-xl font-bold">Planning</span>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">09h00</span>
                            <span>Accueil</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">10h00</span>
                            <span>Conférence inaugurale</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">10h30</span>
                            <span>Panel 1: Simandou 2040</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">11h30</span>
                            <span>Panel 2: Infrastructures</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">13h00</span>
                            <span>Déjeuner networking</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">14h00</span>
                            <span>Panel 3: Financements</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">15h30</span>
                            <span>Panel 4: Secteur privé</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">17h00</span>
                            <span>Panel 5: Zones industrielles</span>
                          </li>
                          <li className="flex">
                            <span className="font-bold text-sidi-blue w-16">18h30</span>
                            <span>Cocktail de clôture</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                          <Award className="w-5 h-5 text-sidi-blue mr-2" />
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
                      <Button asChild className="w-full bg-sidi-blue hover:bg-sidi-light-blue text-white">
                        <Link href="/contact">PARTICIPER AU SALON</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="section-title">PANELS DÉTAILLÉS</h2>
                  <p className="text-lg mb-8">
                    Découvrez les panels thématiques qui seront présentés lors du Salon Guinée Invest.
                  </p>

                  <div className="space-y-6">
                    {panels.map((panel) => (
                      <PanelAccordion key={panel.id} panel={panel} />
                    ))}
                  </div>

                  <h2 className="section-title mt-16">CONFÉRENCE INAUGURALE</h2>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-8">
                    <h3 className="text-xl font-bold text-sidi-blue mb-4">CONFÉRENCE INAUGURALE</h3>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Horaire:</span> 10h00
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Intervenants:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>S.E.M. Amadou Oury BA - Premier Ministre de la République de Guinée</li>
                        <li>M. Mouhamed FALL AL AMINE - Président Septafrique Group</li>
                        <li>Représentant du Ministère de l'Économie et des Finances</li>
                      </ul>
                    </div>
                    <p className="text-gray-700">
                      Une session solennelle en présence de hauts responsables gouvernementaux, d'institutions
                      financières, de diplomates et d'investisseurs.
                    </p>
                  </div>

                  <div className="mt-12 text-center">
                    <div className="mt-4">
                      <Button asChild className="bg-sidi-gold text-sidi-dark hover:bg-sidi-gold/90">
                        <Link href="/contact">PARTICIPER AU SALON</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendrier">
              <div className="max-w-5xl mx-auto">
                <h2 className="section-title">CALENDRIER INTERACTIF</h2>
                <p className="text-lg mb-8">
                  Consultez le programme complet du Salon Guinée Invest dans ce calendrier interactif. Cliquez sur un
                  événement pour voir tous les détails.
                </p>

                <SimpleCalendar />

                <div className="mt-12 text-center">
                  <Button asChild className="bg-sidi-gold text-sidi-dark hover:bg-sidi-gold/90">
                    <Link href="/contact">PARTICIPER AU SALON</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mobile Schedule Section */}
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programme Mobile</h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold text-lg text-sidi-blue mb-2">09h00</div>
              <div className="font-medium mb-1">Accueil et enregistrement des participants</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold text-lg text-sidi-blue mb-2">10h00</div>
              <div className="font-medium mb-1">Conférence inaugurale</div>
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
              <div className="font-bold text-lg text-sidi-blue mb-2">10h30</div>
              <div className="font-medium mb-1">Panel 1: Le programme Simandou 2040</div>
              <div className="text-sm text-gray-600 mt-2">
                <div className="font-medium">Intervenants:</div>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Modérateur: Expert du secteur minier</li>
                  <li>Représentant du Ministère des Mines</li>
                  <li>Directeur du programme Simandou</li>
                </ul>
              </div>
            </div>

            <Button asChild className="w-full bg-sidi-blue hover:bg-sidi-light-blue text-white">
              <Link href="#more">VOIR PLUS</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
