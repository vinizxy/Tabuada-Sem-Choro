import { paraQuem } from "@/content/copy";
import { Visto, Xis } from "../Rabiscos";

export function ParaQuem() {
  return (
    <section aria-labelledby="titulo-paraquem" className="border-t-2 border-tinta bg-coral-claro">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 id="titulo-paraquem" className="titulo-lg">
          {paraQuem.titulo}
        </h2>
        {/* Celular: uma coluna. Desktop: lado a lado, o "sim" maior. */}
        <div className="mt-10 grid items-start gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="surge cartao p-6 md:p-8">
            <h3 className="titulo-md">{paraQuem.sim.titulo}</h3>
            <ul className="mt-5 space-y-3.5">
              {paraQuem.sim.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.1rem] font-semibold">
                  <Visto className="mt-0.5 h-6 w-6 shrink-0 text-verde" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surge rounded-[20px] border-2 border-dashed border-tinta bg-papel/70 p-6 md:mt-8 md:p-8">
            <h3 className="titulo-md">{paraQuem.nao.titulo}</h3>
            <ul className="mt-5 space-y-3.5">
              {paraQuem.nao.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.1rem] text-tinta-suave">
                  <Xis className="mt-0.5 h-6 w-6 shrink-0 text-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
