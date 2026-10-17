// Rabiscos "feitos à mão" do caderno. Decorativos: sempre aria-hidden.
type P = { className?: string; animado?: boolean };

const traco = (animado?: boolean) => (animado ? "rabisco-traco" : undefined);

export function Sublinhado({ className, animado }: P) {
  return (
    <svg viewBox="0 0 300 20" fill="none" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path
        pathLength={1}
        className={traco(animado)}
        d="M4 13c40-6 82-9 124-8 52 1 92 5 138 2 10-1 20-2 30-4"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Circulo({ className, animado }: P) {
  return (
    <svg viewBox="0 0 220 110" fill="none" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path
        pathLength={1}
        className={traco(animado)}
        d="M150 12C96 2 22 14 9 50c-12 34 46 54 112 52 62-2 96-26 90-52C205 22 160 8 100 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Seta({ className }: P) {
  return (
    <svg viewBox="0 0 90 70" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 8c18 2 40 12 52 30 6 9 9 17 10 24M52 52l16 12 6-20"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Visto({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 17c3 2 6 5 8 9 4-9 8-15 14-21"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Xis({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M7 6c6 7 12 13 19 20M25 7C18 13 12 19 6 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Estrela({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        d="M20 3l4.6 10.6L36 15l-8.6 7.7L30 34l-10-6-10 6 2.6-11.3L4 15l11.4-1.4z"
        fill="currentColor"
        stroke="var(--tinta)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
