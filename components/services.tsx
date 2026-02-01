import { Plug, Lightbulb, Zap, Wrench, Home, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Plug,
    title: "Tomadas e Interruptores",
    description: "Instalação, substituição e manutenção de tomadas, interruptores e extensões elétricas.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description: "Instalação de lustres, luminárias, spots, fitas LED e sistemas de iluminação em geral.",
  },
  {
    icon: Zap,
    title: "Quadro Elétrico",
    description: "Montagem, organização e manutenção de quadros de distribuição elétrica.",
  },
  {
    icon: Wrench,
    title: "Chuveiros Elétricos",
    description: "Instalação e manutenção de chuveiros elétricos de todas as marcas e potências.",
  },
  {
    icon: Home,
    title: "Instalação Padrão Light",
    description: "Adequação e instalação de entrada de energia conforme padrões da concessionária.",
  },
  {
    icon: Building2,
    title: "Fiação e Rede Elétrica",
    description: "Substituição de fiação antiga, passagem de novos circuitos e ampliação de rede.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Soluções Elétricas Completas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma ampla gama de serviços elétricos para residências e comércios, sempre com qualidade e
            segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-[#fdc700]/50"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-[#fdc700]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#fdc700] group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-[#fdc700] group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">10% de desconto para pagamento via PIX!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
