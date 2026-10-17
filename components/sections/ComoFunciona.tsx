import Image from "next/image";
import { comoFunciona } from "@/content/copy";

const cores = ["bg-amarelo", "bg-amarelo", "bg-amarelo"];

export function ComoFunciona() {
  return (
    <section aria-labelledby="titulo-como" className="papel">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div>
          <h2 id="titulo-como" className="titulo-lg">
            {comoFunciona.titulo}
          </h2>
          <ol className="mt-8 space-y-5">
            {comoFunciona.passos.map((passo, i) => (
              <li key={passo} className="surge flex items-center gap-5">
                <span aria-hidden="true" className={`adesivo h-14 w-14 shrink-0 text-[1.8rem] ${cores[i]}`}>
                  {i + 1}
                </span>
                <span className="font-display text-[clamp(1.6rem,5vw,2.2rem)] font-semibold">
                  <span className="sr-only">{i + 1}. </span>
                  {passo}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="surge cartao overflow-hidden p-2">
          <Image
            src="/img/maos-jogando.webp"
            alt={comoFunciona.imagemAlt}
            width={1200}
            height={900}
            sizes="(min-width: 768px) 540px, 92vw"
            className="h-auto w-full rounded-[12px]"
          />
        </div>
      </div>
    </section>
  );
}
