"use client"

import { motion } from "framer-motion"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const AnimatedButton = ({ 
  children, 
  onClick, 
  className = "" 
}: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-display ${className}`}
    >
      {children}
    </motion.button>
  )
} 