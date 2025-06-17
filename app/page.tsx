"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/motion"
import PartnerSlider from "@/components/partner-slider"
import MinistersShowcase from "@/components/ministers-showcase"
import HomeBlogSection from "@/components/home-blog-section"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/abstract-blue-swirls.png" alt="Background" fill className="object-cover opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-center text-center"
          >
            {/* <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="mb-6">
              <Image
                src="/simandou.png"
                alt="SIDI Invest Guinée"
                width={300}
                height={120}
                className="mx-auto"
              />
            </motion.div> */}

            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Salon Guinée Invest
            </motion.h1>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl"
            >
              <p className="mb-4">Le plus grand salon économique de Guinée en 2025</p>
              <p className="font-semibold">Investir en Guinée à l'ère du Simandou 2040</p>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="flex flex-col sm:flex-row gap-4 mb-12">
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
                <Link href="/programme">Voir le programme</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="flex items-center justify-center gap-6 text-white"
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">05</p>
                <p className="text-sm uppercase">Juillet 2025</p>
              </div>
              <div className="h-12 w-px bg-blue-400"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">300+</p>
                <p className="text-sm uppercase">Décideurs</p>
              </div>
              <div className="h-12 w-px bg-blue-400"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">50</p>
                <p className="text-sm uppercase">Exposants</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              À Propos du Salon
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image src="/apropos.jpg" alt="Salon Guinée Invest" fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
                <p className="text-lg text-gray-700 mb-6">
                  La République de Guinée, riche de ses ressources naturelles, amorce une phase stratégique de son
                  développement à travers la mise en œuvre du programme Simandou 2040, destiné à transformer le
                  potentiel minier en moteur de croissance économique durable.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Ce programme intègre des projets structurants dans les infrastructures ferroviaires, portuaires,
                  énergétiques et industrielles, positionnant la Guinée comme un pôle économique incontournable en
                  Afrique de l'Ouest.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Dans ce contexte, Septafrique, leader de l'événementiel institutionnel en Afrique de l'Ouest, organise
                  le Salon Guinée Invest, une plateforme de rencontres, d'échanges et de promotion des opportunités
                  d'investissement, le 05 juillet 2025 à l'hôtel NOOM de Conakry.
                </p>
                <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
                  <Link href="/a-propos">En savoir plus</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministers Showcase Section */}
      <MinistersShowcase />


      {/* Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Composantes du Salon
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeIn("up", "spring", 0.2, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Conférence Inaugurale</h3>
                <p className="text-gray-600">
                  Une session solennelle en présence de hauts responsables gouvernementaux, d'institutions financières,
                  de diplomates et d'investisseurs.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.3, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Panels Thématiques</h3>
                <p className="text-gray-600">
                  5 panels de haut niveau sur les enjeux stratégiques du développement économique de la Guinée.
                </p>
                <Button asChild variant="link" className="mt-4 text-blue-700">
                  <Link href="/panels">Voir les panels</Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.4, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Exposition Économique</h3>
                <p className="text-gray-600">
                  50 entreprises majeures présenteront leurs projets, technologies et solutions, avec une zone B2B
                  dédiée aux rencontres d'affaires.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Blog Section */}
      <HomeBlogSection />


      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Résultats Attendus
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={fadeIn("up", "spring", 0.2, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full"
              >
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Valorisation des projets</h3>
                <p className="text-gray-600">Valorisation des projets structurants en Guinée</p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.3, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full"
              >
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Mobilisation d'investissements</h3>
                <p className="text-gray-600">Mobilisation d'investissements et de nouveaux partenaires économiques</p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.4, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full"
              >
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Visibilité des entreprises</h3>
                <p className="text-gray-600">Renforcement de la visibilité des entreprises guinéennes</p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full"
              >
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Partenariats stratégiques</h3>
                <p className="text-gray-600">Signature de protocoles d'accord et de partenariats stratégiques</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
            >
              Nos Partenaires
            </motion.h2>

            <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mb-12">
              <PartnerSlider />
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="text-center">
              <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
                <Link href="/partenaires">Tous nos partenaires</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez le plus grand salon économique de Guinée en 2025
            </motion.h2>

            <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-xl text-blue-100 mb-8">
              Inscrivez-vous dès maintenant pour participer à cet événement majeur et découvrir les opportunités
              d'investissement en Guinée.
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
                <Link href="/participer">S'inscrire</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-900 hover:bg-white/10 font-semibold text-lg px-8"
              >
                <Link href="/sponsors">Devenir sponsor</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}