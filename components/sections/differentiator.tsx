import { Scissors, Lightbulb, Target } from "lucide-react";

const blocks = [
  { icon: Scissors, label: "Menos métricas de vanidad" },
  { icon: Lightbulb, label: "Más claridad comercial" },
  { icon: Target, label: "Mejor uso del presupuesto" },
];

export function Differentiator() {
  return (
    <section className="bg-[var(--color-light)] py-[76px]">
      <div className="container grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <span className="eyebrow text-[var(--color-blue)]">Nuestro diferencial</span>
          <h2 className="text-[clamp(26px,3.4vw,34px)] font-bold mt-2.5">
            No medimos solo clics.
            <br />
            Medimos oportunidades.
          </h2>
          <p className="text-[var(--color-muted)] text-[16.5px] mt-3.5">
            Una campaña puede tener buen alcance, buen CTR y leads baratos, pero aun así no generar clientes. Por eso el
            enfoque debe estar en la calidad de los leads, las oportunidades reales y el retorno de la inversión.
          </p>
          <div className="grid gap-3.5 mt-6.5">
            {blocks.map((b) => (
              <div key={b.label} className="flex gap-3.5 items-center bg-white border border-[var(--color-line)] rounded-2xl px-4.5 py-4">
                <div className="w-[42px] h-[42px] rounded-[11px] bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                  <b.icon size={18} />
                </div>
                <b className="font-[family-name:var(--font-heading)] text-[15.5px]">{b.label}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--color-navy)] rounded-[20px] p-7 text-white shadow-[0_18px_50px_-20px_rgba(11,29,51,0.3)]">
          <h4 className="font-[family-name:var(--font-heading)] text-[13px] tracking-[0.1em] uppercase text-[#8fa3bd] mb-3.5">
            Lo que otros reportan
          </h4>
          <div className="flex justify-between items-center py-2.5 border-b border-white/[0.08] text-[14.5px]">
            <span className="text-[#7e8ea3] line-through decoration-[rgba(241,90,36,0.7)] decoration-2">Impresiones y alcance</span>
            <span className="text-[10.5px] bg-white/[0.07] text-[#8fa3bd] px-2.5 py-0.5 rounded-full">vanidad</span>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-white/[0.08] text-[14.5px]">
            <span className="text-[#7e8ea3] line-through decoration-[rgba(241,90,36,0.7)] decoration-2">Clics y CTR</span>
            <span className="text-[10.5px] bg-white/[0.07] text-[#8fa3bd] px-2.5 py-0.5 rounded-full">vanidad</span>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-white/[0.08] text-[14.5px]">
            <span className="text-[#7e8ea3] line-through decoration-[rgba(241,90,36,0.7)] decoration-2">Leads al menor CPL</span>
            <span className="text-[10.5px] bg-white/[0.07] text-[#8fa3bd] px-2.5 py-0.5 rounded-full">incompleto</span>
          </div>

          <div className="text-[11px] text-[var(--color-blue-bright)] font-bold tracking-[0.1em] uppercase mt-4 mb-1 font-[family-name:var(--font-heading)]">
            Lo que medimos nosotros
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-white/[0.08] text-[14.5px]">
            <span className="font-bold font-[family-name:var(--font-heading)]">Leads calificados</span>
            <span className="text-[10.5px] bg-[rgba(74,222,128,0.14)] text-[#4ade80] font-bold px-2.5 py-0.5 rounded-full">comercial</span>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-white/[0.08] text-[14.5px]">
            <span className="font-bold font-[family-name:var(--font-heading)]">Oportunidades reales</span>
            <span className="text-[10.5px] bg-[rgba(74,222,128,0.14)] text-[#4ade80] font-bold px-2.5 py-0.5 rounded-full">comercial</span>
          </div>
          <div className="flex justify-between items-center py-2.5 text-[14.5px]">
            <span className="font-bold font-[family-name:var(--font-heading)]">Costo por cliente y ROI</span>
            <span className="text-[10.5px] bg-[rgba(74,222,128,0.14)] text-[#4ade80] font-bold px-2.5 py-0.5 rounded-full">comercial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
