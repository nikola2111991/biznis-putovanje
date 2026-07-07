import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-burgundy",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-burgundy/50" />
      {children}
    </span>
  );
}
