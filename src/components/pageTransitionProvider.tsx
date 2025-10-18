"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )

}
