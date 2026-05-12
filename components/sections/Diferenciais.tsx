"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Target, Users, Cog } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Estratégia Executiva",
    subtitle: "Visão que orienta cada decisão",
    description:
      "Diagnóstico profundo e mapeamento sistêmico do negócio. Identificamos gargalos invisíveis, oportunidades ocultas e desenhamos um plano executável com responsabilidades e prazos reais.",
    color: "gold",
    delay: 0,
  },
  {
    icon: Brain,
    title: "IA Aplicada de Verdade",
    subtitle: "Tecnologia que gera resultado",
    description:
      "Não implementamos ferramentas pela moda. Aplicamos IA onde ela realmente transforma — nos fluxos que consomem mais esforço e entregam menos resultado da sua operação.",
    color: "olive",
    delay: 0.1,
  },
  {
    icon: Cog,
    title: "Execução Orientada",
    subtitle: "Do plano à entrega real",
    description:
      "Presença ativa em cada etapa da transformação. Acompanhamos redesenho de processos, implantação de ferramentas e ajustes contínuos até o resultado estar consolidado.",
    color: "gold",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Desenvolvimento Humano",
    subtitle: "Times que sustentam a mudança",
    description:
      "A transformação só é sustentável quando as pessoas a dominam. Capacitamos sua equipe para operar com autonomia, reduzindo dependência externa e garantindo que a evolução não pare.",
    color: "olive",
    delay: 0.3,
  },
];

export default function Diferenciais() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      className="section-padding relative bg-navy-900 overflow-hidden"
      aria-labelledby="diferenciais-title"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(107,123,90,0.2) 30%, rgba(232,148,26,0.15) 50%, rgba(107,123,90,0.2) 70%, transparent)",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="label-tag mb-5 inline-flex">
            Diferencial competitivo
          </span>
          <h2
            id="diferenciais-title"
            className="section-title text-gradient-white mb-5"
          >
            3 dimensões que{" "}
            <span className="text-gradient-gold">raramente</span>
            <br className="hidden md:block" /> andam juntas
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A maioria das consultorias entrega uma das três. A Vairu integra as três — e
            ainda adiciona a dimensão da IA aplicada ao seu contexto específico.
          </p>
        </motion.div>

        {/* Central IA badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="relative px-8 py-4 rounded-2xl border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(232,148,26,0.15) 0%, transparent 70%)",
                }}
              />
            </div>
            <div className="relative flex items-center gap-3">
              <Brain size={20} className="text-gold-400" />
              <span className="text-gold-400 font-semibold text-sm tracking-wide">
                Inteligência Artificial Aplicada — o fio que conecta tudo
              </span>
              <Brain size={20} className="text-gold-400" />
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isGold = pillar.color === "gold";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + pillar.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-premium rounded-2xl p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isGold
                        ? "bg-gold-500/10 border border-gold-500/20 group-hover:bg-gold-500/15 group-hover:border-gold-500/30"
                        : "bg-olive-600/10 border border-olive-600/20 group-hover:bg-olive-600/15 group-hover:border-olive-600/30"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isGold ? "text-gold-400" : "text-olive-400"}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs font-semibold tracking-widest uppercase mb-1 ${
                        isGold ? "text-gold-500/70" : "text-olive-500/70"
                      }`}
                    >
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Resultado:{" "}
            <span className="text-slate-300 font-medium">
              Transformação com adoção real — não só discurso.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
