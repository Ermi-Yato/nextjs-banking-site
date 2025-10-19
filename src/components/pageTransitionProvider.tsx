// =======================================
// Page Transition Provider Component
// =======================================

"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          ease: "linear"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence >
  )
}
