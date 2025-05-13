"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import SponsorshipPackage from "@/components/sponsorship-package"
import { fadeIn, staggerContainer } from "@/lib/motion"

export default function SponsorsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showContactForm, setShowContactForm] = useState(false)

  const handleContactClick = () => {
    toast({
      title: "Demande de sponsoring",
      description: "Vous allez être redirigé vers le formulaire de contact",
    })
    router.push("/contact?subject=Demande%20de%20sponsoring")
  }

  const sponsorshipPackages = [
    {
      title: "Partenaire Officiel",
      price: "Sur demande",
      features: [
        "Logo sur tous les supports (bâches, scène, catalogue, écran LED, TV)",
        "Prise de parole à l'ouverture",
        "Stand Premium + espace branding personnalisé",
        "Page entière dans le catalogue officiel",
        "Interview média + visibilité digitale dédiée",
        "10 invitations VIP",
      ],
      highlighted: true,
    },
    {
      title: "Sponsor Platinum",
      price: "15 000 €",
      features: [
        "Logo sur scène, kakemonos, programme et kit presse",
        "Stand Premium",
        "½ page dans le catalogue",
        "6 invitations VIP",
        "Présence au dîner officiel",
      ],
    },
    {
      title: "Sponsor Gold",
      price: "7 500 €",
      features: [
        "Logo sur les supports print et digitaux",
        "Stand standard",
        "¼ page dans le catalogue",
        "4 invitations VIP",
      ],
    },
    {
      title: "Sponsor Silver",
      price: "3 500 €",
      features: ["Logo sur le site web et roll-ups", "2 invitations", "Mention dans le communiqué de presse"],
    },
  ]

  const exhibitionPackages = [
    {
      title: "Stand Premium",
      price: "3 500 €",
      features: [
        "Espace d'exposition de 12 m²",
        "Mobilier premium",
        "Visibilité dans le catalogue",
        "2 badges exposants",
      ],
    },
    {
      title: "Stand Standard",
      price: "2 000 €",
      features: ["Espace d'exposition de 6 m²", "Mobilier de base", "Mention dans le catalogue", "1 badge exposant"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-12 text-center"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
        >
          Offres de Sponsoring
        </motion.h1>
        <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="text-xl text-gray-600 max-w-3xl mx-auto">
          Associez votre marque au plus grand salon économique de Guinée en 2025 et bénéficiez d'une visibilité
          exceptionnelle auprès des décideurs publics et privés.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Pourquoi devenir sponsor ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Visibilité Premium",
              description: "Associez votre image à la croissance et au futur économique de la Guinée",
            },
            {
              title: "Networking Stratégique",
              description: "Renforcez votre visibilité auprès des décideurs publics et privés",
            },
            {
              title: "Positionnement de Marque",
              description: "Positionnez votre marque comme un acteur stratégique du développement africain",
            },
            {
              title: "Opportunités Commerciales",
              description: "Accédez à des opportunités commerciales, de partenariats et d'affaires B2B",
            },
            {
              title: "Couverture Médiatique",
              description: "Bénéficiez d'une couverture médiatique internationale (TV, presse, digital, radio)",
            },
            {
              title: "Réseau d'Influence",
              description: "Développez votre réseau avec 300+ décideurs nationaux et internationaux",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Packages de Sponsoring</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipPackages.map((pkg, index) => (
            <SponsorshipPackage
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              highlighted={pkg.highlighted}
              index={index}
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Exposition d'Entreprises</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {exhibitionPackages.map((pkg, index) => (
            <SponsorshipPackage
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              index={index + 4} // Continue index from previous section
              ctaText="Réserver un stand"
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Intéressé par nos offres de sponsoring ?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès maintenant pour discuter des opportunités de partenariat et réserver votre place au Salon
          Guinée Invest 2025.
        </p>
        <Button onClick={handleContactClick} className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg">
          Nous contacter
        </Button>
      </motion.div>
    </div>
  )
}
