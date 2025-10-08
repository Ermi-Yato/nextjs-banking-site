import { SectionHeader } from "@/components/SectionHeader"
import briefCaseIcon from "@/assets/icons/briefCaseIcon.svg"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

const jobsInfo = [
  {
    title: "Relationship Manager",
    location: "Location: India",
    department: "Department: Retail Banking",
    about: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
    qualifications: [
      "Bachelor's degree in Business, Finance, or a related field", "Minimum of 3 years of experience in sales or relationship management in the banking industry", "Proven track record of meeting and exceeding sales targets", "Excellent interpersonal and negotiation skills", "Strong knowledge of banking products and services"
    ]
  },
  {
    title: "Risk Analyst",
    location: "Location: India",
    department: "Risk Management",
    about: "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.",
    qualifications: [
      "Bachelor's degree in Finance, Economics, or a related field", "Minimum of 2 years of experience in risk management or a similar role", "Proficiency in risk analysis tools and techniques", "Strong analytical and problem-solving skills", "Knowledge of regulatory requirements and industry best practices"
    ]

  },
  {
    title: "IT Security Specialist",
    location: "Location: India",
    department: "Information Technology",
    about: "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
    qualifications: [
      "Bachelor's degree in Computer Science, Information Security, or a related field", "Minimum of 5 years of experience in IT security or a similar role", "In-depth knowledge of network security protocols and technologies", "Familiarity with regulatory frameworks such as PCI DSS and GDPR", "Professional certifications such as CISSP or CISM are preferred"
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

        <div className="mt-16 flex flex-col gap-5 lg:grid lg:grid-cols-2">
          {jobsInfo.map(info => (
            <div key={info.title} className="bg-[#1C1C1C] rounded-2xl border border-[#262626] p-6 md:p-10 flex flex-col gap-8 justify-between">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold">{info.title}</h3>
                <div className="inline-flex flex-col lg:flex-row gap-2 mt-3">
                  <span className="font-light text-[#B3B3B3] text-sm lg:text-base border border-[#262626] bg-[#191919] px-3 py-2 rounded-full w-fit">{info.location}</span>
                  <span className="font-light text-[#B3B3B3] text-sm lg:text-base border border-[#262626] bg-[#191919] px-3 py-2 rounded-full w-fit">{info.department}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg lg:text-xl">About This Job</h4>
                <p className="text-[#B3B3B3] font-light max-w-2xs md:max-w-full text-sm lg:text-base mt-3">{info.about}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg lg:text-xl">Requirements & Qualifications</h4>
                <div className="mt-3 flex flex-col gap-4">
                  {info.qualifications.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Image src={briefCaseIcon} alt="icon" />
                      <span className="text-[#B3B3B3] text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button btnType="primary" size="md" dropShadow="yes"><span className="font-semibold text-sm">Apply Now</span></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
