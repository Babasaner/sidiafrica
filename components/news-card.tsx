"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
    >
      <Link href={slug} className="block overflow-hidden relative aspect-[16/9]">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>
        {category && (
          <Badge className="absolute top-3 right-3 bg-secondary text-primary hover:bg-secondary/90">{category}</Badge>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <Link href={slug} className="block group">
          <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-primary/80 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={slug}
          className="mt-auto text-primary font-medium hover:text-primary/80 transition-colors duration-300 inline-flex items-center text-sm"
        >
          Lire la suite
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
