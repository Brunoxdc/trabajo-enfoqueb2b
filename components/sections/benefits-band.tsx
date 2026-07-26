import { Target, LayoutGrid, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Target, title: "Leads más calificados", description: "Contactos con mayor potencial para ventas B2B." },
  { icon: LayoutGrid, title: "Campañas basadas en datos", description: "Decisiones claras, no solo reportes bonitos." },
  { icon: TrendingUp, title: "Optimización continua", description: "Detectar fugas, corregir campañas y mejorar resultados." },
];

export function BenefitsBand() {
  return (
    <section className="bg-[var(--color-light)] py-12 border-b border-[var(--color-line)]" aria-label="Beneficios principales">
      <div className="container grid sm:grid-cols-3 gap-7">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4">
            <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-[var(--color-line)] grid place-items-center text-[var(--color-blue)] shrink-0 shadow-[0_6px_16px_-10px_rgba(11,29,51,0.3)]">
              <b.icon size={22} />
            </div>
            <div>
              <h3 className="text-[17px] mb-1">{b.title}</h3>
              <p className="text-[var(--color-muted)] text-sm">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
