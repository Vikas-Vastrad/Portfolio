import { cn } from "@/lib/cn";
type Props = { eyebrow?: string; heading: string; subtitle: string; className?: string };
export function SectionHeading({ eyebrow, heading, subtitle, className }: Props) {
  return (
    <div className={cn("section-heading", className)}>
      {eyebrow && <span className="eyebrow accent">{eyebrow}</span>}
      <div className="section-heading-copy">
        <h2>{heading}</h2>
        <p className="section-meaning">{subtitle}</p>
      </div>
    </div>
  );
}
