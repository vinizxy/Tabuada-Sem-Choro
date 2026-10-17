import { metodo } from "@/content/copy";

export function Metodo() {
  return (
    <section aria-labelledby="titulo-metodo" className="papel">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-24">
        <h2 id="titulo-metodo" className="titulo-lg max-w-[18ch]">
          {metodo.titulo}
        </h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {metodo.semanas.map((s) => (
            <li key={s.n} className="surge flex gap-4 border-t-2 border-tinta pt-4 lg:block">
              <p aria-hidden="true" className="w-9 shrink-0 font-display text-[2.5rem] leading-none font-bold text-coral-texto lg:w-auto lg:text-[3rem]">
                {s.n}
              </p>
              <div>
              <h3 className="titulo-md">
                <span className="sr-only">Semana {s.n} · </span>
                {s.nome}
              </h3>
              <p className="mt-1 text-tinta-suave">{s.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
