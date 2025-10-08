import { SectionHeader } from "@/components/SectionHeader"
import uprightArrow from "@/assets/icons/uprightIcon.svg"
import Image from "next/image"

const featureTags = [
  "Online Banking",
  "Financial Tools",
  "Customer Support"
]

const features = [
  {
    title: "24/7 Account Access",
    description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
  },
  {
    title: "Mobile Banking App",
    description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
  },
  {
    title: "Secure Transactions",
    description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
  },
  {
    title: "Bill Pay and Transfers",
    description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
  }
]

export const Features = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div>
          <SectionHeader
            description="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience" >
            <h2 className="font-medium text-3xl lg:text-4xl text-center lg:text-left">Our <span className="text-[#CAFF33]">Features</span></h2>
          </SectionHeader>
        </div>
        <div className="mt-12 flex flex-col gap-5 lg:flex-row overflow-x-clip">
          <div className="mx-auto">
            <div className="bg-[#1C1C1C] px-4 py-6 lg:p-8 rounded-xl flex gap-4 lg:flex-col w-fit h-fit">
              {featureTags.map((feature, idx) => (
                <div key={idx} className={idx === 0 ? "border border-[#262626] px-5 py-3 rounded-full whitespace-nowrap text-[#CAFF33] bg-[#1A1A1A]" : "border border-[#262626] px-5 py-3 rounded-full whitespace-nowrap"}>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2">
            {features.map(feature => (
              <div key={feature.title} className="bg-[#1C1C1C] border border-[#262626] rounded-xl p-8">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{feature.title}</span>
                  <Image src={uprightArrow} alt="arrow icon" />
                </div>
                <p className="text-sm lg:text-base font-light text-[#B3B3B3] mt-5">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
