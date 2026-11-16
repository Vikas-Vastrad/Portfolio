import { cn } from "@/lib/cn";
export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("badge badge-outline tech-chip", className)}>{children}</span>;
}
