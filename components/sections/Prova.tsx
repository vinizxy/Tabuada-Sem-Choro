import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { prova } from "@/content/copy";
import { testimonials } from "@/content/testimonials";
import { Estrela, IconeEscudo } from "../Rabiscos";

// Prints de conversas autorizadas: coloque imagens em public/depoimentos/.
const dir = path.join(process.cwd(), "public", "depoimentos");
const prints = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.(webp|jpe?g|png)$/i.test(f)).sort() : [];

function Estrelas({ nota }: { nota: number }) {
  return (
    <p role="img" aria-label={`Nota ${nota} de 5`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Estrela key={n} className={`h-5 w-5 ${n <= nota ? "text-amarelo" : "text-tinta/15"}`} />
      ))}
    </p>
  );
}

// Avaliações reais (se houver) + sempre os elementos de confiança verdadeiros.
export function Prova() {
  const temDepoimentos = testimonials.length > 0;
  const extra = temDepoimentos || prints.length > 0;
  return (
    <section aria-labelledby="titulo-prova" className="papel">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        {temDepoimentos && (
          <>
            <h2 id="titulo-prova" className="titulo-lg">
              {prova.titulo}
            </h2>
            <ul className="trilho mt-10 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
              {testimonials.map((d) => (
                <li key={d.nome + d.data} className="cartao w-[82vw] max-w-sm shrink-0 p-6 md:w-auto md:max-w-none">
                  <Estrelas nota={d.nota} />
                  <blockquote className="mt-3 text-[1.1rem]">“{d.texto}”</blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    {d.foto && <Image src={d.foto} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />}
                    <p className="font-display font-semibold">
                      {d.nome}
                      {d.cidade && <span className="font-normal text-tinta-suave"> · {d.cidade}</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {prints.length > 0 && (
          <div className={temDepoimentos ? "mt-12" : ""}>
            <h3 className="titulo-md">{prova.prints}</h3>
            <ul className="trilho mt-6 flex gap-5 overflow-x-auto pb-4">
              {prints.map((f) => (
                <li key={f} className="cartao w-[60vw] max-w-[260px] shrink-0 overflow-hidden p-2">
                  <Image src={`/depoimentos/${f}`} alt="Conversa de uma família sobre o material" width={520} height={900} className="h-auto w-full rounded-[10px]" />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={extra ? "mt-12" : ""}>
          {!extra && (
            <h2 id="titulo-prova" className="titulo-lg">
              {prova.confianca.titulo}
            </h2>
          )}
          <ul className={`grid gap-4 md:grid-cols-3 ${extra ? "" : "mt-8"}`}>
            {prova.confianca.itens.map((item) => (
              <li key={item} className="cartao flex items-start gap-3 p-5">
                <IconeEscudo className="mt-0.5 h-7 w-7 shrink-0 text-verde" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-[20px] border-2 border-dashed border-tinta bg-[#fffdf8] p-6 md:p-8">
            <h3 className="titulo-md">{prova.porQueCriei.titulo}</h3>
            <p className="mt-3 max-w-[60ch] text-tinta-suave">{prova.porQueCriei.texto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
