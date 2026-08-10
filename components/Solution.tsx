import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  "Todos os pedidos num só sítio, com estado claro até à entrega",
  "Receitas com custo real e preço de venda com margem",
  "Alertas de stock antes de faltar o essencial",
  "Caixa e lucros visíveis no dashboard, todos os dias",
];

export function Solution() {
  return (
    <section id="solucao" className="scroll-mt-24 bg-[#f8f8f9]">
      <div className="section-pad mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="slide-left" className="relative order-2 overflow-hidden rounded-[1.5rem] lg:order-1">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/solution.jpg"
              alt="Confeiteira a usar o telemóvel na cozinha"
              fill
              className="object-cover object-center animate-float"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/5" />
        </Reveal>

        <Reveal variant="slide-right" className="order-1 lg:order-2" delay={120}>
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            A solução
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            O Bisky põe ordem na confeitaria e clareza no lucro.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Em vez de espalhar o negócio por WhatsApp, Excel e cadernos, tem um
            sistema pensado para o ritmo da confeitaria: do pedido ao pagamento.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point, i) => (
              <Reveal key={point} delay={180 + i * 80}>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint-soft">
                    <Check className="size-3.5 text-mint" strokeWidth={2.5} />
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    {point}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
