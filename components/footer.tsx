"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedLogo from "./animated-logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-sidi-blue text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="container-slim py-12 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo et description */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <AnimatedLogo variant="footer" />
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Le Salon International des Investissements et du Développement en Guinée - 30 mai 2025 à l'hôtel NOOM de
              Conakry.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sidi-gold transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sidi-gold transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sidi-gold transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sidi-gold transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative">
              Liens rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-sidi-gold"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/programme"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  Programme
                </Link>
              </li>
              <li>
                <Link
                  href="/simandou-2040"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  Simandou 2040
                </Link>
              </li>
              <li>
                <Link
                  href="/exposants"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  Exposants
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-sidi-gold"></span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sidi-gold shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Hôtel NOOM
                  <br />
                  Conakry, Guinée
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sidi-gold shrink-0" />
                <a
                  href="tel:+224624295564"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base"
                >
                  +224 624 29 55 64
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-sidi-gold shrink-0" />
                <a
                  href="mailto:alamine@sidinvest.africa"
                  className="text-gray-300 hover:text-sidi-gold transition-colors text-sm sm:text-base break-all"
                >
                  alamine@sidinvest.africa
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-sidi-gold"></span>
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Inscrivez-vous pour recevoir les dernières actualités.
            </p>
            <form className="space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm"
                />
                <Button
                  type="submit"
                  className="bg-sidi-gold text-sidi-dark hover:bg-opacity-90 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  S'inscrire
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-slim py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {currentYear} SIDI Invest Guinée. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-sidi-gold text-xs sm:text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-sidi-gold text-xs sm:text-sm transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
