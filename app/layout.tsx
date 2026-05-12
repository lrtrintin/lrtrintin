import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vairu.com.br"),
  title: "Vairu Consulting | Transformação Inteligente com IA Aplicada",
  description:
    "A Vairu une estratégia executiva, IA aplicada e capacitação humana para transformar operações em vantagens competitivas reais. +30% a 60% de produtividade. Agende seu alinhamento estratégico.",
  keywords: [
    "consultoria de IA",
    "transformação digital",
    "automação inteligente",
    "inteligência artificial aplicada",
    "estratégia empresarial",
    "performance organizacional",
    "consultoria executiva",
    "agilidade empresarial",
    "aceleração comercial",
    "diagnóstico estratégico",
  ],
  authors: [{ name: "Vairu Consulting" }],
  creator: "Vairu Consulting",
  openGraph: {
    title: "Vairu Consulting | Transformação Inteligente com IA Aplicada",
    description:
      "Transformamos operações complexas em sistemas inteligentes de alta performance. Estratégia + IA aplicada + times capacitados.",
    type: "website",
    locale: "pt_BR",
    siteName: "Vairu Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vairu Consulting | IA com Resultado Real",
    description:
      "Estratégia executiva + IA aplicada + execução real. A Vairu transforma operações em vantagens competitivas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-navy-900`}>
        {children}
      </body>
    </html>
  );
}
