// Link para o checkout externo. O repasse de UTM e o evento do Pixel
// acontecem no clique, em components/Cliente.tsx (data-compra).
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#oferta";

export function BotaoCompra({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT_URL} data-compra className={`botao-compra ${className}`}>
      {children}
    </a>
  );
}
