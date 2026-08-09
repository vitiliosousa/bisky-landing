import Image from "next/image";

const steps = [
  {
    title: "Registe o pedido",
    text: "Cliente, data de entrega, produtos e valores, tudo numa ficha só.",
  },
  {
    title: "Acompanhe a produção",
    text: "Pendente, em produção, pronto, entregue. A equipa sabe o que fazer.",
  },
  {
    title: "Veja o lucro a crescer",
    text: "Custos, stock e caixa atualizados. Decisões com números, não com feeling.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=2000&q=80"
          alt="Doces e cupcakes"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-strawberry-muted uppercase">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Do pedido ao lucro, em três passos.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="text-5xl font-semibold tabular-nums text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
