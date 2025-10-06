import { Button } from "@/components/ui/Button"
import abstractDesign from "@/assets/images/Abstract Design (2).svg"
import asfaltPattern from "@/assets/images/source_asfalt-light.png"
import Image from "next/image"

export const Cta = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="border border-[#262626] bg-[#1C1C1C] rounded-2xl p-7 lg:p-14 overflow-hidden relative z-0">
          <div className="absolute inset-0 opacity-30 -z-10" style={{
            backgroundImage: `url(${asfaltPattern.src})`,
          }}></div>
          <Image src={abstractDesign} alt="" className="absolute top-0 -left-1 size-44" />

          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:flex lg:flex-col">
              <h3 className="text-2xl text-center lg:text-left">Start your financial journey with <span className="text-[#CAFF33]">YourBank today!</span></h3>
              <p className="text-[#B3B3B3] font-light text-center lg:text-left mt-4 text-sm lg:text-base lg:max-w-5xl">Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>

            <div className="flex justify-center whitespace-nowrap">
              <Button btnType="primary" size="lg" dropShadow="yes" className="mt-6">Open Account</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
