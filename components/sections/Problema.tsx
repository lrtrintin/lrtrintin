"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: "📉",
    title: "Produtividade estagnada",
    description:
      "Processos manuais, retrabalho constante e tempo desperdiçado em tarefas que a IA poderia resolver.",
  },
  {
    icon: "🔀",
    title: "Times desalinhados",
    description:
      "Estratégia existe no PowerPoint, mas não no dia a dia da equipe. Cada área puxando para um lado.",
  },
  {
    icon: "🤖",
    title: "IA comprada, não aplicada",
    description:
      "Ferramentas de IA foram contratadas, mas ninguém sabe usar de verdade. O investimento não virou resultado.",
  },
  {
    icon: "🌀",
    title: "Decisões lentas e imprecisas",
    description:
      "Falta de dados organizados, dashboards desconexos e gestores que decidem no feeling.",
  },
  {
    icon: "📦",
    title: "Crescimento travado",
    description:
      "O negócio tem potencial, mas gargalos operacionais invisíveis impedem a escala.",
  },
  {
    icon: "🔁",
    title: "Consultoria que não sai do papel",
    description:
      "Relatórios bonitos entregues, reuniões realizadas — e nada efetivamente mudou na operação.",
  },
];

const withVairu = [
  "Operação redesenhada com IA aplicada ao seu contexto específico",
  "Times alinhados à estratégia e capacitados para executar",
  "Decisões baseadas em dados reais e organizados",
  "Processos ágeis que escalam sem aumentar o caos",
  "Diagnóstico transformado em ação — sem gaveta",
  "Resultado financeiro mensurável desde as primeiras semanas",
];

export default function Problema() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problema"
      className="section-padding relative bg-navy-950 overflow-hidden"
      aria-labelledby="problema-title"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg-dense opacity-30" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(107,123,90,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-tag mb-5 inline-flex">
            <AlertTriangle size={12} />
            O problema do mercado
          </span>
          <h2
            id="problema-title"
            className="section-title text-gradient-white mb-5"
          >
            O que está impedindo sua
            <br />
            <span className="text-gradient-gold">empresa de crescer</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Reconhece algum desses cenários? São os gargalos que encontramos na maioria
            das empresas que chegam até a Vairu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Problems side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-300">
                Cenário sem transformação
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  className="group p-5 rounded-xl bg-red-500/[0.03] border border-red-500/[0.08] hover:border-red-500/15 hover:bg-red-500/[0.05] transition-all duration-300"
                >
                  <div className="text-2xl mb-3">{problem.icon}</div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Check size={16} className="text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-300">
                Cenário com a Vairu
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(18,32,48,0.95) 0%, rgba(8,14,26,0.98) 100%)",
                border: "1px solid rgba(232,148,26,0.12)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(232,148,26,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative space-y-4">
                {withVairu.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mt-0.5">
                      <Check size={11} className="text-gold-400" />
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-8 pt-8 border-t border-white/[0.06]">
                <a href="#cta" className="btn-primary w-full justify-center">
                  Quero transformar minha empresa
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
