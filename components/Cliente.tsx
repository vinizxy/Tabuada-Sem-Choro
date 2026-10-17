"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { barraFixa, cookies, produto } from "@/content/copy";
import { CHECKOUT_URL } from "./BotaoCompra";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const REPASSAR = /^(utm_\w+|fbclid|src)$/;

// Um único ouvinte para todos os botões de compra (data-compra):
// anexa utm_*, fbclid e src da URL atual e dispara InitiateCheckout.
export function RastreioCompra() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[data-compra]") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.href.startsWith("http") && !a.href.startsWith(location.origin)) {
        const url = new URL(a.href);
        new URLSearchParams(location.search).forEach((v, k) => {
          if (REPASSAR.test(k)) url.searchParams.set(k, v);
        });
        a.href = url.toString();
      }
      window.fbq?.("track", "InitiateCheckout", { value: produto.precoNumero, currency: produto.moeda, content_name: produto.nome });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

// Barra de compra no rodapé (só celular). Some enquanto hero, oferta,
// CTA final ou rodapé estão na tela (elementos com data-esconde-barra).
export function BarraFixa() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvos = document.querySelectorAll("[data-esconde-barra]");
    const naTela = new Set<Element>();
    const io = new IntersectionObserver((entradas) => {
      for (const en of entradas) en.isIntersecting ? naTela.add(en.target) : naTela.delete(en.target);
      setVisivel(naTela.size === 0);
    });
    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="barra-fixa fixed inset-x-0 bottom-0 z-30 border-t-2 border-tinta bg-papel px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] md:hidden"
      data-visivel={visivel}
      inert={!visivel}
    >
      <div className="flex items-center gap-3">
        <p className="shrink-0 leading-none" aria-label={`Preço: ${produto.preco}, pagamento único`}>
          <span className="block font-display text-[1.4rem] font-bold">{produto.preco.replace(" ", " ")}</span>
          <span className="mt-0.5 block text-base text-tinta-suave">pagamento único</span>
        </p>
        <a href={CHECKOUT_URL} data-compra className="botao-compra min-w-0 flex-1 px-4 py-3 text-[1.05rem]">
          {barraFixa.botao}
        </a>
      </div>
    </div>
  );
}

const CHAVE = "tsc-cookies-ok";

export function AvisoCookies() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    try {
      setMostrar(!localStorage.getItem(CHAVE));
    } catch {
      setMostrar(true);
    }
  }, []);

  if (!mostrar) return null;

  const fechar = () => {
    try {
      localStorage.setItem(CHAVE, "1");
    } catch {}
    setMostrar(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[88px] z-40 flex items-center gap-3 rounded-[20px] border-2 border-tinta bg-[#fffdf8] p-3 text-[0.95rem] leading-snug shadow-[4px_4px_0_var(--tinta)] md:inset-x-auto md:bottom-4 md:left-4 md:max-w-sm"
    >
      <p className="flex-1">
        {cookies.texto}{" "}
        <Link href="/privacidade" className="font-bold underline underline-offset-2">
          {cookies.link}
        </Link>
      </p>
      <button
        type="button"
        onClick={fechar}
        className="min-h-11 shrink-0 rounded-full border-2 border-tinta bg-amarelo px-4 font-display font-semibold"
      >
        {cookies.botao}
      </button>
    </div>
  );
}
