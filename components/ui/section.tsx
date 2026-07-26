import * as React from "react";
import { cn } from "@/lib/utils";

type Bg = "white" | "light" | "navy";

const bgClasses: Record<Bg, string> = {
  white: "bg-white",
  light: "bg-[var(--color-light)]",
  navy: "bg-[var(--color-navy)] text-white",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: Bg;
  containerClassName?: string;
}

/** Bloque de sección con ritmo de espaciado y ancho consistentes en todo el sitio. */
export function Section({ bg = "white", className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn(bgClasses[bg], "py-[76px]", className)} {...props}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
