import { Zap, Shield, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 30%, #222456 0%, #14152e 70%)`,
      }}
    >
      {/* Efeito de Luz de Fundo (Glow Elétrico) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge Superior */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md animate-fade-in">
            <Zap className="w-4 h-4 text-primary fill-primary/20" />
            <span className="text-xs md:text-sm font-semibold tracking-wide text-amber-300 uppercase">
              Atendimento Técnico Autorizado — NBR-5410
            </span>
          </div> */}

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] text-balance tracking-tight">
            Segurança Elétrica para seu{" "}
            <span className="text-primary">
            {/* <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-300 bg-clip-text text-transparent"> */}
              Lar ou Empresa.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            Conte com um especialista para proteger seu patrimônio. Atendimento ágil, normas técnicas seguidas à risca e a tranquilidade que sua família merece.
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 text-lg font-medium px-8 py-7 rounded-xl shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <a
                href="https://wa.me/5521993067569?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Solicitar Orçamento Gratuito
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white text-lg font-medium px-8 py-7 rounded-xl bg-slate-900/40 backdrop-blur-sm transition-all"
            >
              <a href="tel:+5521993067569" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Ligar Agora
              </a>
            </Button>
          </div>

          {/* Seção de Benefícios/Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700">
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Atendimento Rápido</h4>
                <p className="text-slate-400 text-xs">Suporte ágil para imprevistos</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700">
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Garantia de Serviço</h4>
                <p className="text-slate-400 text-xs">Total segurança pós-execução</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700">
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Profissional Qualificado</h4>
                <p className="text-slate-400 text-xs">Seguindo estritamente a NBR-5410</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Onda inferior decorativa ajustada para contrastar perfeitamente */}
    <div className="absolute -bottom-4 left-0 right-0 overflow-hidden leading-[0]">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[60px] md:h-[90px]">
    <path
      d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
      className="fill-[var(--background)]"
    />
  </svg>
</div>
    </section>
  )
}