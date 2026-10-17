import { CHECKOUT_URL } from "@/content/site";

// Link para o checkout externo. O repasse de UTM e o evento do Pixel
// acontecem no clique, em components/Cliente.tsx (data-compra).
export const linkCompra = CHECKOUT_URL.startsWith("http") ? { rel: "noopener" } : {};

export function BotaoCompra({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT_URL} {...linkCompra} data-compra className={`botao-compra ${className}`}>
      {children}
    </a>
  );
}
