import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-[radial-gradient(120%_120%_at_80%_-10%,#13315a_0%,var(--color-navy)_55%)] text-white pt-[72px] pb-20 relative overflow-hidden">
      <div className="container grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative">
        <div>
          <span className="eyebrow text-lg">Auditoría · Estrategia · Campañas B2B</span>
          <h1 className="text-white text-[clamp(36px,5.2vw,58px)] font-extrabold mt-3.5 mb-4.5 max-w-[13ch]">
            Agencia de Publicidad B2B que genera <span className="text-[var(--color-blue-bright)]">oportunidades reales</span>
          </h1>
          <p className="text-[17.5px] text-[#c3d0e2] max-w-[520px]">
            Auditoría digital, estrategia y campañas en Meta Ads y Google Ads para empresas B2B en Perú. Consigue leads calificados y deja de desperdiciar presupuesto.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-7">
            <Link href="/contacto" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Solicitar diagnóstico →
            </Link>
            <Link href="#servicios" className={buttonVariants({ variant: "ghostLight", size: "lg" })}>
              Ver servicios
            </Link>
          </div>
          <div className="flex gap-5.5 mt-7 flex-wrap">
            <div className="text-[13px] text-[#c3d0e2] flex items-center gap-2">
              <span className="text-[var(--color-blue-bright)]">✓</span>Especialistas en empresas B2B
            </div>
            <div className="text-[13px] text-[#c3d0e2] flex items-center gap-2">
              <span className="text-[var(--color-blue-bright)]">✓</span>Reportes orientados a decisiones
            </div>
          </div>
        </div>

        <div
          className="bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] border border-white/[0.12] rounded-[20px] p-4.5 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.6)] text-white backdrop-blur-[6px]"
          aria-hidden="true"
        >
          <div className="flex justify-between items-center mb-3">
            <b className="font-[family-name:var(--font-heading)] text-[14.5px]">Del clic a la oportunidad</b>
            <span className="text-[11.5px] text-[#c3d0e2] bg-white/[0.08] px-2.5 py-1 rounded-full">Últimos 6 meses</span>
          </div>

          <div className="grid gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="h-[34px] rounded-[9px] bg-[linear-gradient(90deg,rgba(74,163,255,0.5),rgba(74,163,255,0.18))] flex items-center px-3 text-xs font-semibold whitespace-nowrap w-full">
                Clics e interacciones
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-[34px] rounded-[9px] bg-[linear-gradient(90deg,rgba(74,163,255,0.5),rgba(74,163,255,0.18))] flex items-center px-3 text-xs font-semibold whitespace-nowrap w-[72%]">
                Leads recibidos
              </div>
              <small className="text-[11px] text-[#8fa3bd] ml-auto">CPL controlado</small>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-[34px] rounded-[9px] bg-[linear-gradient(90deg,rgba(74,163,255,0.75),rgba(74,163,255,0.3))] flex items-center px-3 text-xs font-semibold whitespace-nowrap w-[46%]">
                Leads calificados
              </div>
              <small className="text-[11px] text-[#8fa3bd] ml-auto">filtro comercial</small>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-[34px] rounded-[9px] bg-[linear-gradient(90deg,var(--color-orange),rgba(241,90,36,0.45))] shadow-[0_6px_18px_-8px_rgba(241,90,36,0.8)] flex items-center px-3 text-xs font-semibold whitespace-nowrap w-[26%]">
                Oportunidades reales
              </div>
              <small className="text-[11px] text-[#8fa3bd] ml-auto">lo que importa</small>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3.5">
              <small className="text-[11px] text-[#8fa3bd]">Oportunidades generadas</small>
              <div className="font-[family-name:var(--font-heading)] font-bold text-[22px] my-0.5 text-[#4ade80]">▲ 24%</div>
              <div className="text-[10.5px] text-[#8fa3bd]">vs. mes anterior</div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3.5">
              <small className="text-[11px] text-[#8fa3bd]">Costo por oportunidad</small>
              <div className="font-[family-name:var(--font-heading)] font-bold text-[22px] my-0.5 text-[var(--color-blue-bright)]">▼ 31%</div>
              <div className="text-[10.5px] text-[#8fa3bd]">presupuesto mejor usado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
