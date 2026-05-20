"use client"

import { Zap, Shield, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, Variants } from "framer-motion" // Importado "Variants" aqui

// Variantes para controlar o efeito cascata tipadas corretamente
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
}

// Variantes comuns para os textos e botões tipadas corretamente
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 30%, #000041 0%, #000041 70%)`,
      }}
    >
      {/* Efeito de Luz de Fundo (Glow Elétrico) com pulso infinito nativo do Framer Motion */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* O container principal aciona a sequência de animações nos filhos */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 1. Container do Logo Responsivo */}
          <motion.div className="flex items-center justify-center mb-8" variants={itemVariants}>
            <Image
              src="/images/logo.png"
              alt="Bruno Eletricista"
              width={400}
              height={130}
              className="h-20 sm:h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300"
              priority
            />
          </motion.div>

          {/* 2. Título Principal */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] text-balance tracking-tight"
            variants={itemVariants}
          >
            Segurança Elétrica para seu{" "}
            <span className="text-primary">
              Lar ou Empresa
            </span>
          </motion.h1>

          {/* 3. Subtítulo */}
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto text-pretty font-light leading-relaxed"
            variants={itemVariants}
          >
            Conte com um especialista para proteger seu patrimônio. Atendimento ágil, normas técnicas seguidas à risca e a tranquilidade que sua família merece.
          </motion.p>

          {/* 4. Botões de Ação (CTAs) */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* 5. Seção de Benefícios/Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            
            {/* Card 1 */}
            <motion.div 
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700"
              variants={itemVariants}
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Atendimento Rápido</h4>
                <p className="text-slate-400 text-xs">Suporte ágil para imprevistos</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700"
              variants={itemVariants}
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Garantia de Serviço</h4>
                <p className="text-slate-400 text-xs">Total segurança pós-execução</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 text-left transition-all hover:border-slate-700"
              variants={itemVariants}
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Profissional Qualificado</h4>
                <p className="text-slate-400 text-xs">Seguindo estritamente a NBR-5410</p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Onda inferior decorativa */}
      <div className="absolute -bottom-2 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[120px] md:h-[120px]">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-[var(--background)]"
          />
        </svg>
      </div>
    </section>
  )
}