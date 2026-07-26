import type { Metadata } from "next";
import { Eye, Zap } from "lucide-react";
import { ThankYouLayout, TrendChart } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su landing page B2B!",
  robots: { index: false, follow: true },
};

export default function GraciasLandingPage() {
  return (
    <ThankYouLayout
      highlightedWord="landing page B2B"
      windowTitle="Landing Pages B2B"
      headerButtonLabel="Solicitar demo"
      headerButtonIcon={Eye}
    >
      <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
          <Zap size={18} />
        </div>
        <p className="font-[family-name:var(--font-heading)] text-[15px] font-bold">
          Impulsa conversiones con landing pages que atraen y convierten.
        </p>
      </div>

      <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-4">
        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col items-center justify-center gap-1 text-center">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Tasa de conversión estimada</h4>
          <div className="font-[family-name:var(--font-heading)] font-extrabold text-4xl text-[var(--color-blue)]">28%</div>
          <span className="text-[11px] text-[var(--color-muted)]">Promedio estimado</span>
        </div>

        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col gap-3">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Rendimiento proyectado</h4>
          <TrendChart />
        </div>
      </div>
    </ThankYouLayout>
  );
}
