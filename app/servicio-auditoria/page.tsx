import type { Metadata } from "next";
import { Target, Megaphone, Monitor, BarChart3, Users } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export const metadata: Metadata = {
  title: "Auditoría Digital de Campañas y Publicidad",
  description:
    "Auditoría digital de campañas, canales, landing pages y proceso comercial para empresas B2B. Detecte qué está frenando sus resultados.",
};

export default function ServicioAuditoriaPage() {
  return (
    <ServicePage
      eyebrow="Auditoría Digital B2B"
      title="Detectamos qué está frenando sus resultados"
      subtitle="Revisamos su estrategia, canales, medición y proceso comercial para identificar brechas, ordenar prioridades y definir mejoras accionables."
      checklist={[
        "Estrategia, propuesta de valor y mensaje",
        "Canales, pauta y coherencia del embudo",
        "Landing pages y experiencia de conversión",
        "Medición, leads y seguimiento comercial",
        "Prioridades claras y plan de acción",
      ]}
      formServicio="Auditoría Digital"
      formTitle="Solicite su auditoría"
      formSubtitle="Cuéntanos brevemente su caso y revisaremos con usted el siguiente paso recomendado."
      formMessagePlaceholder="¿Qué desea revisar?"
      formSubmitLabel="Solicitar auditoría estratégica"
      successTitle="¡Auditoría Solicitada!"
      successMessage="Hemos recibido tus datos correctamente. Revisaremos tu caso estratégico a fondo en menos de 24 horas hábiles."
      areasTitle="Revisamos las áreas clave de su marketing y proceso comercial"
      areas={[
        { icon: Target, title: "Estrategia", description: "Analizamos su propuesta de valor, segmentación, posicionamiento y alineación con objetivos de negocio." },
        { icon: Megaphone, title: "Canales y pauta", description: "Evaluamos el rendimiento de sus canales, campañas, inversión y coherencia del embudo." },
        { icon: Monitor, title: "Landing Pages", description: "Revisamos estructura, mensajes, UX y elementos clave que impactan la conversión." },
        { icon: BarChart3, title: "Medición", description: "Auditamos sus datos, eventos, dashboards y atribución para decisiones basadas en evidencia." },
        { icon: Users, title: "Proceso comercial", description: "Analizamos el seguimiento de leads, handoff a ventas y oportunidades de mejora." },
      ]}
      whatsappMessage="Hola, quiero saber qué está frenando los resultados de mi publicidad."
    />
  );
}
