import { Hero } from "@/components/sections/home/Hero-section"
import { Products } from "@/components/sections/home/Products"
import { UseCases } from "@/components/sections/home/Use-cases"
import { Features } from "@/components/sections/home/Features"
import { FAQ } from "@/components/sections/home/FAQ"
import { Testimonials } from "@/components/sections/home/Testimonials"
import { Cta } from "@/components/sections/home/CTA"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>

      <Hero />
      <Products />
      <UseCases />
      <Features />
      <FAQ />
      <Testimonials />
      <Cta />
      <Footer />

    </>
  )
}
