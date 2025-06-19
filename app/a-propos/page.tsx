"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/motion"
import OrganizerInfo from "@/components/organizer-info"
import TargetAudience from "@/components/target-audience"
import CommunicationInfo from "@/components/communication-info"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/bg-pattern.png" alt="Background" fill className="object-cover opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeIn("up", "tween", 0.1, 1)} className="text-4xl md:text-5xl font-bold mb-6">
              À Propos du Salon
            </motion.h1>

            <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-xl text-blue-100">
              SIDI – Guinée Invest est le plus grand salon économique prévu en 2025 en République de Guinée.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image src="/simandou_logo.png" alt="Projet Simandou" fill className="object-contain" />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contexte et Justification</h2>
                <p className="text-gray-700 mb-4">
                  La République de Guinée, riche de ses ressources naturelles, amorce une phase stratégique de son
                  développement à travers la mise en œuvre du programme Simandou 2040, destiné à transformer le
                  potentiel minier en moteur de croissance économique durable.
                </p>
                <p className="text-gray-700 mb-4">
                  Ce programme intègre des projets structurants dans les infrastructures ferroviaires, portuaires,
                  énergétiques et industrielles, positionnant la Guinée comme un pôle économique incontournable en
                  Afrique de l'Ouest.
                </p>
                <p className="text-gray-700">
                  Dans ce contexte, Septafrique, leader de l'événementiel institutionnel en Afrique de l'Ouest, organise
                  le Salon Guinée Invest, une plateforme de rencontres, d'échanges et de promotion des opportunités
                  d'investissement, le 12 juillet 2025 à l'hôtel NOOM de Conakry.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Thématique Centrale</h2>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">"Investir en Guinée à l'ère du Simandou 2040"</h3>
                <p className="text-gray-700">
                  Cette thématique met en avant l'impact structurant du projet Simandou et les opportunités économiques
                  connexes, en lien avec les politiques publiques, les réformes et l'environnement des affaires en
                  Guinée.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16 text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Un Rendez-vous Majeur pour la Guinée de Demain</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Cet événement stratégique met en lumière les grandes ambitions du pays autour de la mise en œuvre du
                programme Simandou 2040, véritable levier de transformation économique.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-blue-700 mb-2">300+</div>
                  <p className="text-gray-600">
                    Décideurs nationaux et internationaux (ministres, investisseurs, dirigeants d'entreprises,
                    bailleurs, diplomates...)
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-blue-700 mb-2">50</div>
                  <p className="text-gray-600">
                    Entreprises exposantes issues des secteurs : mines, BTP, énergie, logistique, industrie, finance,
                    TIC...
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-blue-700 mb-2">5</div>
                  <p className="text-gray-600">
                    Panels de haut niveau, une conférence inaugurale, une exposition B2B, et des rencontres exclusives.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
              <OrganizerInfo />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Communication Section */}
      <CommunicationInfo />

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl font-bold mb-6">
              Participez à cet événement majeur
            </motion.h2>

            <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-xl text-blue-100 mb-8">
              Inscrivez-vous dès maintenant pour découvrir les opportunités d'investissement en Guinée, terre d'opportunités et d'avenir.
            </motion.p>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-8"
              >
                <Link href="/contact">S'inscrire</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-900 hover:bg-white/10 font-semibold text-lg px-8"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
