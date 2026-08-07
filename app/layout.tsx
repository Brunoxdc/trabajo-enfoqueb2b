import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const GTM_ID = "GTM-N9Z862TD";

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
      <body className={`${heading.variable} ${body.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}
