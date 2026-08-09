import {
  LayoutDashboard,
  ClipboardList,
  ChefHat,
  Package,
  Wallet,
  Calculator,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Receita, pedidos, a receber e lucro — o dia da confeitaria num relance.",
    soft: "bg-strawberry-soft",
    color: "text-strawberry",
  },
  {
    icon: ClipboardList,
    title: "Pedidos e entregas",
    text: "Do pendente à entrega: estados claros, prazos e clientes sem confusão.",
    soft: "bg-blueberry-soft",
    color: "text-blueberry",
  },
  {
    icon: ChefHat,
    title: "Produtos e receitas",
    text: "Bolos e doces com ingredientes, custo unitário e margem sob controlo.",
    soft: "bg-caramel-soft",
    color: "text-caramel",
  },
  {
    icon: Package,
    title: "Stock e alertas",
    text: "Ingredientes e materiais com mínimos. Saiba antes de faltar.",
    soft: "bg-mint-soft",
    color: "text-mint",
  },
  {
    icon: Wallet,
    title: "Fluxo de caixa",
    text: "Entradas, saídas e contas a pagar — o dinheiro deixa de ser mistério.",
    soft: "bg-strawberry-soft",
    color: "text-strawberry",
  },
  {
    icon: Calculator,
    title: "Calculadora de preços",
    text: "Escale a receita, calcule custo e defina o preço com ponto de equilíbrio.",
    soft: "bg-blueberry-soft",
    color: "text-blueberry",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="section-pad scroll-mt-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            Funcionalidades
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tudo o que a confeitaria precisa — num só app.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Feito para o telemóvel e para o computador. Simples de usar no meio
            da produção.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="card p-5 sm:p-6 transition duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-2xl ${item.soft}`}
                >
                  <Icon className={`size-5 ${item.color}`} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
