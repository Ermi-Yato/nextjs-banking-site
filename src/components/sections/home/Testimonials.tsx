import { Button } from "@/components/ui/Button"
import quoteICon from "@/assets/icons/quoteIcon.svg"
import forwardIcon from "@/assets/icons/forwardIcon.svg"
import backwardICon from "@/assets/icons/backwardIcon.svg"
import Image from "next/image"

const testimonials = [
  {
    name: "Sara T",
    feedback: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze."
  },
  {
    name: "John D",
    feedback: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable."
  },
  {
    name: "Emily G",
    feedback: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind."
  }
]

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="lg:flex lg:flex-col">
          <h2 className="font-medium text-3xl text-center lg:text-left">Our <span className="text-[#CAFF33]">Testimonials</span></h2>
          <div className="lg:flex lg:items-center lg:justify-between">
            <p className="text-[#B3B3B3] font-light text-sm lg:text-base text-center mt-4 lg:text-left lg:max-w-4xl">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.</p>
            <div className="flex justify-center mt-6">
              <div className="rounded-full border border-[#262626] bg-[#1C1C1C] inline-flex text-sm px-2 py-2 md:whitespace-nowrap items-center">
                <Button btnType="primary" size="sm">For Individuals</Button>
                <Button btnType="secondary" size="sm">For Businesses</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:justify-center mt-12 p-5  border border-[#262626] rounded-xl overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
          <div className="flex gap-12 lg:gap-24">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="flex-none -translate-x-[365px] lg:-translate-x-0">
                <div className="flex flex-row justify-between items-center gap-4">
                  <hr className="w-full text-[#262626]" />
                  <Image src={quoteICon} alt="icon" />
                  <hr className="w-full text-[#262626]" />
                </div>
                <p className="text-sm lg:text-base text-center mt-6 lg:mt-12 max-w-xs mx-auto">{testimonial.feedback}</p>
                <h5 className="text-[#CAFF33] font-medium text-center mt-6 lg:mt-12">{testimonial.name}</h5>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-5">
          <div className="size-12 rounded-full bg-[#1C1C1C] border border-[#262626] flex justify-center items-center">
            <Image src={backwardICon} alt="icon" />
          </div>
          <div className="size-12 rounded-full bg-[#1C1C1C] border border-[#262626] flex justify-center items-center">
            <Image src={forwardIcon} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}
