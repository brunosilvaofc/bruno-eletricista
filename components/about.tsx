import { CheckCircle2, Award, Users } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Profissional qualificado e experiente",
  "Atendimento rápido e eficiente",
  "Orçamento sem compromisso",
  "Preços justos e competitivos",
  "Garantia em todos os serviços",
  "Material de primeira qualidade",
]

export function About() {
  return (
    <section 
      id="sobre" 
      className="py-20 md:py-28 bg-secondary border-t border-slate-900 relative overflow-hidden px-6 md:px-12 lg:px-16"
    >
      {/* Luz de fundo decorativa */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Conteúdo (Texto) */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 bg-secondary/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Conheça o Profissional
            </span>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance">
              Por que escolher{" "}
              <span className="text-primary">
                Bruno Eletricista?
              </span>
            </h2>
            
            <p className="text-slate-300 mb-8 text-lg leading-relaxed text-pretty font-light">
              Sou profissional altamente capacitado em instalações e manutenções elétricas residenciais e comerciais. Com formação técnica certificada, meu foco é garantir total segurança, conformidade com as normas técnicas (NBR-5410) e máxima eficiência em cada projeto executado.
            </p>

            {/* Grid de Benefícios Customizados */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 fill-primary/10" />
                  <span className="text-slate-200 text-sm md:text-base font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem / Elementos Visuais */}
          <div className="order-1 lg:order-2 relative flex justify-center w-full">
            <div className="relative w-full max-w-sm md:max-w-md aspect-square mx-auto">
              
              {/* Moldura de Fundo Decorativa */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-30 blur-sm" />
              
              {/* Container Principal do Box de Imagem */}
              <div className="absolute inset-0 bg-secondary border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/background.png"
                  alt="Bruno Eletricista em atendimento"
                  fill
                  className="object-cover opacity-40 mix-blend-luminosity hover:opacity-50 transition-opacity duration-500"
                  sizes="(max-w-md) 100vw, 450px"
                  priority
                />
                
                {/* Gradiente interno para dar profundidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Badge Flutuante 1: Experiência */}
              <div className="absolute -top-3 left-4 lg:-left-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-sm sm:text-xl font-bold text-white leading-none">Formado</div>
                  <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5">Eletrotécnica NBR-5410</div>
                </div>
              </div>

              {/* Badge Flutuante 2: Clientes */}
              <div className="absolute -bottom-3 right-4 lg:-right-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-sm sm:text-xl font-bold text-white leading-none">100%</div>
                  <div className="text-slate-400 text-[10px] sm:text-xs mt-0.5">Segurança & Garantia</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}