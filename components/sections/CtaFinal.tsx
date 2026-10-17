import { ctaFinal } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Estrela } from "../Rabiscos";

export function CtaFinal() {
  return (
    <section data-esconde-barra aria-labelledby="titulo-final" className="overflow-hidden border-t-2 border-tinta bg-coral">
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <Estrela className="absolute top-8 left-6 h-10 w-10 -rotate-12 text-amarelo md:left-0" />
        <Estrela className="absolute right-6 bottom-10 h-8 w-8 rotate-12 text-papel md:right-0" />
        <h2 id="titulo-final" className="titulo-xl mx-auto max-w-[14ch]">
          {ctaFinal.titulo}
        </h2>
        <BotaoCompra className="mt-10">{ctaFinal.botao}</BotaoCompra>
      </div>
    </section>
  );
}
