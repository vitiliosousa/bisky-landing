import Image from "next/image";
import Link from "next/link";
import { siteNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#f8f8f9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Link href="/" className="relative block h-7 w-[104px]">
            <Image
              src="/logobisky.svg"
              alt="Bisky"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Gestão da sua confeitaria. Pedidos, stock, custos e caixa com
            clareza.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">
              Navegar
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm font-medium text-ink-soft">
              {siteNav.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-strawberry">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">
              Começar
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm font-medium text-ink-soft">
              <a href="#planos" className="hover:text-strawberry">
                Planos e preços
              </a>
              <a href="mailto:ola@bisky.app" className="hover:text-strawberry">
                Pedir trial (14 dias)
              </a>
              <a href="#faq" className="hover:text-strawberry">
                Perguntas frequentes
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Bisky. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
