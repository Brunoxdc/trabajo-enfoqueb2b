import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Agencia de Publicidad B2B | Auditoría Digital y Estrategia | Enfoque B2B",
    template: "%s | Enfoque B2B",
  },
  description:
    "Agencia B2B especializada en auditoría digital, publicidad en Meta Ads y Google Ads, y estrategia para conseguir leads calificados. Solicita tu diagnóstico gratis.",
  metadataBase: new URL("https://enfoqueb2b.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
