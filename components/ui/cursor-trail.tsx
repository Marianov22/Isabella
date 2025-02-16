"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

interface TrailPoint {
  x: number
  y: number
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prev => [...prev, { x: e.clientX, y: e.clientY }].slice(-5))
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <>
      {trail.map((pos, i) => (
        <Image
          key={i}
          src="/mini-logo.png"
          alt=""
          width={20}
          height={20}
          className="fixed pointer-events-none opacity-20"
          style={{
            left: pos.x - 10,
            top: pos.y - 10,
            transition: 'all 0.1s ease',
          }}
        />
      ))}
    </>
  )
} 