import Link from "next/link";
import { ClipboardList, Clock3, CheckCircle2, Trophy, XCircle, ArrowRight } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import StatCard from "@/components/admin/StatCard";
import StatusBadge from "@/components/admin/StatusBadge";
import type { Booking, BookingStatus } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getDashboardData() {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { bookings: [] as Booking[], error: error.message };
  }

  return { bookings: (data ?? []) as Booking[], error: null };
}

export default async function AdminDashboardPage() {
  const { bookings, error } = await getDashboardData();

  const counts: Record<BookingStatus, number> = {
    Pending: 0,
    Confirmed: 0,
    "In Progress": 0,
    Completed: 0,
    Cancelled: 0
  };

  for (const booking of bookings) {
    const status = booking.Status as BookingStatus;
    if (status && status in counts) counts[status] += 1;
  }

  const recent = bookings.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-ink/55">An overview of all puja bookings.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-maroon/8 px-4 py-3 text-sm text-maroon" role="alert">
          Couldn&apos;t load bookings: {error}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard
          label="Total"
          value={bookings.length}
          icon={ClipboardList}
          accent="maroon"
          href="/admin/bookings"
        />
        <StatCard
          label="Pending"
          value={counts.Pending}
          icon={Clock3}
          accent="gold"
          href="/admin/bookings?status=Pending"
        />
        <StatCard
          label="Confirmed"
          value={counts.Confirmed}
          icon={CheckCircle2}
          accent="green"
          href="/admin/bookings?status=Confirmed"
        />
        <StatCard
          label="Completed"
          value={counts.Completed}
          icon={Trophy}
          accent="green"
          href="/admin/bookings?status=Completed"
        />
        <StatCard
          label="Cancelled"
          value={counts.Cancelled}
          icon={XCircle}
          accent="red"
          href="/admin/bookings?status=Cancelled"
        />
      </div>

      <div className="rounded-2xl border border-gold/20 bg-ivory p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-maroon">Recent Bookings</h2>
          <Link
            href="/admin/bookings"
            className="flex items-center gap-1 text-sm font-medium text-maroon hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {recent.length === 0 ? (
          <p className="mt-6 text-sm text-ink/50">No bookings yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-gold/15 text-xs uppercase tracking-wide text-ink/45">
                  <th className="pb-2 pr-4 font-medium">Name</th>
                  <th className="pb-2 pr-4 font-medium">Puja</th>
                  <th className="pb-2 pr-4 font-medium">Booking Date</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((b) => (
                  <tr key={b.id} className="border-b border-gold/10 last:border-0">
                    <td className="py-3 pr-4">
                      <Link
                        href={`/admin/bookings/${b.id}`}
                        className="font-medium text-ink hover:text-maroon"
                      >
                        {b.Name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-ink/70">{b.Puja}</td>
                    <td className="py-3 pr-4 text-ink/70">{b["Booking Date"]}</td>
                    <td className="py-3">
                      <StatusBadge status={b.Status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
