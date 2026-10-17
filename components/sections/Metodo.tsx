import { metodo } from "@/content/copy";

const cores = ["bg-amarelo", "bg-verde", "bg-coral", "bg-azul"];
const giros = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];

export function Metodo() {
  return (
    <section aria-labelledby="titulo-metodo" className="border-y-2 border-tinta bg-azul-claro">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 id="titulo-metodo" className="titulo-lg max-w-[18ch]">
          {metodo.titulo}
        </h2>
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {metodo.semanas.map((s, i) => (
            <li key={s.n} className={`surge cartao relative p-6 pt-8 pl-24 md:p-8 md:pl-28 ${i % 2 ? "sm:translate-y-8" : ""}`}>
              <span
                aria-hidden="true"
                className={`adesivo absolute top-5 left-5 h-16 w-16 text-[2.2rem] md:h-[72px] md:w-[72px] ${cores[i]} ${giros[i]}`}
              >
                {s.n}
              </span>
              <h3 className="titulo-md">
                <span className="sr-only">Semana {s.n} · </span>
                <span aria-hidden="true" className="block text-base font-semibold text-tinta-suave">
                  Semana {s.n}
                </span>
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
