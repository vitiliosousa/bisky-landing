export const siteNav = [
  { href: "#produto", label: "Produto" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
] as const;

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 599,
    description: "Para negócios a começar",
    users: "2 utilizadores",
    orders: "Até 100 pedidos/mês",
    highlighted: false,
    features: [
      "Dashboard e relatórios",
      "Pedidos e entregas",
      "Produtos e receitas",
      "Stock com alertas",
      "Fluxo de caixa",
      "Calculadora de preços",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 1599,
    description: "Para negócios em crescimento",
    users: "10 utilizadores",
    orders: "Pedidos ilimitados",
    highlighted: true,
    features: [
      "Tudo do Starter",
      "Mais utilizadores na equipa",
      "Pedidos sem limite",
      "Ideal para várias encomendas/semana",
      "Prioridade no suporte",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 3999,
    description: "Para grandes operações",
    users: "Utilizadores ilimitados",
    orders: "Pedidos ilimitados",
    highlighted: false,
    features: [
      "Tudo do Pro",
      "Equipa sem limite",
      "Operações com vários pontos",
      "Acompanhamento próximo",
      "Condições à medida",
    ],
  },
] as const;

export const faqItems = [
  {
    tag: "Produto",
    tone: "strawberry" as const,
    q: "O que é o Bisky?",
    a: "É um sistema de gestão feito para confeitarias: pedidos, stock, custos, caixa e lucros num só lugar, no telemóvel ou no computador.",
  },
  {
    tag: "Público",
    tone: "caramel" as const,
    q: "Para quem é?",
    a: "Para confeiteiras e donas de negócio que hoje gerem pedidos no WhatsApp, Excel ou caderno e querem organização sem complicar o dia a dia.",
  },
  {
    tag: "Trial",
    tone: "mint" as const,
    q: "Posso experimentar antes de pagar?",
    a: "Sim. Oferecemos 14 dias de trial para conhecer o sistema com a sua operação real, sem compromisso.",
  },
  {
    tag: "App",
    tone: "blueberry" as const,
    q: "Funciona no telemóvel?",
    a: "Sim. O Bisky foi pensado para usar na produção, entre entregas e no atendimento, no telemóvel, tablet ou computador.",
  },
  {
    tag: "Dia a dia",
    tone: "strawberry" as const,
    q: "Substitui o WhatsApp?",
    a: "Não precisa de abandonar o WhatsApp com o cliente. O Bisky organiza o que vem depois: pedido registado, produção, entrega, stock e dinheiro.",
  },
  {
    tag: "Planos",
    tone: "caramel" as const,
    q: "Qual a diferença entre os planos?",
    a: "A diferença principal é o número de utilizadores e o volume de pedidos. Starter para começar, Pro para crescer, Enterprise para operações maiores.",
  },
  {
    tag: "Pagamento",
    tone: "mint" as const,
    q: "Como funciona o pagamento?",
    a: "Os planos são mensais em meticais (MZN). Depois do trial, activamos o plano que escolher. Fale connosco para detalhes de pagamento.",
  },
  {
    tag: "Dados",
    tone: "blueberry" as const,
    q: "Os meus dados ficam seguros?",
    a: "Cada confeitaria tem o seu espaço separado. Os dados do negócio não são misturados com os de outras empresas.",
  },
  {
    tag: "Começar",
    tone: "strawberry" as const,
    q: "Como começo?",
    a: "Peça acesso por email. Criamos a sua conta, activa o trial de 14 dias e guia-o nos primeiros passos.",
  },
] as const;

export function formatMzn(value: number) {
  return new Intl.NumberFormat("pt-MZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);
}
