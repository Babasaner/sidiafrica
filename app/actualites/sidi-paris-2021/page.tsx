import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

export default function SidiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-secondary mb-4">
            <Link href="/actualites" className="hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Retour aux actualités
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Spécial Emission Sama Keur Consacrée à l'évenement Sidi 2021
          </h1>
          <div className="flex items-center text-sm gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publié le 15 Mai 2024</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Par Mouhamed FALL AL Amine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                
               

            <iframe width={"100%"} height={"100%"}  className="w-full h-96" src="https://www.youtube.com/embed/coc2alluKSk" title="SIDI Paris 2021 : Spéciale émission Sama Keur consacrée à l&#39;événement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
