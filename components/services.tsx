"use client"

import { Plug, Lightbulb, Zap, Wrench, Home, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion" // Importamos "Variants" aqui

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

// Tipando explicitamente como Variants para o TypeScript aceitar o "easeOut"
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Tipando explicitamente como Variants para sumir o erro ts(2769)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Soluções Elétricas Completas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma ampla gama de serviços elétricos para residências e comércios, sempre com qualidade e
            segurança.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const MotionCard = motion(Card)
            
            return (
              <MotionCard
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </MotionCard>
            )
          })}
        </motion.div>

        <div className="mt-12 text-center">
        </div>
      </div>
    </section>
  )
}