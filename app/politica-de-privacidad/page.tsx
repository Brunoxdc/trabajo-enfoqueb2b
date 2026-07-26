import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { site } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de Enfoque B2B.",
  robots: { index: false, follow: true },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main>
      <Header />

      <div className="bg-[var(--color-light)] py-14 pb-10 border-b border-[var(--color-line)] text-center">
        <div className="container">
          <h1 className="text-[clamp(28px,4vw,42px)] mb-4">Política de Privacidad</h1>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </div>

      <article className="max-w-[800px] mx-auto px-[22px] py-16 text-[var(--color-muted)]">
        <p className="mb-4 text-[15.5px]">
          En <strong className="text-[var(--color-ink)]">Enfoque B2B</strong> valoramos y respetamos tu privacidad. Esta
          Política de Privacidad explica cómo recopilamos, usamos, protegemos y tratamos tus datos personales cuando
          visitas nuestro sitio web ({site.domain}) y utilizas nuestros formularios de contacto, en cumplimiento con la
          Ley N° 29733, Ley de Protección de Datos Personales del Perú, y su Reglamento.
        </p>

        <h2 className="text-xl mt-8 mb-3">1. Información que recopilamos</h2>
        <p className="mb-4 text-[15.5px]">
          Al utilizar nuestros formularios para solicitar un diagnóstico o comunicarte con nosotros, podemos solicitarte
          la siguiente información:
        </p>
        <ul className="mb-4 pl-6 text-[15.5px] list-disc space-y-2">
          <li>Nombre completo.</li>
          <li>Nombre de tu empresa.</li>
          <li>Cargo que ocupas.</li>
          <li>Número de teléfono / WhatsApp.</li>
          <li>Correo electrónico corporativo.</li>
          <li>Información adicional que decidas compartir en el cuerpo del mensaje.</li>
        </ul>

        <h2 className="text-xl mt-8 mb-3">2. Finalidad del tratamiento de datos</h2>
        <p className="mb-4 text-[15.5px]">
          Los datos personales que nos proporcionas serán utilizados exclusivamente para los siguientes fines:
        </p>
        <ul className="mb-4 pl-6 text-[15.5px] list-disc space-y-2">
          <li>Responder a tus consultas, solicitudes de diagnóstico o auditoría digital.</li>
          <li>Enviarte propuestas comerciales relacionadas con nuestros servicios B2B.</li>
          <li>Contactarte vía WhatsApp o correo electrónico para hacer seguimiento a tu solicitud.</li>
          <li>Enviarte contenido de valor o comunicaciones sobre marketing B2B (podrás darte de baja en cualquier momento).</li>
        </ul>

        <h2 className="text-xl mt-8 mb-3">3. Protección y almacenamiento</h2>
        <p className="mb-4 text-[15.5px]">
          Tus datos son almacenados de forma segura y confidencial. Enfoque B2B no vende, alquila ni cede tu base de
          datos a terceros bajo ninguna circunstancia, salvo obligación legal estricta requerida por las autoridades
          competentes.
        </p>

        <h2 className="text-xl mt-8 mb-3">4. Ejercicio de Derechos ARCO</h2>
        <p className="mb-4 text-[15.5px]">
          Como titular de tus datos personales, tienes derecho a ejercer tus derechos de Acceso, Rectificación,
          Cancelación y Oposición (ARCO). Para ejercerlos, o para solicitar que eliminemos tu información de nuestros
          registros, puedes enviarnos un correo electrónico a{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-blue)] underline">
            {site.email}
          </a>{" "}
          con el asunto &quot;Derechos ARCO&quot;.
        </p>

        <h2 className="text-xl mt-8 mb-3">5. Cambios en esta política</h2>
        <p className="mb-4 text-[15.5px]">
          Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a
          novedades legislativas o prácticas del sector. Te recomendamos revisarla periódicamente.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-blue)] px-5 py-4 rounded-r-lg mt-10 text-sm text-[var(--color-navy)]">
          <strong>Última actualización:</strong> 7 de julio de 2026
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
