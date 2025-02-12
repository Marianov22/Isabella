"use client"
import { motion } from "framer-motion"

export const AnimatedButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`neo-button px-6 py-3 rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
} 