import type { Metadata } from "next";
import { BarChart3, Eye, MousePointer2, ChartBar, UserRound } from "lucide-react";
import { ThankYouLayout, TrendChart } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su publicidad B2B!",
  robots: { index: false, follow: true },
};

const channels = [
  { name: "LinkedIn Ads", color: "#0077b5", width: "85%", leads: "142", cpl: "$16.20" },
  { name: "Google Ads", color: "#ea4335", width: "55%", leads: "78", cpl: "$20.35" },
  { name: "Meta Ads", color: "#0668e1", width: "30%", leads: "36", cpl: "$21.40" },
];

export default function GraciasPublicidadPage() {
  return (
    <ThankYouLayout highlightedWord="publicidad B2B" windowTitle="Publicidad B2B" headerButtonLabel="Ver campaña" headerButtonIcon={BarChart3}>
      <div className="grid sm:grid-cols-[1fr_1.2fr] gap-4 mb-4">
        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col gap-3">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Rendimiento de la campaña</h4>
          <TrendChart />
        </div>

        <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4 flex flex-col gap-2">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)]">Resumen de la campaña</h4>
          <div className="flex items-center justify-between text-[13px] border-b border-[var(--color-line)] py-1">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <Eye size={14} /> Impresiones
            </div>
            <div className="font-[family-name:var(--font-heading)] font-bold">128,540</div>
          </div>
          <div className="flex items-center justify-between text-[13px] border-b border-[var(--color-line)] py-1">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <MousePointer2 size={14} /> Clics
            </div>
            <div className="font-[family-name:var(--font-heading)] font-bold">3,642</div>
          </div>
          <div className="flex items-center justify-between text-[13px] border-b border-[var(--color-line)] py-1">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <ChartBar size={14} /> Leads generados
            </div>
            <div className="font-[family-name:var(--font-heading)] font-bold">256</div>
          </div>
          <div className="flex items-center justify-between text-[13px] py-1">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <UserRound size={14} /> Costo por lead
            </div>
            <div className="font-[family-name:var(--font-heading)] font-bold">$18.75</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[var(--color-line)] rounded-[14px] p-4">
        <h4 className="font-[family-name:var(--font-heading)] text-[13px] text-[var(--color-muted)] mb-3">Rendimiento por canal</h4>
        <div className="flex flex-col gap-3">
          {channels.map((c) => (
            <div key={c.name} className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center gap-3 text-[13px]">
              <div className="flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color }} />
                {c.name}
              </div>
              <div className="bg-[#e2e8f0] h-2 rounded-full overflow-hidden">
                <div className="bg-[var(--color-orange)] h-full rounded-full" style={{ width: c.width }} />
              </div>
              <div className="text-right">
                <small className="text-[var(--color-muted)] block text-[10px]">Leads</small>
                <span className="font-bold">{c.leads}</span>
              </div>
              <div className="text-right">
                <small className="text-[var(--color-muted)] block text-[10px]">CPL</small>
                <span className="font-bold">{c.cpl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThankYouLayout>
  );
}
