"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Cpu,
  GraduationCap,
  TrendingUp,
  Compass,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Estratégico",
    tagline: "Clareza imediata sobre a operação",
    description:
      "Mapeamos com precisão onde estão seus gargalos, desperdícios e oportunidades. Entrevistas com liderança, análise de processos e avaliação de aderência para IA — tudo em um plano de ação de 30/60/90 dias.",
    deliverables: ["Relatório executivo", "Mapa visual de gargalos", "Plano de ação tático"],
    gain: "+Clareza e decisões assertivas",
    price: "R$ 6.000 — 10.000",
    color: "gold",
    featured: false,
  },
  {
    number: "02",
    icon: Cpu,
    title: "Transformação com IA",
    tagline: "+30% a 60% de produtividade",
    description:
      "Redesenho completo de processos com implantação prática de IA na rotina da equipe. Acompanhamos cada semana da transformação até o resultado estar consolidado e a equipe operando em outro nível.",
    deliverables: [
      "Novos fluxos operacionais",
      "IA integrada à rotina",
      "Modelo ágil de gestão",
    ],
    gain: "+30% a 60% de produtividade",
    price: "R$ 30.000 — 45.000",
    color: "gold",
    featured: true,
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Capacitação em IA",
    tagline: "Autonomia total do time",
    description:
      "Workshops práticos e treinamentos contextualizados com o seu negócio. Simulações reais, não teóricas. O time aprende usando IA no problema real de vocês — e sai com autonomia para continuar evoluindo.",
    deliverables: [
      "Trilha de aprendizagem",
      "Materiais de apoio",
      "Capacitação integral",
    ],
    gain: "Autonomia real, menos dependência",
    price: "R$ 8.000 — 20.000",
    color: "olive",
    featured: false,
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Aceleração Comercial",
    tagline: "Mais leads, melhor conversão",
    description:
      "Estruturamos e automatizamos sua área comercial com IA. Funil desenhado, automações implantadas, playbook completo e previsibilidade financeira — para escalar sem perder a qualidade no atendimento.",
    deliverables: [
      "Funil 100% estruturado",
      "Automações comerciais",
      "Playbook completo",
    ],
    gain: "Previsibilidade e escala de receita",
    price: "R$ 15.000 — 30.000",
    color: "olive",
    featured: false,
  },
  {
    number: "05",
    icon: Compass,
    title: "Mentoria Estratégica",
    tagline: "Crescimento contínuo garantido",
    description:
      "Acompanhamento direto para líderes e equipes de gestão. Encontros mensais, ajustes contínuos e suporte estratégico para garantir que a performance não caia e a evolução nunca pare.",
    deliverables: [
      "Encontros mensais",
      "Ajustes contínuos",
      "Suporte executivo",
    ],
    gain: "Decisões seguras, evolução constante",
    price: "R$ 3.000 — 8.000/mês",
    color: "gold",
    featured: false,
  },
];

export default function Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="servicos"
      className="section-padding relative bg-navy-900 overflow-hidden"
      aria-labelledby="servicos-title"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,148,26,0.15) 50%, transparent)",
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
          <span className="label-tag mb-5 inline-flex">Portfólio estratégico</span>
          <h2 id="servicos-title" className="section-title text-gradient-white mb-5">
            Uma jornada conectada para{" "}
            <span className="text-gradient-gold">transformar e escalar</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Cada serviço foi desenhado para se conectar ao próximo. Você pode começar por
            onde sua empresa mais precisa agora.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isGold = service.color === "gold";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
                  service.featured
                    ? "border border-gold-500/25 shadow-[0_0_40px_rgba(232,148,26,0.06)]"
                    : "border border-white/[0.07] hover:border-white/[0.12]"
                }`}
                style={{
                  background:
                    service.featured
                      ? "linear-gradient(145deg, rgba(22,36,52,0.95) 0%, rgba(12,20,32,0.98) 100%)"
                      : "linear-gradient(145deg, rgba(13,24,37,0.8) 0%, rgba(8,14,26,0.9) 100%)",
                }}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
                )}
                {service.featured && (
                  <div className="absolute top-0 right-0 m-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/25 text-gold-400">
                      Mais impacto
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-4 md:block md:text-center md:min-w-[80px]">
                      <span className="text-3xl font-bold text-white/[0.06] font-mono">
                        {service.number}
                      </span>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 md:mt-2 ${
                          isGold
                            ? "bg-gold-500/10 border border-gold-500/20"
                            : "bg-olive-600/10 border border-olive-600/20"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={isGold ? "text-gold-400" : "text-olive-400"}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-xs font-semibold tracking-widest uppercase mb-1 ${
                          isGold ? "text-gold-500/60" : "text-olive-500/60"
                        }`}
                      >
                        {service.tagline}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-2xl">
                        {service.description}
                      </p>

                      {/* Deliverables */}
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span
                            key={d}
                            className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-400"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column: price + gain + CTA */}
                    <div className="md:min-w-[200px] flex flex-col items-start md:items-end gap-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1 md:text-right">Investimento</div>
                        <div className="text-sm font-semibold text-slate-300 md:text-right">
                          {service.price}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-olive-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-olive-500" />
                        {service.gain}
                      </div>
                      <a
                        href="#cta"
                        className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 group/link ${
                          isGold
                            ? "text-gold-400 hover:text-gold-300"
                            : "text-olive-400 hover:text-olive-300"
                        }`}
                      >
                        Saber mais
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Não sabe por onde começar? Fazemos um diagnóstico rápido para indicar o
            caminho certo.
          </p>
          <a href="#cta" className="btn-primary inline-flex">
            Falar com a Vairu
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
