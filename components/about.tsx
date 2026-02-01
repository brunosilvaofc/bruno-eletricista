import { CheckCircle2 } from "lucide-react"
import Image from "next/image"


const benefits = [
  "Profissional qualificado e experiente",
  "Atendimento rápido e eficiente",
  "Orçamento sem compromisso",
  "Preços justos e competitivos",
  "Garantia em todos os serviços",
  "Material de qualidade",
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-[#fdc700] text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Sobre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
              Por que escolher Bruno Eletricista?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-lg leading-relaxed text-pretty">
              Ofereço serviços elétricos de alta qualidade para residências e
              comércios no Rio de Janeiro. Meu compromisso é garantir a segurança e satisfação de cada cliente, sempre
              utilizando materiais de primeira linha e seguindo todas as normas técnicas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fdc700] flex-shrink-0" />
                  <span className="text-secondary-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[#fdc700]/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-[#fdc700] rounded-3xl">
                <Image
                  src="/images/background.png"
                  alt="Imagem de fundo"
                  fill
                  className="object-cover opacity-20"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* <div className="text-7xl md:text-8xl font-bold text-secondary mb-4">5+</div>
                  <div className="text-xl md:text-2xl font-semibold text-secondary text-center">
                    Anos de Experiência
                  </div> */}
                  <div className="mt-8 text-center">
                    {/* <div className="text-4xl font-bold text-secondary">500+</div>
                    <div className="text-secondary/80">Clientes Atendidos</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
