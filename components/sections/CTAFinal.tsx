"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";

const benefits = [
  "Diagnóstico inicial gratuito",
  "Sem compromisso de contratação",
  "Resposta em até 24 horas",
  "100% confidencial",
];

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      setError("Por favor, preencha nome, e-mail e empresa.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o site da Vairu Consulting e quero agendar um alinhamento estratégico.`
  );

  return (
    <section
      id="cta"
      className="section-padding relative bg-navy-900 overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(232,148,26,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,148,26,0.2) 50%, transparent)",
        }}
      />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-black tracking-tighter opacity-[0.015] text-white whitespace-nowrap"
        >
          VAIRU
        </span>
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="label-tag mb-6 inline-flex">Pronto para transformar</span>
          <h2
            id="cta-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            <span className="text-gradient-white">Sua transformação</span>
            <br />
            <span className="text-gradient-gold">começa com</span>
            <br />
            <span className="text-gradient-white">uma conversa.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Agende um alinhamento estratégico gratuito e descubra exatamente onde a IA
            pode acelerar os resultados da sua empresa.
          </p>

          {/* Quick benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle size={14} className="text-gold-400 flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* WhatsApp */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(13,24,37,0.9), rgba(8,14,26,0.95))",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-200">
                    WhatsApp Direto
                  </div>
                  <div className="text-xs text-slate-500">Resposta imediata</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Prefere conversar agora? Fale diretamente com nossa equipe pelo WhatsApp
                e já agende seu alinhamento.
              </p>
              <a
                href={`https://wa.me/5551997943696?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>

            {/* Other contacts */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:vairu.rs@gmail.com"
                className="p-4 rounded-xl flex flex-col items-center gap-2 text-center transition-all duration-200 group"
                style={{
                  background: "rgba(13,24,37,0.8)",
                  border: "1px solid rgba(107,123,90,0.1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(107,123,90,0.25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(107,123,90,0.1)")
                }
              >
                <Mail size={20} className="text-olive-400" />
                <div className="text-xs font-semibold text-slate-300">E-mail</div>
                <div className="text-xs text-slate-500">vairu.rs@gmail.com</div>
              </a>
              <div
                className="p-4 rounded-xl flex flex-col items-center gap-2 text-center"
                style={{
                  background: "rgba(13,24,37,0.8)",
                  border: "1px solid rgba(107,123,90,0.1)",
                }}
              >
                <Phone size={20} className="text-olive-400" />
                <div className="text-xs font-semibold text-slate-300">Telefone</div>
                <div className="text-xs text-slate-500">+55 (51) 9 9794-3696</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(18,32,48,0.95) 0%, rgba(10,18,30,0.98) 100%)",
              border: "1px solid rgba(232,148,26,0.15)",
              boxShadow: "0 0 60px rgba(232,148,26,0.04)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

            {!submitted ? (
              <>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  Agendar Alinhamento Estratégico
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Preencha e nossa equipe entra em contato em até 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="name">
                        Nome *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-3.5 py-3 rounded-lg text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none focus:ring-1"
                        style={{
                          background: "rgba(8,14,26,0.8)",
                          border: "1px solid rgba(107,123,90,0.15)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(232,148,26,0.3)";
                          e.currentTarget.style.boxShadow = "0 0 0 1px rgba(232,148,26,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(107,123,90,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="company">
                        Empresa *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Sua empresa"
                        className="w-full px-3.5 py-3 rounded-lg text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none"
                        style={{
                          background: "rgba(8,14,26,0.8)",
                          border: "1px solid rgba(107,123,90,0.15)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(232,148,26,0.3)";
                          e.currentTarget.style.boxShadow = "0 0 0 1px rgba(232,148,26,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(107,123,90,0.15)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="email">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-3.5 py-3 rounded-lg text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(8,14,26,0.8)",
                        border: "1px solid rgba(107,123,90,0.15)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(232,148,26,0.3)";
                        e.currentTarget.style.boxShadow = "0 0 0 1px rgba(232,148,26,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(107,123,90,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="message">
                      Qual é o maior desafio da sua empresa agora?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente o que você precisa transformar..."
                      rows={3}
                      className="w-full px-3.5 py-3 rounded-lg text-sm text-slate-200 placeholder-slate-600 resize-none transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(8,14,26,0.8)",
                        border: "1px solid rgba(107,123,90,0.15)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(232,148,26,0.3)";
                        e.currentTarget.style.boxShadow = "0 0 0 1px rgba(232,148,26,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(107,123,90,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/15 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Agendar Alinhamento Estratégico
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    Seus dados são 100% confidenciais. Nunca compartilhamos informações.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/25 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  Mensagem recebida!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Nossa equipe vai entrar em contato em até 24 horas para agendar seu
                  alinhamento estratégico gratuito.
                </p>
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-600">
                    Enquanto isso, você também pode nos chamar diretamente no WhatsApp.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
