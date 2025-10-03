import checkbox from "@/assets/icons/checkbox.svg"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import arrowImage from "@/assets/images/Abstract Design.svg"
import indian from "@/assets/images/indian.svg"
import usa from "@/assets/images/usd.svg"
import transaction from "@/assets/images/transaction.svg"
import icon from "@/assets/icons/Icon.svg"
import icon1 from "@/assets/icons/Icon-1.svg"
import icon2 from "@/assets/icons/Icon-2.svg"
import icon3 from "@/assets/icons/Icon-3.svg"

const currencyIcons = [
  icon, icon1, icon2, icon3
]

export const Hero = () => {
  return (
    <section className="py-6 overflow-x-clip">

      <div className="container flex flex-col md:grid md:grid-cols-2 gap-20">
        <div>
          <div className="flex justify-center md:justify-start">
            <div className="bg-[#262626] rounded-full h-11 inline-flex items-center px-4 gap-2">
              <Image src={checkbox} alt="checkbox icon" />
              <span className="text-sm font-light">No LLC Required, No Credit Check.</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl text-center md:text-left leading-12 font-medium mt-3 lg:max-w-xl">Welcome to YourBank Empowering Your <span className="text-[#CAFF33]">Financial Journey</span></h1>
          <p className="font-light text-sm md:text-base text-[#E4E4E7]/80 text-center md:text-left leading-[150%] mt-3">
            At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </p>
          <div className="flex justify-center md:justify-start mt-10">
            <Button btnType="primary" size="lg" >Open Account</Button>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex justify-center mt-12 relative">
            <Image src={arrowImage} alt="arrow Image" className="absolute -right-20 lg:-right-36 -top-10 lg:-top-6 -z-10 size-72" />
            <div className="border border-white/10 p-5 text-xs rounded-lg bg-[#1A1A1A]">
              <Image src={transaction} alt="" />
              <p className="mt-4 font-medium">Money Exchange</p>
              <div className="grid grid-cols-2 grid-rows-2 bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 items-center mt-4">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex gap-2 items-center">
                    <Image src={indian} alt="indian" />
                    <span>INR</span>
                  </div>
                  <span className="font-light">Indian Rupees</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2">
                    <Image src={usa} alt="usa" />
                    <span>USD</span>
                  </div>
                  <span className="font-light">United States Dollar</span>
                </div>
                <span className="font-medium">5,0000</span>
                <span className="font-medium">12.00</span>
              </div>
              <div className="flex justify-center items-center bg-[#22251B] rounded-full h-8 mt-4">
                <span className="text-[#D1FF4C] font-medium">Exchange</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4 -mr-8">
            <div className="inline-flex items-center bg-[#22251B] px-3 py-2 rounded-full gap-2">
              <span className="text-xs font-light">Supported Currency</span>
              <div className="flex bg-[#191919] gap-1 px-1 py-1 rounded-full">
                {currencyIcons.map((icon, idx) => (
                  <Image src={icon} key={idx} alt="icons" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
