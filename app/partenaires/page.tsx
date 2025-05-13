import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Globe, Newspaper, Award, Users } from "lucide-react"
import PartnerCard from "@/components/partner-card"
import PartnerTestimonial from "@/components/partner-testimonial"

// Données des partenaires par catégorie
const partners = {
  institutionnels: [
    {
      id: 1,
      name: "Banque Africaine de Développement",
      logo: "/partners/bad.png",
      description: "Institution financière multilatérale de développement",
      website: "https://www.afdb.org/",
    },
    {
      id: 2,
      name: "Ministère de l'Économie du Sénégal",
      logo: "/partners/senegal.png",
      description: "Ministère en charge de l'économie et des finances",
      website: "https://www.finances.gouv.sn/",
    },
    {
      id: 3,
      name: "Agence Française de Développement",
      logo: "/partners/afd.png",
      description: "Institution financière publique française",
      website: "https://www.afd.fr/",
    },
    {
      id: 4,
      name: "APIX Sénégal",
      logo: "/partners/apix.png",
      description: "Agence de Promotion des Investissements et des Grands Travaux",
      website: "https://investinsenegal.com/",
    },
  ],
  sponsors: [
    {
      id: 5,
      name: "Société Générale",
      logo: "/partners/societe-generale.png",
      description: "Groupe bancaire international",
      website: "https://www.societegenerale.com/",
    },
    {
      id: 6,
      name: "Orange",
      logo: "/partners/orange.png",
      description: "Opérateur de télécommunications multinational",
      website: "https://www.orange.com/",
    },
    {
      id: 7,
      name: "Total Energies",
      logo: "/partners/total.png",
      description: "Compagnie multi-énergies mondiale",
      website: "https://totalenergies.com/",
    },
    {
      id: 8,
      name: "Eiffage",
      logo: "/partners/eiffage.png",
      description: "Groupe de construction et de concessions",
      website: "https://www.eiffage.com/",
    },
  ],
  medias: [
    {
      id: 9,
      name: "Radio France Internationale",
      logo: "/partners/rfi.png",
      description: "Radio internationale d'actualité",
      website: "https://www.rfi.fr/",
    },
    {
      id: 10,
      name: "France 24",
      logo: "/partners/france24.png",
      description: "Chaîne d'information internationale",
      website: "https://www.france24.com/",
    },
    {
      id: 11,
      name: "Jeune Afrique",
      logo: "/partners/jeune-afrique.png",
      description: "Magazine panafricain",
      website: "https://www.jeuneafrique.com/",
    },
    {
      id: 12,
      name: "Financial Afrik",
      logo: "/partners/financial-afrik.png",
      description: "Journal économique et financier",
      website: "https://www.financialafrik.com/",
    },
  ],
  techniques: [
    {
      id: 13,
      name: "CEPICI",
      logo: "/partners/cepici.png",
      description: "Centre de Promotion des Investissements en Côte d'Ivoire",
      website: "https://www.cepici.gouv.ci/",
    },
    {
      id: 14,
      name: "BDEAC",
      logo: "/partners/bdeac.png",
      description: "Banque de Développement des États de l'Afrique Centrale",
      website: "https://www.bdeac.org/",
    },
    {
      id: 15,
      name: "ANAPI",
      logo: "/partners/anapi.png",
      description: "Agence Nationale pour la Promotion des Investissements (RDC)",
      website: "https://www.investindrc.cd/",
    },
    {
      id: 16,
      name: "API Mali",
      logo: "/partners/api-mali.png",
      description: "Agence pour la Promotion des Investissements au Mali",
      website: "https://apimali.gov.ml/",
    },
  ],
}

// Témoignages de partenaires
const testimonials = [
  {
    id: 1,
    quote:
      "Le Salon SIDI Invest For Africa est une plateforme exceptionnelle pour présenter les opportunités d'investissement en Afrique. Notre partenariat a été très fructueux et nous a permis d'établir des contacts de qualité.",
    author: "Jean Dupont",
    position: "Directeur des Relations Internationales",
    company: "Banque Africaine de Développement",
    image: "/testimonials/testimonial-1.png",
  },
  {
    id: 2,
    quote:
      "En tant que partenaire média, nous avons pu couvrir des discussions de haut niveau sur l'avenir des infrastructures en Afrique. Le salon offre une visibilité incomparable sur les enjeux du développement du continent.",
    author: "Marie Koné",
    position: "Rédactrice en Chef",
    company: "Financial Afrik",
    image: "/testimonials/testimonial-2.png",
  },
  {
    id: 3,
    quote:
      "Notre participation au Salon SIDI Invest For Africa nous a permis de présenter nos projets d'infrastructure à des investisseurs internationaux. Les retombées ont été immédiates et concrètes.",
    author: "Amadou Diallo",
    position: "Directeur Général",
    company: "APIX Sénégal",
    image: "/testimonials/testimonial-3.png",
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NOS PARTENAIRES</h1>
          <p className="text-xl max-w-3xl">
            Découvrez les institutions, entreprises et médias qui soutiennent le Salon SIDI Invest For Africa et
            contribuent à son succès.
          </p>
        </div>
      </section>

      {/* Partners Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="institutionnels" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="institutionnels" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden md:inline">Partenaires</span> Institutionnels
                </TabsTrigger>
                <TabsTrigger value="sponsors" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden md:inline">Partenaires</span> Sponsors
                </TabsTrigger>
                <TabsTrigger value="medias" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  <span className="hidden md:inline">Partenaires</span> Médias
                </TabsTrigger>
                <TabsTrigger value="techniques" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">Partenaires</span> Techniques
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="institutionnels">
              <h2 className="section-title text-center mx-auto mb-12">PARTENAIRES INSTITUTIONNELS</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partners.institutionnels.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sponsors">
              <h2 className="section-title text-center mx-auto mb-12">PARTENAIRES SPONSORS</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partners.sponsors.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="medias">
              <h2 className="section-title text-center mx-auto mb-12">PARTENAIRES MÉDIAS</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partners.medias.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="techniques">
              <h2 className="section-title text-center mx-auto mb-12">PARTENAIRES TECHNIQUES</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partners.techniques.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">TÉMOIGNAGES DE NOS PARTENAIRES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <PartnerTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">DEVENEZ PARTENAIRE</h2>
                <p className="text-gray-600 mb-6">
                  Rejoignez le réseau de partenaires du Salon SIDI Invest For Africa et bénéficiez d'une visibilité
                  exceptionnelle auprès des acteurs clés du développement des infrastructures en Afrique.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Networking de haut niveau</h3>
                      <p className="text-sm text-gray-600">
                        Rencontrez des décideurs politiques, des investisseurs et des experts du développement africain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                      <Globe className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Visibilité internationale</h3>
                      <p className="text-sm text-gray-600">
                        Bénéficiez d'une exposition médiatique auprès d'un public ciblé et international.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Opportunités de collaboration</h3>
                      <p className="text-sm text-gray-600">
                        Identifiez des opportunités de partenariat et de collaboration avec des acteurs clés.
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">NOUS CONTACTER</Link>
                </Button>
              </div>

              <div className="relative h-64 md:h-auto">
                <Image src="/partners-cta.png" alt="Devenez partenaire" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logos Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-12">ILS NOUS FONT CONFIANCE</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...partners.institutionnels, ...partners.sponsors, ...partners.medias, ...partners.techniques]
              .slice(0, 12)
              .map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
