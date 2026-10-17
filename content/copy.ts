// Todos os textos da página. Edite aqui, não nos componentes.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const empresa = {
  nome: "NOME DA EMPRESA LTDA", // TODO: razão social
  cnpj: "00.000.000/0001-00", // TODO: CNPJ
  email: "contato@seudominio.com.br", // TODO: e-mail de contato
};

export const produto = {
  nome: "Tabuada Sem Choro",
  preco: "R$ 19,90",
  precoNumero: 19.9,
  moeda: "BRL",
  descricao:
    "Ebook em PDF para imprimir com plano de 4 semanas (10 minutos por dia) e jogos para crianças de 7 a 10 anos aprenderem a tabuada entendendo, e não só decorando.",
};

export const seo = {
  titulo: "Tabuada Sem Choro | Plano de 4 semanas para imprimir",
  descricao:
    "Ebook em PDF para crianças de 7 a 10 anos aprenderem a tabuada entendendo. Plano de 4 semanas, 10 minutos por dia, jogos para imprimir. R$ 19,90.",
};

export const topo = "PDF para imprimir · Acesso imediato";

export const garantias = ["Acesso imediato", "Pronto para imprimir", "10 minutos por dia", "Garantia de 7 dias"];

export const hero = {
  selo: "Para crianças de 7 a 10 anos",
  titulo: "Tabuada sem choro.",
  rabisco: "10 minutos por dia, sem decoreba.",
  sub: "Plano de 4 semanas em PDF, com fichas e jogos para imprimir. Seu filho aprende a tabuada entendendo de onde ela vem.",
  botao: "Quero a Tabuada Sem Choro — R$ 19,90",
  micro: "Pagamento único · Acesso imediato · Garantia de 7 dias",
  imagemAlt: "Criança sorrindo sentada à mesa com uma folha de tabuada impressa",
};

export const dor = {
  titulo: "A hora da tabuada virou hora de choro?",
  itens: [
    "Trava no 7 × 8.",
    "Esquece no dia seguinte.",
    "Diz: 'eu não sou bom em matemática'.",
    "E você já não sabe mais o que fazer.",
  ],
  imagemAlt: "Criança pensativa diante do caderno, com o lápis parado",
};

export const virada = {
  texto:
    "Na maioria das vezes a criança trava porque decorou a tabuada sem saber de onde ela vem. Quando ela entende o que é multiplicar, a decoreba deixa de ser tão pesada.",
};

export const metodo = {
  titulo: "Entender primeiro. Decorar depois.",
  semanas: [
    { n: 1, nome: "Entender", texto: "O que é multiplicar, com objetos, desenhos e jogos." },
    { n: 2, nome: "Padrões fáceis", texto: "Tabuadas do 2, 5, 10, 3 e 4." },
    { n: 3, nome: "Os difíceis", texto: "6, 7, 8 e 9, com truques e jogos." },
    { n: 4, nome: "Desafios", texto: "Revisão e mini-desafios finais." },
  ],
};

export const previa = {
  titulo: "Veja por dentro.",
  legenda: "Folhas prontas para imprimir em A4.",
  paginas: [
    { src: "/img/mockup-pdf-1.webp", alt: "Capa do ebook Tabuada Sem Choro com o mascote Vezinho" },
    { src: "/img/mockup-pdf-2.webp", alt: "Ficha diária de 10 minutos: grupos iguais, aquecimento e mão na massa" },
    { src: "/img/mockup-pdf-3.webp", alt: "Página da tabuada do 9 com o truque dos dedos" },
    { src: "/img/mockup-pdf-4.webp", alt: "Tabela mágica com toda a tabuada em uma folha" },
  ],
};

