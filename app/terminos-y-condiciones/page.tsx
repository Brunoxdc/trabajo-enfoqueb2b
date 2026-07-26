import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { site } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Enfoque B2B.",
  robots: { index: false, follow: true },
};

export default function TerminosYCondicionesPage() {
  return (
    <main>
      <Header />

      <div className="bg-[var(--color-light)] py-14 pb-10 border-b border-[var(--color-line)] text-center">
        <div className="container">
          <h1 className="text-[clamp(28px,4vw,42px)] mb-4">Términos y Condiciones</h1>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </div>

      <article className="max-w-[800px] mx-auto px-[22px] py-16 text-[var(--color-muted)]">
        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-orange)] px-5 py-4 rounded-r-lg mb-8 text-sm text-[var(--color-navy)]">
          Esta página está en preparación. El contenido definitivo de los términos y condiciones será publicado próximamente.
        </div>

        <p className="mb-4 text-[15.5px]">
          Al acceder y utilizar el sitio web de <strong className="text-[var(--color-ink)]">Enfoque B2B</strong> ({site.domain})
          aceptas los presentes términos y condiciones de uso.
        </p>

        <h2 className="text-xl mt-8 mb-3">1. Uso del sitio</h2>
        <p className="mb-4 text-[15.5px]">
          El contenido de este sitio tiene fines informativos y comerciales sobre nuestros servicios de auditoría,
          publicidad y estrategia digital para empresas B2B.
        </p>

        <h2 className="text-xl mt-8 mb-3">2. Propiedad intelectual</h2>
        <p className="mb-4 text-[15.5px]">
          Los textos, gráficos y demás contenidos de este sitio son propiedad de Enfoque B2B, salvo que se indique lo
          contrario.
        </p>

        <h2 className="text-xl mt-8 mb-3">3. Contacto</h2>
        <p className="mb-4 text-[15.5px]">
          Para consultas sobre estos términos, puedes escribirnos a{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-blue)] underline">
            {site.email}
          </a>
          .
        </p>

        <div className="flex gap-3.5 mt-10 pt-7 border-t border-[var(--color-line)]">
          <Link href="/" className={buttonVariants({ variant: "primary" })}>
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
          <Link href="/contacto" className={buttonVariants({ variant: "ghost" })}>
            Ir a Contacto
          </Link>
        </div>
      </article>

      <Footer />
      <WhatsappFloat />
    </main>
  );
}
