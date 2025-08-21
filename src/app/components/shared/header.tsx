"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#D4A574]">Noble Motion Studios</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-[#D4A574] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-[#D4A574] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-[#D4A574] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-[#D4A574] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#D4A574] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-[#D4A574] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-[#D4A574] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-[#D4A574] transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-[#D4A574] transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-[#D4A574] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
