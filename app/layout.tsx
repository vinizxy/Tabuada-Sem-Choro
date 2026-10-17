import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SITE_URL, seo } from "@/content/copy";
import { MetaPixel } from "@/components/MetaPixel";
import { AvisoCookies } from "@/components/Cliente";
import "./globals.css";

// Só a fonte dos títulos tem preload (evita deslocamento no H1).
// Nunito sem preload para não disputar banda com a imagem do hero (LCP).
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.titulo,
  description: seo.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Tabuada Sem Choro",
    title: seo.titulo,
    description: seo.descricao,
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Tabuada Sem Choro" }],
  },
  twitter: { card: "summary_large_image", title: seo.titulo, description: seo.descricao, images: ["/img/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fff8ec" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable} antialiased`}>
      <body>
        {children}
        <AvisoCookies />
        <MetaPixel />
      </body>
    </html>
  );
}
