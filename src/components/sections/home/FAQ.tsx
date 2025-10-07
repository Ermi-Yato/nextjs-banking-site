import { SectionHeader } from "@/components/SectionHeader"
import { Button } from "@/components/ui/Button"
import chevronArrow from "@/assets/icons/keyboardArrowDown.svg"
import Image from "next/image"

const faqs = [
  {
    question: "How do I open an account with YourBank?",
    answer: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
  },
  {
    question: "What documents do I need to provide to apply for a loan?",
    answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
  },
  {
    question: "How can I access my accounts online?",
    answer: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."
  },
  {
    question: "Are my transactions and personal information secure?",
    answer: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."
  }
]

export const FAQ = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div>
          <SectionHeader
            description="Still you have any questions? Contact our Team via support@yourbank.com">
            <h2 className="font-medium text-3xl lg:text-4xl text-center lg:text-left leading-12"><span className="text-[#CAFF33]">Frequently</span> Asked Questions</h2>
          </SectionHeader>
        </div>

        <div className="mt-12 lg:mt-20 flex flex-col gap-5 [mask-image:linear-gradient(to_top,transparent,black_40%,black)] lg:grid lg:grid-cols-2 lg:grid-rows-2">
          {faqs.map(faq => (
            <div key={faq.question} className="p-8 border border-[#262626] rounded-xl">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <hr className="text-[#262626] mt-5" />
              <p className="font-light text-sm mt-5 lg:text-base text-[#B3B3B3]">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button btnType="secondary" size="lg" className="text-sm border border-[#262626] inline-flex items-center gap-1">
            <span>Load All FAQ&apos;s</span>
            <Image src={chevronArrow} alt="" className="mt-0.5" />
          </Button>
        </div>

      </div>
    </section>
  )
}
