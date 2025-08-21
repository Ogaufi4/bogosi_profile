import { Card, CardContent } from "@/app/components/ui/card"
import { Video, Camera, Palette } from "lucide-react"

export function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  const serviceBoxes = [
    {
      icon: <Video className="w-8 h-8 text-[#D4A574]" />,
      title: "Videography",
      description: "Corporate events, weddings, music videos, short films",
    },
    {
      icon: <Camera className="w-8 h-8 text-[#D4A574]" />,
      title: "Photography",
      description: "Weddings, corporate, nightlife, portrait sessions",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#D4A574]" />,
      title: "Graphic Design",
      description: "Branding, visual identity, marketing materials",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #000000)",
      }}
    >
      {/* Glassy Blur Effect */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full"
        style={{
          background: "rgba(212, 165, 116, 0.3)", // Brownish color
          filter: "blur(100px)",
          opacity: 0.6,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
        style={{
          background: "rgba(212, 165, 116, 0.3)", // Brownish color
          filter: "blur(100px)",
          opacity: 0.6,
        }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Creative Media Brand Defining{" "}
              <span className="text-[#D4A574]">Excellence</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Noble Motion Studios is a premier creative media brand
                specializing in videography, photography, and graphic design. We
                believe in the power of visual storytelling to capture moments
                that matter and create lasting impressions.
              </p>

              <p>
                Our passion lies in transforming your vision into compelling
                visual narratives. Whether its the intimate moments of a wedding,
                the energy of a corporate event, the artistry of a music video,
                or the creativity of a short film, we approach every project with
                dedication and artistic excellence.
              </p>

              <p>
                From concept to completion, we work closely with our clients to
                ensure every frame tells your unique story with cinematic quality
                and emotional depth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#D4A574] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Service Boxes */}
          <div className="space-y-4">
            {serviceBoxes.map((service, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:border-[#D4A574] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
