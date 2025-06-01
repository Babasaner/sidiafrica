"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import useScroll from "@/hooks/use-scroll"
import AnimatedLogo from "./animated-logo"

const navItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "À PROPOS", href: "/a-propos" },
  { name: "PROGRAMME", href: "/programme" },
  { name: "SIMANDOU 2040", href: "/simandou-2040" },
  { name: "EXPOSANTS", href: "/exposants" },
  { name: "ACTUALITES", href: "/actualites" },
  { name: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const scrolled = scrollY > 10

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-sidi-blue/95 shadow-lg py-2" : "bg-transparent py-4",
        scrolled ? "backdrop-blur-md" : "",
      )}
    >
      <div className="container-slim flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <AnimatedLogo priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navItems.map((item, index) => (
            <motion.div key={item.name} custom={index} variants={menuItemVariants} initial="hidden" animate="show">
              <Link
                href={item.href}
                className={cn(
                  "px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium relative group",
                  scrolled ? "text-white hover:text-sidi-gold" : "text-white hover:text-sidi-gold",
                )}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-sidi-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              asChild
              size="sm"
              className="ml-2 lg:ml-4 bg-sidi-gold text-sidi-dark hover:bg-opacity-90 transition-all duration-300 text-xs lg:text-sm"
            >
              <Link href="/participer">PARTICIPER</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-sidi-blue z-50 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="text-white p-2"
                  aria-label="Fermer le menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex flex-col px-6 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <Link
                      href={item.href}
                      className="py-3 text-lg font-medium text-white hover:text-sidi-gold border-b border-white/10 block transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                >
                  <Button asChild className="mt-8 bg-sidi-gold text-sidi-dark hover:bg-opacity-90 w-full">
                    <Link href="/participer" onClick={() => setIsOpen(false)}>
                      PARTICIPER AU SALON
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
