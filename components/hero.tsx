import { Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"




export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 md:pt-40"
      style={{
          background: `linear-gradient(135deg, #fdc700 0%, #fdc700 100%)`,
      }}
    >

      <Image
        src="/images/background.png"
        alt="Imagem de fundo"
        fill
        className="object-cover opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight text-balance">
            Parte Elétrica e Pequenos Reparos em Geral
          </h1>

          <p className="text-lg md:text-xl text-secondary/90 mb-8 max-w-2xl mx-auto text-pretty">
            Serviços elétricos de qualidade com segurança e profissionalismo. Atendimento rápido e orçamento sem
            compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/5521973003648?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 bg-transparent"
            >
              <a href="tel:+5521973003648">Ligar Agora</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 bg-secondary/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-medium">Atendimento Rápido</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-secondary/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-medium">Garantia de Serviço</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-secondary/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-medium">Profissional Qualificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute -bottom-0.5 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
