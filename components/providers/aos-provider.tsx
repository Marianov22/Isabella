"use client"

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    })
  }, [])

  return <>{children}</>
} 