"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, Shield } from "lucide-react";

const notDoing = [
  {
    text: "Vender IA teórica e desconectada da rotina do negócio",
    detail: "Sem contexto, sem resultado.",
  },
  {
    text: "Treinamentos genéricos que o time esquece no dia seguinte",
    detail: "Conteúdo pronto que não gera adoção real.",
  },
  {
    text: "Diagnósticos que acabam na gaveta sem virar ação",
    detail: "Relatório bonito sem plano executável.",
  },
  {
    text: "Consultoria que some depois da entrega do relatório",
    detail: "Sem acompanhamento, sem resultado.",
  },
  {
    text: "Soluções de prateleira aplicadas sem personalização",
    detail: "O que funciona para todos, não funciona para ninguém.",
  },
];

const alwaysDelivering = [
  {
    text: "Resultado financeiro e ganho imediato de eficiência",
    detail: "Métricas de impacto desde as primeiras semanas.",
  },
  {
    text: "Transformação real de processos e da cultura da equipe",
    detail: "Mudança que permanece depois que saímos.",
  },
  {
    text: "Continuidade para garantir que a performance nunca caia",
    detail: "Parceria de longo prazo, não intervenção pontual.",
  },
  {
    text: "IA aplicada ao contexto específico do seu negócio",
    detail: "Cada projeto é único e feito sob medida.",
  },
  {
    text: "Plano executável com responsabilidades e prazos reais",
    detail: "Ação clara, não ambiguidade.",
  },
];

export default function Posicionamento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="posicionamento"
      className="section-padding relative bg-navy-950 overflow-hidden"
      aria-labelledby="posicionamento-title"
    >
      <div className="absolute inset-0 grid-bg-dense opacity-20" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(107,123,90,0.15) 30%, rgba(232,148,26,0.12) 50%, rgba(107,123,90,0.15) 70%, transparent)",
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
            <Shield size={12} />
            Nosso compromisso
          </span>
          <h2
            id="posicionamento-title"
            className="section-title text-gradient-white mb-5"
          >
            A diferença entre{" "}
            <span className="text-gradient-gold">promessas teóricas</span>
            <br className="hidden md:block" /> e transformações reais
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Há muita consultoria que vende discurso. A Vairu se posiciona pelo oposto —
            pelo que entregamos e pela forma como o fazemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* What we DON'T do */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(13,20,30,0.9) 0%, rgba(8,12,20,0.95) 100%)",
              border: "1px solid rgba(239,68,68,0.08)",
            }}
          >
            <div className="px-6 py-5 border-b border-red-500/[0.08] flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-300">
                O que a Vairu{" "}
                <span className="text-red-400 font-bold">não faz</span>
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {notDoing.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/15 flex items-center justify-center mt-0.5">
                    <X size={10} className="text-red-400/70" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 leading-snug mb-0.5">
                      {item.text}
                    </div>
                    <div className="text-xs text-red-400/50 italic">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What we ALWAYS deliver */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden relative"
            style={{
              background:
                "linear-gradient(145deg, rgba(18,32,48,0.95) 0%, rgba(10,18,30,0.98) 100%)",
              border: "1px solid rgba(232,148,26,0.15)",
              boxShadow: "0 0 40px rgba(232,148,26,0.04)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(232,148,26,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="px-6 py-5 border-b border-gold-500/[0.1] flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Check size={14} className="text-gold-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-300">
                O que a Vairu{" "}
                <span className="text-gold-400 font-bold">sempre entrega</span>
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {alwaysDelivering.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/12 border border-gold-500/25 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300 leading-snug font-medium mb-0.5">
                      {item.text}
                    </div>
                    <div className="text-xs text-gold-500/50 italic">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <div className="pt-5 border-t border-white/[0.06]">
                <a href="#cta" className="btn-primary w-full justify-center">
                  Quero esse nível de compromisso
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
