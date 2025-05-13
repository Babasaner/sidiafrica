"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"

const partners = [
  { id: 1, name: "Partenaire 1", logo: "/guinée.jpg" },
  { id: 2, name: "Partenaire 2", logo: "/favicon-1.jpg" },
  { id: 3, name: "Partenaire 3", logo: "/simandou_logo.png" },
  { id: 4, name: "Partenaire 4", logo: "https://sidinvest.africa/wp-content/uploads/2024/09/partenaire-4.png" },
  { id: 5, name: "Partenaire 5", logo: "https://sidinvest.africa/wp-content/uploads/2024/09/partenaire-8.png" },
  { id: 6, name: "Partenaire 6", logo: "septafrique.jpg" },
  { id: 7, name: "Partenaire 7", logo: "https://sidinvest.africa/wp-content/uploads/2024/09/partenaire-7.png" },
]

export default function PartnerSlider() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(containerRef, { once: false, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className={cn(
          "flex items-center gap-6 md:gap-8 transition-all duration-500",
          isHovered ? "animate-paused" : "animate-marquee",
        )}
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            variants={itemVariants}
            className="partner-item flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              rotate: [0, 1, -1, 1, 0],
              transition: {
                rotate: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={120}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
