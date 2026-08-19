import type { Metadata } from "next";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su publicidad B2B!",
  robots: { index: false, follow: true },
};

export default function GraciasPublicidadPage() {
  return (
    <ThankYouLayout
      heading={
        <>
          ¡Gracias por solicitar su <span className="text-[var(--color-orange)]">publicidad B2B</span>!
        </>
      }
    />
  );
}
