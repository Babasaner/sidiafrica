"use client"

import { useState } from "react"
import TicketOption from "@/components/ticket-option"
import RegistrationForm from "@/components/registration-form"
import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ParticipatePage() {
  const [selectedTicket, setSelectedTicket] = useState<{
    type: string
    price: number
  } | null>(null)

  const ticketOptions = [
    {
      title: "PACK 300€",
      price: 300,
      features: ["Participant simple", "Visite des Stands", "Accès au Panel"],
      isVip: false,
    },
    {
      title: "PACK 1000€",
      price: 1000,
      features: ["Participant VVIP", "Visite des Stands", "Logo", "Accès aux Panélistes", "Cocktail", "B2B"],
      isVvip: true,
    },
    {
      title: "PACK 500€",
      price: 500,
      features: ["Participant VIP", "Visite des Stands", "Accès au Panel"],
      isVip: true,
    },
  ]

  const handleSelectTicket = (type: string, price: number) => {
    setSelectedTicket({ type, price })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCancelRegistration = () => {
    setSelectedTicket(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PARTICIPER AU FORUM</h1>
          <p className="text-xl max-w-3xl">
            Inscrivez-vous pour participer au Forum Économique International de Guinée - Simandou 2040 et découvrez les
            opportunités d'investissement dans l'ère Simandou.
          </p>
        </div>
      </section>

      {/* Registration Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {selectedTicket ? (
            <RegistrationForm
              ticketType={selectedTicket.type}
              ticketPrice={selectedTicket.price}
              onCancel={handleCancelRegistration}
            />
          ) : (
            <>
              <h2 className="section-title text-center mx-auto mb-12">CHOISISSEZ VOTRE BILLET</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {ticketOptions.map((option, index) => (
                  <TicketOption
                    key={index}
                    title={option.title}
                    price={option.price}
                    features={option.features}
                    isVip={option.isVip}
                    isVvip={option.isVvip}
                    onSelect={() => handleSelectTicket(option.title, option.price)}
                  />
                ))}
              </div>

              <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Informations importantes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      Les billets sont nominatifs et non remboursables. Ils donnent accès au forum le 28 juin 2025 au
                      Noom Hotel de Conakry.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      Après votre inscription, vous recevrez un QR code à présenter à l'entrée du salon pour accéder à
                      l'événement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>Le billet VIP vous donne un accès privilégié aux panels et aux espaces de networking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      Le billet VVIP inclut tous les avantages du billet VIP, plus l'accès aux cocktails exclusifs et
                      aux sessions B2B avec les intervenants.
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Informations sur le lieu */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">INFORMATIONS SUR LE LIEU</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-4">Noom Hotel Conakry</h3>

                <p className="text-gray-700 mb-4">
                  Le Forum Économique International de Guinée - Simandou 2040 se tiendra au Noom Hotel, l'un des
                  établissements les plus prestigieux de Conakry, offrant un cadre idéal pour cet événement d'envergure
                  internationale.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <p className="text-gray-700">Kaloum, Conakry, République de Guinée</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <p className="text-gray-700">+224 XX XX XX XX</p>
                  </div>
                </div>

                <h4 className="font-bold mb-2">Commodités</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Salles de conférence modernes</li>
                  <li>Équipement audiovisuel de pointe</li>
                  <li>Restauration de qualité</li>
                  <li>Wi-Fi haut débit</li>
                  <li>Service de traduction</li>
                </ul>

                <h4 className="font-bold mb-2">Hébergement</h4>
                <p className="text-gray-700 mb-4">
                  Des chambres ont été pré-réservées à des tarifs préférentiels pour les participants au forum. Pour
                  bénéficier de ces tarifs, veuillez mentionner le code "SIMANDOU2040" lors de votre réservation.
                </p>

                <Button variant="outline" className="mt-2">
                  Réserver une chambre
                </Button>
              </div>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-lg h-[300px] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6534383542193!2d-13.683611!3d9.535833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6b1a4f1c0a7%3A0x5f2b40147f499346!2sNoom%20Hotel%20Conakry!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Transport et accès</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Depuis l'aéroport</h4>
                    <p className="text-gray-700">
                      L'aéroport international de Conakry se trouve à environ 5 km du Noom Hotel. Des taxis et services
                      de navette sont disponibles.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold">Navettes du forum</h4>
                    <p className="text-gray-700">
                      Des navettes gratuites seront mises à disposition des participants depuis les principaux hôtels de
                      la ville et l'aéroport. Les horaires seront communiqués par email avant l'événement.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold">Stationnement</h4>
                    <p className="text-gray-700">
                      Le Noom Hotel dispose d'un parking gratuit pour les participants au forum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
