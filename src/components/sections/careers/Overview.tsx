import OverviewComponent from "@/components/OverviewComponent";
import image from "@/assets/icons/careersImage.svg"

export default function Overview() {
  return (
    <>
      <div className="mt-28 lg:mt-36">
        <OverviewComponent
          heroImage={image}
          content="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
        >
          <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-medium leading-10 lg:leading-16">Welcome to <span className="text-[#CAFF33]">YourBank</span> Careers!
          </h2>
        </OverviewComponent>
      </div>
    </>
  )
}
