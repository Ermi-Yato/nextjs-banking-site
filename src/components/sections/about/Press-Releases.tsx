// =======================================
// About page: Press Releases section
// =======================================

import { SectionHeader } from "@/components/SectionHeader"
import imageOne from "@/assets/images/customerLoyalty.png"
import imageTwo from "@/assets/images/branchBuilding.png"
import imageThree from "@/assets/images/partnersSigning.png"
import imageFour from "@/assets/images/bankingInitiative.png"
import Image from "next/image"

const news = [
  {
    image: imageOne,
    newsTitle: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    location: "Location: India",
    date: "Date: 06/11/2024",
    newsContent: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."
  },
  {
    image: imageTwo,
    newsTitle: "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "Location: India",
    date: "Date: 12/11/2024",
    newsContent: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community."
  },
  {
    image: imageThree,
    newsTitle: "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "Location: India",
    date: "Date: 24/12/2024",
    newsContent: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
  },
  {
    image: imageFour,
    newsTitle: "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    location: "Location: India",
    date: "Date: 06/11/2024",
    newsContent: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."
  }
]

export const PressReleases = () => {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container">
        <SectionHeader description="Stay updated with the latest happenings and exciting developments at YourBank through our press releases.">
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium text-[#CAFF33]">Press Releases</h2>
        </SectionHeader>

        <div className="mt-16 flex flex-col gap-5 lg:grid lg:grid-cols-2">
          {news.map((newsItem, index) => (
            <div key={index} className="bg-[#1C1C1C] rounded-2xl border border-[#262626] p-5 md:p-6">
              <div>
                <Image src={newsItem.image} alt="image" />
              </div>
              <h2 className="mt-8 text-lg lg:text-xl">{newsItem.newsTitle}</h2>
              <div className="inline-flex flex-row gap-3 mt-3">
                <span className="font-light text-[#B3B3B3] text-sm lg:text-base border border-[#262626] bg-[#191919] px-3 py-2 rounded-full w-fit">{newsItem.location}</span>
                <span className="font-light text-[#B3B3B3] text-sm lg:text-base border border-[#262626] bg-[#191919] px-3 py-2 rounded-full w-fit">{newsItem.date}</span>
              </div>
              <p className="mt-6 font-light text-[#B3B3B3] text-sm lg:text-base lg:max-w-lg">{newsItem.newsContent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
