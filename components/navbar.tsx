"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Mettre à jour le tableau navItems pour inclure le lien vers Simandou 2040
const navItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "A PROPOS", href: "/a-propos" },
  { name: "PROGRAMME", href: "/programme" },
  { name: "SIMANDOU 2040", href: "/simandou-2040" },
  { name: "ACTUALITÉS", href: "/actualites" },
  { name: "ÉVÉNEMENTS", href: "/evenements" },
  { name: "PARTENAIRES", href: "/partenaires" },
  { name: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-primary shadow-md py-2" : "bg-primary/90 py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <Image
            src="/logo.png"
            alt="SIDI Invest For Africa"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="ml-4 bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer">PARTICIPER AU SALON</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="py-4 text-lg font-medium text-white hover:text-secondary border-b border-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-6 bg-secondary text-primary hover:bg-secondary/90">
            <Link href="/participer" onClick={() => setIsOpen(false)}>
              PARTICIPER AU SALON
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
