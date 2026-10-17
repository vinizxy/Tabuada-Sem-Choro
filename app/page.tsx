import { SITE_URL, faq, produto, topo } from "@/content/copy";
import { BarraFixa, RastreioCompra } from "@/components/Cliente";
import { Rodape } from "@/components/Rodape";
import { Hero } from "@/components/sections/Hero";
import { Dor } from "@/components/sections/Dor";
import { Virada } from "@/components/sections/Virada";
import { Metodo } from "@/components/sections/Metodo";
import { Previa } from "@/components/sections/Previa";
import { Recebe } from "@/components/sections/Recebe";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Oferta } from "@/components/sections/Oferta";
import { Garantia } from "@/components/sections/Garantia";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { CHECKOUT_URL } from "@/components/BotaoCompra";

// Sem aggregateRating enquanto não houver avaliações reais.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome,
    description: produto.descricao,
    image: `${SITE_URL}/img/og-image.jpg`,
    offers: {
      "@type": "Offer",
      price: produto.precoNumero.toFixed(2),
      priceCurrency: produto.moeda,
      availability: "https://schema.org/InStock",
      url: CHECKOUT_URL.startsWith("http") ? CHECKOUT_URL : SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.itens.map((i) => ({
      "@type": "Question",
      name: i.p,
      acceptedAnswer: { "@type": "Answer", text: i.r },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="sticky top-0 z-20 border-b-2 border-tinta bg-tinta py-2 text-center font-display text-[0.95rem] font-medium text-papel">
        {topo}
      </header>
      <main>
        <Hero />
        <Dor />
        <Virada />
        <Metodo />
        <Previa />
        <Recebe />
        <ComoFunciona />
        <Oferta />
        <Garantia />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
      <BarraFixa />
      <RastreioCompra />
    </>
  );
}
