"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Mail, MessageCircle, Instagram, MapPin, Clock, Users } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #000000)",
      }}
    >
      {/* Glassy Blur Effect */}
      <div
        className="absolute top-2 right-2 w-32 h-32 rounded-full"
        style={{
          background: "rgba(212, 165, 116, 0.3)", // Brownish color
          filter: "blur(40px)",
          opacity: 0.6,
        }}
      ></div>
      <div
        className="absolute bottom-2 left-2 w-32 h-32 rounded-full"
        style={{
          background: "rgba(212, 165, 116, 0.3)", // Brownish color
          filter: "blur(40px)",
          opacity: 0.6,
        }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {"Let's Create"} <span className="text-[#D4A574]">Together</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {"Ready to bring your vision to life? Get in touch and let's discuss your project"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#D4A574] hover:bg-[#B8956A] text-black font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Send Message
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-800 hover:border-[#D4A574] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-[#D4A574] font-medium">hello@noblemotionstudios.com</p>
                      <p className="text-gray-400 text-sm">Send us an email</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-[#D4A574] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                      <p className="text-[#D4A574] font-medium">+(267) 7123-4567</p>
                      <p className="text-gray-400 text-sm">Message us directly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-[#D4A574] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Instagram</h4>
                      <p className="text-[#D4A574] font-medium">@noblemotionstudios</p>
                      <p className="text-gray-400 text-sm">Follow our work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-[#D4A574] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Studio Location</h4>
                      <p className="text-white">123 Creative District</p>
                      <p className="text-white">Los Angeles, CA 90210</p>
                      <p className="text-white">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Response Time</h4>
                <p className="text-gray-400 text-sm">Within 24 hours</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Availability</h4>
                <p className="text-gray-400 text-sm">Mon - Fri, 9AM - 6PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
