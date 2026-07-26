import type { Metadata } from "next";
import { MessageCircle, MousePointer, ClipboardList, BarChart3 } from "lucide-react";
import { ArticleLayout } from "@/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Landing Pages que convierten",
};

export default function BlogLandingPagesPage() {
  return (
    <ArticleLayout
      category="Landing Pages"
      title="Landing pages que convierten"
      description="Qué elementos necesita una página para captar mejores leads, reforzar su propuesta de valor y convertir visitas en oportunidades comerciales."
      date="20 mayo, 2024"
      readTime="5 min de lectura"
      image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
      sections={[
        {
          type: "text",
          heading: "1. Qué hace efectiva una landing page",
          paragraph:
            "Una landing page efectiva tiene un objetivo claro y único. Elimina distracciones, enfoca el mensaje y guía al visitante hacia una sola acción. La claridad y la relevancia para su audiencia son la base de toda conversión.",
        },
        {
          type: "text",
          heading: "2. Propuesta de valor y mensaje",
          paragraph:
            "Comunica de forma rápida y concreta el beneficio principal de tu oferta. Tu titular debe captar la atención, el subtítulo reforzar el valor y el contenido respaldar por qué tu solución es la mejor opción para resolver su problema.",
        },
        {
          type: "text",
          heading: "3. Diseño, jerarquía y llamados a la acción",
          paragraph:
            "La estructura visual debe guiar la lectura: titular, beneficios, prueba social y CTA. Usa jerarquía tipográfica, espacios en blanco y elementos visuales que refuercen el mensaje. El CTA debe ser visible, claro y repetirse en puntos estratégicos.",
        },
        { type: "callout", text: "Una landing page no debe distraer: debe guiar al usuario hacia una sola acción principal." },
        {
          type: "text",
          heading: "4. Formularios y conversión",
          paragraph:
            "Reduce la fricción al mínimo. Pide solo la información clave que realmente necesitas y explica por qué la solicitas. Un formulario simple incrementa la tasa de conversión y mejora la calidad del lead, facilitando el trabajo del equipo comercial.",
        },
        {
          type: "text",
          heading: "5. Medición y mejora continua",
          paragraph:
            "Mide lo que importa: visitas, tasa de conversión, calidad del lead y costo por conversión. Realiza tests A/B en titulares, beneficios y llamados a la acción para optimizar continuamente y aumentar el retorno de tus campañas.",
        },
      ]}
      features={[
        { icon: MessageCircle, label: "Mensaje claro" },
        { icon: MousePointer, label: "CTA visible" },
        { icon: ClipboardList, label: "Formulario simple" },
        { icon: BarChart3, label: "Medición" },
      ]}
      ctaTitle="¿Su empresa necesita una landing page que convierta mejor?"
      ctaDescription="Analizamos su página actual y le entregamos un plan de optimización personalizado para generar más oportunidades comerciales."
    />
  );
}
