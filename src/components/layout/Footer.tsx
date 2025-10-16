import mobileLogo from "@/assets/icons/Logo-mobile.svg"
import emailIcon from "@/assets/icons/email.svg"
import phoneIcon from "@/assets/icons/phone.svg"
import locationIcon from "@/assets/icons/location.svg"
import facebook from "@/assets/icons/facebook.svg"
import x from "@/assets/icons/twitter.svg"
import linkdin from "@/assets/icons/linkdin.svg"
import { navLinks } from "@/constants/navLinks"
import Image from "next/image"
import Link from "next/link"

const contactInfo = [
  {
    icon: emailIcon,
    caption: "hello@skillbirdge.com"
  },
  {
    icon: phoneIcon,
    caption: "+91 91813 23 2309"
  },
  {
    icon: locationIcon,
    caption: "Somewhere in the World"
  }
]

const socialIcons = [
  facebook, x, linkdin
]

export const Footer = () => {
  return (
    <footer className="pt-10 pb-8 mt-12 bg-[#1C1C1C]">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 border-b border-[#262626] py-7 lg:py-9">
          <Image src={mobileLogo} alt="" />
          <nav className="flex gap-4">
            {navLinks.map(link => (
              <Link href={link.href} key={link.href}>
                <span className="text-sm lg:text-base">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap justify-center gap-5 border-b border-[#262626] pb-7">
          {contactInfo.map((info, index) => (
            <div key={index} className="inline-flex items-center justify-center gap-2">
              <Image src={info.icon} alt="" />
              <span className="text-sm lg:text-base">{info.caption}</span>
            </div>
          ))}
        </div>

        <div className="text-[#B3B3B3] font-light text-sm bg-[#191919] border border-[#262626] rounded-2xl  flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-5 lg:p-3 lg:rounded-full">
          <div className="inline-flex gap-2 -mt-5 lg:-mt-0">
            {socialIcons.map((icon, index) => (
              <div key={index} className="size-[44px] bg-[#CAFF33] flex justify-center rounded-full">
                <Image src={icon} alt="social media icons" />
              </div>
            ))}
          </div>
          <p className="">YourBank All Rights Reserved.</p>
          <div className="flex gap-2 pb-8 lg:pb-0">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
