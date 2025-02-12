"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const EasterEgg = () => {
  const [pattern, setPattern] = useState([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  
  // Detectar patrón de movimiento del cursor
  useEffect(() => {
    if (pattern.join(',') === 'up,up,down,down,left,right,left,right') {
      setShowEasterEgg(true)
    }
  }, [pattern])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div className="bg-white p-8 rounded-2xl">
            <h2>¡Encontraste el easter egg!</h2>
            {/* Contenido especial */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 