import Link from "next/link";
import { Search, Megaphone, Compass, Monitor, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardIcon } from "@/components/ui/card";

const services = [
  {
    href: "/servicio-auditoria",
    icon: Search,
    title: "Auditoría Digital",
    description: "Revisión de campañas, anuncios, públicos, formularios, landing page y métricas en Meta Ads y Google Ads.",
    label: "Conocer más →",
  },
  {
    href: "/servicio-publicidad",
    icon: Megaphone,
    title: "Publicidad B2B",
    description: "Campañas en Meta Ads y Google Ads enfocadas en leads calificados para empresas B2B.",
    label: "Conocer más →",
  },
  {
    href: "/servicio-estrategia",
    icon: Compass,
    title: "Estrategia Digital",
    description: "Embudo, mensajes, segmentación y plan de acción para tu empresa B2B.",
    label: "Conocer más →",
  },
  {
    href: "/servicio-landing-pages",
    icon: Monitor,
    title: "Landing Pages B2B",
    description: "Páginas diseñadas para convertir tus campañas en leads calificados.",
    label: "Conocer más →",
  },
  {
    href: "/blog",
    icon: BookOpen,
    title: "Blog / Recursos",
    description: "Contenido educativo para empresas que quieren entender mejor su publicidad digital.",
    label: "Ver recursos →",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-[76px]" id="servicios">
      <div className="container">
        <SectionHeading eyebrow="Servicios" title="Servicios de marketing digital B2B" />
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group">
              <Card className="h-full flex flex-col text-center">
                <CardIcon className="mx-auto">
                  <s.icon size={26} />
                </CardIcon>
                <h3 className="text-[18px] font-bold mb-2">{s.title}</h3>
                <p className="text-[var(--color-muted)] text-sm flex-1">{s.description}</p>
                <span className="mt-4 font-[family-name:var(--font-heading)] font-bold text-[13.5px] text-[var(--color-blue)] group-hover:text-[var(--color-orange)]">
                  {s.label}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
