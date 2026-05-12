"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Cpu, GraduationCap, Compass, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    subtitle: "Entrada e mapeamento",
    description:
      "Identificamos gargalos, desperdícios e oportunidades com entrevistas de liderança e análise profunda dos processos.",
    duration: "1–2 semanas",
    color: "olive",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Transformação",
    subtitle: "IA na veia e mudança operacional",
    description:
      "Redesenhamos fluxos e implantamos IA diretamente na operação com acompanhamento contínuo da equipe.",
    duration: "8–10 semanas",
    color: "gold",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Capacitação",
    subtitle: "Autonomia do time",
    description:
      "Treinamentos contextualizados para que sua equipe opere com IA de forma independente e sustentável.",
    duration: "4–6 semanas",
    color: "olive",
  },
  {
    icon: Compass,
    number: "04",
    title: "Mentoria",
    subtitle: "Sustentação do crescimento",
    description:
      "Acompanhamento contínuo para garantir que a performance se mantenha e a evolução nunca pare.",
    duration: "Contínuo",
    color: "gold",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Escala",
    subtitle: "Sistemas inteligentes 100%",
    description:
      "Sua empresa opera como um sistema inteligente de alta performance — com IA integrada, times autônomos e crescimento previsível.",
    duration: "Resultado final",
    color: "olive",
    final: true,
  },
];

export default function Jornada() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="jornada"
      className="section-padding relative bg-navy-950 overflow-hidden"
      aria-labelledby="jornada-title"
    >
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(232,148,26,0.04) 0%, transparent 60%)",
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
          <span className="label-tag mb-5 inline-flex">Jornada de evolução</span>
          <h2 id="jornada-title" className="section-title text-gradient-white mb-5">
            Somos parceiros da sua
            <br />
            <span className="text-gradient-gold">evolução</span> — não
            fornecedores pontuais
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Uma jornada estruturada que transforma sua empresa passo a passo,
            garantindo que cada etapa sustente a próxima.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[52px] left-[10%] right-[10%] h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(107,123,90,0.3), rgba(232,148,26,0.4) 50%, rgba(107,123,90,0.3))",
              }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isGold = step.color === "gold";

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Node */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-[104px] h-[104px] rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                          step.final
                            ? "bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500/40 shadow-glow-gold-sm"
                            : isGold
                            ? "bg-gold-500/8 border border-gold-500/20 hover:bg-gold-500/12 hover:border-gold-500/30"
                            : "bg-olive-600/8 border border-olive-600/20 hover:bg-olive-600/12 hover:border-olive-600/30"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={
                            step.final
                              ? "text-gold-400"
                              : isGold
                              ? "text-gold-400"
                              : "text-olive-400"
                          }
                        />
                        <span className="text-xs font-mono text-slate-600 mt-1">
                          {step.number}
                        </span>
                      </div>
                      {step.final && (
                        <div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            boxShadow: "0 0 30px rgba(232,148,26,0.2)",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold text-slate-100 mb-1">
                        {step.title}
                      </h3>
                      <div
                        className={`text-xs font-medium mb-2 ${
                          isGold ? "text-gold-500/70" : "text-olive-500/70"
                        }`}
                      >
                        {step.subtitle}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3 px-1">
                        {step.description}
                      </p>
                      <span
                        className={`inline-block text-xs px-2.5 py-1 rounded-full border ${
                          isGold
                            ? "border-gold-500/20 text-gold-500/70 bg-gold-500/5"
                            : "border-olive-600/20 text-olive-500/70 bg-olive-600/5"
                        }`}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isGold = step.color === "gold";
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex gap-5 relative"
              >
                {/* Line */}
                {!isLast && (
                  <div
                    className="absolute left-6 top-14 bottom-0 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(107,123,90,0.3), rgba(107,123,90,0.08))",
                    }}
                  />
                )}

                {/* Node */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isGold
                        ? "bg-gold-500/10 border border-gold-500/20"
                        : "bg-olive-600/10 border border-olive-600/20"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isGold ? "text-gold-400" : "text-olive-400"}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`pb-8 ${isLast ? "" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-100">{step.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        isGold
                          ? "border-gold-500/20 text-gold-500/70 bg-gold-500/5"
                          : "border-olive-600/20 text-olive-500/70 bg-olive-600/5"
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <div
                    className={`text-xs font-medium mb-1.5 ${
                      isGold ? "text-gold-500/60" : "text-olive-500/60"
                    }`}
                  >
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Result banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(18,32,48,0.9) 0%, rgba(8,14,26,0.95) 100%)",
            border: "1px solid rgba(232,148,26,0.12)",
            boxShadow: "0 0 60px rgba(232,148,26,0.04)",
          }}
        >
          <Rocket className="text-gold-400 mx-auto mb-4" size={28} />
          <h3 className="text-2xl font-bold text-gradient-white mb-2">
            Sistemas Inteligentes de Performance Operando 100%
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Ao final da jornada, sua empresa opera com IA integrada, times autônomos,
            processos eficientes e crescimento previsível — sustentado de dentro para fora.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
