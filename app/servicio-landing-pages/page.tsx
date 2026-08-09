import type { Metadata } from "next";
import { Newspaper, MessageSquare, ClipboardList, Monitor, BarChart3 } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export const metadata: Metadata = {
  title: "Landing Pages B2B que convierten",
  description:
    "Creamos páginas claras y estratégicas para convertir visitas en oportunidades mejor calificadas para su proceso comercial.",
};

export default function ServicioLandingPagesPage() {
  return (
    <ServicePage
      eyebrow="Landing Pages B2B"
      title="Landing pages que convierten"
      subtitle="Creamos páginas claras y estratégicas para convertir visitas en oportunidades mejor calificadas para su proceso comercial."
      checklist={[
        "Estructura pensada para captar leads B2B",
        "Mensaje claro según su propuesta de valor",
        "Formularios y llamados a la acción bien ubicados",
        "Diseño responsive y experiencia de conversión",
        "Medición para evaluar resultados y oportunidades",
      ]}
      formServicio="Landing Pages B2B"
      formTitle="Solicite su evaluación"
      formSubtitle="Cuéntanos brevemente su caso y revisaremos con usted el siguiente paso recomendado."
      formMessagePlaceholder="Cuéntanos qué necesita potenciar"
      formSubmitLabel="Solicitar evaluación estratégica"
      graciasHref="/gracias-landing"
      areasTitle="Diseñamos las áreas clave de una landing page B2B"
      areas={[
        { icon: Newspaper, title: "Estructura", description: "Ordenamos la información para guiar al usuario hacia la conversión." },
        { icon: MessageSquare, title: "Mensaje", description: "Clarificamos su propuesta de valor y los beneficios principales." },
        { icon: ClipboardList, title: "Formulario", description: "Diseñamos campos simples para captar contactos mejor calificados." },
        { icon: Monitor, title: "Diseño UX", description: "Creamos una experiencia clara, responsive y fácil de navegar." },
        { icon: BarChart3, title: "Medición", description: "Preparamos la página para medir conversiones y oportunidades." },
      ]}
      whatsappMessage="Hola, vengo de la página de Landing Pages y quiero una landing page que convierta mejor mis visitas en clientes."
    />
  );
}
