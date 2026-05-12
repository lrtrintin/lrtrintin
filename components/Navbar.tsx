"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import VairuLogo from "./VairuLogo";

const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/90 backdrop-blur-xl border-b border-olive-700/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-18 py-4">
            <a href="#" aria-label="Vairu Consulting — voltar ao topo">
              <VairuLogo className="h-9 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 group rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#cta"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Agendar Alinhamento
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/[0.06] transition-all"
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-[72px] bg-navy-950/98 backdrop-blur-2xl md:hidden"
          >
            <nav className="section-container py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-slate-300 hover:text-slate-100 hover:bg-white/[0.05] border border-transparent hover:border-olive-700/15 transition-all"
                >
                  {link.label}
                  <span className="text-olive-500 text-sm">→</span>
                </motion.a>
              ))}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-base"
                >
                  Agendar Alinhamento Estratégico
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
