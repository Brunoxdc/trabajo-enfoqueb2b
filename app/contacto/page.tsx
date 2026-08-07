import type { Metadata } from "next";
import { Mail, MessageCircle, Briefcase } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntenos brevemente qué necesita y revisaremos con usted el siguiente paso recomendado.",
};

export default function ContactoPage() {
  return (
    <main>
      <Header />

      <section className="bg-[radial-gradient(120%_120%_at_80%_-10%,#13315a_0%,var(--color-navy)_55%)] text-white py-16 relative overflow-hidden">
        <div
          className="absolute pointer-events-none z-[1] w-[150px] h-[150px] right-[5%] lg:w-[1000px] lg:h-[1000px] lg:-right-[350px] top-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #b04629 0%, #b04629 5.5%, transparent 5.5%, transparent 16%, rgba(255,255,255,0.02) 16%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 46%, rgba(255,255,255,0.06) 46%, rgba(255,255,255,0.06) 64%, transparent 64%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-[2]">
          <span className="eyebrow text-lg block mb-3.5">Contacto</span>
          <h1 className="text-white text-[clamp(34px,5vw,52px)] font-extrabold mb-4">Hablemos de su proyecto</h1>
          <p className="text-[17px] text-[#c3d0e2] max-w-[480px]">
            Cuéntenos brevemente qué necesita y revisaremos con usted el siguiente paso recomendado.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 pb-20">
        <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="bg-white border border-[var(--color-line)] rounded-[20px] p-9 shadow-[0_8px_40px_-20px_rgba(11,29,51,0.12)]">
            <h2 className="text-2xl font-bold mb-1.5">Solicite su diagnóstico</h2>
            <p className="text-sm text-[var(--color-muted)] mb-6">Complete el formulario y nos pondremos en contacto.</p>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[var(--color-line)] rounded-2xl px-6 py-5.5 flex gap-4.5 items-start shadow-[0_4px_20px_-10px_rgba(11,29,51,0.06)]">
              <div className="w-[52px] h-[52px] rounded-full bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">Correo</h3>
                <a className="text-[var(--color-blue)] font-semibold text-[14.5px]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <p className="text-[var(--color-muted)] text-[13.5px] mt-1">Respondemos en menos de 24 horas.</p>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-line)] rounded-2xl px-6 py-5.5 flex gap-4.5 items-start shadow-[0_4px_20px_-10px_rgba(11,29,51,0.06)]">
              <div className="w-[52px] h-[52px] rounded-full bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">WhatsApp</h3>
                <a className="text-[var(--color-blue)] font-semibold text-[14.5px]" href={`https://wa.me/${site.phone.e164}`}>
                  {site.phone.display}
                </a>
                <p className="text-[var(--color-muted)] text-[13.5px] mt-1">Lun – Vie de 8:00 a.m. a 6:00 p.m.</p>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-line)] rounded-2xl px-6 py-5.5 flex gap-4.5 items-start shadow-[0_4px_20px_-10px_rgba(11,29,51,0.06)]">
              <div className="w-[52px] h-[52px] rounded-full bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">Atención para empresas B2B</h3>
                <p className="text-[var(--color-muted)] text-[13.5px] mt-1">
                  Trabajamos con empresas que buscan crecer con marketing digital estratégico y medible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappFloat message="Hola, vengo de la página de Contacto y quiero mejorar la captación de clientes de mi empresa." />
    </main>
  );
}
