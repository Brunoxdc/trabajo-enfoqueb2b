import type { Metadata } from "next";
import { Target, Users, FileText, BarChart3 } from "lucide-react";
import { ArticleLayout } from "@/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Campañas sin desperdiciar presupuesto",
};

export default function BlogCampanaPage() {
  return (
    <ArticleLayout
      category="Campañas"
      title="Campañas sin desperdiciar presupuesto"
      description="Cómo orientar campañas para atraer mejores oportunidades, optimizar la inversión y medir lo que realmente importa."
      date="16 mayo, 2024"
      readTime="6 min de lectura"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      sections={[
        {
          type: "text",
          heading: "1. Empiece por el objetivo correcto",
          paragraph:
            "Defina cuál es el resultado que busca: generar leads, agendar reuniones, abrir oportunidades u otro impacto en el negocio. Sin un objetivo claro, es imposible saber si la campaña está funcionando o si solo está generando actividad sin valor.",
        },
        {
          type: "text",
          heading: "2. Segmentación y mensaje",
          paragraph:
            "Dirija sus campañas a las audiencias adecuadas, con mensajes alineados a su oferta y al momento del ciclo en que se encuentran. Evite la comunicación genérica: háblele a su público con claridad y relevancia.",
        },
        {
          type: "text",
          heading: "3. Inversión, control y priorización",
          paragraph:
            "Distribuya el presupuesto con criterio, pruebe antes de escalar y enfoque la inversión donde existan señales reales de interés. Pausar a tiempo también es una decisión estratégica.",
        },
        {
          type: "text",
          heading: "4. Landing pages y conversión",
          paragraph:
            "Una campaña no debe enviar tráfico a cualquier destino. La página de aterrizaje, el CTA y el formulario deben estar alineados con la promesa del anuncio y diseñados para convertir.",
        },
        { type: "callout", text: "Una buena campaña no depende solo de invertir más, sino de orientar mejor cada decisión." },
        {
          type: "text",
          heading: "5. Medición y optimización continua",
          paragraph:
            "Revise la calidad de los leads, la tasa de conversión, el costo por resultado y otros indicadores clave. Tome decisiones de optimización basadas en evidencia, no en suposiciones.",
        },
      ]}
      features={[
        { icon: Target, label: "Objetivo claro" },
        { icon: Users, label: "Mejor segmentación" },
        { icon: FileText, label: "Landing alineada" },
        { icon: BarChart3, label: "Medición útil" },
      ]}
      ctaTitle="¿Sus campañas están atrayendo las oportunidades correctas?"
      ctaDescription="Analizamos su inversión, mensajes y conversión para identificar oportunidades de mejora."
    />
  );
}
