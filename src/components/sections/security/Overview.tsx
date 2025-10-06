import Image from "next/image";
import securityImage from "@/assets/images/Image.svg"
import abstractDesign from "@/assets/images/Abstract Design (3).svg"

export default function Overview() {
  return (
    <section className="py-7">
      <div className="container">
        <div className="bg-[#1C1C1C] px-4 pt-4 lg:p-10 rounded-2xl relative z-0 lg:grid lg:grid-cols-2">
          <Image src={abstractDesign} alt="abstract pattern design" className="absolute right-0 top-0 -z-10 lg:size-72" />
          <div className="lg:order-last lg:-ml-10">
            <Image src={securityImage} alt="" />
          </div>
          <div className="bg-[#191919] relative -top-8 lg:-top-0 p-6 lg:p-16 rounded-2xl lg:rounded-br-[60px] lg:rounded-tr-none flex flex-col gap-5 lg:h-fit lg:w-[658px]">
            <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-medium lg:leading-16">Your Security is Our <span className="text-[#CAFF33]">Top Priority</span></h2>
            <p className="font-light text-[#B3B3B3] text-sm lg:text-base text-center lg:text-left">At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
