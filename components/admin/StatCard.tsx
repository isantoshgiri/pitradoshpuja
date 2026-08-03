import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export default function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  href
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  accent: "maroon" | "gold" | "green" | "red" | "indigo";
  href?: string;
}) {
  const accentClasses: Record<string, string> = {
    maroon: "bg-maroon/10 text-maroon",
    gold: "bg-gold/15 text-gold-dark",
    green: "bg-emerald-100 text-emerald-700",
    red: "bg-rose-100 text-rose-700",
    indigo: "bg-indigo-100 text-indigo-700"
  };

  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/45">
          {label}
        </span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-full ${accentClasses[accent]}`}>
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-semibold text-maroon">{value}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl border border-gold/20 bg-ivory p-5 shadow-sacred transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-glow"
      >
        {content}
      </Link>
    );
  }

  return <div className="rounded-2xl border border-gold/20 bg-ivory p-5 shadow-sacred">{content}</div>;
}
