import type { BookingStatus } from "@/lib/types";

const STYLES: Record<BookingStatus, string> = {
  Pending: "bg-gold/15 text-gold-dark",
  Confirmed: "bg-sky-100 text-sky-700",
  "In Progress": "bg-indigo-100 text-indigo-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700"
};

export default function StatusBadge({ status }: { status: BookingStatus | string }) {
  const style = STYLES[status as BookingStatus] ?? "bg-ink/8 text-ink/60";
  return (
    <span className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${style}`}>
      {status}
    </span>
  );
}
