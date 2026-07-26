import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Megaphone, Monitor, Route } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog B2B | Marketing y Conversión",
  description:
    "Artículos prácticos sobre campañas, estrategia digital y métricas para empresas que buscan mejores oportunidades comerciales.",
};

const categoryIcons: Record<string, LucideIcon> = {
  "Landing Pages": Monitor,
  Campañas: Megaphone,
  "Estrategia Digital": Route,
};

export default function BlogPage() {
  return (
    <main>
      <Header />

      <section className="bg-[var(--color-navy)] text-white py-14">
        <div className="container">
          <span className="eyebrow">Blog B2B</span>
          <h1 className="text-white text-[clamp(30px,4.4vw,44px)] font-extrabold mt-3">Marketing B2B y conversión</h1>
          <p className="text-[17px] text-[#c3d0e2] max-w-[600px] mt-3">
            Artículos prácticos sobre campañas, estrategia digital y métricas para empresas que buscan mejores oportunidades comerciales.
          </p>
        </div>
      </section>

      <section className="bg-white py-[60px] pb-20">
        <div className="container grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group grid sm:grid-cols-[220px_1fr] gap-5 bg-white border border-[var(--color-line)] rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <Image src={post.image} alt={post.title} width={400} height={220} className="w-full h-[180px] sm:h-full object-cover" />
                <div className="p-5 pl-0 sm:pl-0 pr-5 py-5 flex flex-col">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--color-blue)] font-[family-name:var(--font-heading)]">
                    {post.category}
                  </span>
                  <h2 className="text-lg my-2">{post.title}</h2>
                  <p className="text-[var(--color-muted)] text-sm flex-1">{post.description}</p>
                  <span className="mt-3 font-[family-name:var(--font-heading)] font-bold text-[13.5px] text-[var(--color-blue)] group-hover:text-[var(--color-orange)]">
                    Leer artículo →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="bg-[#fcfdfd] border border-[var(--color-line)] rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Categorías</h3>
              <ul>
                {blogPosts.map((post) => {
                  const Icon = categoryIcons[post.category];
                  return (
                    <li key={post.category} className="border-b border-[var(--color-line)] last:border-none">
                      <Link href={post.href} className="flex items-center gap-3 py-3 text-[14.5px] font-medium hover:text-[var(--color-blue)] transition-colors">
                        <span className="w-8 h-8 rounded-lg bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                          <Icon size={14} />
                        </span>
                        {post.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-[var(--color-light)] border border-[var(--color-line)] rounded-2xl p-6">
              <div className="w-[52px] h-[52px] rounded-full bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center mb-3">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-[17px] text-[var(--color-navy)] mb-2.5 font-bold">¿No tiene claridad sobre sus resultados?</h3>
              <p className="text-[13.5px] text-[var(--color-muted)] mb-4.5">
                Identificamos oportunidades de mejora en sus campañas, métricas y proceso comercial para obtener mejores resultados.
              </p>
              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 font-bold font-[family-name:var(--font-heading)] py-3 rounded-xl text-sm text-white bg-[var(--color-orange)] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] hover:bg-[var(--color-orange-dark)] transition-all"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <WhatsappFloat message="Hola, solicito información sobre sus servicios." />
    </main>
  );
}
