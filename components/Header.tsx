"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteNav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-8 w-[118px] sm:h-9 sm:w-[132px]">
          <Image
            src="/logobisky.svg"
            alt="Bisky"
            fill
            className={`object-contain object-left transition ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                scrolled
                  ? "text-ink-soft hover:bg-[#f4f5f7] hover:text-ink"
                  : "text-white/90 hover:bg-white/15 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#comecar"
          className={
            scrolled
              ? "btn-primary !min-h-10"
              : "btn-primary !min-h-10 !bg-white !text-strawberry shadow-none hover:!bg-white/95"
          }
        >
          Começar
        </a>
      </div>
    </header>
  );
}
