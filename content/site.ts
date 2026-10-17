// Constantes que você precisa preencher. Variáveis NEXT_PUBLIC_* (Vercel) têm prioridade, se existirem.

export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.hotmart.com/M108071518O?checkoutMode=10";

export const CONTACT_EMAIL = "trilha.lab1@gmail.com";

// Endereço de produção, sem barra no fim. Usado em canonical, Open Graph, sitemap e JSON-LD.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://tabuada-sem-choro-one.vercel.app").replace(/\/$/, "");
