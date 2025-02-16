"use client"
import { motion } from "framer-motion"

export function AnimatedStroke({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      <span className="relative z-10 inline-block">{children}</span>
      <motion.svg
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 w-full h-4 overflow-hidden"
      >
        <motion.path
          d="M-10 15.5c50 4 120-4 220-2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  )
} 