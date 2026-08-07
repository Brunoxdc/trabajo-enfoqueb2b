import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { BenefitsBand } from "@/components/sections/benefits-band";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Differentiator } from "@/components/sections/differentiator";
import { ProcessSteps } from "@/components/sections/process-steps";
import { BlogPreview } from "@/components/sections/blog-preview";

export const metadata: Metadata = {
  title: "Agencia de Publicidad B2B | Auditoría Digital y Estrategia | Enfoque B2B",
  description:
    "Agencia B2B especializada en auditoría digital, publicidad en Meta Ads y Google Ads, y estrategia para conseguir leads calificados. Solicita tu diagnóstico gratis.",
  keywords:
    "publicidad B2B, agencia marketing B2B, auditoría digital campañas, leads calificados B2B, Google Ads B2B, Meta Ads empresas",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://enfoqueb2b.com/",
    title: "Agencia de Publicidad B2B | Enfoque B2B",
    description: "Auditoría, estrategia y campañas para conseguir leads calificados y oportunidades comerciales reales. Especialistas B2B.",
    locale: "es_PE",
    siteName: "Enfoque B2B",
  },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Enfoque B2B",
  description:
    "Agencia de publicidad digital, auditoría y estrategia para empresas B2B. Especialistas en Meta Ads, Google Ads y generación de leads calificados.",
  url: "https://enfoqueb2b.com",
  telephone: "+51938575074",
  email: "contacto@enfoqueb2b.com",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Marketing Digital B2B",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría Digital", url: "https://enfoqueb2b.com/servicio-auditoria" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Publicidad B2B", url: "https://enfoqueb2b.com/servicio-publicidad" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estrategia Digital", url: "https://enfoqueb2b.com/servicio-estrategia" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages B2B", url: "https://enfoqueb2b.com/servicio-landing-pages" } },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/enfoque-b2b",
    "https://www.facebook.com/enfoqueb2b",
    "https://www.instagram.com/enfoqueb2b",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Enfoque B2B",
  url: "https://enfoqueb2b.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://enfoqueb2b.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />

      <Header />
      <Hero />
      <BenefitsBand />
      <ProblemSection />
      <ServicesGrid />
      <Differentiator />
      <ProcessSteps />
      <BlogPreview />
      <Footer />
      <WhatsappFloat message="Hola, vengo de la página de Inicio y quiero mejorar la captación de clientes de mi empresa." />
    </main>
  );
}
