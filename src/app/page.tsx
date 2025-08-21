import { Hero } from "@/app/components/shared/hero"
import { Services } from "@/app/components/shared/services"
import { About } from "@/app/components/shared/about"
import { Portfolio } from "@/app/components/shared/portfolio"
import { Testimonials } from "@/app/components/shared/testimonial"
import { Contact } from "@/app/components/shared/contact"
import { Footer } from "@/app/components/shared/footer"
import { Header } from "@/app/components/shared/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
