import Image from "next/image";
import { recebe } from "@/content/copy";
import { BotaoCompra } from "../BotaoCompra";
import { Visto } from "../Rabiscos";

export function Recebe() {
  return (
    <section aria-labelledby="titulo-recebe" className="border-y-2 border-tinta bg-verde-claro">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 id="titulo-recebe" className="titulo-lg">
          {recebe.titulo}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {recebe.itens.map((item) => (
            <li key={item} className="surge flex items-center gap-4 rounded-[20px] border-2 border-tinta bg-[#fffdf8] p-4 text-[1.2rem] font-bold">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-tinta bg-verde">
                <Visto className="h-6 w-6 text-tinta" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="surge cartao mt-10 grid items-center gap-6 bg-amarelo-claro p-5 sm:grid-cols-[160px_1fr] md:p-6">
          <Image
            src="/img/medalha-certificado.webp"
            alt={recebe.bonusAlt}
            width={600}
            height={600}
            sizes="160px"
            className="mx-auto h-auto w-40 rotate-[-4deg] rounded-[16px] border-2 border-tinta"
          />
          <p className="titulo-md text-center sm:text-left">{recebe.bonus}</p>
        </div>

        <div className="mt-10 text-center">
          <BotaoCompra>{recebe.botao}</BotaoCompra>
        </div>
      </div>
    </section>
  );
}
