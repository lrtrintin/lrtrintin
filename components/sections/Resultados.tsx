"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, BarChart3, Star } from "lucide-react";

interface Metric {
  icon: React.ElementType;
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
  sublabel: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: TrendingUp,
    value: "60",
    numericValue: 60,
    suffix: "%",
    prefix: "até +",
    label: "Ganho de produtividade",
    sublabel: "Nos processos operacionais redesenhados com IA",
    color: "gold",
  },
  {
    icon: Clock,
    value: "10",
    numericValue: 10,
    suffix: " sem",
    prefix: "",
    label: "Da estratégia à entrega",
    sublabel: "Tempo médio para transformação operacional completa",
    color: "olive",
  },
  {
    icon: BarChart3,
    value: "3",
    numericValue: 3,
    suffix: "x",
    prefix: "",
    label: "Velocidade de decisão",
    sublabel: "Com dados organizados e processos estruturados",
    color: "gold",
  },
  {
    icon: Star,
    value: "90",
    numericValue: 90,
    suffix: "%+",
    prefix: "",
    label: "Satisfação dos clientes",
    sublabel: "NPS médio dos projetos de transformação entregues",
    color: "olive",
  },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  isInView,
  duration = 1800,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const end = start + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}

const areasBenefit = [
  { icon: "⚡", title: "Trabalhar Melhor", desc: "Eficiência operacional e eliminação de desperdícios" },
  { icon: "🎯", title: "Decidir Melhor", desc: "Dados organizados para decisões mais assertivas" },
  { icon: "📈", title: "Vender Mais", desc: "Automação comercial e previsibilidade de receita" },
  { icon: "🔬", title: "Inovar na Prática", desc: "IA integrada ao dia a dia com resultados tangíveis" },
];

export default function Resultados() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resultados"
      className="section-padding relative bg-navy-900 overflow-hidden"
      aria-labelledby="resultados-title"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(232,148,26,0.05) 0%, transparent 60%)",
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
          <span className="label-tag mb-5 inline-flex">Resultados reais</span>
          <h2 id="resultados-title" className="section-title text-gradient-white mb-5">
            Números que{" "}
            <span className="text-gradient-gold">comprovam</span>
            <br className="hidden md:block" /> a transformação
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Não trabalhamos com estimativas genéricas. Esses são os resultados médios
            medidos nos projetos de transformação da Vairu.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const isGold = metric.color === "gold";

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-6 rounded-2xl text-center group overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(13,24,37,0.9) 0%, rgba(8,14,26,0.95) 100%)",
                  border: isGold
                    ? "1px solid rgba(232,148,26,0.12)"
                    : "1px solid rgba(107,123,90,0.12)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: isGold
                      ? "radial-gradient(ellipse at center, rgba(232,148,26,0.04) 0%, transparent 70%)"
                      : "radial-gradient(ellipse at center, rgba(107,123,90,0.04) 0%, transparent 70%)",
                  }}
                />

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 ${
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

                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    isGold ? "text-gradient-gold" : "text-gradient-olive"
                  }`}
                >
                  <AnimatedCounter
                    value={metric.numericValue}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    isInView={isInView}
                    duration={1600 + i * 200}
                  />
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-1.5">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {metric.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-8">
            Onde geramos valor — impacto direto nas áreas vitais do seu negócio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areasBenefit.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
                className="p-5 rounded-xl text-center card-premium"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <div className="text-sm font-bold text-slate-200 mb-1.5">
                  {area.title}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {area.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
