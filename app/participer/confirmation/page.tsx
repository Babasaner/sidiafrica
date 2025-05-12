"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import TicketQRCode from "@/components/ticket-qr-code"

interface TicketData {
  ticketId: string
  ticketType: string
  ticketPrice: number
  purchaseDate: string
  attendee: {
    name: string
    email: string
    company: string
    position: string
  }
}

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const ticketId = searchParams.get("ticketId")
  const [ticketData, setTicketData] = useState<TicketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (ticketId) {
      try {
        // In a real app, this would be an API call to fetch the ticket data
        const storedTicket = localStorage.getItem(`ticket_${ticketId}`)

        if (storedTicket) {
          setTicketData(JSON.parse(storedTicket))
        } else {
          setError("Billet non trouvé. Veuillez contacter le support.")
        }
      } catch (err) {
        setError("Une erreur est survenue lors de la récupération des données du billet.")
      } finally {
        setLoading(false)
      }
    } else {
      setError("Identifiant de billet manquant.")
      setLoading(false)
    }
  }, [ticketId])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-red-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Erreur</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button asChild>
              <Link href="/participer">Retour à la page d'inscription</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg mb-8 flex items-center">
            <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
            <div>
              <h2 className="text-xl font-bold text-green-800">Inscription confirmée !</h2>
              <p className="text-green-700">
                Votre inscription au Forum Économique International de Guinée - Simandou 2040 a été enregistrée avec
                succès.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Votre billet</h2>
            <p className="text-gray-600 mb-6">
              Voici votre billet électronique avec QR code. Veuillez le présenter (imprimé ou sur votre téléphone) à
              l'entrée du salon.
            </p>

            {ticketData && <TicketQRCode ticketData={ticketData} />}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
