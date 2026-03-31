"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-accent-primary text-white font-semibold hover:bg-accent-primary/80 shadow-[0_0_20px_rgba(128,0,32,0.2)] hover:shadow-[0_0_30px_rgba(128,0,32,0.3)]",
  secondary:
    "border border-[var(--border-medium)] text-text-primary hover:border-accent-primary hover:text-accent-secondary bg-transparent",
  ghost:
    "text-text-secondary hover:text-accent-secondary bg-transparent",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
