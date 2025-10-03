import manageIcon from "@/assets/icons/managingIcon.svg"
import savingIcon from "@/assets/icons/saving-icon.svg"
import homeIcon from "@/assets/icons/home.svg"
import educationIcon from "@/assets/icons/education.svg"
import abstractDesign from "@/assets/images/Abstract Design (2).svg"
import { IConBackground } from "@/components/ui/IconBackground"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

const useCases = [
  {
    icon: manageIcon,
    usecase: "Managing Personal Finances"
  },
  {
    icon: savingIcon,
    usecase: "Saving for the Future"
  },
  {
    icon: homeIcon,
    usecase: "Homeownership"
  },
  {
    icon: educationIcon,
    usecase: "Education Funding"
  }
]

const stats = [
  {
    percentage: "78%",
    caption: "Secure Retirement Planning"
  },
  {
    percentage: "63%",
    caption: "Manageable Debt Consolidation"
  },
  {
    percentage: "91%",
    caption: "Reducing financial burdens"
  }
]

export const UseCases = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div>
          <h2 className="text-[#CAFF33] text-3xl lg:text-4xl text-center lg:text-left font-medium">Use Cases</h2>
          <p className="text-center lg:text-left text-[#B3B3B3] font-light text-sm lg:text-base mt-4">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions.</p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mt-4">
            <div>
              <div className="bg-[#1C1C1C] p-5 lg:p-7 rounded-2xl mt-12 grid grid-cols-2 grid-rows-2 gap-3 relative">
                <Image src={abstractDesign} alt="" className="absolute size-30 lg:size-52 z-0" />
                {useCases.map(useCase => (
                  <div key={useCase.usecase} className="bg-[#191919] border border-[#262626] py-4 lg:py-8 lg:px-12 px-3 text-sm flex flex-col justify-center gap-4 rounded-2xl z-10">
                    <IConBackground>
                      <Image src={useCase.icon} alt="icon" />
                    </IConBackground>
                    <span className="text-center">{useCase.usecase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>

              <h3 className="font-medium text-xl text-center lg:text-left mt-10">For Individuals</h3>
              <p className="text-center lg:text-left text-[#B3B3B3] font-light mt-4 text-sm lg:text-base">For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.</p>

              <div className="mt-14 lg:flex lg:flex-row">
                {stats.map(stat => (
                  <div key={stat.caption} className="flex flex-col justify-center lg:items-start items-center py-8 max-w-xs mx-auto lg:gap-3">
                    <span className="text-[#CAFF33] text-4xl">{stat.percentage}</span>
                    <span className="font-light text-sm lg:text-base text-[#B3B3B3]">{stat.caption}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start mt-12">
                <Button btnType="secondary" size="lg" className="border-[#262626] border">Learn More</Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
