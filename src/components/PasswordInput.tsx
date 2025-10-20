// =======================================
// Password Input Field
// =======================================

"use client"
import eyeIcon from "@/assets/icons/eyeIcon.svg"
import eyeSlash from "@/assets/icons/eye-slash.svg"
import Image from "next/image"
import { useState } from "react"

const inputClasses = "flex-1 bg-transparent outline-none placeholder:font-light placeholder:text-[#59595A] text-sm text-[#B3B3B3]"

export const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className="p-4 lg:p-5 rounded-full bg-[#191919] border border-[#262626] flex items-center justify-between">
      <input
        type={isVisible ? "text" : "password"}
        name="password"
        placeholder="Enter your Password"
        required
        className={inputClasses}
      />
      <div onClick={() => setIsVisible(prev => !prev)}>
        <Image src={isVisible ? eyeIcon : eyeSlash} alt="Show password" className="ml-2 cursor-pointer" />
      </div>
    </div>
  )
}
