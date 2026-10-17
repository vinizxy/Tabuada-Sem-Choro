import { dor, virada } from "@/content/copy";
import { Xis } from "../Rabiscos";

export function Dor() {
  return (
    <section aria-labelledby="titulo-dor" className="bg-amarelo-claro/45">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div>
          <h2 id="titulo-dor" className="titulo-lg max-w-[16ch]">
            {dor.titulo}
          </h2>
          <ul className="mt-8 space-y-4">
            {dor.itens.slice(0, -1).map((item) => (
              <li key={item} className="flex items-start gap-3 text-[1.2rem] font-semibold md:text-[1.35rem]">
                <Xis className="mt-1 h-6 w-6 shrink-0 text-coral" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-center">
          <p className="text-[1.2rem] leading-relaxed md:text-[1.3rem]">{virada.texto}</p>
          <p className="mt-6 font-display text-[1.35rem] font-semibold">
            <span className="bg-amarelo px-2 py-0.5 box-decoration-clone">{dor.itens[dor.itens.length - 1]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
