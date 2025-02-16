"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CursorTrail } from "./cursor-trail"

type KeyMap = {
  [key: string]: string
}

export const EasterEgg = () => {
  const [pattern, setPattern] = useState<string[]>([])
  const [isActive, setIsActive] = useState(false)

  const keyMap: KeyMap = {
    arrowup: "arrowup",
    arrowdown: "arrowdown",
    arrowleft: "arrowleft",
    arrowright: "arrowright"
  }

  const konamiCode = [
    "arrowup", "arrowup",
    "arrowdown", "arrowdown",
    "arrowleft", "arrowright",
    "arrowleft", "arrowright"
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      
      if (keyMap[key]) {
        setPattern(prev => {
          const newPattern = [...prev, keyMap[key]].slice(-8)
          // Verificar si el patrón coincide con el código Konami
          if (newPattern.join(",") === konamiCode.join(",")) {
            setIsActive(true)
          }
          return newPattern
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!isActive) return null

  return <CursorTrail />
} 