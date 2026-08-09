import type { Metadata } from "next";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su auditoría digital!",
  robots: { index: false, follow: true },
};

export default function GraciasAuditoriaPage() {
  return <ThankYouLayout highlightedWord="auditoría digital" />;
}
