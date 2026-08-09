import {
  LayoutDashboard,
  ClipboardList,
  Package,
  TrendingUp,
} from "lucide-react";

function PhoneChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[1.75rem] bg-ink shadow-[0_24px_64px_rgba(28,25,23,0.18)] ring-1 ring-black/10">
        <div className="bg-[#f8f8f9] px-3 pb-3 pt-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-ink/20" />
          {children}
        </div>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <PhoneChrome>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <div>
            <p className="text-[10px] font-medium text-muted">Hoje</p>
            <p className="text-sm font-semibold text-ink">Olá, Ana</p>
          </div>
          <div className="flex size-8 items-center justify-center rounded-full bg-strawberry text-[11px] font-semibold text-white">
            A
          </div>
        </div>

        <div className="rounded-2xl bg-strawberry p-3 text-white shadow-sm shadow-strawberry/30">
          <p className="text-[10px] font-medium uppercase tracking-wider text-white/80">
            Receita do mês
          </p>
          <p className="mt-1 text-xl font-semibold tracking-tight">48.500 MZN</p>
          <p className="mt-1 text-[10px] text-white/80">+18% vs. mês passado</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Pedidos", value: "23", soft: "bg-blueberry-soft", color: "text-blueberry" },
            { label: "A receber", value: "6.200", soft: "bg-caramel-soft", color: "text-caramel" },
            { label: "Lucro", value: "19.800", soft: "bg-mint-soft", color: "text-mint" },
            { label: "Stock baixo", value: "3", soft: "bg-strawberry-soft", color: "text-strawberry" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-2.5 shadow-[var(--shadow-card)]">
              <p className="text-[9px] font-semibold tracking-wider text-muted uppercase">
                {s.label}
              </p>
              <p className={`mt-1 text-sm font-semibold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]">
          <p className="text-[10px] font-semibold text-ink">Entregas de hoje</p>
          <div className="mt-2 space-y-2">
            {[
              { name: "Bolo red velvet", time: "14:00", status: "Produção" },
              { name: "Cupcakes ×12", time: "16:30", status: "Pronto" },
            ].map((o) => (
              <div key={o.name} className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] font-medium text-ink">{o.name}</p>
                  <p className="text-[9px] text-muted">{o.time}</p>
                </div>
                <span className="rounded-full bg-strawberry-soft px-2 py-0.5 text-[9px] font-semibold text-strawberry">
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}

function OrdersMock() {
  return (
    <PhoneChrome>
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <p className="text-sm font-semibold text-ink">Pedidos</p>
          <span className="rounded-full bg-strawberry px-2.5 py-1 text-[10px] font-semibold text-white">
            + Novo
          </span>
        </div>
        <div className="flex gap-1.5">
          {["Todos", "Pendentes", "Prontos"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                i === 0
                  ? "bg-strawberry text-white"
                  : "bg-white text-muted shadow-[var(--shadow-card)]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        {[
          { client: "Maria Silva", item: "Bolo de casamento", status: "Pendente", tone: "caramel" },
          { client: "João Costa", item: "Docinhos ×50", status: "Produção", tone: "blueberry" },
          { client: "Carla N.", item: "Tarte limão", status: "Entregue", tone: "mint" },
        ].map((o) => (
          <div
            key={o.client}
            className="rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-semibold text-ink">{o.client}</p>
                <p className="mt-0.5 text-[10px] text-muted">{o.item}</p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  o.tone === "caramel"
                    ? "bg-caramel-soft text-chocolate"
                    : o.tone === "blueberry"
                      ? "bg-blueberry-soft text-blueberry"
                      : "bg-mint-soft text-mint"
                }`}
              >
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </PhoneChrome>
  );
}

const highlights = [
  {
    icon: LayoutDashboard,
    title: "Dashboard claro",
    text: "Receita, pedidos, a receber e lucro — sem abrir cinco apps.",
  },
  {
    icon: ClipboardList,
    title: "Pedidos com estados",
    text: "Pendente → produção → pronto → entregue. Toda a equipa alinhada.",
  },
  {
    icon: Package,
    title: "Stock que avisa",
    text: "Saiba o que está a acabar antes do dia da entrega.",
  },
  {
    icon: TrendingUp,
    title: "Lucro visível",
    text: "Custos reais das receitas e caixa actualizado.",
  },
];

export function ProductShowcase() {
  return (
    <section id="produto" className="section-pad scroll-mt-24 bg-[#f8f8f9]">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            Dentro da app
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Veja como o Bisky organiza o dia.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Mockups fiéis à interface real. Quando tiver screenshots do produto,
            basta substituir estes ecrãs.
          </p>
        </div>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-10">
          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)]">
                    <Icon className="size-4 text-strawberry" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-1 animate-fade-up lg:order-2">
            <DashboardMock />
            <p className="mt-3 text-center text-xs font-medium text-muted">
              Dashboard
            </p>
          </div>
          <div className="order-2 animate-fade-up delay-1 lg:order-3 lg:mb-8">
            <OrdersMock />
            <p className="mt-3 text-center text-xs font-medium text-muted">
              Pedidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
