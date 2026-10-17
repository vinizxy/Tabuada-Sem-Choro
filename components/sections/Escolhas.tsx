import { escolhas } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";

export function Escolhas() {
  return (
    <section aria-labelledby="titulo-escolhas" className="border-t-2 border-tinta bg-verde-claro">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h2 id="titulo-escolhas" className="titulo-lg text-center">
          {escolhas.titulo}
        </h2>
        {/* Escolha 1 apagada, escolha 2 em destaque; o adesivo "ou" fica entre as duas. */}
        <div className="mt-10 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="surge rounded-[20px] border-2 border-dashed border-tinta-suave bg-papel/60 p-6 text-tinta-suave md:p-8">
            <p className="font-display text-base font-semibold">{escolhas.um.rotulo}</p>
            <h3 className="titulo-md mt-1">{escolhas.um.titulo}</h3>
            <p className="mt-3">{escolhas.um.texto}</p>
          </div>
          <span
            aria-hidden="true"
            className="adesivo mx-auto h-14 w-14 -rotate-6 bg-amarelo text-xl"
          >
            ou
          </span>
          <div className="surge cartao rotate-[0.6deg] p-6 md:p-8">
            <p className="font-display text-base font-semibold text-tinta-suave">{escolhas.dois.rotulo}</p>
            <h3 className="titulo-md mt-1">{escolhas.dois.titulo}</h3>
            <p className="mt-3 text-tinta-suave">{escolhas.dois.texto}</p>
            <BotaoCompra className="mt-6 w-full">{escolhas.botao}</BotaoCompra>
          </div>
        </div>
      </div>
    </section>
  );
}
