"use client"

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#D4A574] mb-4">Noble Motion Studios</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Capturing motion and creating legacy through cinematic storytelling. We specialize in videography,
              photography, and graphic design that brings your vision to life.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>📧</span>
                <span>hello@noblemotionstudios.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-[#D4A574] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Videography</span>
              </li>
              <li>
                <span className="text-gray-400">Photography</span>
              </li>
              <li>
                <span className="text-gray-400">Graphic Design</span>
              </li>
              <li>
                <span className="text-gray-400">Brand Identity</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Noble Motion Studios. All rights reserved.
            <br />
            <span className="text-[#D4A574]">Crafted with passion for cinematic excellence</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4A574] hover:text-black transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4A574] hover:text-black transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4A574] hover:text-black transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#D4A574] hover:text-black transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
