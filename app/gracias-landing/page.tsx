import type { Metadata } from "next";
import { ThankYouLayout } from "@/components/sections/thank-you-layout";

export const metadata: Metadata = {
  title: "¡Gracias por solicitar su landing page B2B!",
  robots: { index: false, follow: true },
};

export default function GraciasLandingPage() {
  return <ThankYouLayout highlightedWord="landing page B2B" />;
}
