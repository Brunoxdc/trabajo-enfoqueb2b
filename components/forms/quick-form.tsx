"use client";

import { site } from "@/lib/site-config";
import { useWeb3Form } from "./use-web3-form";

interface QuickFormProps {
  servicio: string;
  title: string;
  subtitle: string;
  messagePlaceholder: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
}

const inputClass =
  "w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.15)]";

export function QuickForm({ servicio, title, subtitle, messagePlaceholder, submitLabel, successTitle, successMessage }: QuickFormProps) {
  const { status, errorMessage, submit } = useWeb3Form();

  if (status === "success") {
    return (
      <div className="text-center py-10 px-2.5 text-[var(--color-navy)]">
        <span className="text-[44px]">🎉</span>
        <h3 className="font-[family-name:var(--font-heading)] text-xl mt-2.5 mb-1.5">{successTitle}</h3>
        <p className="text-[var(--color-muted)] text-sm leading-snug">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white border border-[var(--color-line)] rounded-[18px] p-7 shadow-[var(--shadow-card)] grid gap-3.5">
      <input type="hidden" name="servicio" value={servicio} />
      <input type="hidden" name="access_key" value={site.web3formsAccessKey} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-[var(--color-muted)] -mt-2">{subtitle}</p>

      <input type="text" name="nombre" placeholder="Nombre" required autoComplete="name" className={inputClass} />
      <input type="text" name="empresa" placeholder="Empresa" required autoComplete="organization" className={inputClass} />
      <input type="text" name="cargo" placeholder="Cargo" autoComplete="organization-title" className={inputClass} />
      <input type="tel" name="whatsapp" placeholder="WhatsApp" required autoComplete="tel" className={inputClass} />
      <input type="email" name="correo" placeholder="Correo corporativo" required autoComplete="email" className={inputClass} />
      <textarea name="mensaje" placeholder={messagePlaceholder} required className={`${inputClass} min-h-[90px] resize-y`} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-center w-full mt-1 py-3.5 rounded-xl font-bold font-[family-name:var(--font-heading)] text-[15px] text-white bg-[var(--color-orange)] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] transition-all hover:bg-[var(--color-orange-dark)] disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : submitLabel}
      </button>

      {status === "error" && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

      <span className="text-center text-[11.5px] text-[var(--color-muted)]">🔒 Tu información está protegida</span>
    </form>
  );
}
