"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const partners = [
  { id: 1, name: "Partenaire 1", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/2-1.jpg" },
  { id: 2, name: "Partenaire 2", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/1.jpg" },
  { id: 3, name: "Partenaire 3", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/3.jpg" },
  { id: 4, name: "Partenaire 4", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/4.jpg" },
  { id: 5, name: "Partenaire 5", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/F4F4F4.jpg" },
  { id: 6, name: "Partenaire 6", logo: "https://simandou2040.gn/wp-content/uploads/2024/11/chinalco-profile-logo.jpg" },
  { id: 7, name: "Partenaire 7", logo: "https://sidinvest.africa/wp-content/uploads/2024/09/partenaire-8.png" },
  { id: 8, name: "Partenaire 8", logo: "https://sidinvest.africa/wp-content/uploads/2024/09/partenaire-1.png" },
]

export default function PartnerSlider() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cloneItems = () => {
      const items = container.querySelectorAll(".partner-item")
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        container.appendChild(clone)
      })
    }

    cloneItems()
  }, [])

  return (
    <div
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className={cn("flex items-center gap-8 md:gap-16 animate-marquee", isHovered && "animate-paused")}
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="partner-item flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={120}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
