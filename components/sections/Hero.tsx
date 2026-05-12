"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: "+30–60%", label: "Ganho de produtividade" },
  { value: "8–10 sem", label: "Da estratégia à entrega" },
  { value: "3 eixos", label: "Estratégia + IA + Pessoas" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950"
      aria-label="Seção principal"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(232,148,26,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(107,123,90,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated glow orbs */}
      <div
        className="glow-orb absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background: "radial-gradient(ellipse, rgba(232,148,26,0.06) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="glow-orb absolute bottom-1/3 right-1/4 w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse, rgba(107,123,90,0.07) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Geometric accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olive-600/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/15 to-transparent" />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex justify-center mb-8"
          >
            <span className="label-tag">
              <Sparkles size={12} />
              Consultoria de IA Aplicada · Resultado Real
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-gradient-white">Transforme sua</span>
            <br />
            <span className="text-gradient-white">operação em uma</span>
            <br />
            <span className="text-gradient-gold">vantagem real.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            A Vairu integra{" "}
            <span className="text-slate-200 font-medium">estratégia executiva</span>,{" "}
            <span className="text-slate-200 font-medium">IA aplicada de verdade</span> e{" "}
            <span className="text-slate-200 font-medium">capacitação de times</span> para
            entregar performance onde sua empresa precisa crescer — sem atalhos, sem promessas vazias.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#cta" className="btn-primary text-base px-7 py-4">
              Agendar Alinhamento Estratégico
              <ArrowRight size={17} />
            </a>
            <a href="#servicos" className="btn-secondary text-base px-7 py-4">
              Conhecer os serviços
              <ChevronDown size={16} />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="text-xl md:text-2xl font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Feature strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 border-t border-white/[0.05] bg-white/[0.015] backdrop-blur-sm"
      >
        <div className="section-container py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: Zap, text: "Diagnóstico em 2 semanas" },
              { icon: TrendingUp, text: "+30–60% de produtividade" },
              { icon: Sparkles, text: "IA aplicada ao seu contexto" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2.5 text-slate-400">
                <Icon size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-medium tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
