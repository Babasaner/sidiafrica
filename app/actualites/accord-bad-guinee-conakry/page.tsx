import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

export default function accordbadGuineePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Accord de 32 millions de dollars US signé avec la BAD, des rendez-vous avec la presse et une-presence remarquée à la ceremonie de clôture.
          </h1>
          <div className="flex items-center text-sm gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Publié le 30 Mai 2025</span>
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
                    src="/news/accord.jpg"
                    alt="Un accord de 32 millions de dollars US signé avec la BAD, des rendez-vous avec la presse et une présence remarquée à la cérémonie de clôture. Le Ministre Mourana Soumah a bouclé une journée chargée et fructueuse à Abidjan."
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-black"><strong>Un accord de 32 millions de dollars US signé avec la BAD, des rendez-vous avec la presse et une présence remarquée à la cérémonie de clôture. Le Ministre Mourana Soumah a bouclé une journée chargée et fructueuse à Abidjan.</strong></h2>
                <p className="text-black">
                  C’est l’une des retombées concluantes et positives de la mission que le Ministre Mourana Soumah a mené dans la capitale ivoirienne…
                  la signature avec la Direction des Opérations du Groupe de la BAD <strong>d’un important accord de financement doté d’une enveloppe de 32 millions 500 mille dollars US.</strong>.
                </p>

                <p className="text-black">
                  Le Ministre de l’Economie et des Finances, Gouverneur Pays pour la BAD a signé cet accord, le vendredi 30 mai 2025,
                  avec le Directeur General du Groupe en charge des Opération, Lamine Barrow.
                </p>

                <br />

                <p className="text-black">
                  Il s’agit d’un accord composé de 2 dons et d’un prêt pour couvrir les activités de l’important Projet de Promotion des Chaines de Valeur
                  Agricoles Durables autour des Zones de Transformation Agro Industrielles dans les régions de Boké et de Kankan.
                </p>
                <br />
                <p className="text-black">
                  Un accord qui témoigne de la vitalité et du dynamisme du partenariat entre la Guinée et le Groupe de la Banque Africaine de Développement.
                </p>
                <br />
                <p className="text-black">
                  Intervenant à l’occasion, le Haut fonctionnaire de la BAD a rappelé que cet accord avait été au préalable approuvé par le Fonds vert et le
                  conseil d’administration du Groupe de la BAD témoignant de l’importance et de la pertinence du projet :
                  « en signant cet accord, le portefeuille de BAD compte est dorénavant élargi à 32 opérations pour un engagement de l’ordre de 750 millions de dollars US.
                  Cela dénote de la confiance du Groupe de la BAD en la Guinée, au regard des performances affichées par le portefeuille ces dernières années…
                  le taux de décaissement passant à plus de 50%. Nous sommes persuadés que ce projet à grand impact socio-économique va accroitre l’appui au secteur agricole, aux transfert des technologies et des compétences
                  ainsi qu’au développement de la chaine des valeur agricole. » affirmera Lamine Barrow. </p>
                <br />
                <p className="text-black">
                  En réponse, le Ministre Gouverneur pays pour la BAD, remerciera, au nom du Chef de l’Etat, Général Mamadi Doumbouya et du Premier Ministre,
                  Chef de Gouvernement, Amadou Oury BAH,
                  les partenaires du Groupe de la BAD pour leurs appuis constants et précieux à la Guinée.</p>
                <br />
                <p className="text-black">
                  Mourana Soumah se félicitera de la signature de cet accord qui va bénéficier à un secteur stratégique qui tient à cœur au Général Président Mamadi Doumbouya…
                  l’agriculture et sa dimension agro-industrie qui figure dans le pilier 1 du Programme ambitieux et transformateur de l’économie guinéenne,
                  les 15 ans à venir : (le Programme Simandou 2040) : /* Nous sommes engagés dans la valorisation de l’énorme potentiel agricole national…13 millions de terres arables,
                  un littoral de plus de 300 km, forte pluviométrie … il s’agira de passer a l’agriculture de subsistance a l’agro-industrie à travers le développement de
                  la chaine des valeurs agricoles dans le pays. C’est la vision du Chef de l’Etat.
                  Et ce projet en adéquation avec cette ambition. Nous heureux et fier de signer cet accord en faveur de la Guinée et des Guinéens. */</p>
                <br />
                <p className="text-black">
                  Dans la foulée de la signature de cet accord, le Ministre de l4economie te des Finances en compagnie des Conseillers de la primature, membres de son cabinet, des Directeurs, experts et consultants a eu
                  une entrevue avec le staff du Fonds de Solidarité Africain (FSA), une institution affiliée à l’Union Africaine.</p>

                <br />
                <p className="text-black">
                  Son Directeur General, Abdourahmane Diallo a présenté au Ministre Mourana et sa suite, son institution, la palette d’activités et de services offerts par le FSA.  Les échanges ont ensuite gravité autour des voies et moyens permettant à cette institution d’aider la Guinée dans la levée de fonds et surtout à garantir le bouclage des financements mobilisés à l’effet d’investir dans les infrastructures et dans l’appui au secteur privé. Le Ministre de l’Economie et
                  des Finances a exhorté le staff du FSA à travailler en synergie avec les hauts cadres pour trouver des outils et solutions efficaces et
                  innovant dans l’accompagnement de la mise en œuvre du Programme Simandou 2040 ainsi que des projets et programmes nouveaux.
                </p>
                <br />
                <p className="text-black">
                  Les rencontre informelles ont aussi été élargies aux délégations d’experts de ALSF et d’Afrexim Bank.</p>
                <br />
                <p className="text-black">
                  Dans la mi-journée le Ministre Gouverneur Mourana Soumah en compagnie de ses pairs avait assisté à la grande séance de clôture solennelle des Assemblées Annuelles de la BAD, dans la salle des Congrès de l’hôtel Ivoire Sofitel d’Abidjan.</p>
                <br />
                <p className="text-black">
                  Le clou de cette journée assez aura été, les rendez-vous que le Ministre Mourana Soumah a accordé à la Presse régionale et Internationale, présente à Abidjan.</p>
                <br />
                <p className="text-black">
                  Le Ministre Gouverneur pays pour la BAD a été reçu sur le plateau d’AFRICA 24 TV avant de conférer avec des journalistes de différents organes et agences.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
