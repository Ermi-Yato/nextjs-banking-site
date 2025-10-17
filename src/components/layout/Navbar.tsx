// =======================================
// Navbar Component
// =======================================

"use client"

import logoMobile from "@/assets/icons/Logo-mobile.svg"
import logoDesktop from "@/assets/icons/Logo-desktop.svg"
import hamburger from "@/assets/icons/hamburger.svg"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/Button"
import abstractDesign from "@/assets/images/mobile-abstract.svg"
import { usePathname } from "next/navigation"
import { navLinks } from "@/constants/navLinks"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()

  return (
    <header className="py-10 fixed top-0 w-full z-10">
      <Image src={abstractDesign} alt="" className="absolute top-0 left-0 -z-10" />
      <div className="container">
        <div className="bg-[#1c1c1c] border border-[#262626] rounded-4xl flex flex-col gap-4">
          <div className="flex justify-between items-center h-16 px-4 pl-6">
            <Link href="/">
              <Image src={logoMobile} alt="mobile logo" className="md:hidden" />
              <Image src={logoDesktop} alt="mobile logo" className="hidden md:block" />
            </Link>
            <div className="hidden lg:block">
              <nav className="flex gap-2">
                {navLinks.map((link) => {
                  const isActive: boolean = pathName === link.href
                  return (
                    <Link href={link.href} key={link.href}>
                      <span className={`text-sm px-4 py-3 rounded-3xl ${isActive ? "bg-[#262626]" : ""}`}>{link.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>


            <div className="hidden lg:block">
              <div className="flex gap-2">
                <Link href="/signup">
                  <Button btnType="secondary" size="md" dropShadow="yes">Sign Up</Button>
                </Link>
                <Link href="/login">
                  <Button btnType="primary" size="md" dropShadow="yes">Login</Button>
                </Link>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-14 h-10 bg-[#CAFF33] inline-flex items-center rounded-full justify-center md:hidden">
              <Image src={hamburger} alt="menu icon" />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}


                className="flex flex-col justify-center items-center gap-4 py-4 overflow-hidden">

                {navLinks.map((link) => {
                  const isActive = pathName === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block text-sm py-4 w-80 rounded-xl text-center ${isActive ? "bg-[#262626] text-[#CAFF33]" : "text-[#B3B3B3]"
                        }`}
                      onClick={() => setIsMenuOpen(false)} // close menu after navigation
                    >
                      {link.name}
                    </Link>
                  )
                })}

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  )
}
