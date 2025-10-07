import { StaticImageData } from "next/image"
import Image from "next/image"
import { PropsWithChildren } from "react"
import abstractDesign from "@/assets/images/Abstract Design (3).svg"

type Props = {
  heroImage: StaticImageData,
  content: string,
}

export default function OverviewComponent({ heroImage, content, children }: PropsWithChildren<Props>) {
  return (
    <section className="py-7">
      <div className="container">
        <div className="bg-[#1C1C1C] px-4 pt-4 lg:p-10 rounded-2xl relative z-0 lg:grid lg:grid-cols-2">
          <Image src={abstractDesign} alt="abstract pattern design" className="absolute right-0 top-0 -z-10 lg:size-72" />
          <div className="lg:order-last lg:-ml-10">
            <Image src={heroImage} alt="" />
          </div>
          <div className="bg-[#191919] relative -top-8 lg:-top-0 p-6 lg:p-16 rounded-2xl lg:rounded-br-[60px] lg:rounded-tr-none flex flex-col gap-5 lg:h-fit lg:w-[658px]">
            {children}
            <p className="font-light text-[#B3B3B3] text-sm lg:text-base text-center lg:text-left">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
