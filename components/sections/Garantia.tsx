import { garantia } from "@/content/copy";

export function Garantia() {
  return (
    <section aria-labelledby="titulo-garantia" className="papel">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 text-center sm:flex-row sm:text-left md:py-20">
        <div
          aria-hidden="true"
          className="grid h-36 w-36 shrink-0 -rotate-12 place-items-center rounded-full border-[3px] border-dashed border-tinta bg-verde-claro font-display leading-none font-bold"
        >
          <span>
            <span className="block text-[3.2rem]">7</span>
            <span className="block text-lg">dias</span>
          </span>
        </div>
        <h2 id="titulo-garantia" className="titulo-lg">
          <span className="block">{garantia.linha1}</span>
          <span className="mt-2 block text-[clamp(1.35rem,4vw,1.9rem)] font-semibold text-tinta-suave">{garantia.linha2}</span>
        </h2>
      </div>
    </section>
  );
}
