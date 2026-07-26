import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site-config";
import { LinkedinIcon, InstagramIcon } from "@/components/icons/social-icons";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Auditoría Digital", href: "/servicio-auditoria" },
  { label: "Publicidad Digital", href: "/servicio-publicidad" },
  { label: "Estrategia Digital", href: "/servicio-estrategia" },
  { label: "Landing Pages", href: "/servicio-landing-pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const resourceLinks = [
  { label: "Landing pages que convierten", href: "/blog-landing-pages-que-convierten" },
  { label: "Campañas sin desperdiciar presupuesto", href: "/blog-campana-sin-desperdiciar-presupuesto" },
  { label: "Redes sociales con estrategia", href: "/blog-redes-sociales-con-estrategia" },
];

export function Footer() {
  return (
    <footer className="bg-[#07131f] text-[#aab8cc] pt-[54px] pb-[22px]">
      <div className="container grid gap-7 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] items-start">
        <div>
          <Link href="/" className="flex items-center gap-[11px] text-white font-[family-name:var(--font-heading)] font-extrabold text-xl mb-3" aria-label="Enfoque B2B - Inicio">
            <span className="w-[30px] h-[30px] rounded-full border-[3px] border-[var(--color-blue-bright)] grid place-items-center shrink-0">
              <span className="w-[9px] h-[9px] rounded-full bg-[var(--color-orange)]" />
            </span>
            Enfoque <b className="text-[var(--color-blue-bright)]">B2B</b>
          </Link>
          <p className="text-sm">Agencia de publicidad, auditoría y estrategia digital para empresas B2B.</p>
          <div className="flex gap-2.5 mt-3.5">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[34px] h-[34px] rounded-[9px] overflow-hidden transition-transform hover:scale-110">
              <LinkedinIcon size={34} />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[34px] h-[34px] rounded-[9px] overflow-hidden transition-transform hover:scale-110">
              <InstagramIcon size={34} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="w-[34px] h-[34px] rounded-[9px] bg-white/[0.07] grid place-items-center text-[#cdd8e8] transition-colors hover:bg-[var(--color-blue)]">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-[13px] mb-3.5 tracking-[0.06em]">NAVEGACIÓN</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href} className="text-sm list-none">
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-[13px] mb-3.5 tracking-[0.06em]">RECURSOS</h4>
          <ul className="space-y-2">
            {resourceLinks.map((l) => (
              <li key={l.href} className="text-sm list-none">
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-heading)] text-white text-[13px] mb-3.5 tracking-[0.06em]">¿HABLAMOS?</h4>
          <p className="text-sm mb-3.5">Conversemos sobre cómo podemos ayudar a su empresa a crecer.</p>
          <a href={`mailto:${site.email}`} className="text-[var(--color-blue-bright)] font-bold text-sm">
            Contáctenos →
          </a>
          <ul className="mt-3.5 space-y-2">
            <li className="list-none">
              <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={14} className="text-[var(--color-blue-bright)]" />
                {site.email}
              </a>
            </li>
            <li className="list-none">
              <a href={`tel:+${site.phone.e164}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={14} className="text-[var(--color-blue-bright)]" />
                {site.phone.display}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08] mt-[34px] pt-[18px]">
        <div className="container text-[12.5px] text-center text-[#7e8ea3]">
          © {new Date().getFullYear()} Enfoque B2B. Todos los derechos reservados. ·{" "}
          <Link href="/politica-de-privacidad" className="text-inherit hover:text-white">
            Política de privacidad
          </Link>{" "}
          ·{" "}
          <Link href="/terminos-y-condiciones" className="text-inherit hover:text-white">
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
