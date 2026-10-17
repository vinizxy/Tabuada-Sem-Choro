import { faq } from "@/content/copy";

export function Faq() {
  return (
    <section aria-labelledby="titulo-faq" className="papel">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-24">
        <h2 id="titulo-faq" className="titulo-lg">
          {faq.titulo}
        </h2>
        <div className="mt-10 space-y-3">
          {faq.itens.map((item) => (
            <details key={item.p} className="group rounded-[20px] border-2 border-tinta bg-[#fffdf8]">
              <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-3 font-display text-[1.2rem] font-semibold">
                <h3>{item.p}</h3>
                <span aria-hidden="true" className="faq-sinal text-2xl leading-none transition-transform">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-tinta-suave">{item.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
