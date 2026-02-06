import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/logo.png"
              alt="Bruno Eletricista"
              width={150}
              height={50}
              className="h-14 w-auto"
            />
            <p className="text-secondary-foreground/70 text-[12px] text-center md:text-left">
              Serviços elétricos 
              <br />
              Rio de Janeiro
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5521973003648"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/bruno.eletricista.ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <nav className="flex gap-6 text-sm">
              <Link href="#inicio" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="#servicos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#contato" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
            <p className="text-secondary-foreground/50 text-sm">© {currentYear} Bruno Eletricista</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
