"use client"
import { motion } from "framer-motion"

export const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-effect p-6 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
} 