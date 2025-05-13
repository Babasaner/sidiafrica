"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

export default function OrganizerInfo() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48">
            <Image src="/septafrique.jpg" alt="Septafrique Group" fill className="object-contain" />
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Organisateur</h2>
          <p className="text-gray-700 mb-4">
            <strong>Septafrique Group</strong>, entreprise panafricaine basée à Dakar, spécialisée dans l'organisation
            de forums économiques, conférences ministérielles et salons d'affaires sur tout le continent, avec une
            expertise reconnue dans la mobilisation d'acteurs de haut niveau.
          </p>
          <p className="text-gray-700">
            Avec plus de 10 ans d'expérience dans l'événementiel institutionnel en Afrique de l'Ouest, Septafrique est
            le partenaire idéal pour valoriser les opportunités économiques de la Guinée.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
