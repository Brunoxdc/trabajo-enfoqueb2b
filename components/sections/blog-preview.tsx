import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/blog-posts";

export function BlogPreview() {
  return (
    <section className="bg-[var(--color-light)] py-[76px]" id="blog">
      <div className="container">
        <SectionHeading eyebrow="Blog / Recursos" title="Aprende sobre publicidad y marketing B2B" />
        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group bg-white border border-[var(--color-line)] rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <Image src={post.image} alt={post.title} width={500} height={140} className="w-full h-[140px] object-cover" />
              <div className="px-[22px] pt-5 pb-[22px] flex flex-col flex-1">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--color-blue)] font-[family-name:var(--font-heading)]">
                  {post.category}
                </span>
                <h3 className="text-[17px] my-2 leading-snug">{post.title}</h3>
                <p className="text-[var(--color-muted)] text-[13.5px] flex-1">{post.description}</p>
                <span className="mt-3.5 font-[family-name:var(--font-heading)] font-bold text-[13.5px] text-[var(--color-blue)] group-hover:text-[var(--color-orange)]">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
