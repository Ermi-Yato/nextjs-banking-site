import { Button } from "@/components/ui/Button"
import checkingIcon from "@/assets/icons/checkingAcc.svg"
import savingIcon from "@/assets/icons/saving-icon.svg"
import loansIcon from "@/assets/icons/loans.svg"
import Image from "next/image"

const products = [
  {
    icon: checkingIcon,
    title: "Checking Accounts",
    description: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
  },
  {
    icon: savingIcon,
    title: "Saving Accounts",
    description: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
  },
  {
    icon: loansIcon,
    title: "Loans and Mortgages",
    description: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
  }
]

export const Products = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="md:flex md:gap-12">
          <div>
            <h2 className="font-medium text-3xl text-center md:text-left">Our <span className="text-[#CAFF33]">Products</span></h2>
            <p className="text-[#B3B3B3] font-light text-sm text-center mt-4 md:text-left">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="rounded-full border border-[#262626] bg-[#1C1C1C] inline-flex text-sm px-2 py-2 md:whitespace-nowrap items-center">
              <Button btnType="primary" size="sm">For Individuals</Button>
              <Button btnType="secondary" size="sm">For Businesses</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center gap-8 mt-12">
          {products.map(product => (
            <div key={product.title} className="border-b border-white/10 py-6 px-4">
              <div className="flex justify-center">
                <div className="inline-flex justify-center [mask-image:linear-gradient(to_bottom,black_10%,black_70%,transparent)] px-2 py-2 rounded-full bg-[#CAFF33]/5">
                  <div className="bg-gradient-to-b from-[#CAFF33]/20 to-[#CAFF33]/10 px-3 py-3 rounded-full border border-[#CAFF33]/20">
                    <Image src={product.icon} alt="icon" />
                  </div>
                </div>
              </div>
              <h2 className="text-xl text-center mt-6">{product.title}</h2>
              <p className="font-light text-sm text-center text-[#B3B3B3] mt-4">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
