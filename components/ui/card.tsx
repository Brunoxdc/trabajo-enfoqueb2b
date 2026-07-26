import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white border border-[var(--color-line)] rounded-2xl p-6 transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-transparent",
        className
      )}
      {...props}
    />
  );
}

export function CardIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-[52px] h-[52px] rounded-2xl bg-[#eaf2ff] text-[var(--color-blue)] grid place-items-center text-2xl mb-4",
        className
      )}
      {...props}
    />
  );
}
