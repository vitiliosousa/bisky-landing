import {
  MessageSquareWarning,
  Calculator,
  PackageX,
  TrendingDown,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Pedidos perdidos no WhatsApp",
    text: "Mensagens, prints e cadernos misturados. Um pedido esquecido é um cliente perdido e um dia de trabalho a mais.",
    tone: "strawberry" as const,
  },
  {
    icon: Calculator,
    title: "Não sabe o custo real do bolo",
    text: "Preços no feeling. Sem receita com custo, você pode estar a vender bonito… e a lucrar pouco (ou nada).",
    tone: "caramel" as const,
  },
  {
    icon: PackageX,
    title: "Stock acaba no dia da entrega",
    text: "Falta farinha, creme ou caixa no momento certo. A produção para, o cliente espera, o stress sobe.",
    tone: "blueberry" as const,
  },
  {
    icon: TrendingDown,
    title: "Não sabe se está a lucrar",
    text: "Entra dinheiro, sai dinheiro, mas o lucro do mês fica no escuro. Sem caixa claro, o negócio anda às cegas.",
    tone: "mint" as const,
  },
];

const toneMap = {
  strawberry: {
    bg: "bg-strawberry-soft",
    icon: "text-strawberry",
  },
  caramel: {
    bg: "bg-caramel-soft",
    icon: "text-caramel",
  },
  blueberry: {
    bg: "bg-blueberry-soft",
    icon: "text-blueberry",
  },
  mint: {
    bg: "bg-mint-soft",
    icon: "text-mint",
  },
};

export function Problems() {
  return (
    <section id="problemas" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            O caos do dia a dia
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Gerir uma confeitaria no improviso custa caro.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Se reconhece algum destes momentos, o Bisky foi feito para si.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((item, i) => {
            const tone = toneMap[item.tone];
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <article className="card lift flex gap-4 p-5 sm:p-6">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${tone.bg}`}
                  >
                    <Icon className={`size-5 ${tone.icon}`} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
