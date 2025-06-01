"use client"

import { useState, useEffect } from "react"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import frLocale from "@fullcalendar/core/locales/fr"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, User } from "lucide-react"

// Types pour les événements
interface EventType {
  id: string
  title: string
  start: string
  end: string
  description: string
  location: string
  type: "panel" | "conference" | "networking" | "registration" | "break"
  speakers: string[]
  moderator?: string
  color?: string
}

export default function InteractiveCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Détecter si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Date du salon: 28 juin2025
  const eventDate = "2025-05-30"

  // Événements du programme
  const events: EventType[] = [
    {
      id: "1",
      title: "Accueil et enregistrement",
      start: `${eventDate}T09:00:00`,
      end: `${eventDate}T10:00:00`,
      description: "Accueil et enregistrement des participants",
      location: "Hall d'entrée, Hôtel NOOM",
      type: "registration",
      speakers: [],
      color: "#4CAF50", // vert
    },
    {
      id: "2",
      title: "Conférence inaugurale",
      start: `${eventDate}T10:00:00`,
      end: `${eventDate}T10:30:00`,
      description:
        "Session solennelle en présence de hauts responsables gouvernementaux, d'institutions financières, de diplomates et d'investisseurs.",
      location: "Salle principale, Hôtel NOOM",
      type: "conference",
      speakers: [
        "S.E.M. Amadou Oury BA - Premier Ministre de la République de Guinée",
        "M. Mouhamed FALL AL AMINE - Président Septafrique Group",
        "Représentant du Ministère de l'Économie et des Finances",
      ],
      color: "#E91E63", // rose
    },
    {
      id: "3",
      title: "Panel 1: Le programme Simandou 2040",
      start: `${eventDate}T10:30:00`,
      end: `${eventDate}T11:30:00`,
      description:
        "Ce panel explorera l'impact structurant du projet Simandou sur l'économie guinéenne et les opportunités de développement qu'il génère dans différents secteurs.",
      location: "Salle principale, Hôtel NOOM",
      type: "panel",
      moderator: "Expert du secteur minier",
      speakers: [
        "Représentant du Ministère des Mines",
        "Directeur du programme Simandou",
        "Expert en développement économique",
      ],
      color: "#2196F3", // bleu
    },
    {
      id: "4",
      title: "Panel 2: Infrastructures et logistique",
      start: `${eventDate}T11:30:00`,
      end: `${eventDate}T13:00:00`,
      description:
        "Discussion sur les projets d'infrastructures ferroviaires, portuaires et routières qui sont des leviers pour l'attractivité des investissements.",
      location: "Salle principale, Hôtel NOOM",
      type: "panel",
      moderator: "Expert en infrastructures",
      speakers: ["Ministre des Infrastructures", "Directeur des grands projets", "Représentant du secteur privé"],
      color: "#2196F3", // bleu
    },
    {
      id: "5",
      title: "Déjeuner networking",
      start: `${eventDate}T13:00:00`,
      end: `${eventDate}T14:00:00`,
      description: "Pause déjeuner et opportunité de networking entre les participants",
      location: "Restaurant, Hôtel NOOM",
      type: "networking",
      speakers: [],
      color: "#FF9800", // orange
    },
    {
      id: "6",
      title: "Panel 3: Financements innovants et PPP",
      start: `${eventDate}T14:00:00`,
      end: `${eventDate}T15:30:00`,
      description:
        "Ce panel se penchera sur les mécanismes de financement innovants et les modèles de PPP qui peuvent catalyser le développement des infrastructures en Guinée.",
      location: "Salle principale, Hôtel NOOM",
      type: "panel",
      moderator: "Expert financier",
      speakers: [
        "Représentant de la Banque Africaine de Développement",
        "Directeur des partenariats public-privé",
        "Investisseur international",
      ],
      color: "#2196F3", // bleu
    },
    {
      id: "7",
      title: "Panel 4: Secteur privé guinéen",
      start: `${eventDate}T15:30:00`,
      end: `${eventDate}T17:00:00`,
      description:
        "Ce panel mettra en lumière le rôle crucial du secteur privé guinéen dans le développement économique du pays, en explorant les défis auxquels il est confronté et les opportunités offertes par le programme Simandou 2040.",
      location: "Salle principale, Hôtel NOOM",
      type: "panel",
      moderator: "Représentant du patronat guinéen",
      speakers: [
        "Président de la Chambre de Commerce",
        "Chef d'entreprise guinéen",
        "Expert en développement du secteur privé",
      ],
      color: "#2196F3", // bleu
    },
    {
      id: "8",
      title: "Panel 5: Zones industrielles et énergie",
      start: `${eventDate}T17:00:00`,
      end: `${eventDate}T18:30:00`,
      description:
        "Ce panel abordera les questions liées au développement des zones industrielles, à l'approvisionnement énergétique et à la transition vers une économie durable.",
      location: "Salle principale, Hôtel NOOM",
      type: "panel",
      moderator: "Expert en développement durable",
      speakers: ["Ministre de l'Énergie", "Directeur des zones industrielles", "Expert en transition énergétique"],
      color: "#2196F3", // bleu
    },
    {
      id: "9",
      title: "Cocktail de clôture et networking",
      start: `${eventDate}T18:30:00`,
      end: `${eventDate}T20:00:00`,
      description: "Cocktail de clôture et opportunité de networking entre les participants",
      location: "Terrasse, Hôtel NOOM",
      type: "networking",
      speakers: [],
      color: "#FF9800", // orange
    },
  ]

  // Gérer le clic sur un événement
  const handleEventClick = (info: any) => {
    const eventId = info.event.id
    const event = events.find((e) => e.id === eventId)
    if (event) {
      setSelectedEvent(event)
      setIsModalOpen(true)
    }
  }

  // Obtenir la couleur de badge en fonction du type d'événement
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "panel":
        return "bg-blue-500 hover:bg-blue-600"
      case "conference":
        return "bg-pink-500 hover:bg-pink-600"
      case "networking":
        return "bg-orange-500 hover:bg-orange-600"
      case "registration":
        return "bg-green-500 hover:bg-green-600"
      case "break":
        return "bg-gray-500 hover:bg-gray-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="calendar-container">
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge className="bg-blue-500 hover:bg-blue-600">Panels</Badge>
        <Badge className="bg-pink-500 hover:bg-pink-600">Conférence</Badge>
        <Badge className="bg-orange-500 hover:bg-orange-600">Networking</Badge>
        <Badge className="bg-green-500 hover:bg-green-600">Enregistrement</Badge>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          locales={[frLocale]}
          locale="fr"
          slotMinTime="09:00:00"
          slotMaxTime="20:00:00"
          allDaySlot={false}
          initialDate={eventDate}
          events={events}
          eventClick={handleEventClick}
          height="auto"
          slotDuration="00:30:00"
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
            hour12: false,
          }}
        />
      </div>

      {/* Modal pour afficher les détails de l'événement */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-sidi-blue">{selectedEvent.title}</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className={getBadgeColor(selectedEvent.type)}>
                  {selectedEvent.type === "panel"
                    ? "Panel"
                    : selectedEvent.type === "conference"
                      ? "Conférence"
                      : selectedEvent.type === "networking"
                        ? "Networking"
                        : selectedEvent.type === "registration"
                          ? "Enregistrement"
                          : "Pause"}
                </Badge>
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    {new Date(selectedEvent.start).toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}{" "}
                    -{" "}
                    {new Date(selectedEvent.end).toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-gray-700">{selectedEvent.location}</p>
              </div>

              <div>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </div>

              {selectedEvent.moderator && (
                <div className="flex items-start gap-2">
                  <User className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Modérateur:</p>
                    <p className="text-gray-700">{selectedEvent.moderator}</p>
                  </div>
                </div>
              )}

              {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Intervenants:</p>
                    <ul className="list-disc pl-5 text-gray-700">
                      {selectedEvent.speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
