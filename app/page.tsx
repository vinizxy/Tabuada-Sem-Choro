import { faq, produto, topo } from "@/content/copy";
import { CHECKOUT_URL, SITE_URL } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { BarraFixa, RastreioCompra } from "@/components/Cliente";
import { Rodape } from "@/components/Rodape";
import { Hero } from "@/components/sections/Hero";
import { Dor } from "@/components/sections/Dor";
import { Metodo } from "@/components/sections/Metodo";
import { Previa } from "@/components/sections/Previa";
import { Recebe } from "@/components/sections/Recebe";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Oferta } from "@/components/sections/Oferta";
import { Prova } from "@/components/sections/Prova";
import { Garantia } from "@/components/sections/Garantia";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";

// aggregateRating só entra quando houver avaliações reais em content/testimonials.ts.
const notaMedia = testimonials.length ? testimonials.reduce((t, d) => t + d.nota, 0) / testimonials.length : 0;
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome,
    description: produto.descricao,
    image: `${SITE_URL}/img/og-image.jpg`,
    ...(testimonials.length > 0 && {
      aggregateRating: { "@type": "AggregateRating", ratingValue: notaMedia.toFixed(1), reviewCount: testimonials.length },
      review: testimonials.map((d) => ({
        "@type": "Review",
        author: { "@type": "Person", name: d.nome },
        datePublished: d.data,
        reviewBody: d.texto,
        reviewRating: { "@type": "Rating", ratingValue: d.nota, bestRating: 5 },
      })),
    }),
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
      <header className="sticky top-0 z-20 border-b-2 border-tinta bg-tinta py-2 text-center font-display text-base font-medium text-papel">
        {topo}
      </header>
      <main>
        <Hero />
        <Dor />
        <Metodo />
        <Previa />
        <Recebe />
        <ComoFunciona />
        <ParaQuem />
        <Prova />
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
