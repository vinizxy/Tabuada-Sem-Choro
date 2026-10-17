// Linha de confiança sob o botão ("A · B · C"). Só quebra entre os itens,
// nunca no meio de "Acesso imediato" ou "Garantia de 7 dias".
export function Micro({ texto, className = "" }: { texto: string; className?: string }) {
  const partes = texto.split(" · ");
  return (
    <p className={`text-base text-tinta-suave ${className}`}>
      {partes.map((p, i) => (
        <span key={p}>
          <span className="whitespace-nowrap">
            {p}
            {i < partes.length - 1 ? " ·" : ""}
          </span>
          {i < partes.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
