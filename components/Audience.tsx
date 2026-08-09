const audiences = [
  {
    title: "Confeiteiras a solo",
    text: "Organizar pedidos e saber se cada bolo dá lucro — sem folhas de cálculo.",
  },
  {
    title: "Equipas pequenas",
    text: "Produção e atendimento no mesmo sítio: estados claros, menos mensagens perdidas.",
  },
  {
    title: "Negócios a crescer",
    text: "Stock, caixa e relatórios para escalar sem perder o controlo do dia a dia.",
  },
];

export function Audience() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-strawberry uppercase">
            Para quem é
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Feito para quem vive de bolos e doces.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {audiences.map((item) => (
            <article key={item.title} className="card p-5 sm:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
