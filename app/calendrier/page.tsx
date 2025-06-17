import InteractiveCalendar from "@/components/interactive-calendar"

export default function CalendarPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-sidi-blue text-white relative">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CALENDRIER DU PROGRAMME</h1>
          <p className="text-xl max-w-3xl mb-6">
            Consultez le programme complet du Salon Guinée Invest du 05 juillet 2025 dans ce calendrier interactif. Cliquez
            sur un événement pour voir tous les détails.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-8">Programme du 05 juillet 2025</h2>
            <p className="text-lg mb-8">
              Le Salon Guinée Invest se déroulera sur une journée intensive avec des panels thématiques, des
              opportunités de networking et des présentations de haut niveau. Explorez le programme complet ci-dessous
              et cliquez sur chaque session pour plus de détails.
            </p>

            <InteractiveCalendar />

            <div className="mt-12 text-center">
              <p className="text-lg mb-4">
                Ne manquez pas cette occasion unique de participer au plus grand salon économique de Guinée en 2025.
              </p>
              <a
                href="/participer"
                className="inline-block px-8 py-3 bg-sidi-gold text-sidi-dark font-semibold rounded-md hover:bg-sidi-gold/90 transition-colors"
              >
                S'inscrire au salon
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
