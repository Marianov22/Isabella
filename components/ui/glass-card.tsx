"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "rounded-3xl bg-primary-dark/30 backdrop-blur-md border border-accent/10 shadow-lg",
      className
    )}>
      {children}
    </div>
  )
} 