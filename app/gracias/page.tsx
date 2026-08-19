import type { Metadata } from "next";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por contactarnos!",
  robots: { index: false, follow: true },
};

export default function GraciasPage() {
  return (
    <ThankYouLayout
      heading={
        <>
          ¡Gracias por <span className="text-[var(--color-orange)]">contactarnos</span>!
        </>
      }
    />
  );
}
