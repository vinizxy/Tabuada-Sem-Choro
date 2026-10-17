import Image from "next/image";
import { recebe } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";

export function Recebe() {
  return (
    <section aria-labelledby="titulo-recebe" className="bg-amarelo-claro/45">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-24">
        <h2 id="titulo-recebe" className="titulo-lg">
          {recebe.titulo}
        </h2>
        <ul className="mt-8 divide-y-2 divide-tinta/15">
          {recebe.itens.map((item) => (
            <li key={item.titulo} className="py-5">
              <h3 className="text-[1.25rem] leading-snug font-bold">{item.titulo}</h3>
              <p className="mt-1 text-tinta-suave">{item.texto}</p>
            </li>
          ))}
        </ul>

        <div className="cartao mt-8 grid items-center gap-5 p-5 sm:grid-cols-[150px_1fr]">
          <Image
            src="/img/medalha-certificado.webp"
            alt={recebe.bonusAlt}
            width={600}
            height={600}
            sizes="150px"
            className="mx-auto h-auto w-36 rounded-[12px]"
          />
          <p className="titulo-md text-center sm:text-left">{recebe.bonus}</p>
        </div>

        <div className="mt-10">
          <BotaoCompra>{recebe.botao}</BotaoCompra>
        </div>
      </div>
    </section>
  );
}
