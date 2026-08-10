import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 scale-105">
        <Image
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2400&q=80"
          alt="Bolo decorado"
          fill
          priority
          className="object-cover object-center animate-float"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, rgba(230,62,92,0.88) 0%, rgba(199,42,71,0.82) 45%, rgba(158,30,55,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_55%)] animate-blob" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
            Bisky
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            A sua confeitaria organizada. Sem stress.
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            Pedidos, stock, custos e caixa num só lugar, feito para quem vive
            de bolos e doces.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:ola@bisky.app?subject=Trial%20Bisky"
              className="btn-primary !bg-white !text-strawberry shadow-none hover:!bg-white/95"
            >
              Começar trial de 60 dias
              <ArrowRight className="size-4" strokeWidth={2} />
            </a>
            <a
              href="#funcionalidades"
              className="btn-ghost !text-white !shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.45)] hover:!bg-white/10"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
