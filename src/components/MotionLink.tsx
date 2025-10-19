// =======================================
// MotionLink Component
// =======================================

"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface MotionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function MotionLink({ href, children, className }: MotionLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // delay before navigation
    setTimeout(() => {
      router.push(href)
    }, 750)
  }
  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}
