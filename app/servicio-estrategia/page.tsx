import type { Metadata } from "next";
import { Search, Users, MessageSquare, Laptop, Route } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export const metadata: Metadata = {
  title: "Estrategia Digital para Empresas B2B",
  description:
    "Definimos su embudo, mensajes y segmentación, y los convertimos en un plan de acción concreto para los próximos 90 días.",
};

export default function ServicioEstrategiaPage() {
  return (
    <ServicePage
      eyebrow="Estrategia Digital"
      title="Un plan digital claro y accionable, no un PDF que nadie lee"
      subtitle="Definimos tu embudo, tus mensajes y tu segmentación, y los convertimos en un plan de acción concreto para los próximos 90 días."
      checklist={[
        "Diagnóstico situacional de canales y competencia",
        "Arquitectura completa de embudos de conversión",
        "Desarrollo de mensajes y propuesta de valor única",
        "Segmentación avanzada de públicos y cliente ideal",
        "Plan de acción estructurado con entregables a 90 días",
      ]}
      formServicio="Estrategia Digital"
      formTitle="Solicite su estrategia"
      formSubtitle="Cuéntanos brevemente su caso y revisaremos con usted el siguiente paso recomendado."
      formMessagePlaceholder="Cuéntanos qué objetivos comerciales buscas lograr"
      formSubmitLabel="Solicitar evaluación estratégica"
      successTitle="¡Estrategia Solicitada!"
      successMessage="Hemos recibido tus datos correctamente. Revisaremos tu caso estratégico a fondo en menos de 24 horas hábiles."
      areasTitle="Definimos las bases de su estrategia digital"
      areas={[
        { icon: Search, title: "Diagnóstico", description: "Analizamos su presencia digital, mensajes y oportunidades de mejora." },
        { icon: Users, title: "Audiencias", description: "Definimos a quién dirigirse y qué objetivos priorizar." },
        { icon: MessageSquare, title: "Mensajes", description: "Ordenamos su propuesta de valor y mensajes clave." },
        { icon: Laptop, title: "Canales", description: "Priorizamos los canales digitales según su enfoque comercial." },
        { icon: Route, title: "Plan de acción", description: "Trazamos una hoja de ruta clara para avanzar con foco." },
      ]}
      whatsappMessage="Hola, solicito información sobre el servicio de estrategia digital."
    />
  );
}
