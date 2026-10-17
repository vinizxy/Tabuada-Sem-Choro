import Image from "next/image";
import { dor } from "@/content/copy";
import { Xis } from "../Rabiscos";

export function Dor() {
  return (
    <section aria-labelledby="titulo-dor" className="border-y-2 border-tinta bg-coral-claro">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8 md:py-24">
        <div className="surge order-2 mx-auto w-full max-w-[360px] md:order-1">
          <div className="cartao -rotate-2 overflow-hidden p-2.5">
            <Image
              src="/img/dor-crianca-travada.webp"
              alt={dor.imagemAlt}
              width={800}
              height={1000}
              sizes="(min-width: 768px) 360px, 80vw"
              className="h-auto w-full rounded-[12px]"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 id="titulo-dor" className="titulo-lg max-w-[16ch]">
            {dor.titulo}
          </h2>
          <ul className="mt-8 space-y-4">
            {dor.itens.slice(0, -1).map((item) => (
              <li key={item} className="surge flex items-start gap-3 text-[1.2rem] font-semibold md:text-[1.5rem]">
                <Xis className="mt-1 h-7 w-7 shrink-0 text-coral" />
                <span>{item}</span>
              </li>
            ))}
            {/* Última linha: fecha a dor, com marca-texto em vez de ícone */}
            <li className="surge pt-3 text-[1.3rem] leading-relaxed font-bold text-balance md:text-[1.6rem]">
              <span className="bg-amarelo px-2 py-0.5 box-decoration-clone">{dor.itens[dor.itens.length - 1]}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
