import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import Problema from "@/components/sections/Problema";
import Servicos from "@/components/sections/Servicos";
import Jornada from "@/components/sections/Jornada";
import Resultados from "@/components/sections/Resultados";
import Posicionamento from "@/components/sections/Posicionamento";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Diferenciais />
      <Problema />
      <Servicos />
      <Jornada />
      <Resultados />
      <Posicionamento />
      <CTAFinal />
      <Footer />
    </main>
  );
}
