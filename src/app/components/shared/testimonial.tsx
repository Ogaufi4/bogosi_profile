"use client"

import { useState } from "react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "Corporate Event",
      rating: 5,
      text: "Noble Motion Studios captured our annual summit with incredible professionalism and artistic vision. The final video exceeded all our expectations and perfectly showcased our company culture. Their attention to detail and ability to work seamlessly with our event flow was remarkable.",
      serviceType: "Videography",
    },
    {
      name: "Michael Rodriguez",
      title: "Creative Director",
      company: "Brand Launch",
      rating: 5,
      text: "Working with Noble Motion Studios on our brand identity was transformative. They didn't just create a logo - they crafted a complete visual story that resonates with our audience. The entire branding package elevated our market presence significantly.",
      serviceType: "Design",
    },
    {
      name: "Emily Johnson",
      title: "Bride",
      company: "Wedding Photography",
      rating: 5,
      text: "Our wedding photos are absolutely breathtaking! The team captured every precious moment with such artistry and emotion. Looking at our photos brings back all the joy and love from our special day. We couldn't be happier with the results.",
      serviceType: "Photography",
    },
  ]

  const stats = [
    { number: "150+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5★", label: "Average Rating" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
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
            Client <span className="text-[#D4A574]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with Noble Motion Studios
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-black border-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#D4A574]">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-[#D4A574] font-medium">{testimonials[currentTestimonial].title}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
                <div className="bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].serviceType}
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4A574] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-8">
                {testimonials[currentTestimonial].text}
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-[#D4A574]" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-gray-600 text-gray-400 hover:border-[#D4A574] hover:text-[#D4A574] bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-gray-600 text-gray-400 hover:border-[#D4A574] hover:text-[#D4A574] bg-transparent"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A574] mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
