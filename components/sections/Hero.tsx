import Image from "next/image";
import { hero } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Estrela, Sublinhado } from "../Rabiscos";

export function Hero() {
  return (
    <section data-esconde-barra aria-labelledby="titulo-hero" className="papel overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 md:px-8 md:pt-14 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <p className="inline-block -rotate-2 rounded-full border-2 border-tinta bg-verde-claro px-4 py-1.5 font-display text-base font-semibold shadow-[3px_3px_0_var(--tinta)]">
            {hero.selo}
          </p>
          <h1 id="titulo-hero" className="titulo-xl mt-5">
            {hero.titulo}
          </h1>
          <p className="relative mt-3 inline-block font-display text-[clamp(1.5rem,5vw,2.1rem)] font-semibold text-tinta">
            {hero.rabisco}
            <Sublinhado animado className="absolute -bottom-2.5 left-0 h-3.5 w-full text-coral" />
          </p>
          <p className="mt-6 max-w-[32ch] text-[1.2rem] text-tinta-suave md:text-[1.3rem]">{hero.sub}</p>
          <div className="mt-7">
            <BotaoCompra className="w-full sm:w-auto">{hero.botao}</BotaoCompra>
            <p className="mt-3 text-[0.95rem] text-tinta-suave">{hero.micro}</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <Estrela className="absolute -top-5 -left-4 z-10 h-12 w-12 rotate-12 text-amarelo" />
          <div className="cartao rotate-[1.5deg] overflow-hidden rounded-[24px] p-2.5">
            <Image
              src="/img/hero-crianca-folha.webp"
              alt={hero.imagemAlt}
              width={960}
              height={1200}
              preload
              fetchPriority="high"
              sizes="(min-width: 500px) 440px, 92vw"
              className="h-auto w-full rounded-[16px]"
            />
          </div>
          <span className="adesivo absolute -right-2 -bottom-5 h-24 w-24 -rotate-12 bg-amarelo text-[1.7rem] md:-right-6">
            7×8
          </span>
        </div>
      </div>
    </section>
  );
}
