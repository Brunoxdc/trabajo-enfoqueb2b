import type { Metadata } from "next";
import { Download, Target, TrendingUp } from "lucide-react";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su estrategia digital!",
  robots: { index: false, follow: true },
};

const roadmap = [
  { title: "Diagnóstico", description: "Analizamos su situación actual y objetivos." },
  { title: "Estrategia", description: "Definimos el plan y las oportunidades clave." },
  { title: "Ejecución", description: "Implementamos acciones con enfoque en resultados." },
  { title: "Optimización", description: "Medimos, aprendemos y escalamos lo que funciona." },
];

const priorities = [
  "Atraer tráfico cualificado.",
  "Convertir visitantes en clientes.",
  "Maximizar el retorno de la inversión.",
];

export default function GraciasEstrategiaPage() {
  return (
    <ThankYouLayout
      highlightedWord="estrategia digital"
      windowTitle="Estrategia Digital"
      headerButtonLabel="Descargar plan"
      headerButtonIcon={Download}
    >
      <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 mb-4">
        <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)] mb-3">Hoja de ruta estratégica</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {roadmap.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-1.5">
              <div className="w-6 h-6 rounded-md bg-[var(--color-blue)] text-white grid place-items-center font-[family-name:var(--font-heading)] font-bold text-[12px]">
                {i + 1}
              </div>
              <b className="font-[family-name:var(--font-heading)] text-[13px]">{step.title}</b>
              <p className="text-[11.5px] text-[var(--color-muted)] leading-snug">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)] mb-3">Prioridades estratégicas</h4>
          <div className="flex flex-col gap-2.5">
            {priorities.map((p) => (
              <div key={p} className="flex items-start gap-2.5 text-[13px]">
                <Target size={16} className="text-[var(--color-blue)] shrink-0 mt-0.5" />
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-lg bg-[rgba(74,222,128,0.14)] text-[#16a34a] grid place-items-center">
            <TrendingUp size={18} />
          </div>
          <h4 className="font-[family-name:var(--font-heading)] text-[15px] font-bold">Crecimiento sostenible</h4>
          <p className="text-[13px] text-[var(--color-muted)]">Más visibilidad, leads cualificados y ventas predecibles.</p>
        </div>
      </div>
    </ThankYouLayout>
  );
}
