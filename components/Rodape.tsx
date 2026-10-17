import Link from "next/link";
import { empresa, produto, rodape } from "@/content/copy";

export function Rodape() {
  return (
    <footer data-esconde-barra className="bg-tinta text-papel">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-10 text-[0.95rem] md:px-8">
        <p className="font-display text-xl font-semibold">{produto.nome}</p>
        <p>
          {empresa.nome} · CNPJ {empresa.cnpj}
          <br />
          <a href={`mailto:${empresa.email}`} className="underline underline-offset-2">
            {empresa.email}
          </a>
        </p>
        <nav aria-label="Links legais" className="flex flex-wrap gap-x-6">
          <Link href="/privacidade" className="inline-flex min-h-11 items-center underline underline-offset-2">
            {rodape.privacidade}
          </Link>
          <Link href="/termos" className="inline-flex min-h-11 items-center underline underline-offset-2">
            {rodape.termos}
          </Link>
        </nav>
        <p className="text-papel/85">{rodape.aviso}</p>
      </div>
    </footer>
  );
}
