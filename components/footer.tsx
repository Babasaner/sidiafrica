import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo.png" alt="SIDI Invest For Africa" width={200} height={70} className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300 mt-4">
              Salon sur les investissements et le développement des infrastructures en Afrique. Développement -
              Opportunités - Potentiels
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-secondary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-300 hover:text-secondary transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/evenements" className="text-gray-300 hover:text-secondary transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-gray-300 hover:text-secondary transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Salon 2024</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-secondary" />
                <span>Noom Hotel, Conakry, Guinée</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-bold text-secondary">Date:</span>
                <span>30 Mai 2025</span>
              </li>
              <li>
                <span className="font-bold text-secondary">Pays invités:</span>
                <p className="text-sm text-gray-300 mt-1">
                  Sénégal, Bénin, Burkina, Côte d'Ivoire, Gabon, Mali, Niger, République du Congo, RDC, Rwanda, Tchad,
                  Togo, Cameroun
                </p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-secondary" />
                <span>contact@sidinvest.africa</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-secondary" />
                <span>+33 1 XX XX XX XX</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-secondary" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SIDI Invest For Africa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
