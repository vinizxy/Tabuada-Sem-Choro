// Use apenas avaliações REAIS, com permissão de quem escreveu. Vazio = a seção inteira não aparece
// e nenhum aggregateRating é gerado.
export type Testimonial = {
  nome: string; // "Mariana S."
  cidade?: string;
  foto?: string; // ex.: "/depoimentos/mariana.webp" (opcional)
  texto: string;
  nota: 1 | 2 | 3 | 4 | 5;
  data: string; // ISO: "2026-11-02"
};

export const testimonials: Testimonial[] = [];
