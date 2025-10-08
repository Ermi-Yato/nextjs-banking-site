import { IConBackground } from "@/components/ui/IconBackground"
import asfaltImage from "@/assets/images/source_asfalt-light.png"
import appsGridIcon from "@/assets/icons/appsGridIcon.svg"
import stackedLayersIcon from "@/assets/icons/layersIcon.svg"
import sparkleIcon from "@/assets/icons/sparkleIcon.svg"
import rupeeIcon from "@/assets/icons/rupeeIcon.svg"
import Image from "next/image"

const protectionMethods = [
  {
    icon: appsGridIcon,
    title: "Secure Online Banking Platform",
    description: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission."
  },
  {
    icon: stackedLayersIcon,
    title: "Multi-Factor Authentication",
    description: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account."
  },
  {
    icon: sparkleIcon,
    title: "Fraud Monitoring",
    description: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind."
  },
  {
    icon: rupeeIcon,
    title: "Secure Mobile Banking",
    description: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."
  }
]

export default function Protection() {
  return (
    <section className="pt-20">
      <div className="container">
        <div>
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium">How We <span className="text-[#CAFF33]">Protect You</span></h2>
          <p className="text-center lg:text-left text-[#B3B3B3] font-light text-sm lg:text-base mt-4 lg:max-w-5xl">At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.</p>
        </div>

        <div className="relative rounded-4xl bg-gradient-to-r lg:from-lime-300/2 from-2% lg:to-[#1C1C1C] to-20% lg:py-10 lg:mt-14">
          <div className="mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:max-w-6xl lg:mx-auto">
            {protectionMethods.map(method => (
              <div key={method.title} className="bg-gradient-to-r from-lime-300/2 from-1% to-[#1C1C1C] to-20% rounded-2xl border border-[#262626] p-6 lg:px-10 lg:py-10 relative">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url(${asfaltImage.src})`,
                }} />
                <div className="flex items-center gap-3">
                  <IConBackground>
                    <Image src={method.icon} alt="icon" />
                  </IConBackground>
                  <h3 className="text-lg lg:text-xl">{method.title}</h3>
                </div>
                <p className="font-light text-sm lg:text-base text-[#B3B3B3] mt-5">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
