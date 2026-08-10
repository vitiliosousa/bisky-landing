import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="comecar" className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[1.5rem] px-6 py-12 text-center sm:px-10 sm:py-16"
          style={{
            background:
              "linear-gradient(150deg, #e63e5c 0%, #c72a47 50%, #9e1e37 100%)",
          }}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-white/85 uppercase">
              Trial de 60 dias
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pronto para tirar a confeitaria do caos?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Experimente o Bisky com a sua operação real. Depois escolha o
              plano que fizer sentido.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:ola@bisky.app?subject=Trial%20Bisky"
                className="btn-primary !bg-white !text-strawberry shadow-none hover:!bg-white/95"
              >
                Pedir trial grátis
                <ArrowRight className="size-4" strokeWidth={2} />
              </a>
              <a
                href="#planos"
                className="btn-ghost !text-white !shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.45)] hover:!bg-white/10"
              >
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
