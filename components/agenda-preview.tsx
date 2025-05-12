"use client"
import { Card } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"

// Données du programme
const eventSchedule = [
  {
    time: "09h00",
    title: "Accueil et enregistrement des participants",
    type: "organisation",
    location: "Noom Hotel",
  },
  {
    time: "10h00",
    title: "Cérémonie d'ouverture",
    type: "presentation",
    speakers: [
      "S.E.M. Amadou Oury BA - Premier Ministre de la République de Guinée",
      "M. Mouhamed FALL AL AMINE - Président Septafrique Group",
      "Représentant du Ministère de l'Économie et des Finances",
    ],
    location: "Noom Hotel",
  },
  {
    time: "11h00",
    title: "Présentation du programme Simandou 2040",
    type: "presentation",
    speakers: ["Ministère des Mines et de la Géologie", "Ministère des Infrastructures et des Transports"],
    location: "Noom Hotel",
  },
  {
    time: "12h00",
    title: "Présentation de l'environnement des affaires de la Guinée",
    type: "presentation",
    speakers: ["Agence de Promotion des Investissements Privés (APIP)", "Chambre de Commerce et d'Industrie de Guinée"],
    location: "Noom Hotel",
  },
  {
    time: "13h30",
    title: "Panel 1 - Infrastructures minières et logistiques",
    type: "panel",
    speakers: [
      "Expert du secteur minier (Modérateur)",
      "Représentants des compagnies minières",
      "Experts en logistique et transport",
    ],
    location: "Noom Hotel",
  },
  {
    time: "15h00",
    title: "Panel 2 - Financement des infrastructures",
    type: "panel",
    speakers: [
      "Expert financier (Modérateur)",
      "Représentants d'institutions financières",
      "Experts en partenariats public-privé",
    ],
    location: "Noom Hotel",
  },
  {
    time: "16h30",
    title: "Panel 3 - Développement durable et impact social",
    type: "panel",
    speakers: [
      "Expert en développement durable (Modérateur)",
      "Représentants des communautés locales",
      "Experts en RSE",
    ],
    location: "Noom Hotel",
  },
  {
    time: "18h00",
    title: "Cocktail de networking",
    type: "networking",
    speakers: ["Tous les participants"],
    location: "Noom Hotel",
  },
]

export default function AgendaPreview() {
  return (
    <div className="w-full">
      <div className="space-y-6">
        {eventSchedule.slice(0, 5).map((event, index) => (
          <Card
            key={index}
            className={`p-4 border-l-4 ${
              event.type === "panel"
                ? "border-l-primary"
                : event.type === "presentation"
                  ? "border-l-secondary"
                  : "border-l-gray-300"
            } hover:shadow-md transition-shadow`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex items-center mb-2 md:mb-0 md:w-1/6">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="font-bold text-primary">{event.time}</span>
              </div>
              <div className="md:w-5/6">
                <h3 className="font-bold text-lg">{event.title}</h3>
                {event.speakers && (
                  <div className="mt-2 flex items-start">
                    <Users className="h-4 w-4 text-gray-500 mr-2 mt-1" />
                    <div className="flex flex-wrap gap-1">
                      {event.speakers.slice(0, 2).map((speaker, idx) => (
                        <span key={idx} className="text-sm text-gray-600">
                          {speaker}
                          {idx < Math.min(event.speakers.length, 2) - 1 && ", "}
                        </span>
                      ))}
                      {event.speakers.length > 2 && (
                        <span className="text-sm text-gray-600">
                          {" "}
                          et {event.speakers.length - 2} autre{event.speakers.length - 2 > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {event.location && <div className="mt-2 text-sm text-gray-500">{event.location}</div>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
