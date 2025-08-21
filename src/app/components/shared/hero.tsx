"use client"

import { Button } from "@/app/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/elegant-restaurant-branding.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Capturing Motion.</span>
          <br />
          <span className="text-[#D4A574]">Creating Legacy.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Cinematic storytelling through the lens of creativity. Bringing your vision to life with professional
          videography, photography, and design.
        </p>

        <Button
          onClick={scrollToContact}
          className="bg-[#D4A574] hover:bg-[#B8956A] text-black font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book a Shoot
        </Button>
      </div>
    </section>
  )
}
