import { SectionHeader } from "@/components/SectionHeader";

const values = [
  {
    value: "Integrity",
    description: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
  },
  {
    value: "Customer Centricity",
    description: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
  },
  {
    value: "Collaboration",
    description: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
  },
  {
    value: "Innovation",
    description: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
  }
]

export default function Values() {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <SectionHeader description="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals." >
            <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-medium">Our <span className="text-[#CAFF33]">Values</span></h2>
          </SectionHeader>
        </div>
        <div className="mt-14 flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-20">
          {
            values.map(value => (
              <div key={value.value} className="border-l border-[#CAFF33] px-4 flex flex-col gap-5">
                <h3 className="font-medium text-[#4C4C4D] text-3xl">{value.value}</h3>
                <p className="font-light text-sm lg:text-base text-[#B3B3B3] max-w-lg">{value.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
