import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

interface SpeakerCardProps {
  name: string
  title: string
  image?: string
}

export default function SpeakerCard({ name, title, image }: SpeakerCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {image ? (
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-primary" />
            </div>
          )}
          <div>
            <h3 className="font-bold text-lg line-clamp-2">{name}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{title}</p>
      </CardContent>
    </Card>
  )
}
