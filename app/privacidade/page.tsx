import type { Metadata } from "next";
import { empresa } from "@/content/copy";
import { PaginaLegal } from "@/components/PaginaLegal";

export const metadata: Metadata = {
  title: "Política de Privacidade | Tabuada Sem Choro",
  description: "Como a Tabuada Sem Choro trata seus dados pessoais, conforme a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <PaginaLegal titulo="Política de Privacidade" atualizado="16/10/2026">
      <p>
        Esta política explica como {empresa.nome}, inscrita no CNPJ {empresa.cnpj} (&quot;nós&quot;), trata dados pessoais
        de quem visita este site e de quem compra a Tabuada Sem Choro, de acordo com a Lei Geral de Proteção de Dados
        (Lei 13.709/2018, &quot;LGPD&quot;).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados é {empresa.nome}. Para qualquer assunto sobre privacidade, inclusive para falar com o
        encarregado (DPO), escreva para <a className="underline" href={`mailto:${empresa.email}`}>{empresa.email}</a>.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados de navegação:</strong> páginas visitadas, tipo de aparelho e navegador, endereço IP aproximado e
          parâmetros de campanha (como utm e fbclid), coletados por cookies e pelo Pixel da Meta.
        </li>
        <li>
          <strong>Dados de compra:</strong> nome, e-mail, CPF, telefone e dados de pagamento são informados diretamente na
          plataforma de checkout (por exemplo Kiwify, Hotmart ou Eduzz). Não armazenamos dados de cartão neste site.
        </li>
        <li>
          <strong>Dados de contato:</strong> o que você nos enviar por e-mail.
        </li>
      </ul>
      <p>Não coletamos intencionalmente dados de crianças. O material é comprado e usado sob responsabilidade de um adulto.</p>

      <h2>3. Para que usamos e com qual base legal</h2>
      <ul>
        <li>Entregar o produto e prestar suporte: execução de contrato (art. 7º, V).</li>
        <li>Cumprir obrigações fiscais e legais: cumprimento de obrigação legal (art. 7º, II).</li>
        <li>Medir o desempenho de anúncios e melhorar a página: legítimo interesse (art. 7º, IX) ou consentimento, quando exigido.</li>
        <li>Enviar comunicações sobre o produto comprado: execução de contrato e legítimo interesse.</li>
      </ul>

      <h2>4. Com quem compartilhamos</h2>
      <ul>
        <li>Plataforma de checkout e pagamento, para processar a compra e enviar o acesso.</li>
        <li>Meta Platforms (Facebook e Instagram), para mensurar anúncios por meio do Pixel e da API de Conversões.</li>
        <li>Provedor de hospedagem do site (Vercel).</li>
        <li>Autoridades públicas, quando houver obrigação legal.</li>
      </ul>
      <p>Alguns desses fornecedores podem tratar dados fora do Brasil, com as salvaguardas previstas na LGPD.</p>

      <h2>5. Cookies</h2>
      <p>
        Usamos cookies essenciais para o funcionamento do site e cookies de medição de anúncios (Pixel da Meta). Você pode
        bloquear ou apagar cookies nas configurações do seu navegador. O site continua funcionando sem eles.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados pelo tempo necessário para as finalidades acima e para cumprir prazos legais (por exemplo, fiscais
        e de defesa do consumidor). Depois disso, os dados são excluídos ou anonimizados.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Pelo art. 18 da LGPD, você pode pedir a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>portabilidade;</li>
        <li>informação sobre com quem compartilhamos;</li>
        <li>revogação do consentimento, quando ele for a base legal.</li>
      </ul>
      <p>
        Envie o pedido para <a className="underline" href={`mailto:${empresa.email}`}>{empresa.email}</a>. Você também pode
        reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Segurança</h2>
      <p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado e vazamentos.</p>

      <h2>9. Mudanças nesta política</h2>
      <p>Podemos atualizar esta política. A data no topo indica a versão em vigor.</p>
    </PaginaLegal>
  );
}
