"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"
import Image from "next/image"

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

interface TicketQRCodeProps {
  ticketData: TicketData
}

export default function TicketQRCode({ ticketData }: TicketQRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      // Create QR code with ticket data
      const qrData = JSON.stringify({
        id: ticketData.ticketId,
        type: ticketData.ticketType,
        name: ticketData.attendee.name,
        email: ticketData.attendee.email,
      })

      QRCode.toCanvas(canvasRef.current, qrData, {
        width: 200,
        margin: 2,
        color: {
          dark: "#000933", // Primary color
          light: "#FFFFFF",
        },
      })
    }
  }, [ticketData])

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = `SIDI-Ticket-${ticketData.ticketId}.png`
      link.href = canvasRef.current.toDataURL("image/png")
      link.click()
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden print:shadow-none" id="ticket-to-print">
        <div className="bg-primary text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Billet d'entrée</h3>
            <p>Forum Économique International de Guinée - Simandou 2040</p>
          </div>
          <Image src="/logo-white.png" alt="SIDI Invest For Africa" width={120} height={40} />
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 flex flex-col items-center">
              <canvas ref={canvasRef} className="mb-2"></canvas>
              <p className="text-xs text-center text-gray-500">ID: {ticketData.ticketId}</p>
            </div>

            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nom</p>
                  <p className="font-bold">{ticketData.attendee.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{ticketData.attendee.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Organisation</p>
                  <p className="font-medium">{ticketData.attendee.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fonction</p>
                  <p className="font-medium">{ticketData.attendee.position}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Type de billet</p>
                    <p className="font-bold">{ticketData.ticketType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prix</p>
                    <p className="font-bold">{ticketData.ticketPrice}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date d'achat</p>
                    <p className="font-medium">{formatDate(ticketData.purchaseDate)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-bold mb-2">Informations importantes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Date de l'événement : 05 juillet 2025</li>
                <li>• Lieu : Noom Hotel, Conakry, Guinée</li>
                <li>• Horaires : 9h00 - 18h00</li>
                <li>• Veuillez présenter ce billet (imprimé ou sur mobile) à l'entrée</li>
                <li>• Thème : "Guinée, Terre d'Avenir – Investir dans l'ère Simandou 2040"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-4 print:hidden">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Télécharger
        </Button>
        <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Imprimer
        </Button>
      </div>
    </div>
  )
}
