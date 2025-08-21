"use client"

import { useState } from "react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects")

  const filters = ["All Projects", "Weddings", "Corporate", "Nightlife", "Music Videos", "Design"]

  const projects = [
    {
      id: 1,
      title: "Sunset Wedding",
      description: "Romantic outdoor wedding photography capturing golden hour moments",
      category: "Weddings",
      serviceType: "PHOTOGRAPHY",
      image: "/romantic-wedding-sunset.png",
    },
    {
      id: 2,
      title: "Corporate Summit 2024",
      description: "Professional event coverage for annual corporate summit",
      category: "Corporate",
      serviceType: "VIDEOGRAPHY",
      image: "/modern-corporate-conference-room.png",
    },
    {
      id: 3,
      title: "Nightlife Series",
      description: "Dynamic nightclub photography showcasing energy and atmosphere",
      category: "Nightlife",
      serviceType: "PHOTOGRAPHY",
      image: "/placeholder-4qwvw.png",
    },
    {
      id: 4,
      title: "Tech Brand Identity",
      description: "Complete branding package for emerging tech startup",
      category: "Design",
      serviceType: "DESIGN",
      image: "/placeholder-sxiu0.png",
    },
    {
      id: 5,
      title: "Music Video Production",
      description: "Cinematic music video with creative visual storytelling",
      category: "Music Videos",
      serviceType: "VIDEOGRAPHY",
      image: "/cinematic-music-video.png",
    },
    {
      id: 6,
      title: "Corporate Headshots",
      description: "Professional portrait sessions for executive team",
      category: "Corporate",
      serviceType: "PHOTOGRAPHY",
      image: "/corporate-headshot-studio.png",
    },
    {
      id: 7,
      title: "Wedding Film",
      description: "Emotional wedding videography telling the couple's story",
      category: "Weddings",
      serviceType: "VIDEOGRAPHY",
      image: "/cinematic-wedding-emotional-moment.png",
    },
    {
      id: 8,
      title: "Restaurant Branding",
      description: "Visual identity and marketing materials for upscale restaurant",
      category: "Design",
      serviceType: "DESIGN",
      image: "/elegant-restaurant-branding.png",
    },
  ]

  const filteredProjects =
    activeFilter === "All Projects" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="portfolio"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #000000, #D4A574)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#D4A574]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our featured work showcasing the art of visual storytelling
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#D4A574] text-black hover:bg-[#B8956A]"
                  : "border-gray-600 text-gray-400 hover:border-[#D4A574] hover:text-[#D4A574] bg-transparent"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#D4A574] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/cinematic-wedding-emotional-moment.png"}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={true}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.serviceType}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
