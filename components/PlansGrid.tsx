import { Check } from "lucide-react";
import { formatMzn, plans } from "@/lib/site";

type PlansGridProps = {
  showHeader?: boolean;
};

export function PlansGrid({ showHeader = true }: PlansGridProps) {
  return (
    <div>
      {showHeader ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            Planos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Escolha o ritmo da sua confeitaria.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Preços em MZN/mês. Comece com 14 dias de trial — sem cartão
            obrigatório no início.
          </p>
        </div>
      ) : null}

      <div
        className={`grid gap-5 lg:grid-cols-3 ${showHeader ? "mt-12" : ""}`}
      >
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`relative flex flex-col rounded-[1.5rem] p-6 sm:p-7 ${
              plan.highlighted
                ? "bg-strawberry text-white shadow-[0_16px_40px_rgba(230,62,92,0.28)]"
                : "card"
            }`}
          >
            {plan.highlighted ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-strawberry shadow-sm">
                Mais popular
              </span>
            ) : null}

            <div>
              <h3
                className={`text-xl font-semibold tracking-tight ${
                  plan.highlighted ? "text-white" : "text-ink"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-white/85" : "text-muted"
                }`}
              >
                {plan.description}
              </p>
            </div>

            <div className="mt-6">
              <p className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {formatMzn(plan.price)}
                </span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlighted ? "text-white/80" : "text-muted"
                  }`}
                >
                  MZN/mês
                </span>
              </p>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/85" : "text-ink-soft"
                }`}
              >
                {plan.users} · {plan.orders}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm">
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                      plan.highlighted ? "bg-white/20" : "bg-mint-soft"
                    }`}
                  >
                    <Check
                      className={`size-3 ${
                        plan.highlighted ? "text-white" : "text-mint"
                      }`}
                      strokeWidth={2.5}
                    />
                  </span>
                  <span
                    className={
                      plan.highlighted ? "text-white/95" : "text-ink-soft"
                    }
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:ola@bisky.app?subject=Trial%20Bisky%20${encodeURIComponent(plan.name)}`}
              className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-strawberry hover:bg-white/95"
                  : "bg-strawberry text-white hover:brightness-95"
              }`}
            >
              Começar trial de 14 dias
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
