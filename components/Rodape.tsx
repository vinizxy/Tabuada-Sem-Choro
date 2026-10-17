import Link from "next/link";
import { produto, rodape } from "@/content/copy";
import { CONTACT_EMAIL } from "@/content/site";

export function Rodape() {
  return (
    <footer data-esconde-barra className="bg-tinta text-papel">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-10 text-base md:px-8">
        <p className="font-display text-xl font-semibold">{produto.nome}</p>
        <p>{rodape.copy(new Date().getFullYear())}</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-11 items-center underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
        <nav aria-label="Links legais" className="flex flex-wrap gap-x-6 border-t border-papel/20 pt-2">
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
