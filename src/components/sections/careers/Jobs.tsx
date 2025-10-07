import { SectionHeader } from "@/components/SectionHeader"
import briefCaseIcon from "@/assets/icons/briefCaseIcon.svg"
import { Button } from "@/components/ui/Button"

const jobsInfo = [
  {
    title: "Relationship Manager",
    location: "Location: India",
    department: "Department: Retail Banking",
    about: "About This Job",
    aboutContent: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
    qualifications: [
      "Bachelor's degree in Business, Finance, or a related field", "Minimum of 3 years of experience in sales or relationship management in the banking industry", "Proven track record of meeting and exceeding sales targets", "Excellent interpersonal and negotiation skills", "Strong knowledge of banking products and services"
    ]
  }
]

export default function Jobs() {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <SectionHeader description="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry">
            <h2 className="text-3xl font-medium text-[#CAFF33] text-center lg:text-left">Job Openings</h2>
          </SectionHeader>
        </div>
      </div>
    </section>
  )
}
