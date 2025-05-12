import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface InvestmentOpportunityCardProps {
  title: string
  description: string
  icon: ReactNode
  investmentRange: string
  sector: string
}

export default function InvestmentOpportunityCard({
  title,
  description,
  icon,
  investmentRange,
  sector,
}: InvestmentOpportunityCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            {investmentRange}
          </Badge>
          <Badge variant="outline" className="bg-secondary/10 text-primary border-secondary/20">
            {sector}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
