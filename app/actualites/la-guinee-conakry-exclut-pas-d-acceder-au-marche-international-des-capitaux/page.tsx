import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

export default function LaguinneExclutPage() {
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
            La Guinée Conakry « n’exclut pas d’accéder au marché international des capitaux » 
          </h1>
          <div className="flex items-center text-sm gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publié le 28 Mai 2025</span>
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
                <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/ministre/mourana-soumah.jpg"
                    alt="Ministre de l'économie et des Finance Mr Mouranah Soumah"
                    fill
                    className="object-cover object-[50%_15%]"
                  />
                </div>

                <h2><strong>La Guinée Conakry « n’exclut pas d’accéder au marché international des capitaux »</strong> </h2>
                <p>
                  (Agence Ecofin) - Le pays ouest africain a une marge d’endettement confortable, et son projet de Simandou, l’un des plus important au monde dans le secteur du fer, lui garantit une augmentation des revenus en devises. A ce titre, sous certaines conditions, il pourrait accéder aux capitaux internationaux.
                </p>

                <p>
                  Mourana Soumah, ministre de l’Économie et des Finances de la Guinée Conakry, a déclaré le 30 mai, lors d’un échange avec des journalistes en marge des Assemblées annuelles de la Banque africaine de développement, que son pays n’excluait pas d’aller sur le marché international des capitaux pour mobiliser des ressources. Cependant, il doit d’abord remplir certaines conditions essentielles en cours d’achèvement.
                </p>

                <p>
                  « L’accès aux marchés des capitaux exige des prérequis, comme l’obtention d’une notation de crédit et à cela nous ajoutons la nécessité de créer un fonds souverain. Nous sommes très avancés dans le processus de notation du pays, et le fonds souverain est en cours de mise en place », a expliqué Mourana Soumah.
                </p>

                <p>
                  La Guinée Conakry affiche un ratio dette/PIB de 40,2 % (contre une moyenne africaine de 58%), dont seulement 19,8 % est détenu par des créanciers étrangers, principalement sous forme de prêts concessionnels. Avec le développement du projet d’exploitation de fer à Simandou, considéré comme l’un des plus importants au monde, le pays anticipe une augmentation de ses revenus extérieurs.
                </p>

                <p>
                  Mobiliser ces ressources permettrait au pays de réduire ses défis en matière d’infrastructures et de répondre aux attentes croissantes de sa population.
                </p>

                <p>
                  En attendant de pouvoir accéder aux marchés internationaux des capitaux, la Guinée s’appuie sur deux leviers principaux. D’une part, il encourage fermement les opérateurs miniers à respecter leurs engagements d’investissement prévus dans les conventions minières qui leur permettent d’opérer. D’autre part, il travaille à devenir éligible à des financements plus importants, bien que moins concessionnels, auprès d’institutions comme la Banque africaine de développement ou la Banque mondiale.
                </p>

                <p>
                  Comme pour de nombreux pays, notamment en Afrique subsaharienne, l’accès aux marchés internationaux des capitaux peut être très exigeant pour les émetteurs souverains africains. Depuis le début de l’année 2025, seuls sept pays africains ont emprunté sur le marché international des titres publics, à travers douze opérations. Le Maroc, cité en exemple par le ministre guinéen, bénéficie du coût le plus bas pour sa dette, avec un rendement à l’émission de 3,8 %, contre 10,6 % pour l’Angola.
                </p>

                <p>
                  Il sera intéressant d’observer l’accueil que les investisseurs réserveront à la Guinée Conakry si elle décide finalement de faire son entrée sur le marché international des capitaux.
                </p>

               </div>

              </div>

            <div className="md:col-span-1">
              <div className="sticky top-24">
                

                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Participez au forum</h3>
                  <p className="mb-6">
                    Rejoignez-nous le 28 juin2025 au Noom Hotel de Conakry pour découvrir les opportunités
                    d'investissement dans l'ère Simandou 2040.
                  </p>
                  <Button asChild className="w-full bg-secondary text-primary hover:bg-secondary/90">
                    <Link href="/participer">S'INSCRIRE</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
