import type { ReactNode } from "react";
import Link from "next/link";

interface ThankYouLayoutProps {
  heading: ReactNode;
}

export function ThankYouLayout({ heading }: ThankYouLayoutProps) {
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
          {heading}
        </h1>

        <div className="w-16 h-1 bg-[var(--color-orange)] rounded-full" />

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
