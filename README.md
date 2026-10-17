# Tabuada Sem Choro: página de vendas

Página de vendas estática (Next.js 16 App Router + TypeScript + Tailwind CSS v4) para o ebook **Tabuada Sem Choro** (R$ 10,90).
Todas as rotas são geradas no build (SSG). Não há backend.

## Como rodar

Requisitos: Node.js 20 ou mais novo.

```bash
npm install
cp .env.example .env.local   # edite os valores
npm run dev                  # http://localhost:3000
```

Versão de produção local (é a que deve ser medida no Lighthouse):

```bash
npm run build
npm run start
```

## Onde mexer

| O que | Onde |
| --- | --- |
| Todos os textos, preço, FAQ, nome da empresa, CNPJ, e-mail | `content/copy.ts` |
| Seções da página | `components/sections/*.tsx` (a ordem fica em `app/page.tsx`) |
| Cores, fontes, papel quadriculado, sombras | `app/globals.css` (variáveis no `:root`) |
| Botão de compra | `components/BotaoCompra.tsx` |
| Repasse de UTM, InitiateCheckout, barra fixa, aviso de cookies | `components/Cliente.tsx` (único código que roda no navegador) |
| Meta Pixel | `components/MetaPixel.tsx` |
| Política de Privacidade e Termos de Uso | `app/privacidade/page.tsx` e `app/termos/page.tsx` |
| SEO (title, description, Open Graph) | `content/copy.ts` (`seo`) e `app/layout.tsx` |
| JSON-LD (Product + Offer + FAQPage) | `app/page.tsx` |

## Variáveis de ambiente

| Variável | Para quê |
| --- | --- |
| `NEXT_PUBLIC_CHECKOUT_URL` | Link do checkout. Sem ela, os botões levam até a seção de oferta. |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Pixel. Sem ela, o pixel não carrega. |
| `NEXT_PUBLIC_SITE_URL` | Domínio final (ex.: `https://www.tabuadasemchoro.com.br`). Usado em canonical, OG e sitemap. |

Por serem `NEXT_PUBLIC_*`, os valores entram no build. **Depois de mudar uma variável na Vercel, faça um novo deploy.**

## Trocar as imagens

As imagens em `public/img/` são provisórias (papel quadriculado com o nome do arquivo). Substitua pelos arquivos finais **com o mesmo nome e a mesma proporção**:

| Arquivo | Proporção | Tamanho sugerido | Onde aparece |
| --- | --- | --- | --- |
| `hero-crianca-folha.webp` | 4:5 | 960 × 1200 | Topo (carrega com prioridade) |
| `dor-crianca-travada.webp` | 4:5 | 800 × 1000 | Seção "A hora da tabuada..." |
| `maos-jogando.webp` | 4:3 | 1200 × 900 | "Como funciona" |
| `medalha-certificado.webp` | 1:1 | 600 × 600 | Faixa de bônus |
| `mockup-pdf-1.webp` a `mockup-pdf-4.webp` | 3:4 | 750 × 1000 | "Veja por dentro" |
| `og-image.jpg` | 1200 × 630 | 1200 × 630 | Prévia no WhatsApp/Facebook |

- Exporte em WebP (qualidade ~80). O Next gera AVIF/WebP no tamanho certo para cada tela automaticamente.
- Se mudar a proporção de alguma imagem, ajuste `width`/`height` no componente da seção para não causar CLS.
- Textos alternativos (`alt`) ficam em `content/copy.ts`.
- As fotos são ilustrativas. **Não** as apresente como clientes, não crie depoimentos e não adicione nota de avaliação (`aggregateRating`) sem prova social real.

## Meta Pixel e API de Conversões

Eventos disparados pela página:

| Evento | Quando |
| --- | --- |
| `PageView` | Ao carregar (depois da hidratação, `afterInteractive`) |
| `ViewContent` | Ao carregar, com `value: 10.9`, `currency: BRL` |
| `InitiateCheckout` | Ao clicar em qualquer botão de compra |
| `Purchase` | **No checkout**, não nesta página |

Ao clicar no botão, a página anexa ao link do checkout os parâmetros `utm_*`, `fbclid` e `src` que vieram no anúncio. Assim a plataforma de checkout atribui a venda à campanha certa.

### Configurar o Purchase e a API de Conversões (CAPI)

A API de Conversões manda os eventos direto do servidor para a Meta, sem depender do navegador (bloqueadores, iOS). Como esta página não tem backend, a forma mais simples é usar a integração nativa da plataforma de checkout:

1. **Gerenciador de Eventos da Meta** → seu Pixel → *Configurações* → *API de Conversões* → **Gerar token de acesso**. Copie o token.
2. **Na plataforma de checkout** (Kiwify, Hotmart ou Eduzz), abra as configurações de pixel/rastreamento do produto, escolha Facebook/Meta e cadastre o mesmo ID de Pixel e o token da API de Conversões. Os nomes dos menus mudam com frequência; procure "Pixel" na central de ajuda da plataforma.
3. Marque para enviar `InitiateCheckout` e `Purchase` (a plataforma faz a deduplicação com o pixel do checkout).
4. No Gerenciador de Eventos, use **Testar eventos** para conferir que `Purchase` chega por navegador e por servidor.
5. Em *Configurações*, verifique o domínio (`seudominio.com.br`) em **Segurança da marca → Domínios** e priorize `Purchase` na mensuração de eventos agregados.

Se um dia quiser enviar `ViewContent` e `InitiateCheckout` também pelo servidor, dá para usar o **Gateway da API de Conversões** (Meta) ou um contêiner de servidor do Google Tag Manager, sem mexer neste código.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project** → importe o repositório. Framework: Next.js (detectado sozinho).
3. Em **Environment Variables**, cadastre as três variáveis acima (ambiente *Production*).
4. **Deploy**.

### Domínio próprio

1. Na Vercel: projeto → **Settings → Domains** → adicione `seudominio.com.br` e `www.seudominio.com.br`.
2. No registro do domínio (Registro.br, Hostinger etc.), crie os registros DNS que a Vercel mostrar (normalmente um `A` para o domínio raiz e um `CNAME` para `www`).
3. Escolha qual versão é a principal (ex.: `www`) e deixe a outra redirecionando.
4. Atualize `NEXT_PUBLIC_SITE_URL` com o domínio principal e faça um novo deploy.
5. Use o domínio final nos anúncios e verifique-o no Gerenciador de Negócios da Meta.

## Desempenho

- Página 100% estática; o único código próprio no navegador é `components/Cliente.tsx` (poucos KB).
- O runtime do Next.js App Router + React soma cerca de 145 KB (gzip) de JS. Esse é o piso do App Router e domina o tempo de execução no celular.
- Imagem do topo com `preload` e `fetchPriority="high"`; as demais carregam sob demanda.
- Animações ao rolar em CSS puro (`animation-timeline: view()`); desligadas com `prefers-reduced-motion`.
- Meça sempre no domínio final com o [PageSpeed Insights](https://pagespeed.web.dev/), que é o que a Meta e o Google enxergam.
