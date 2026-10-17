import Image from "next/image";
import { virada } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Circulo, Seta } from "../Rabiscos";

export function Virada() {
  return (
    <section aria-labelledby="titulo-virada" className="papel">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <Image
          src="/img/vezinho.webp"
          alt="Vezinho, o mascote sinal de vezes, de braços para cima"
          width={422}
          height={400}
          className="mx-auto mb-8 h-auto w-32 md:w-40"
        />
        <h2 id="titulo-virada" className="titulo-lg">
          <span className="block">{virada.linha1}</span>
          <span className="relative mt-3 inline-block px-4 py-2">
            {virada.linha2}
            <Circulo className="absolute -inset-x-2 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+1rem)] text-coral" />
          </span>
        </h2>
        <div className="mt-12 flex flex-col items-center">
          <Seta className="mb-2 h-14 w-16 -rotate-6 text-azul" />
          <BotaoCompra>{virada.botao}</BotaoCompra>
        </div>
      </div>
    </section>
  );
}
