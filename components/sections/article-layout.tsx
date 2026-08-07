import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Calendar, Clock, Lightbulb, Target, Megaphone, Route, Monitor } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { blogPosts } from "@/lib/blog-posts";

const categoryIcons: Record<string, LucideIcon> = {
  "Landing Pages": Monitor,
  Campañas: Megaphone,
  "Estrategia Digital": Route,
};

type ArticleSection = { type: "text"; heading: string; paragraph: string } | { type: "callout"; text: string };

interface ArticleLayoutProps {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  sections: ArticleSection[];
  features: { icon: LucideIcon; label: string }[];
  ctaTitle: string;
  ctaDescription: string;
}

export function ArticleLayout({
  category,
  title,
  description,
  date,
  readTime,
  image,
  sections,
  features,
  ctaTitle,
  ctaDescription,
}: ArticleLayoutProps) {
  return (
    <main>
      <Header />

      <section className="bg-[var(--color-navy)] text-white pt-8 pb-[60px] border-t border-white/5">
        <div className="container">
          <span className="eyebrow">{category.toUpperCase()}</span>
          <h1 className="text-white text-[clamp(32px,4vw,44px)] font-extrabold mt-3 mb-3.5 max-w-[800px]">{title}</h1>
          <p className="text-[17px] text-[#c3d0e2] max-w-[700px] mb-6">{description}</p>
          <div className="flex gap-5 items-center text-[14.5px] text-[#aab8cc]">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} /> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} /> {readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-[60px] pb-20">
        <div className="container grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          <article>
            <Image
              src={image}
              alt={title}
              width={800}
              height={420}
              className="w-full rounded-2xl mb-[30px] border border-[var(--color-line)] object-cover"
            />

            {sections.map((section, i) =>
              section.type === "callout" ? (
                <div key={i} className="bg-[#f0f6ff] border border-[#c8deff] rounded-xl px-6 py-5 flex gap-4 items-center my-6 text-[var(--color-navy)] font-medium text-[14.5px]">
                  <Lightbulb size={20} className="text-[var(--color-blue)] shrink-0" />
                  <div>{section.text}</div>
                </div>
              ) : (
                <div key={i}>
                  <h2 className="text-xl text-[var(--color-navy)] mt-8 mb-3 font-bold">{section.heading}</h2>
                  <p className="text-[var(--color-ink)] text-[15.5px] mb-4 leading-[1.7]">{section.paragraph}</p>
                </div>
              )
            )}

            <div className="flex gap-6 flex-wrap my-8 pb-8 border-b border-[var(--color-line)]">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 text-sm font-semibold text-[var(--color-navy)]">
                  <f.icon size={20} className="text-[var(--color-blue)]" />
                  {f.label}
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-light)] border border-[var(--color-line)] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex gap-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-base text-[var(--color-navy)] mb-1 font-bold">{ctaTitle}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{ctaDescription}</p>
                </div>
              </div>
              <Link
                href="/contacto"
                className="shrink-0 inline-flex items-center justify-center gap-2 font-bold font-[family-name:var(--font-heading)] px-6 py-3.5 rounded-xl text-[15px] text-white bg-[var(--color-orange)] shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] hover:bg-[var(--color-orange-dark)] transition-all"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </article>

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

            <div className="bg-[#fcfdfd] border border-[var(--color-line)] rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Artículos recientes</h3>
              <div className="flex flex-col gap-4">
                {blogPosts.map((post) => (
                  <Link key={post.slug} href={post.href} className="flex gap-3.5 items-center group">
                    <Image src={post.image} alt={post.title} width={80} height={60} className="w-20 h-[60px] rounded-lg object-cover border border-[var(--color-line)]" />
                    <div>
                      <h4 className="text-sm text-[var(--color-navy)] leading-tight mb-1 font-bold group-hover:text-[var(--color-blue)] transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-xs text-[var(--color-muted)]">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-light)] border border-[var(--color-line)] rounded-2xl p-6">
              <h3 className="text-[17px] text-[var(--color-navy)] mb-2.5 font-bold">¿No tiene claridad sobre sus resultados?</h3>
              <p className="text-[13.5px] text-[var(--color-muted)] mb-4.5">
                Realizamos una auditoría digital para identificar oportunidades de mejora y potenciar su marketing.
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
      <WhatsappFloat message={`Hola, vengo del artículo "${title}" y quiero mejorar mis resultados de marketing digital B2B.`} />
    </main>
  );
}
