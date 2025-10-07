import { Footer } from "@/components/layout/Footer";
import Benefits from "@/components/sections/careers/Benefits";
import Jobs from "@/components/sections/careers/Jobs";
import Overview from "@/components/sections/careers/Overview";
import Values from "@/components/sections/careers/Values";
import { Cta } from "@/components/sections/home/CTA";
import { FAQ } from "@/components/sections/home/FAQ";

export default function Home() {
  return (
    <>

      <Overview />
      <Values />
      <Benefits />
      <Jobs />
      <FAQ />
      <Cta />
      <Footer />

    </>
  )
}
