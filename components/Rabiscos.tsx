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

// Ícones da faixa de garantias, no mesmo traço dos rabiscos.
const icone = { fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function IconeBaixar({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path {...icone} d="M16 5v15M9.5 14l6.5 6.5 6.5-6.5M6 24.5c0 1.5 1 2.5 2.5 2.5h15c1.5 0 2.5-1 2.5-2.5" />
    </svg>
  );
}

export function IconeImpressora({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path {...icone} d="M9.5 11V5h13v6M9.5 22H6.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3M9.5 18h13v9h-13z" />
    </svg>
  );
}

export function IconeRelogio({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path {...icone} d="M16 4.5c6.5 0 11.5 5 11.5 11.5S22.5 27.5 16 27.5 4.5 22.5 4.5 16 9.5 4.5 16 4.5zM16 9.5V16l4.5 3" />
    </svg>
  );
}

export function IconeEscudo({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path {...icone} d="M16 4l10 4v7c0 6.5-4.5 11-10 13-5.5-2-10-6.5-10-13V8zM11.5 16l3 3 6-6.5" />
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
