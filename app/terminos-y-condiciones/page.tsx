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
        <p className="mb-4 text-[15.5px]">
          Bienvenido a <strong className="text-[var(--color-ink)]">Enfoque B2B</strong>. Al acceder y navegar por
          nuestro sitio web ({site.domain}), aceptas cumplir con los siguientes Términos y Condiciones de uso. Si no
          estás de acuerdo con alguna de estas condiciones, te sugerimos no utilizar nuestro sitio.
        </p>

        <h2 className="text-xl mt-8 mb-3">1. Propiedad Intelectual</h2>
        <p className="mb-4 text-[15.5px]">
          Todo el contenido de este sitio web, incluyendo textos, artículos del blog, diseño, logotipos, gráficos y
          código fuente, es propiedad exclusiva de Enfoque B2B y está protegido por las leyes de propiedad
          intelectual. Queda prohibida su reproducción, distribución o modificación sin nuestra autorización previa y
          por escrito.
        </p>

        <h2 className="text-xl mt-8 mb-3">2. Uso del Sitio Web</h2>
        <p className="mb-4 text-[15.5px]">
          Te comprometes a utilizar nuestro sitio web de manera legal y ética. Queda estrictamente prohibido:
        </p>
        <ul className="mb-4 pl-6 text-[15.5px] list-disc space-y-2">
          <li>Utilizar el sitio web para fines ilícitos o que perjudiquen a Enfoque B2B o a terceros.</li>
          <li>Enviar correo no deseado (spam) a través de nuestros formularios de contacto.</li>
          <li>Intentar vulnerar la seguridad del sitio web o acceder a áreas restringidas del servidor.</li>
        </ul>

        <h2 className="text-xl mt-8 mb-3">3. Formularios y Solicitudes de Servicio</h2>
        <p className="mb-4 text-[15.5px]">
          El envío de información a través de nuestros formularios para solicitar un «Diagnóstico» o «Auditoría» no
          constituye la creación de un contrato comercial vinculante ni obliga a Enfoque B2B a prestar el servicio de
          forma gratuita e indefinida.
        </p>
        <p className="mb-4 text-[15.5px]">
          La prestación de nuestros servicios reales (estrategia, publicidad, desarrollo de landing pages) estará
          sujeta a la aprobación de una propuesta formal y la firma de un contrato de servicios independiente entre
          Enfoque B2B y la empresa cliente.
        </p>

        <h2 className="text-xl mt-8 mb-3">4. Limitación de Responsabilidad</h2>
        <p className="mb-4 text-[15.5px]">
          Enfoque B2B trabaja rigurosamente para garantizar que la información en el blog y el sitio web sea precisa
          y actualizada; sin embargo, no garantizamos resultados comerciales específicos por la simple lectura o
          aplicación de nuestro contenido gratuito. Las decisiones tomadas en base a nuestros artículos son
          responsabilidad exclusiva del usuario.
        </p>
        <p className="mb-4 text-[15.5px]">
          Asimismo, no nos hacemos responsables por caídas temporales del sitio web debido a mantenimiento o fallos
          imprevistos del servidor/hosting.
        </p>

        <h2 className="text-xl mt-8 mb-3">5. Enlaces a terceros</h2>
        <p className="mb-4 text-[15.5px]">
          Nuestro sitio puede contener enlaces a páginas web de terceros (como plataformas de redes sociales).
          Enfoque B2B no tiene control sobre las políticas de privacidad o el contenido de dichos sitios, por lo que
          no asumimos responsabilidad por ellos.
        </p>

        <h2 className="text-xl mt-8 mb-3">6. Legislación y Jurisdicción Aplicable</h2>
        <p className="mb-4 text-[15.5px]">
          Estos términos y condiciones se rigen por las leyes de la República del Perú. Cualquier controversia que
          surja en relación con el uso de este sitio web será sometida a la jurisdicción de los tribunales de la
          ciudad de Lima.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-blue)] px-5 py-4 rounded-r-lg mt-10 text-sm text-[var(--color-navy)]">
          Para cualquier duda sobre estos términos, escríbenos a{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-blue)] underline">
            {site.email}
          </a>
          .
        </div>

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
