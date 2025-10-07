import { SectionHeader } from "@/components/SectionHeader";
import { IConBackground } from "@/components/ui/IconBackground"
import asfaltPattern from "@/assets/images/source_asfalt-light.png"
import compensationIcon from "@/assets/icons/compensationIcon.svg"
import lampIcon from "@/assets/icons/lampIcon.svg"
import planningIcon from "@/assets/icons/planningIcon.svg"
import balanceIcon from "@/assets/icons/balanceIcon.svg"
import Image from "next/image";

const benefits = [
  {
    icon: compensationIcon,
    title: "Competitive Compensation",
    description: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
  },
  {
    icon: lampIcon,
    title: "Health and Wellness",
    description: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
  },
  {
    icon: planningIcon,
    title: "Retirement Planning",
    description: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
  },
  {
    icon: balanceIcon,
    title: "Work-Life Balance",
    description: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
  }
]

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <SectionHeader description="At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth." >
            <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium">Our <span className="text-[#CAFF33]">Benefits</span></h2>
          </SectionHeader>
        </div>

        <div className="mt-10 flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-12">
          {benefits.map(benefit => (
            <div key={benefit.title} className="bg-gradient-to-r from-lime-300/2 from-1% to-[#1C1C1C] to-20% rounded-tl-2xl rounded-br-2xl rounded-tr-[40px] rounded-bl-[40px] border border-[#262626] p-6 lg:px-10 lg:py-10 relative">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url(${asfaltPattern.src})`,
              }} />
              <div className="flex items-center gap-3">
                <IConBackground>
                  <Image src={benefit.icon} alt="icon" />
                </IConBackground>
                <h3 className="text-lg lg:text-xl">{benefit.title}</h3>
              </div>
              <p className="font-light text-sm lg:text-base text-[#B3B3B3] mt-5">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


