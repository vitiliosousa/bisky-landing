export const siteNav = [
  { href: "#solucao", label: "Solução" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
] as const;

export const plans = [
  {
    id: "start",
    name: "Bisky Start",
    price: 349,
    description: "Para organizar o dia a dia da confeitaria",
    users: "1 utilizador",
    orders: "Pedidos ilimitados",
    highlighted: false,
    features: [
      "Ingredientes, insumos e produtos",
      "Calculadora de custo completo (mão de obra + indiretos)",
      "Pedidos e calendário",
      "Registo de perdas",
      "Fluxo de caixa",
      "Contas a pagar e a receber",
    ],
  },
  {
    id: "pro",
    name: "Bisky Pro",
    price: 549,
    description: "Para crescer com mais controlo financeiro",
    users: "Multiutilizador",
    orders: "Pedidos ilimitados",
    highlighted: true,
    features: [
      "Tudo do Bisky Start",
      "Relatórios (tendências, comparação mensal, rankings)",
      "Multiutilizador",
      "Exportação em PDF/Excel",
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
    a: "Sim. Oferecemos 60 dias de trial para conhecer o sistema com a sua operação real, sem compromisso.",
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
    a: "O Bisky Start tem tudo para organizar o dia a dia: produtos, pedidos, calendário, perdas, caixa e contas a pagar/receber. O Bisky Pro acrescenta relatórios, vários utilizadores e exportação em PDF/Excel.",
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
] as const;

export function formatMzn(value: number) {
  return new Intl.NumberFormat("pt-MZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);
}
