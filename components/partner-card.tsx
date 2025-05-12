import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface Partner {
  id: number
  name: string
  logo: string
  description: string
  website: string
}

interface PartnerCardProps {
  partner: Partner
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="h-32 flex items-center justify-center mb-6">
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={160}
            height={80}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{partner.name}</h3>
        <p className="text-gray-600 text-center mb-4 text-sm">{partner.description}</p>
        <div className="text-center">
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            Visiter le site <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
