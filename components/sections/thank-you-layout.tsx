import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface ThankYouLayoutProps {
  highlightedWord: string;
}

export function ThankYouLayout({ highlightedWord }: ThankYouLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-x-hidden bg-[radial-gradient(120%_120%_at_80%_-10%,#13315a_0%,var(--color-navy)_55%)] text-white py-10 px-6">
      <div className="w-full max-w-[600px] mx-auto flex flex-col items-center text-center gap-5 relative z-[2]">
        <div className="flex items-center gap-3.5 font-[family-name:var(--font-heading)] font-extrabold text-[32px]">
          <span className="w-[38px] h-[38px] rounded-full border-[3.5px] border-[var(--color-blue-bright)] grid place-items-center shrink-0">
            <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-orange)]" />
          </span>
          Enfoque <b className="text-[var(--color-blue-bright)]">B2B</b>
        </div>

        <h1 className="text-white font-[family-name:var(--font-heading)] text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.15]">
          ¡Gracias por solicitar su <span className="text-[var(--color-orange)]">{highlightedWord}</span>!
        </h1>

        <div className="w-16 h-1 bg-[var(--color-orange)] rounded-full" />

        <p className="text-[17px] text-[#c3d0e2] max-w-[480px] leading-relaxed">
          Hemos recibido su solicitud correctamente. Revisaremos su información y nos comunicaremos con usted en un
          máximo de <b className="text-[var(--color-orange)] font-bold">24 horas hábiles.</b>
        </p>

        <div className="flex items-center gap-4 mt-1">
          <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 grid place-items-center shrink-0">
            <TrendingUp size={20} className="text-[var(--color-blue-bright)]" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-[#8fa3bd]">Menos métricas de vanidad.</p>
            <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-orange)]">Más oportunidades reales.</p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[var(--color-orange)] text-white px-[26px] py-3.5 rounded-xl font-bold font-[family-name:var(--font-heading)] text-[15px] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] hover:bg-[var(--color-orange-dark)] hover:-translate-y-0.5 transition-all w-fit mt-2"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
