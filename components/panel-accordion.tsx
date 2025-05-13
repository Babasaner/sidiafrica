"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface PanelProps {
  id?: string
  title: string
  time?: string
  day?: string
  moderator?: string
  panelists?: string[]
  specialGuest?: string
  description: string
  icon?: React.ReactNode
}

interface PanelAccordionProps {
  panel: PanelProps
}

export default function PanelAccordion({ panel }: PanelAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          {panel.icon && <div className="text-sidi-blue">{panel.icon}</div>}
          <div>
            <h3 className="text-xl font-bold text-sidi-blue">{panel.title}</h3>
            {panel.time && panel.day && (
              <p className="text-gray-600 mt-1">
                {panel.day} - {panel.time}
              </p>
            )}
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-sidi-blue" /> : <ChevronDown className="h-5 w-5 text-sidi-blue" />}
      </button>

      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6 pt-0 border-t border-gray-100">
          <p className="text-gray-700 mb-4">{panel.description}</p>

          {panel.moderator && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Modérateur:</h4>
              <p className="text-gray-600">{panel.moderator}</p>
            </div>
          )}

          {panel.panelists && panel.panelists.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Panélistes:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {panel.panelists.map((panelist, index) => (
                  <li key={index}>{panelist}</li>
                ))}
              </ul>
            </div>
          )}

          {panel.specialGuest && (
            <div>
              <h4 className="font-semibold mb-1">Invité spécial:</h4>
              <p className="text-gray-600">{panel.specialGuest}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
