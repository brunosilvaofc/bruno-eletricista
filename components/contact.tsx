import { Phone, MapPin, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(21) 99306-7569",
    href: "https://wa.me/5521993067569?text=Olá! Gostaria de solicitar um orçamento.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@bruno.eletricista.ofc",
    href: "https://instagram.com/bruno.eletricista.ofc",
    color: "text-pink-600 bg-pink-50 border-pink-100"
  },
  {
    icon: MapPin,
    label: "Área de Atendimento",
    value: "Rio de Janeiro e região",
    href: null,
    color: "text-primary bg-primary/10 border-amber-100"
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg — Sáb: 7h às 19h",
    href: null,
    color: "text-primary bg-primary/10 border-amber-100"
  },
]

export function Contact() {
  return (
    <section 
      id="contato" 
      className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden px-6 md:px-12 lg:px-16"
    >
      {/* Detalhe de Luz de Fundo Suave (Light) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
         
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight text-balance">
            Vamos Fechar o Seu Orçamento?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base md:text-lg font-light text-pretty">
            Escolha o canal mais prático para você. Estou pronto para tirar suas dúvidas e garantir a segurança do seu imóvel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Grid de Informações de Contato */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-slate-50/60 border border-slate-100 rounded-2xl hover:border-slate-300 hover:bg-white hover:shadow-md transition-all group"
              >
                {/* Container do Ícone customizado */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${info.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-bold text-slate-800 hover:text-amber-600 transition-colors block truncate"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base md:text-lg font-bold text-slate-700 block truncate">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Banner de CTA Final Estacado (Fundo Claro Premium) */}
          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl p-8 md:p-12 text-center shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500/5 blur-[60px] rounded-full pointer-events-none" />
            

            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed">
              Evite riscos com instalações mal feitas. Clique abaixo para iniciar uma conversa direta no WhatsApp. O orçamento é rápido, transparente e sem compromisso!
            </p>
            
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-500 text-lg font-semibold px-8 py-7 rounded-xl shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <a
                href="https://wa.me/5521993067569?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Iniciar Conversa no WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}