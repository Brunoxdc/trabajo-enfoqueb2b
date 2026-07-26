import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { title: "Diagnóstico", description: "Entendemos tu negocio, tus objetivos y tu situación actual." },
  { title: "Auditoría", description: "Revisamos campañas, públicos, anuncios, destino y métricas." },
  { title: "Plan de acción", description: "Priorizamos qué corregir y qué potenciar, con foco comercial." },
  { title: "Optimización", description: "Corregimos fugas y ajustamos campañas de forma continua." },
  { title: "Medición", description: "Reportamos oportunidades y retorno, no solo clics." },
];

export function ProcessSteps() {
  return (
    <section className="py-[76px]">
      <div className="container">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro, de la auditoría a los resultados" />
        <div className="grid gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white border border-[var(--color-line)] rounded-2xl px-4.5 py-5.5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div
                className={`grid place-items-center w-[34px] h-[34px] rounded-[10px] text-white font-[family-name:var(--font-heading)] font-bold text-[15px] mb-3.5 ${
                  i === steps.length - 1 ? "bg-[var(--color-orange)]" : "bg-[var(--color-blue)]"
                }`}
              >
                {i + 1}
              </div>
              <h3 className="text-base mb-1.5">{step.title}</h3>
              <p className="text-[var(--color-muted)] text-[13px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
