import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eletricista Bruno - Serviços Elétricos Profissionais',
  description: 'Serviços elétricos de qualidade. Instalação, manutenção, reparos elétricos residenciais e comerciais. Ligue: (21) 99306-7569',
  keywords: 'eletricista, serviços elétricos, instalação elétrica, Rio de Janeiro, reparos elétricos',
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
