import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"
import { Analytics } from '@vercel/analytics/react'
import { AOSProvider } from "@/components/providers/aos-provider"
import { EasterEgg } from "@/components/ui/easter-egg"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
})

const cabinet = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-display",
})

export const metadata = {
  title: "TrashPanda Marketing",
  description: "Estrategias hechas a medida, sin fórmulas vacías.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cabinet.variable} smooth-scroll`}>
      <body className="min-h-screen bg-background font-sans">
        <AOSProvider>
          {children}
        </AOSProvider>
        <EasterEgg />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'