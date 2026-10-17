import { depoimentos } from "@/content/copy";

// Não renderiza nada até existirem depoimentos reais em content/copy.ts.
export function Depoimentos() {
  if (depoimentos.length === 0) return null;
  return (
    <section aria-labelledby="titulo-depo" className="papel">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <h2 id="titulo-depo" className="titulo-lg">
          O que os pais contam
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {depoimentos.map((d) => (
            <li key={d.nome} className="cartao p-6">
              <blockquote className="text-[1.15rem]">“{d.texto}”</blockquote>
              <p className="mt-4 font-display font-semibold">
                {d.nome} <span className="font-normal text-tinta-suave">· {d.detalhe}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
