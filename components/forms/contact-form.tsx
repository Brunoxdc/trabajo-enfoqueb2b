"use client";

import { Lock } from "lucide-react";
import { site } from "@/lib/site-config";
import { useWeb3Form } from "./use-web3-form";

const services = ["Auditoría Digital", "Publicidad B2B", "Estrategia Digital", "Landing Pages B2B"];

export function ContactForm() {
  const { status, errorMessage, submit } = useWeb3Form({ redirectTo: "/gracias" });

  return (
    <form onSubmit={submit} className="grid gap-4">
      <input type="hidden" name="access_key" value={site.web3formsAccessKey} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <label htmlFor="nombre" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Su nombre"
          required
          autoComplete="name"
          className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
        />
      </div>

      <div>
        <label htmlFor="empresa" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
          Empresa
        </label>
        <input
          id="empresa"
          type="text"
          name="empresa"
          placeholder="Nombre de su empresa"
          required
          autoComplete="organization"
          className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="correo" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
            Correo corporativo
          </label>
          <input
            id="correo"
            type="email"
            name="correo"
            placeholder="nombre@empresa.com"
            required
            autoComplete="email"
            className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            name="whatsapp"
            placeholder="+51 999 999 999"
            autoComplete="tel"
            className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
          Servicio de interés
        </label>
        <select
          id="servicio"
          name="servicio"
          defaultValue=""
          className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
        >
          <option value="" disabled>
            Seleccione un servicio
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-[13px] font-bold font-[family-name:var(--font-heading)] mb-1.5">
          Cuéntenos brevemente su caso
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Describa su necesidad o el objetivo principal de su proyecto..."
          className="w-full px-[15px] py-3.5 rounded-[11px] border border-[var(--color-line)] text-[14.5px] text-[var(--color-ink)] placeholder:text-[#9aa8bb] min-h-[110px] resize-y focus:border-[var(--color-blue)] focus:outline-none focus:ring-[3px] focus:ring-[rgba(46,123,255,0.12)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full mt-1.5 py-[15px] rounded-xl font-bold font-[family-name:var(--font-heading)] text-[15px] text-white bg-[var(--color-orange)] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] transition-all hover:bg-[var(--color-orange-dark)] disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {status === "error" && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

      <p className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-muted)] text-center mt-1">
        <Lock size={11} /> Su información está segura con nosotros. No compartimos sus datos.
      </p>
    </form>
  );
}
