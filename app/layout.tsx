import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bruno Eletricista - Serviços Elétricos Profissionais',
  description: 'Serviços elétricos de qualidade no Rio de Janeiro. Instalação, manutenção, reparos elétricos residenciais e comerciais. Ligue: (21) 97300-3648',
  keywords: 'eletricista, serviços elétricos, instalação elétrica, Rio de Janeiro, reparos elétricos',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
