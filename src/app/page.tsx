import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/home/Hero-section"
import { Products } from "@/components/sections/home/Products"
import { UseCases } from "@/components/sections/home/Use-cases"
import { Features } from "@/components/sections/home/Features"

export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <Products />
      <UseCases />
      <Features />

    </>
  )
}
