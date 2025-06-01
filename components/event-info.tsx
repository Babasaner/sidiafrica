"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { fadeIn } from "@/lib/motion"

export default function EventInfo() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-blue-800 text-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Informations Pratiques</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <Calendar className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-1">Date</h3>
          <p>28 juin 2025</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <MapPin className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-1">Lieu</h3>
          <p>Hôtel NOOM, Conakry</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Users className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-1">Participants</h3>
          <p>300+ décideurs et 50 exposants</p>
        </div>
      </div>
    </motion.div>
  )
}
