import manageIcon from "@/assets/icons/managingIcon.svg"
import savingIcon from "@/assets/icons/saving-icon.svg"
import homeIcon from "@/assets/icons/home.svg"
import educationIcon from "@/assets/icons/education.svg"
import { UseCaseComponent } from "@/components/UseCaseComponent"
import abstractDesign from "@/assets/images/Abstract Design (2).svg"
import abstractDesignTwo from "@/assets/images/Abstract Design (3).svg"
import { SectionHeader } from "@/components/SectionHeader"

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

export type useCasesType = typeof useCases

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

export type statsType = typeof stats

const useCasesTwo = [
  {
    icon: manageIcon,
    usecase: "Startups and Entrepreneurs"
  },
  {
    icon: savingIcon,
    usecase: "Cash Flow Management"
  },
  {
    icon: homeIcon,
    usecase: "Business Expansion"
  },
  {
    icon: educationIcon,
    usecase: "Payment Solutions"
  }
]

const statsTwo = [
  {
    percentage: "65%",
    caption: "Cash Flow Management"
  },
  {
    percentage: "70%",
    caption: "Drive Business Expansion"
  },
  {
    percentage: "45%",
    caption: "Streamline payrol processing"
  }
]

const useCasesSections = [
  {
    title: "For Individuals",
    description: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers."
  }
]

const useCasesSectionsTwo = [
  {
    title: "For Business",
    description: " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them."
  }
]

export type useCasesSectionsType = typeof useCasesSections

export const UseCases = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div>

          <SectionHeader
            description="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions" >
            <h2 className="text-[#CAFF33] font-medium text-3xl lg:text-4xl text-center lg:text-left">Use Cases</h2>
          </SectionHeader>
          <UseCaseComponent useCases={useCases} stats={stats} useCasesSections={useCasesSections} backgroundImage={abstractDesign} />
          <UseCaseComponent useCases={useCasesTwo} stats={statsTwo} useCasesSections={useCasesSectionsTwo} backgroundImage={abstractDesignTwo} imageClassName="absolute right-0 size-36 lg:size-52" className="lg:order-last" />

        </div>
      </div>
    </section>
  )
}
