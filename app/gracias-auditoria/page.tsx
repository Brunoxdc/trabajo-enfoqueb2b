import type { Metadata } from "next";
import { Download, CircleCheck } from "lucide-react";
import { ThankYouLayout, TrendChart } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su auditoría digital!",
  robots: { index: false, follow: true },
};

const findings = [
  "Su sitio web tiene un buen rendimiento técnico general.",
  "Existen oportunidades de mejora en SEO on-page.",
  "La experiencia móvil presenta oportunidades de optimización.",
];

export default function GraciasAuditoriaPage() {
  return (
    <ThankYouLayout
      highlightedWord="auditoría digital"
      windowTitle="Auditoría Digital"
      headerButtonLabel="Descargar resumen"
      headerButtonIcon={Download}
    >
      <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-4 mb-4">
        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col items-center justify-center gap-2 text-center">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Puntaje general</h4>
          <div className="font-[family-name:var(--font-heading)] font-extrabold text-4xl">
            76<span className="text-lg text-[var(--color-muted)] font-bold">/100</span>
          </div>
          <span className="inline-flex items-center gap-1 bg-[rgba(74,222,128,0.14)] text-[#16a34a] font-bold text-[11px] px-2.5 py-1 rounded-full">
            Bueno
          </span>
        </div>

        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col gap-3">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Tendencia de rendimiento</h4>
          <TrendChart />
        </div>
      </div>

      <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4">
        <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)] mb-3">Hallazgos clave de la auditoría</h4>
        <div className="flex flex-col gap-2.5">
          {findings.map((f) => (
            <div key={f} className="flex items-start gap-2.5 text-[13px]">
              <CircleCheck size={16} className="text-[var(--color-blue)] shrink-0 mt-0.5" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </ThankYouLayout>
  );
}
