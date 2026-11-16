import { cn } from "@/lib/cn";
type Stamp = { top: string; title: string; detail: string };
export function StampCard({
  stamp,
  type,
  placeholder = false,
}: {
  stamp: Stamp;
  type: string;
  placeholder?: boolean;
}) {
  return (
    <div
      className={cn("stamp", type === "award" && "stamp-award", placeholder && "stamp-placeholder")}
    >
      <div className="eyebrow">{stamp.top}</div>
      <strong>{stamp.title}</strong>
      <small>{stamp.detail}</small>
    </div>
  );
}
