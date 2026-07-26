"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Auditoría Digital", href: "/servicio-auditoria" },
  { label: "Publicidad", href: "/servicio-publicidad" },
  { label: "Estrategia Digital", href: "/servicio-estrategia" },
  { label: "Landing Pages", href: "/servicio-landing-pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog-");
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(10,26,48,0.94)] backdrop-blur-md border-b border-white/[0.07]">
      <div className="flex items-center justify-between gap-3 w-full px-6 lg:px-10" style={{ height: "var(--header-height)" }}>
        <Link href="/" className="flex items-center gap-[11px] text-white font-[family-name:var(--font-heading)] font-extrabold text-xl shrink-0" aria-label="Enfoque B2B - Inicio">
          <span className="w-[30px] h-[30px] rounded-full border-[3px] border-[var(--color-blue-bright)] grid place-items-center shrink-0">
            <span className="w-[9px] h-[9px] rounded-full bg-[var(--color-orange)]" />
          </span>
          Enfoque <b className="text-[var(--color-blue-bright)]">B2B</b>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 rounded-lg text-[15px] font-bold whitespace-nowrap transition-colors ${
                  active
                    ? "text-white underline decoration-2 underline-offset-[6px] decoration-[var(--color-blue-bright)] bg-white/[0.12]"
                    : "text-white hover:underline hover:decoration-2 hover:underline-offset-[6px] hover:decoration-[var(--color-blue-bright)] hover:bg-white/[0.12]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contacto" className={buttonVariants({ variant: "primary", className: "px-[18px] py-2.5 text-sm" })}>
            Solicitar diagnóstico
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--color-navy)]">
          <nav className="px-6 flex flex-col py-4 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-base font-bold ${isActive(link.href) ? "text-white" : "text-white/85"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: "primary", className: "mt-1 w-full" })}
            >
              Solicitar diagnóstico
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
