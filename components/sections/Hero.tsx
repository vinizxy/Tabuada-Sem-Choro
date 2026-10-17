import Image from "next/image";
import { garantias, hero, previa } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Micro } from "../Micro";
import { Sublinhado } from "../Rabiscos";

export function Hero() {
  const [capa, ficha, tabela] = [previa.paginas[0], previa.paginas[1], previa.paginas[3]];
  return (
    <section data-esconde-barra aria-labelledby="titulo-hero" className="papel overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-12 md:px-8 md:pt-16 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <p className="font-display text-base font-semibold text-tinta-suave">{hero.selo}</p>
          <h1 id="titulo-hero" className="titulo-xl mt-3">
            {hero.titulo}
          </h1>
          <p className="relative mt-3 inline-block font-display text-[clamp(1.35rem,4.5vw,1.9rem)] font-semibold text-tinta">
            {hero.rabisco}
            <Sublinhado animado className="absolute -bottom-2.5 left-0 h-3.5 w-full text-coral" />
          </p>
          <p className="mt-6 max-w-[40ch] text-[1.15rem] text-tinta-suave md:text-[1.25rem]">{hero.sub}</p>
          <div className="mt-7">
            <BotaoCompra className="w-full sm:w-auto">{hero.botao}</BotaoCompra>
            <Micro texto={hero.micro} className="mt-3" />
          </div>
        </div>

        {/* O produto de verdade: páginas do material em leque */}
        <div className="relative mx-auto aspect-[6/5] w-full max-w-[500px]">
          {[
            { p: ficha, cls: "left-0 top-[8%] -rotate-6" },
            { p: tabela, cls: "right-0 top-[8%] rotate-6" },
            { p: capa, cls: "left-1/2 top-0 z-10 -translate-x-1/2" },
          ].map(({ p, cls }, i) => (
            <div key={p.src} className={`cartao absolute w-[44%] overflow-hidden p-1.5 ${cls}`}>
              <Image
                src={p.src}
                alt={p.alt}
                width={750}
                height={1000}
                loading="eager"
                {...(i === 2 ? { preload: true, fetchPriority: "high" as const } : {})}
                sizes="(min-width: 500px) 220px, 44vw"
                className="h-auto w-full rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>

      <ul
        aria-label="Garantias"
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 border-t-2 border-tinta bg-[#fffdf8] px-4 py-4 font-display text-[1.05rem] font-semibold"
      >
        {garantias.map((g) => (
          <li key={g} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-coral" />
            {g}
          </li>
        ))}
      </ul>
    </section>
  );
}
