// ========================================
// About page: Missions and Visions section
// ========================================

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
    <section className="py-20 lg:py-32">
      <div className="container">
        <SectionHeader description="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.">
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium text-[#CAFF33]">Mission & Vision</h2>
        </SectionHeader>

        {/* missions and visions section */}
        <div className="mt-16 flex flex-col gap-20">
          {missionAndVision.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image container */}
              <div className="relative px-5 pt-5 lg:px-16 lg:pt-16 rounded-tl-[50px] rounded-tr-[50px] border border-[#262626] border-b-transparent overflow-hidden z-0 text-gray-500">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `url(${asfaltPattern.src})`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                  }}
                />
                <Image
                  src={abstractImage}
                  alt=""
                  className="absolute -top-28 -left-2 w-[400px] h-[500px] md:w-[750px] md:h-[750px] object-cover -z-10"
                />
                <Image
                  src={item.image}
                  alt={`${item.title} Image`}
                  className="relative z-10 w-full object-cover"
                />
              </div>

              {/* Text container */}
              <div
                className={`pt-8 lg:pt-0 h-fit ${index % 2 === 0
                  ? "lg:border-l lg:border-[#CAFF33] lg:border-t-transparent lg:pl-12"
                  : "lg:border-r lg:border-[#CAFF33] lg:border-t-transparent lg:pr-12"
                  } border-t lg:border-t-transparent border-t-[#CAFF33]`}
              >
                <h3 className="text-[26px] lg:text-[32px] text-center lg:text-left font-medium">
                  {item.title}
                </h3>
                <p className="font-light text-sm lg:text-base text-[#B3B3B3] text-center lg:text-left mt-3">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  )
}
