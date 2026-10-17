import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/content/site";
import { PaginaLegal } from "@/components/PaginaLegal";

export const metadata: Metadata = {
  title: "Termos de Uso | Tabuada Sem Choro",
  description: "Condições de compra e uso do ebook Tabuada Sem Choro.",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <PaginaLegal titulo="Termos de Uso" atualizado="16/10/2026">
      <p>
        Estes termos regem o uso deste site e a compra do ebook Tabuada Sem Choro, oferecido pela Tabuada Sem Choro. Ao comprar, você concorda com eles.
      </p>

      <h2>1. O produto</h2>
      <p>
        A Tabuada Sem Choro é um material digital com plano de 4 semanas, fichas diárias, jogos,
        desafios e bônus (medalhas e certificado). É um material educativo de apoio e não substitui o acompanhamento escolar
        ou de profissionais.
      </p>

      <h2>2. Compra e entrega</h2>
      <p>
        O pagamento é feito pela Hotmart, por Pix ou cartão, em pagamento único. O acesso é
        enviado para o e-mail informado logo depois da confirmação do pagamento. Confira a caixa de spam. Se não receber,
        escreva para <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>3. Garantia e reembolso</h2>
      <p>
        Você tem 7 dias corridos a partir da compra para pedir o reembolso integral, sem precisar justificar, conforme o
        art. 49 do Código de Defesa do Consumidor. O pedido pode ser feito pela Hotmart ou pelo nosso e-mail.
      </p>

      <h2>4. Licença de uso</h2>
      <ul>
        <li>O material é para uso pessoal, dentro da sua família.</li>
        <li>É proibido revender, compartilhar, publicar ou distribuir o arquivo, no todo ou em parte.</li>
      </ul>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Textos, ilustrações, jogos e o layout do material são protegidos pela Lei de Direitos Autorais (Lei 9.610/1998).
      </p>

      <h2>6. Fotos do site</h2>
      <p>As fotos desta página são ilustrativas e não retratam clientes.</p>

      <h2>7. Responsabilidade</h2>
      <p>
        Os resultados dependem do ritmo de cada criança e da regularidade do uso. Não garantimos resultados específicos.
      </p>

      <h2>8. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa <a className="underline" href="/privacidade">Política de Privacidade</a>.
      </p>

      <h2>9. Foro</h2>
      <p>
        Estes termos seguem a lei brasileira. Fica eleito o foro do domicílio do consumidor, conforme o Código de Defesa do
        Consumidor.
      </p>
    </PaginaLegal>
  );
}
