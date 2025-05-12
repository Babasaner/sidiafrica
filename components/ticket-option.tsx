"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface TicketOptionProps {
  title: string
  price: number
  features: string[]
  isVip?: boolean
  isVvip?: boolean
  onSelect: () => void
}

export default function TicketOption({ title, price, features, isVip, isVvip, onSelect }: TicketOptionProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
        isVip || isVvip ? "transform hover:-translate-y-2" : "hover:shadow-lg",
      )}
    >
      {(isVip || isVvip) && (
        <div
          className={cn("absolute top-0 right-0 w-24 h-24 overflow-hidden", isVvip ? "bg-yellow-400" : "bg-primary")}
        >
          <div
            className={cn(
              "absolute top-0 right-0 transform rotate-45 translate-y-12 -translate-x-3 w-36 text-center py-1",
              isVvip ? "bg-yellow-500 text-primary" : "bg-primary-foreground text-primary",
            )}
          >
            <span className="font-bold text-sm">{isVvip ? "VVIP" : "VIP"}</span>
          </div>
        </div>
      )}

      <div className={cn("p-6 text-white", isVvip ? "bg-primary" : isVip ? "bg-blue-800" : "bg-gray-800")}>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm">FORUM ÉCONOMIQUE INTERNATIONAL DE GUINÉE - SIMANDOU 2040</p>
      </div>

      <div className="bg-white p-6">
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{price}€</span>
          <p className="text-gray-600 mt-1">30 MAI 2025</p>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={onSelect}
          className={cn(
            "w-full",
            isVvip ? "bg-yellow-500 hover:bg-yellow-600 text-primary" : isVip ? "bg-primary" : "bg-gray-800",
          )}
        >
          RÉSERVER
        </Button>
      </div>
    </div>
  )
}
