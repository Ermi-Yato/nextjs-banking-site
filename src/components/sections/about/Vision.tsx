import { SectionHeader } from "@/components/SectionHeader"
import successImage from "@/assets/images/financial-successImage.svg"
import humanEye from "@/assets/images/humanEye.svg"
import asfaltPattern from "@/assets/images/source_asfalt-light.png"
import abstractImage from "@/assets/images/Abstract Design.png"
import Image from "next/image"

const missionAndVision = [
  {
    title: "Mission",
    image: successImage,
    content: "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams."
  },
  {
    title: "Vision",
    image: humanEye,
    content: "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction."
  }
]

export const Vision = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader description="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.">
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium text-[#CAFF33]">Mission & Vision</h2>
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-12">
          {missionAndVision.map((item, index) => (
            <div key={index}>
              <div className="px-5 pt-5 rounded-tl-[50px] rounded-tr-[50px] border border-[#262626] border-b-transparent relative overflow-hidden z-0">
                <Image src={item.image} alt="success Image" />
              </div>
              <div className="pt-8 border-t border-[#CAFF33]">
                <h3 className="text-[26px] text-center lg:text-left font-medium">{item.title}</h3>
                <p className="font-light text-sm text-[#B3B3B3] text-center lg:text-left mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
