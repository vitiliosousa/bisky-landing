import Image from "next/image";
import { Check } from "lucide-react";

const points = [
  "Todos os pedidos num só sítio, com estado claro até à entrega",
  "Receitas com custo real — e preço de venda com margem",
  "Alertas de stock antes de faltar o essencial",
  "Caixa e lucros visíveis no dashboard, todos os dias",
];

export function Solution() {
  return (
    <section id="solucao" className="scroll-mt-8 bg-[#f8f8f9]">
      <div className="section-pad mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 overflow-hidden rounded-[1.5rem] lg:order-1">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1400&q=80"
              alt="Confeiteira a trabalhar — substitua por foto real"
              fill
              className="object-cover animate-float"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/5" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            A solução
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            O Bisky põe ordem na confeitaria — e clareza no lucro.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Em vez de espalhar o negócio por WhatsApp, Excel e cadernos, tem um
            sistema pensado para o ritmo da confeitaria: do pedido ao pagamento.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint-soft">
                  <Check className="size-3.5 text-mint" strokeWidth={2.5} />
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
