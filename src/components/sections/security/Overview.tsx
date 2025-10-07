import securityImage from "@/assets/images/Image.svg"
import OverviewComponent from "@/components/OverviewComponent"

export default function Overview() {
  return (
    <>

      <OverviewComponent
        heroImage={securityImage}
        content="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.">
        <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-medium lg:leading-16">Your Security is Our <span className="text-[#CAFF33]">Top Priority</span>
        </h2>
      </OverviewComponent>

    </>
  )
}
