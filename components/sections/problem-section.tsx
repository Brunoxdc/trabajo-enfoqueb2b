const problems = [
  "Recibes leads, pero ventas dice que no sirven.",
  "Te muestran clics, alcance o CPL, pero no oportunidades reales.",
  "No sabes si tu presupuesto se está usando bien.",
  "Tienes reportes bonitos, pero pocas decisiones claras.",
  "No sabes cuánto cuesta conseguir un cliente real.",
];

export function ProblemSection() {
  return (
    <section className="bg-[var(--color-navy)] text-white py-20 relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <span className="eyebrow">¿Te suena familiar?</span>
          <h2 className="text-white text-[clamp(26px,3.4vw,34px)] font-bold mt-2.5 mb-2.5">
            ¿Tu publicidad B2B genera clics, pero no oportunidades reales?
          </h2>
          <ul className="grid gap-3.5 mt-6">
            {problems.map((p) => (
              <li key={p} className="flex gap-3 items-start text-[15.5px] text-[#d7e1ef]">
                <span className="w-6 h-6 rounded-full bg-[rgba(241,90,36,0.18)] text-[#ff8a5c] grid place-items-center text-xs font-bold shrink-0 mt-0.5">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[rgba(74,163,255,0.1)] border border-[rgba(74,163,255,0.3)] border-l-[5px] border-l-[var(--color-orange)] rounded-2xl px-[30px] py-7">
          <p className="font-[family-name:var(--font-heading)] text-[clamp(20px,2.4vw,26px)] font-bold leading-snug text-white">
            Un lead <span className="text-[var(--color-blue-bright)]">barato</span> puede salir{" "}
            <span className="text-[#ff8a5c]">caro</span> si no se convierte en cliente.
          </p>
          <small className="block mt-3.5 text-[#9fb2cc] text-[13.5px] font-[family-name:var(--font-body)]">
            Por eso auditamos tu publicidad antes de proponerte cualquier cambio.
          </small>
        </div>
      </div>
    </section>
  );
}
