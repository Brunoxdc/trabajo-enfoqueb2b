import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghostLight";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-orange)] text-white shadow-[0_10px_24px_-10px_rgba(241,90,36,0.7)] hover:bg-[var(--color-orange-dark)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--color-navy)] border border-[var(--color-line)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]",
  ghostLight:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  md: "px-[22px] py-3 text-[14.5px]",
  lg: "px-[26px] py-3.5 text-[15px]",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold font-[family-name:var(--font-heading)] transition-all duration-200 ease-[var(--ease)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
  )
);
Button.displayName = "Button";

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function ButtonLink({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonVariants({ variant, size, className })} {...props} />;
}
