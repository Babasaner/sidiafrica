import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  company: string
  image: string
}

interface PartnerTestimonialProps {
  testimonial: Testimonial
}

export default function PartnerTestimonial({ testimonial }: PartnerTestimonialProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 relative">
        <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200 opacity-50" />
        <div className="pt-6">
          <p className="text-gray-600 italic mb-6 relative z-10">{testimonial.quote}</p>

          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">{testimonial.author}</h4>
              <p className="text-sm text-gray-600">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
