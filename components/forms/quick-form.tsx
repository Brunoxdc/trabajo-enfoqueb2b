"use client";

import { site } from "@/lib/site-config";
import { useWeb3Form } from "./use-web3-form";

interface QuickFormProps {
  servicio: string;
  title: string;
  subtitle: string;
  messagePlaceholder: string;
  submitLabel: string;
  /** Ruta de la página de gracias a la que se redirige tras un envío exitoso, ej. "/gracias-auditoria" */
  graciasHref: string;
}

const inputClass =
  "w-full px-3 py-2 rounded-[9px] border border-[var(--color-line)] text-[13.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.15)]";

export function QuickForm({ servicio, title, subtitle, messagePlaceholder, submitLabel, graciasHref }: QuickFormProps) {
  const { status, errorMessage, submit } = useWeb3Form({ redirectTo: graciasHref });

  return (
    <form onSubmit={submit} className="bg-white border border-[var(--color-line)] rounded-2xl p-5 shadow-[var(--shadow-card)] grid gap-2.5">
      <input type="hidden" name="servicio" value={servicio} />
      <input type="hidden" name="access_key" value={site.web3formsAccessKey} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <h2 className="text-lg font-bold leading-tight">{title}</h2>
      <p className="text-[13px] text-[var(--color-muted)] -mt-1.5">{subtitle}</p>

      <input type="text" name="nombre" placeholder="Nombre" required autoComplete="name" className={inputClass} />
      <input type="text" name="empresa" placeholder="Empresa" required autoComplete="organization" className={inputClass} />
      <input type="text" name="cargo" placeholder="Cargo" autoComplete="organization-title" className={inputClass} />
      <input type="tel" name="whatsapp" placeholder="WhatsApp" required autoComplete="tel" className={inputClass} />
      <input type="email" name="correo" placeholder="Correo corporativo" required autoComplete="email" className={inputClass} />
      <textarea name="mensaje" placeholder={messagePlaceholder} required className={`${inputClass} min-h-[64px] resize-y`} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-center w-full mt-0.5 py-2.5 rounded-xl font-bold font-[family-name:var(--font-heading)] text-[14px] text-white bg-[var(--color-orange)] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] transition-all hover:bg-[var(--color-orange-dark)] disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : submitLabel}
      </button>

      {status === "error" && <p className="text-center text-xs text-red-600">{errorMessage}</p>}

      <span className="text-center text-[10.5px] text-[var(--color-muted)]">🔒 Tu información está protegida</span>
    </form>
  );
}
