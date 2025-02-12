"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export const PeekabooRaccoon = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileHover={{ y: 0 }}
      className="fixed bottom-0 right-4 z-50 cursor-pointer"
    >
      <Image
        src="/raccoon-peek.png"
        alt="Peekaboo Raccoon"
        width={100}
        height={100}
      />
    </motion.div>
  )
} 