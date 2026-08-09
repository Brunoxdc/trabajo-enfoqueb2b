import type { Metadata } from "next";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su estrategia digital!",
  robots: { index: false, follow: true },
};

export default function GraciasEstrategiaPage() {
  return <ThankYouLayout highlightedWord="estrategia digital" />;
}
