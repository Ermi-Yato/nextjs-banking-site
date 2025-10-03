import logoMobile from "@/assets/icons/Logo-mobile.svg"
import logoDesktop from "@/assets/icons/Logo-desktop.svg"
import hamburger from "@/assets/icons/hamburger.svg"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/Button"
import abstractDesign from "@/assets/images/mobile-abstract.svg"

const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Careers",
    href: "/careers"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Security",
    href: "/security"
  }
]

export const Navbar = () => {
  return (
    <header className="py-10 relative">
      <Image src={abstractDesign} alt="" className="absolute top-0 left-0 -z-10" />
      <div className="container">
        <div className="bg-[#1c1c1c] border border-[#262626] rounded-full flex justify-between items-center h-16 px-4 pl-6">
          <Image src={logoMobile} alt="mobile logo" className="md:hidden" />
          <Image src={logoDesktop} alt="mobile logo" className="hidden md:block" />

          <div className="hidden lg:block">
            <nav className="flex gap-6">
              {navLinks.map(link => (
                <Link href={link.href}>
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <Button btnType="secondary" size="md">Sign Up</Button>
              <Button btnType="primary" size="md">Login</Button>
            </div>
          </div>
          <div className="w-14 h-10 bg-[#CAFF33] inline-flex items-center rounded-full justify-center md:hidden">
            <Image src={hamburger} alt="menu icon" />
          </div>
        </div>
      </div>
    </header>
  )
}
