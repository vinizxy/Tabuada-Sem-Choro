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

export const hero = {
  selo: "Para crianças de 7 a 10 anos",
  titulo: "Tabuada sem choro.",
  rabisco: "Sem briga. Sem decoreba.",
  sub: "Plano de 4 semanas. 10 minutos por dia. Muitos jogos.",
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
  linha1: "O problema não é o seu filho.",
  linha2: "É decorar sem entender.",
  botao: "Quero tentar do jeito leve",
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
    { src: "/img/mockup-pdf-1.webp", alt: "Página do plano semanal da Tabuada Sem Choro" },
    { src: "/img/mockup-pdf-2.webp", alt: "Ficha diária de 10 minutos com exercícios de multiplicação" },
    { src: "/img/mockup-pdf-3.webp", alt: "Jogo de tabuleiro da tabuada para recortar e jogar" },
    { src: "/img/mockup-pdf-4.webp", alt: "Folha de desafio semanal com espaço para respostas" },
  ],
};

export const recebe = {
  titulo: "Tudo pronto. É só imprimir.",
  itens: [
    "Plano de 4 semanas",
    "Fichas diárias de 10 minutos",
    "Jogos para imprimir e brincar",
    "Desafios semanais",
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

export const oferta = {
  preco: "R$ 19,90",
  linha: "Pagamento único. Menos que um lanche.",
  itens: ["Plano de 4 semanas", "Jogos", "Desafios", "Bônus medalhas e certificado"],
  botao: "Quero a Tabuada Sem Choro agora",
  micro: "Acesso imediato por e-mail · Pix ou cartão",
};

export const garantia = {
  linha1: "7 dias para testar.",
  linha2: "Não gostou? Devolvemos seu dinheiro.",
};

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
  botao: "Quero a Tabuada Sem Choro",
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
