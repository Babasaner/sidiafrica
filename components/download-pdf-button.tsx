"use client"

import jsPDF from "jspdf"
import "jspdf-autotable"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { Download } from "lucide-react"

interface ScheduleItem {
  time: string
  activity: string
  speakers: string[]
}

interface DownloadPDFButtonProps {
  scheduleData: ScheduleItem[]
  eventTitle: string
  eventDate: string
  eventLocation: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function DownloadPDFButton({
  scheduleData,
  eventTitle,
  eventDate,
  eventLocation,
  className,
  variant = "default",
}: DownloadPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Create a new PDF document
      const doc = new jsPDF()

      // Set document properties
      doc.setProperties({
        title: `Programme_${eventTitle.replace(/\s+/g, "_")}`,
        subject: "Programme de l'événement",
        author: "SIDI Invest For Africa",
        keywords: "programme, événement, SIDI, Invest, Africa",
      })

      // Add logo
      // We need to convert the logo to a data URL
      const logoImg = new Image()
      logoImg.src = "/logo.png"

      // Wait for the image to load
      await new Promise((resolve) => {
        logoImg.onload = resolve
      })

      // Create a canvas to draw the image
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      canvas.width = logoImg.width
      canvas.height = logoImg.height
      ctx?.drawImage(logoImg, 0, 0)

      // Get the data URL
      const logoDataUrl = canvas.toDataURL("image/png")

      // Add the logo to the PDF
      doc.addImage(logoDataUrl, "PNG", 14, 10, 80, 30)

      // Add title
      doc.setFontSize(18)
      doc.setTextColor(0, 32, 96) // Primary color
      doc.text(eventTitle, 14, 50)

      // Add event details
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0) // Black
      doc.text(`Date: ${eventDate}`, 14, 60)
      doc.text(`Lieu: ${eventLocation.replace("Conakry, Guinée", "Noom Hotel, Conakry, Guinée")}`, 14, 66)

      // Add a line
      doc.setDrawColor(0, 32, 96) // Primary color
      doc.setLineWidth(0.5)
      doc.line(14, 70, 196, 70)

      // Add program title
      doc.setFontSize(16)
      doc.setTextColor(0, 32, 96) // Primary color
      doc.text("PROGRAMME", 14, 80)

      // Prepare table data
      const tableColumn = ["Heure", "Activité", "Intervenants"]
      const tableRows: string[][] = []

      scheduleData.forEach((item) => {
        tableRows.push([item.time, item.activity, item.speakers.join("\n")])
      })

      // Add table
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 85,
        headStyles: {
          fillColor: [0, 32, 96], // Primary color
          textColor: [255, 255, 255], // White
          fontStyle: "bold",
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240], // Light gray
        },
        styles: {
          fontSize: 10,
        },
      })

      // Add footer
      const pageCount = doc.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFontSize(10)
        doc.setTextColor(100, 100, 100) // Gray
        doc.text(
          `© ${new Date().getFullYear()} SIDI Invest For Africa - Page ${i} sur ${pageCount}`,
          14,
          doc.internal.pageSize.height - 10,
        )
      }

      // Save the PDF
      doc.save(`Programme_${eventTitle.replace(/\s+/g, "_")}.pdf`)

      // Show success toast
      toast({
        title: "PDF généré avec succès",
        description: "Le programme a été téléchargé sur votre appareil.",
        variant: "success",
      })
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la génération du PDF.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button variant={variant} className={cn("w-fit", className)} onClick={generatePDF} disabled={isGenerating}>
      {isGenerating ? (
        "Génération..."
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" /> Télécharger le programme
        </>
      )}
    </Button>
  )
}
