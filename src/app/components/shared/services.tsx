import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Video, Camera, Palette } from "lucide-react"
import { Button } from "../ui/button"

export function Services() {
  const services = [
    {
      icon: <Video className="w-12 h-12 text-[#D4A574]" />,
      title: "Videography",
      subtitle: "Cinematic Visual Storytelling",
      description:
        "Professional video production services including corporate events, wedding films, music videos, and short documentaries. We capture your story with cinematic quality and emotional depth.",
      features: [
        "4K/8K Video Production",
        "Drone Cinematography",
        "Multi-Camera Coverage",
        "Professional Color Grading",
        "Full Post-Production",
      ],
      price: "$2,500",
      badge: "Most Popular",
    },
    {
      icon: <Camera className="w-12 h-12 text-[#D4A574]" />,
      title: "Photography",
      subtitle: "Capturing Moments That Matter",
      description:
        "Expert photography services for weddings, corporate events, portraits, and commercial projects. Every shot is crafted to tell your unique story with artistic vision.",
      features: [
        "High-Resolution Photography",
        "Professional Lighting Setup",
        "Advanced Photo Editing",
        "Same-Day Preview Gallery",
        "Digital & Print Delivery",
      ],
      price: "$1,200",
    },
    {
      icon: <Palette className="w-12 h-12 text-[#D4A574]" />,
      title: "Graphic Design",
      subtitle: "Visual Identity & Branding",
      description:
        "Complete branding and design solutions including logo design, brand identity, marketing materials, and digital assets. We create visuals that resonate with your audience.",
      features: [
        "Logo & Brand Identity",
        "Marketing Collateral",
        "Digital Asset Creation",
        "Brand Guidelines",
        "Print Design Services",
      ],
      price: "$800",
    },
  ]

  return (
    <section
      id="services"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #000000, #D4A574)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#D4A574]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional packages tailored to bring your vision to life with excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-[#D4A574] transition-all duration-300 relative"
            >
              {service.badge && (
                <div className="absolute -top-3 left-6 bg-[#D4A574] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  {service.badge}
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                <p className="text-[#D4A574] font-medium">{service.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-3">{"What's Included:"}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-[#D4A574] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="text-center">
                    <Button className="bg-blue-600">send Quote</Button>
                    <div className="text-sm text-gray-500">Custom packages available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services