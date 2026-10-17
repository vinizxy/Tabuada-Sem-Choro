import { metodo } from "@/content/copy";

export function Metodo() {
  return (
    <section aria-labelledby="titulo-metodo" className="papel">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 id="titulo-metodo" className="titulo-lg max-w-[18ch]">
          {metodo.titulo}
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {metodo.semanas.map((s) => (
            <li key={s.n} className="surge border-t-2 border-tinta pt-4">
              <p aria-hidden="true" className="font-display text-[3rem] leading-none font-bold text-coral">
                {s.n}
              </p>
              <h3 className="titulo-md mt-2">
                <span className="sr-only">Semana {s.n} · </span>
                {s.nome}
              </h3>
              <p className="mt-2 text-tinta-suave">{s.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
