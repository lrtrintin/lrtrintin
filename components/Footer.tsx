import VairuLogo from "./VairuLogo";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Diagnóstico Estratégico", href: "#servicos" },
      { label: "Transformação com IA", href: "#servicos" },
      { label: "Capacitação de Times", href: "#servicos" },
      { label: "Aceleração Comercial", href: "#servicos" },
      { label: "Mentoria Estratégica", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosso Diferencial", href: "#diferenciais" },
      { label: "Jornada de Transformação", href: "#jornada" },
      { label: "Resultados", href: "#resultados" },
      { label: "Compromisso", href: "#posicionamento" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Agendar Alinhamento", href: "#cta" },
      { label: "contato@vairu.com.br", href: "mailto:contato@vairu.com.br" },
      { label: "+55 (11) 9 9999-9999", href: "tel:+5511999999999" },
      { label: "WhatsApp", href: "https://wa.me/5511999999999" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:contato@vairu.com.br", label: "E-mail" },
  { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-navy-950 border-t border-white/[0.05]"
      aria-label="Rodapé"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,148,26,0.15) 50%, transparent)",
        }}
      />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <a href="#" className="inline-block mb-5">
              <VairuLogo className="h-9 w-auto" />
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              Transformando operações complexas em sistemas inteligentes de alta
              performance — através de estratégia, IA aplicada e desenvolvimento humano.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} Vairu Consulting. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Transformando empresas em</span>
            <span className="text-gold-500/60 font-medium">
              sistemas inteligentes de performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
