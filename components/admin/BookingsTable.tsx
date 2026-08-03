"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Eye, Pencil, Trash2, Loader2 } from "lucide-react";
import StatusBadge from "@/components/admin/StatusBadge";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { deleteBooking, updateBookingStatus } from "@/app/admin/actions";
import { BOOKING_STATUSES, type Booking, type BookingStatus } from "@/lib/types";

export default function BookingsTable({
  initialBookings,
  initialStatus = "All"
}: {
  initialBookings: Booking[];
  initialStatus?: "All" | BookingStatus;
}) {
  const router = useRouter();
  const [bookings, setBookings] = useState(initialBookings);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | BookingStatus>(initialStatus);
  const [pendingId, setPendingId] = useState<string | number | null>(null);
  const [isPending, startTransition] = useTransition();
  const [deleteTarget, setDeleteTarget] = useState<Booking | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bookings.filter((b) => {
      const matchesQuery =
        !q ||
        [b.Name, b.Mobile, b.Email]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(q));
      const matchesStatus = statusFilter === "All" || b.Status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [bookings, query, statusFilter]);

  function handleStatusChange(id: string | number, status: BookingStatus) {
    setPendingId(id);
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, Status: status } : b)));
    startTransition(async () => {
      const result = await updateBookingStatus(id, status);
      if (result.error) {
        alert(`Couldn't update status: ${result.error}`);
        router.refresh();
      }
      setPendingId(null);
    });
  }

  function confirmDelete() {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    setPendingId(id);
    startTransition(async () => {
      const result = await deleteBooking(id);
      if (result.error) {
        alert(`Couldn't delete booking: ${result.error}`);
      } else {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      }
      setPendingId(null);
      setDeleteTarget(null);
    });
  }

  return (
    <div className="rounded-2xl border border-gold/20 bg-ivory p-4 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, mobile, email…"
            className="w-full rounded-lg border border-gold/25 bg-ivory py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as "All" | BookingStatus)}
          className="rounded-lg border border-gold/25 bg-ivory px-3 py-2.5 text-sm text-ink focus:border-gold"
        >
          <option value="All">All</option>
          {BOOKING_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-gold/15 text-xs uppercase tracking-wide text-ink/45">
              <th className="pb-3 pr-4 font-medium">Name</th>
              <th className="pb-3 pr-4 font-medium">Mobile</th>
              <th className="pb-3 pr-4 font-medium">Email</th>
              <th className="pb-3 pr-4 font-medium">Puja</th>
              <th className="pb-3 pr-4 font-medium">Booking Date</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 pr-4 font-medium">Created At</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="py-10 text-center text-sm text-ink/45">
                  No bookings match your search.
                </td>
              </tr>
            )}
            {filtered.map((b) => {
              const rowBusy = isPending && pendingId === b.id;
              return (
                <tr key={b.id} className="border-b border-gold/10 last:border-0 align-middle">
                  <td className="py-3 pr-4">
                    <Link
                      href={`/admin/bookings/${b.id}`}
                      className="font-medium text-ink hover:text-maroon"
                    >
                      {b.Name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-ink/70">{b.Mobile}</td>
                  <td className="py-3 pr-4 text-ink/70">{b.Email || "—"}</td>
                  <td className="py-3 pr-4 text-ink/70">{b.Puja}</td>
                  <td className="py-3 pr-4 text-ink/70">{b["Booking Date"]}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      {rowBusy && <Loader2 size={14} className="animate-spin text-ink/40" />}
                      <select
                        value={b.Status}
                        disabled={rowBusy}
                        onChange={(e) => handleStatusChange(b.id, e.target.value as BookingStatus)}
                        className="rounded-full border border-gold/25 bg-ivory px-2.5 py-1 text-xs font-semibold text-ink focus:border-gold disabled:opacity-50"
                      >
                        {BOOKING_STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <StatusBadge status={b.Status} />
                    </div>
                  </td>
                  <td className="py-3 pr-4 whitespace-nowrap text-ink/60">
                    {b.created_at ? new Date(b.created_at).toLocaleString() : "—"}
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <Link
                        href={`/admin/bookings/${b.id}`}
                        title="View"
                        className="rounded-lg p-2 text-ink/55 hover:bg-maroon/8 hover:text-maroon"
                      >
                        <Eye size={16} />
                      </Link>
                      <Link
                        href={`/admin/bookings/${b.id}?edit=1`}
                        title="Edit"
                        className="rounded-lg p-2 text-ink/55 hover:bg-maroon/8 hover:text-maroon"
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        type="button"
                        title="Delete"
                        disabled={rowBusy}
                        onClick={() => setDeleteTarget(b)}
                        className="rounded-lg p-2 text-ink/55 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ConfirmDialog
        open={deleteTarget !== null}
        title="Delete this booking?"
        description={
          deleteTarget
            ? `This will permanently delete the booking for "${deleteTarget.Name}". This can't be undone.`
            : ""
        }
        loading={isPending && pendingId === deleteTarget?.id}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
