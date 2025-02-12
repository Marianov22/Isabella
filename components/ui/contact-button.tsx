'use client'

import { ClientButton } from "./client-button"

export function ContactButton() {
  return (
    <ClientButton
      className="bg-secondary text-primary hover:bg-secondary-light shadow-retro font-display text-lg animate-scaleIn"
      onClick={() => (window.location.href = "mailto:trashpandaok@gmail.com?subject=¡Quiero%20conocerlos!")}
    >
      ¡Charlemos!
    </ClientButton>
  )
} 