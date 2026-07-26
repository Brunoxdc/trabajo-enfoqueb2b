import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";

interface ThankYouLayoutProps {
  highlightedWord: string;
  windowTitle: string;
  headerButtonLabel: string;
  headerButtonIcon: LucideIcon;
  children: ReactNode;
}

export function ThankYouLayout({ highlightedWord, windowTitle, headerButtonLabel, headerButtonIcon: HeaderIcon, children }: ThankYouLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-x-hidden bg-[radial-gradient(120%_120%_at_80%_-10%,#13315a_0%,var(--color-navy)_55%)] text-white py-10">
      <div className="w-full max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center relative z-[2]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5 font-[family-name:var(--font-heading)] font-extrabold text-[32px]">
            <span className="w-[38px] h-[38px] rounded-full border-[3.5px] border-[var(--color-blue-bright)] grid place-items-center">
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-orange)]" />
            </span>
            Enfoque <b className="text-[var(--color-blue-bright)]">B2B</b>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.15]">
            ¡Gracias por solicitar su <span className="text-[var(--color-orange)]">{highlightedWord}</span>!
          </h1>

          <div className="w-16 h-1 bg-[var(--color-orange)] rounded-full" />

          <p className="text-[17px] text-[#c3d0e2] max-w-[480px] leading-relaxed">
            Hemos recibido su solicitud correctamente. Revisaremos su información y nos comunicaremos con usted en un
            máximo de <b className="text-[var(--color-orange)] font-bold">24 horas hábiles.</b>
          </p>

          <div className="flex items-center gap-4 mt-1">
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 grid place-items-center">
              <TrendingUp size={20} className="text-[var(--color-blue-bright)]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#8fa3bd]">Menos métricas de vanidad.</p>
              <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-orange)]">Más oportunidades reales.</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--color-orange)] text-white px-[26px] py-3.5 rounded-xl font-bold font-[family-name:var(--font-heading)] text-[15px] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] hover:bg-[var(--color-orange-dark)] hover:-translate-y-0.5 transition-all w-fit mt-1.5"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="bg-[#f8fafc] rounded-[20px] p-6 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.5)] border border-white/10 text-[var(--color-ink)]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffaa85]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd085]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-[var(--color-line)] pb-4 mb-4">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{windowTitle}</h2>
            <span className="inline-flex items-center gap-2 bg-[var(--color-orange)] text-white px-4.5 py-2.5 rounded-[10px] font-semibold font-[family-name:var(--font-heading)] text-[13px] shadow-[0_6px_16px_-6px_var(--color-orange)]">
              <HeaderIcon size={14} /> {headerButtonLabel}
            </span>
          </div>

          {children}
        </div>
      </div>
    </main>
  );
}

export function TrendChart() {
  return (
    <div className="relative pt-2.5 pb-6" style={{ height: 120 }}>
      <div className="absolute inset-x-0 top-2.5 bottom-6 flex flex-col justify-between">
        <div className="border-t border-dashed border-[var(--color-line)] w-full h-0" />
        <div className="border-t border-dashed border-[var(--color-line)] w-full h-0" />
        <div className="border-t border-dashed border-[var(--color-line)] w-full h-0" />
      </div>
      <svg className="w-full h-[75px] relative z-[2]" viewBox="0 0 200 70">
        <path d="M10 55 L 46 45 L 82 30 L 118 22 L 154 15 L 190 8" fill="none" stroke="var(--color-orange)" strokeWidth={3} />
        {[
          [10, 55],
          [46, 45],
          [82, 30],
          [118, 22],
          [154, 15],
          [190, 8],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r={3.5} fill="var(--color-orange)" />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[11px] text-[var(--color-muted)] font-medium pt-1 border-t border-[var(--color-line)]">
        <span>Mar</span>
        <span>Abr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Ago</span>
      </div>
    </div>
  );
}
