"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const EasterEgg = () => {
  const [pattern, setPattern] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  
  const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right']
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      const keyMap = {
        'arrowup': 'up',
        'arrowdown': 'down',
        'arrowleft': 'left',
        'arrowright': 'right'
      }
      
      if (keyMap[key]) {
        setPattern(prev => {
          const newPattern = [...prev, keyMap[key]].slice(-8)
          // Verificar si el patrón coincide con el código Konami
          if (JSON.stringify(newPattern) === JSON.stringify(konamiCode)) {
            setShowEasterEgg(true)
          }
          return newPattern
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowEasterEgg(false)}
        >
          <div className="bg-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">¡Encontraste el easter egg!</h2>
            <p>Has descubierto el código Konami 🎮</p>
            <button 
              onClick={() => setShowEasterEgg(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 