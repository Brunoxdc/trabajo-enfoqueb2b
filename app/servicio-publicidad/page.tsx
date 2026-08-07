import type { Metadata } from "next";
import { Crosshair, Users, PenLine, Monitor, BarChart3 } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export const metadata: Metadata = {
  title: "Publicidad Digital enfocada en Oportunidades Comerciales",
  description:
    "Campañas en Meta Ads y Google Ads enfocadas en leads calificados y oportunidades comerciales para empresas B2B.",
};

export default function ServicioPublicidadPage() {
  return (
    <ServicePage
      eyebrow="Publicidad B2B"
      title="Publicidad enfocada en oportunidades comerciales"
      subtitle="Gestionamos campañas para atraer oportunidades mejor calificadas y alinear la pauta con sus objetivos comerciales."
      checklist={[
        "Estrategia de campañas y objetivos comerciales",
        "Segmentación, audiencias y mensajes clave",
        "Creatividades y pruebas de mejora",
        "Landing pages y experiencia de conversión",
        "Medición, optimización y seguimiento de resultados",
      ]}
      formServicio="Publicidad B2B"
      formTitle="Solicite su evaluación"
      formSubtitle="Cuéntanos brevemente su caso y revisaremos con usted el siguiente paso recomendado."
      formMessagePlaceholder="Cuéntanos qué necesita potenciar"
      formSubmitLabel="Solicitar evaluación estratégica"
      successTitle="¡Evaluación Solicitada!"
      successMessage="Hemos recibido tus datos correctamente. Revisaremos tu caso para presentarte la propuesta comercial en menos de 24 horas hábiles."
      areasTitle="Revisamos las áreas clave de su publicidad y conversión"
      areas={[
        { icon: Crosshair, title: "Estrategia", description: "Definimos objetivos, oferta y estructura de campaña según su proceso comercial." },
        { icon: Users, title: "Segmentación", description: "Trabajamos audiencias públicos y criterios para atraer oportunidades más afines." },
        { icon: PenLine, title: "Creatividades", description: "Evaluamos mensajes, anuncios y piezas para mejorar respuesta y relevancia." },
        { icon: Monitor, title: "Landing Pages", description: "Revisamos estructura, propuesta de valor y puntos de conversión del destino." },
        { icon: BarChart3, title: "Medición", description: "Configuramos seguimiento para entender qué campañas generan mejores resultados." },
      ]}
      whatsappMessage="Hola, quiero generar más oportunidades comerciales con mi publicidad."
    />
  );
}