export const recebe = {
  titulo: "Tudo pronto. É só imprimir.",
  itens: [
    { titulo: "Plano de 4 semanas", texto: "O que fazer em cada dia, na ordem certa. Sem inventar atividade." },
    { titulo: "Fichas diárias de 10 minutos", texto: "Exercícios curtos, uma tabuada de cada vez." },
    { titulo: "Jogos para imprimir e brincar", texto: "Para recortar e jogar junto. A criança treina brincando." },
    { titulo: "Desafios semanais", texto: "Um mini-desafio no fim de cada semana para ver a evolução." },
  ],
  bonus: "BÔNUS: Medalhas e certificado Mestre da Tabuada",
  bonusAlt: "Medalhas de papel e certificado Mestre da Tabuada impressos",
  botao: "Quero começar hoje",
};

export const comoFunciona = {
  titulo: "Como funciona",
  passos: ["Imprima.", "Separe 10 minutos.", "Brinquem."],
  imagemAlt: "Mãos de um adulto e de uma criança jogando um jogo de tabuada impresso",
};

export const paraQuem = {
  titulo: "Para quem é este plano?",
  sim: {
    titulo: "É para você se…",
    itens: [
      "Seu filho estuda a tabuada e esquece no dia seguinte.",
      "Você quer uma rotina curta e pronta para seguir.",
      "Você quer trocar a cobrança por brincadeira.",
      "Você quer menos briga e mais confiança na hora de estudar.",
    ],
  },
  nao: {
    titulo: "Não é para você se…",
    itens: [
      "Você procura resultado mágico sem aplicar o material.",
      "Você não consegue separar 10 minutos por dia.",
      "Você prefere continuar só na repetição.",
    ],
  },
};

export const oferta = {
  preco: "R$ 19,90",
  linha: "Pagamento único. Menos que um lanche.",
  comparacao:
    "Uma única aula de reforço costuma custar mais que o material inteiro. E o plano fica com você para repetir quantas vezes precisar.",
  itens: ["Plano de 4 semanas", "Jogos", "Desafios", "Bônus medalhas e certificado"],
  botao: "Quero a Tabuada Sem Choro agora",
  micro: "Acesso imediato por e-mail · Pix ou cartão",
};

export const garantia = {
  linha1: "Garantia de 7 dias.",
  linha2: "Se não gostar, devolvemos o valor.",
};

// Só aparece na página quando tiver itens. Use apenas depoimentos reais, com permissão de quem escreveu.
export const depoimentos: { nome: string; detalhe: string; texto: string }[] = [];

export const faq = {
  titulo: "Perguntas frequentes",
  itens: [
    {
      p: "Para qual idade?",
      r: "Foi pensado para crianças de 7 a 10 anos que já conhecem os números e estão aprendendo ou revisando a multiplicação.",
    },
    {
      p: "Preciso imprimir?",
      r: "Sim, o material é feito para imprimir em folhas A4. Dá para usar também na tela, mas os jogos funcionam melhor no papel.",
    },
    { p: "Quanto tempo por dia?", r: "Cerca de 10 minutos." },
    {
      p: "Meu filho tem dificuldade. Funciona?",
      r: "O plano começa do zero e vai devagar. Cada criança tem o seu ritmo, e você pode repetir qualquer semana.",
    },
    { p: "Como recebo?", r: "Por e-mail, logo depois da confirmação do pagamento." },
    { p: "Posso usar com mais de um filho?", r: "Sim, dentro da sua família." },
    { p: "E se eu não gostar?", r: "Você tem 7 dias de garantia." },
  ],
};

export const ctaFinal = {
  titulo: "Chega de choro na tabuada.",
  botao: "Quero a Tabuada Sem Choro — R$ 19,90",
};

export const barraFixa = {
  botao: "Quero comprar agora",
};

export const rodape = {
  aviso: "Este site não é afiliado ao Facebook, Instagram nem à Meta.",
  privacidade: "Política de Privacidade",
  termos: "Termos de Uso",
};

export const cookies = {
  texto: "Usamos cookies para medir anúncios e melhorar a página.",
  link: "Saiba mais",
  botao: "Entendi",
};
