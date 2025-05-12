"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CONTACT</h1>
          <p className="text-xl max-w-3xl">
            Contactez-nous pour toute question concernant le Forum Économique International de Guinée - Simandou 2040 ou
            pour discuter des opportunités de partenariat.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">NOUS CONTACTER</h2>
              <p className="text-gray-700 mb-8">
                N'hésitez pas à nous contacter pour toute question ou demande d'information. Notre équipe est à votre
                disposition pour vous aider.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">contact@sidinvest.africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Téléphone</h3>
                    <p className="text-gray-600">+224 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Adresse</h3>
                    <p className="text-gray-600">
                      Noom Hotel
                      <br />
                      Conakry, République de Guinée
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                    Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Votre message"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">LOCALISATION ET POINTS D'INTÉRÊT</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.614153417675!2d-13.6935!3d9.535833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6b1a4f1c0a7%3A0x5f2b40147f499346!2sNoom%20Hotel%20Conakry!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus&markers=color:red%7Clabel:A%7C9.535833,-13.683611&markers=color:blue%7Clabel:B%7C9.538,-13.676&markers=color:green%7Clabel:C%7C9.541,-13.689&markers=color:purple%7Clabel:D%7C9.529,-13.692&markers=color:orange%7Clabel:E%7C9.532,-13.675"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-4">Points d'intérêt</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold">Noom Hotel Conakry</h4>
                      <p className="text-sm text-gray-600">Lieu principal du Forum</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      B
                    </div>
                    <div>
                      <h4 className="font-bold">Aéroport International de Conakry</h4>
                      <p className="text-sm text-gray-600">15 min en voiture (5 km)</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      C
                    </div>
                    <div>
                      <h4 className="font-bold">Centre-ville de Conakry</h4>
                      <p className="text-sm text-gray-600">10 min en voiture (3 km)</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      D
                    </div>
                    <div>
                      <h4 className="font-bold">Port de Conakry</h4>
                      <p className="text-sm text-gray-600">12 min en voiture (4 km)</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      E
                    </div>
                    <div>
                      <h4 className="font-bold">Palais du Peuple</h4>
                      <p className="text-sm text-gray-600">8 min en voiture (2.5 km)</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-bold mb-2">Transport</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Des navettes seront disponibles depuis l'aéroport et les principaux hôtels de la ville.
                  </p>
                  <p className="text-sm text-gray-700">
                    Pour plus d'informations sur les transports, contactez-nous à{" "}
                    <span className="text-primary">transport@sidinvest.africa</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Comment s'y rendre</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                    <circle cx="6.5" cy="16.5" r="2.5"></circle>
                    <circle cx="16.5" cy="16.5" r="2.5"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Depuis l'aéroport</h4>
                  <p className="text-sm text-gray-600">
                    Des taxis sont disponibles à la sortie de l'aéroport. Le trajet dure environ 15 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="8" width="20" height="12" rx="2" ry="2"></rect>
                    <path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"></path>
                    <line x1="2" y1="13" x2="22" y2="13"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Depuis le centre-ville</h4>
                  <p className="text-sm text-gray-600">
                    Des taxis et des services de VTC sont disponibles. Le trajet dure environ 10 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Informations pratiques</h4>
                  <p className="text-sm text-gray-600">
                    Le Noom Hotel dispose d'un parking gratuit pour les participants au forum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
