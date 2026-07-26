import type { Metadata } from "next";
import { MessageCircle, ListChecks, CalendarDays, BarChart3 } from "lucide-react";
import { ArticleLayout } from "@/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Redes sociales con estrategia",
};

export default function BlogEstrategiaPage() {
  return (
    <ArticleLayout
      category="Estrategia Digital"
      title="Redes sociales con estrategia"
      description="Cómo usar redes sociales B2B para reforzar su mensaje, generar confianza y apoyar objetivos comerciales."
      date="12 mayo, 2024"
      readTime="4 min de lectura"
      image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
      sections={[
        {
          type: "text",
          heading: "1. Las redes no son un fin, son un canal",
          paragraph:
            "Las redes sociales no deben ser vistas como una obligación, sino como un canal para apoyar objetivos comerciales. Publicar constantemente sin dirección genera ruido; una estrategia clara genera impacto.",
        },
        {
          type: "text",
          heading: "2. Defina mensaje, audiencia y objetivo",
          paragraph:
            "Antes de publicar, defina a quién se dirige, qué necesita escuchar y qué acción espera que realice. Un mensaje alineado con la audiencia correcta es el punto de partida para cualquier estrategia exitosa.",
        },
        {
          type: "text",
          heading: "3. Contenido con intención comercial",
          paragraph:
            "Cada publicación debe tener un propósito. Educar, resolver dudas, mostrar casos de éxito o compartir perspectivas del sector son formas efectivas de generar confianza y acercar oportunidades.",
        },
        {
          type: "text",
          heading: "4. Planificación y consistencia",
          paragraph:
            "La consistencia construye reconocimiento y confianza. Defina un calendario, mantenga una frecuencia sostenible, elija formatos adecuados y asegure que todo el contenido esté alineado con su marca y objetivos.",
        },
        { type: "callout", text: "Publicar más no siempre significa avanzar más: la estrategia define qué contenido sí aporta valor." },
        {
          type: "text",
          heading: "5. Medición y aprendizaje",
          paragraph:
            "Mida lo que importa: alcance útil, interacción relevante, clics, leads y otras acciones que reflejen progreso real. Revise los resultados, ajuste lo necesario y siga aprendiendo de su audiencia.",
        },
      ]}
      features={[
        { icon: MessageCircle, label: "Mensaje claro" },
        { icon: ListChecks, label: "Contenido útil" },
        { icon: CalendarDays, label: "Calendario" },
        { icon: BarChart3, label: "Medición" },
      ]}
      ctaTitle="¿Su empresa necesita una estrategia de contenido más clara?"
      ctaDescription="Revisamos sus redes y contenido actual para alinearlos con sus objetivos comerciales y generar mejores resultados."
    />
  );
}
