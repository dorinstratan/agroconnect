import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'AgroConnect — Platforma Agricolă Digitală',
  description: 'Conectăm fermierii cu utilaje, servicii agricole și finanțare.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
