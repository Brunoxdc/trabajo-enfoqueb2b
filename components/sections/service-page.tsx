import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { QuickForm } from "@/components/forms/quick-form";
import { Card, CardIcon } from "@/components/ui/card";

interface Area {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicePageProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  checklist: string[];
  formServicio: string;
  formTitle: string;
  formSubtitle: string;
  formMessagePlaceholder: string;
  formSubmitLabel: string;
  successTitle: string;
  successMessage: string;
  areasTitle: string;
  areas: Area[];
  whatsappMessage: string;
}

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  checklist,
  formServicio,
  formTitle,
  formSubtitle,
  formMessagePlaceholder,
  formSubmitLabel,
  successTitle,
  successMessage,
  areasTitle,
  areas,
  whatsappMessage,
}: ServicePageProps) {
  return (
    <main>
      <Header />

      <section className="bg-[radial-gradient(120%_120%_at_80%_-10%,#13315a_0%,var(--color-navy)_55%)] text-white py-[72px] relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="text-white text-[clamp(32px,4.6vw,46px)] font-extrabold mt-3.5 mb-4 max-w-[16ch]">{title}</h1>
            <p className="text-[17px] text-[#c3d0e2] max-w-[520px]">{subtitle}</p>
            <ul className="grid gap-3 mt-6">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#d7e1ef]">
                  <span className="text-[var(--color-blue-bright)] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <QuickForm
              servicio={formServicio}
              title={formTitle}
              subtitle={formSubtitle}
              messagePlaceholder={formMessagePlaceholder}
              submitLabel={formSubmitLabel}
              successTitle={successTitle}
              successMessage={successMessage}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] py-[76px]">
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-11">
            <h2 className="text-[clamp(26px,3.4vw,34px)] font-bold">{areasTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((area) => (
              <Card key={area.title} className="text-center">
                <CardIcon className="mx-auto">
                  <area.icon size={24} />
                </CardIcon>
                <h3 className="text-[17px] font-bold mb-1.5">{area.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappFloat message={whatsappMessage} />
    </main>
  );
}
