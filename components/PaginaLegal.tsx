import Link from "next/link";
import { Rodape } from "./Rodape";

export function PaginaLegal({ titulo, atualizado, children }: { titulo: string; atualizado: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b-2 border-tinta bg-tinta px-4 py-3 text-papel">
        <Link href="/" className="inline-flex min-h-11 items-center font-display text-lg font-semibold underline-offset-4 hover:underline">
          ← Voltar para a Tabuada Sem Choro
        </Link>
      </header>
      <main className="papel">
        <article className="mx-auto max-w-3xl px-4 py-12 md:py-16 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          <h1 className="titulo-lg">{titulo}</h1>
          <p className="text-tinta-suave">Última atualização: {atualizado}</p>
          {children}
        </article>
      </main>
      <Rodape />
    </>
  );
}
