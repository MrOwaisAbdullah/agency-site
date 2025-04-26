"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  image: string
  description: string
  link: string
  buttonText?: string
}

export default function ServiceCard({ image, description, link, buttonText="Read More" }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="font-poppins group overflow-hidden border-0 text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#3a69ff]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[1220/686] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt="Service"
            width={500}
            height={300}
            className={cn(
              "h-full w-full object-cover transition-transform duration-700",
              isHovered ? "scale-105" : "scale-100",
            )}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#212428] to-transparent opacity-70" />
      </div>

      <CardContent className="p-6">
        <p className="mb-4 text-[#e5e7eb]">{description}</p>

        <Link href={link} className="group inline-flex items-center text-[#3a69ff] transition-all hover:text-white">
          <span className="mr-2 font-medium">{buttonText}</span>
          <ArrowRight
            className={cn("h-4 w-4 transition-all duration-300", isHovered ? "translate-x-1" : "translate-x-0")}
          />
        </Link>
      </CardContent>
    </Card>
  )
}
