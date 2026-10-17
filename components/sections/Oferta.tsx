import { oferta } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Sublinhado, Visto } from "../Rabiscos";

export function Oferta() {
  return (
    <section id="oferta" data-esconde-barra aria-labelledby="titulo-oferta" className="scroll-mt-10 border-y-2 border-tinta bg-amarelo-claro">
      <div className="mx-auto max-w-xl px-4 py-16 md:py-24">
        <div className="cartao relative p-6 text-center md:p-10">
          <h2 id="titulo-oferta" className="sr-only">
            Oferta
          </h2>
          <p className="relative inline-block font-display text-[clamp(3.5rem,14vw,5rem)] leading-none font-bold">
            {oferta.preco}
            <Sublinhado className="absolute -bottom-3 left-0 h-4 w-full text-verde" />
          </p>
          <p className="mt-6 text-[1.2rem] font-bold">{oferta.linha}</p>
          <ul className="mx-auto mt-6 grid max-w-xs gap-2.5 text-left">
            {oferta.itens.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[1.1rem]">
                <Visto className="h-6 w-6 shrink-0 text-verde" />
                {item}
              </li>
            ))}
          </ul>
          <BotaoCompra className="mt-8 w-full">{oferta.botao}</BotaoCompra>
          <p className="mt-3 text-[0.95rem] text-tinta-suave">{oferta.micro}</p>
        </div>
      </div>
    </section>
  );
}
