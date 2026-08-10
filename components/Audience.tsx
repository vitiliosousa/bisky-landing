"use client";

import { useRef, useState } from "react";
import { User, Users, Store, Check } from "lucide-react";

const audiences = [
  {
    icon: User,
    tone: "strawberry" as const,
    tab: "A solo",
    title: "Confeiteiras a solo",
    text: "Você atende, produz, entrega e ainda fecha as contas à noite. O Bisky junta pedidos, custos e caixa num só sítio, para o dia caber no telemóvel.",
    points: [
      "Pedidos numa ficha só",
      "Saber se cada bolo dá lucro",
      "Organizar o dia sem folhas de cálculo",
    ],
  },
  {
    icon: Users,
    tone: "blueberry" as const,
    tab: "Equipa",
    title: "Equipas pequenas",
    text: "Há quem atenda e quem produza. Com estados claros no mesmo sítio, a equipa sabe o que fazer sem mensagens a mais.",
    points: [
      "Pendente, produção, pronto, entregue",
      "Toda a equipa alinhada",
      "Menos confusão entre atendimento e cozinha",
    ],
  },
  {
    icon: Store,
    tone: "mint" as const,
    tab: "A crescer",
    title: "Negócios a crescer",
    text: "Os pedidos aumentam e o improviso deixa de aguentar. Stock, caixa e lucros no dashboard para crescer com controlo.",
    points: [
      "Alertas de stock a tempo",
      "Caixa e lucro visíveis",
      "Escalar sem perder o fio à meada",
    ],
  },
];

const tones = {
  strawberry: {
    soft: "bg-strawberry-soft",
    text: "text-strawberry",
    ring: "ring-strawberry/25",
    active: "bg-strawberry text-white",
    panel: "linear-gradient(145deg, #ffe0e6 0%, #fff 50%, #ffffff 100%)",
  },
  blueberry: {
    soft: "bg-blueberry-soft",
    text: "text-blueberry",
    ring: "ring-blueberry/25",
    active: "bg-blueberry text-white",
    panel: "linear-gradient(145deg, #e4e7f8 0%, #fff 50%, #ffffff 100%)",
  },
  mint: {
    soft: "bg-mint-soft",
    text: "text-mint",
    ring: "ring-mint/25",
    active: "bg-mint text-white",
    panel: "linear-gradient(145deg, #d8f5ea 0%, #fff 50%, #ffffff 100%)",
  },
};

export function Audience() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const item = audiences[active];
  const tone = tones[item.tone];
  const Icon = item.icon;

  function select(i: number) {
    setActive(i);
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            Para quem é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Feito para quem vive de bolos e doces.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Escolha o perfil que mais se parece consigo.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {audiences.map((aud, i) => {
            const TabIcon = aud.icon;
            const t = tones[aud.tone];
            const isActive = active === i;
            return (
              <button
                key={aud.tab}
                type="button"
                onClick={() => select(i)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                  isActive
                    ? `${t.active} shadow-sm`
                    : "bg-[#f4f5f7] text-ink-soft hover:bg-white hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <TabIcon className="size-4" strokeWidth={1.75} />
                {aud.tab}
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          key={item.title}
          className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[1.75rem] p-6 shadow-[var(--shadow-card)] animate-fade-up sm:mt-10 sm:p-8 lg:p-10"
          style={{ background: tone.panel }}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/55" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 size-32 rounded-full bg-white/40" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span
                className={`flex size-12 items-center justify-center rounded-2xl text-white ${
                  item.tone === "strawberry"
                    ? "bg-strawberry"
                    : item.tone === "blueberry"
                      ? "bg-blueberry"
                      : "bg-mint"
                }`}
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${tone.text}`}>
                  {item.tab}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {item.text}
            </p>

            <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-ink-soft shadow-sm"
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full ${tone.soft}`}
                  >
                    <Check className={`size-3 ${tone.text}`} strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
