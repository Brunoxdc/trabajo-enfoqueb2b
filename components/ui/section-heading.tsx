import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[720px]", align === "center" && "mx-auto text-center mb-11", className)}>
      {eyebrow && <span className="eyebrow text-[var(--color-blue)]">{eyebrow}</span>}
      <h2 className="mt-2.5 text-[clamp(26px,3.4vw,34px)] font-bold">{title}</h2>
      {subtitle && <p className="mt-2.5 text-[17px] text-[var(--color-muted)]">{subtitle}</p>}
    </div>
  );
}
