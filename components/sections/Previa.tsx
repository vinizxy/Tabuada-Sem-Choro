import Image from "next/image";
import { previa } from "@/content/copy";

const giros = ["", "", "", ""];

export function Previa() {
  return (
    <section aria-labelledby="titulo-previa" className="papel py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 id="titulo-previa" className="titulo-lg">
          {previa.titulo}
        </h2>
      </div>
      {/* Celular: carrossel com scroll-snap. Desktop: grade de 4. */}
      <ul
        className="trilho mt-10 flex gap-5 overflow-x-auto px-4 pt-2 pb-6 md:mx-auto md:grid md:max-w-6xl md:grid-cols-4 md:overflow-visible md:px-8"
        aria-label="Páginas de exemplo do material"
      >
        {previa.paginas.map((p, i) => (
          <li key={p.src} className={`cartao w-[72vw] max-w-[300px] shrink-0 overflow-hidden p-2 md:w-auto md:max-w-none ${giros[i]}`}>
            <Image
              src={p.src}
              alt={p.alt}
              width={750}
              height={1000}
              sizes="(min-width: 768px) 260px, 72vw"
              className="h-auto w-full rounded-[12px]"
            />
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-4 max-w-6xl px-4 text-center font-display text-[1.15rem] font-medium text-tinta-suave md:px-8">
        {previa.legenda}
      </p>
    </section>
  );
}
