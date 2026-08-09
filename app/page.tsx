import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Features } from "@/components/Features";
import { Audience } from "@/components/Audience";
import { HowItWorks } from "@/components/HowItWorks";
import { PlansGrid } from "@/components/PlansGrid";
import { Faq } from "@/components/Faq";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <ProductShowcase />
        <Features />
        <Audience />
        <HowItWorks />

        <section id="planos" className="section-pad scroll-mt-24 bg-[#f8f8f9]">
          <div className="mx-auto max-w-6xl">
            <PlansGrid />
          </div>
        </section>

        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
