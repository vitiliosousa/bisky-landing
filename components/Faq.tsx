"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { faqItems } from "@/lib/site";

const tones = {
  strawberry: {
    soft: "bg-strawberry-soft",
    text: "text-strawberry",
    ring: "ring-strawberry/25",
    panel:
      "linear-gradient(145deg, #ffe0e6 0%, #fff 48%, #ffffff 100%)",
  },
  caramel: {
    soft: "bg-caramel-soft",
    text: "text-caramel",
    ring: "ring-caramel/30",
    panel:
      "linear-gradient(145deg, #fff3d6 0%, #fff 48%, #ffffff 100%)",
  },
  mint: {
    soft: "bg-mint-soft",
    text: "text-mint",
    ring: "ring-mint/25",
    panel: "linear-gradient(145deg, #d8f5ea 0%, #fff 48%, #ffffff 100%)",
  },
  blueberry: {
    soft: "bg-blueberry-soft",
    text: "text-blueberry",
    ring: "ring-blueberry/25",
    panel:
      "linear-gradient(145deg, #e4e7f8 0%, #fff 48%, #ffffff 100%)",
  },
};

export function Faq() {
  const [active, setActive] = useState(0);
  const answerRef = useRef<HTMLDivElement>(null);
  const item = faqItems[active];
  const tone = tones[item.tone];

  function selectQuestion(i: number) {
    setActive(i);
    // No mobile, traz a resposta para o topo visível
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      answerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section id="faq" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-strawberry-soft px-3 py-1.5 text-xs font-semibold text-strawberry">
            <MessageCircleQuestion className="size-3.5" strokeWidth={2} />
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Dúvidas? Escolha uma pergunta.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Seleccione uma questão e a resposta aparece em destaque, com a
            cor do tema Bisky.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:items-start">
          {/* Resposta: no mobile fica em cima e sticky; no desktop à direita */}
          <div
            ref={answerRef}
            key={item.q}
            className="relative z-10 order-1 scroll-mt-24 overflow-hidden rounded-[1.75rem] p-5 shadow-[var(--shadow-card)] animate-fade-up sm:p-7 lg:order-2 lg:sticky lg:top-24 lg:p-8 lg:shadow-none"
            style={{ background: tone.panel }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-white/55 lg:size-40" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 size-28 rounded-full bg-white/45 lg:size-32" />

            <div className="relative flex flex-col lg:min-h-[320px]">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${tone.soft} ${tone.text}`}
                >
                  {item.tag}
                </span>
                <span
                  className={`text-3xl font-semibold tabular-nums opacity-20 sm:text-5xl lg:text-6xl ${tone.text}`}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:mt-5 sm:text-2xl lg:text-3xl">
                {item.q}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft sm:mt-4 sm:text-base lg:flex-1 lg:text-lg">
                {item.a}
              </p>

              <a
                href="mailto:ola@bisky.app"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-strawberry hover:underline sm:mt-6 lg:mt-8"
              >
                Ainda com dúvida? Escreva-nos
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="order-2 grid gap-3 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 xl:grid-cols-2">
            {faqItems.map((faq, i) => {
              const isActive = active === i;
              const t = tones[faq.tone];
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => selectQuestion(i)}
                  className={`group rounded-[1.25rem] p-4 text-left transition duration-200 sm:p-5 ${
                    isActive
                      ? `bg-white shadow-[var(--shadow-card)] ring-2 ${t.ring}`
                      : "bg-[#f8f8f9] hover:bg-white hover:shadow-[var(--shadow-card)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums ${
                        isActive
                          ? `${t.soft} ${t.text}`
                          : "bg-white text-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        isActive
                          ? `${t.soft} ${t.text}`
                          : "bg-white text-muted"
                      }`}
                    >
                      {faq.tag}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-sm font-semibold leading-snug tracking-tight sm:text-[0.95rem] ${
                      isActive ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {faq.q}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
