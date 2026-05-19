"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Começa como false para iniciar escondido no topo da página
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Se o menu mobile estiver aberto, mantém o header visível
      if (isMenuOpen) return

      // Só aparece quando rolar para baixo E passar de 80px do topo.
      // Se rolar para cima ou voltar ao topo, ele some.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY, isMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Bruno Eletricista"
              width={180}
              height={60}
              className="h-10 md:h-16 w-auto"
              priority
            />
          </Link>
        </div>    
      </div>
    </header>
  )
}