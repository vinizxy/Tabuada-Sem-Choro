import { ctaFinal } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";

export function CtaFinal() {
  return (
    <section data-esconde-barra aria-labelledby="titulo-final" className="bg-amarelo-claro">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <h2 id="titulo-final" className="titulo-xl mx-auto max-w-[14ch]">
          {ctaFinal.titulo}
        </h2>
        <BotaoCompra className="mt-10">{ctaFinal.botao}</BotaoCompra>
      </div>
    </section>
  );
}
