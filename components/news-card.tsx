import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category?: string
}

export default function NewsCard({ title, excerpt, date, image, slug, category }: NewsCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <div className="absolute top-3 left-3 bg-white/90 text-primary text-xs font-bold px-2 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={slug}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link href={slug} className="text-primary font-medium hover:underline inline-flex items-center">
          Lire la suite
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
}
