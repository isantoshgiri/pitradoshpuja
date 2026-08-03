"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, Trash2, CheckCircle2 } from "lucide-react";
import StatusBadge from "@/components/admin/StatusBadge";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { deleteBooking, updateBooking } from "@/app/admin/actions";
import { BOOKING_STATUSES, type Booking, type BookingStatus } from "@/lib/types";

const inputClass =
  "w-full rounded-lg border border-gold/25 bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold";

export default function BookingEditForm({ booking }: { booking: Booking }) {
  const router = useRouter();
  const [status, setStatus] = useState<BookingStatus>(booking.Status);
  const [notes, setNotes] = useState(booking.notes ?? "");
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(false);
    setError(null);
    startTransition(async () => {
      const result = await updateBooking(booking.id, { Status: status, notes });
      if (result.error) {
        setError(result.error);
      } else {
        setSaved(true);
        router.refresh();
      }
    });
  }

  function confirmDelete() {
    startTransition(async () => {
      const result = await deleteBooking(booking.id);
      if (result.error) {
        setError(result.error);
        setConfirmDeleteOpen(false);
      } else {
        router.push("/admin/bookings");
      }
    });
  }

  return (
    <form
      onSubmit={handleSave}
      className="space-y-5 rounded-2xl border border-gold/20 bg-ivory p-5 sm:p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-maroon">Manage Booking</h2>
        <StatusBadge status={booking.Status} />
      </div>

      <div>
        <label htmlFor="status" className="mb-1.5 block text-xs font-medium text-ink/60">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as BookingStatus)}
          className={inputClass}
        >
          {BOOKING_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-xs font-medium text-ink/60">
          Admin Notes
        </label>
        <textarea
          id="notes"
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Internal notes about this booking (not visible to the devotee)…"
          className={inputClass}
        />
      </div>

      {error && (
        <p className="rounded-lg bg-maroon/8 px-3 py-2 text-sm text-maroon" role="alert">
          {error}
        </p>
      )}
      {saved && !error && (
        <p className="flex items-center gap-1.5 text-sm text-emerald-700">
          <CheckCircle2 size={15} /> Changes saved.
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setConfirmDeleteOpen(true)}
          disabled={isPending}
          className="flex items-center justify-center gap-2 rounded-full border border-rose-200 px-5 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Trash2 size={15} /> Delete Booking
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-ivory shadow-sacred transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isPending ? (
            <>
              <Loader2 size={15} className="animate-spin" /> Saving&hellip;
            </>
          ) : (
            <>
              <Save size={15} /> Save Changes
            </>
          )}
        </button>
      </div>

      <ConfirmDialog
        open={confirmDeleteOpen}
        title="Delete this booking?"
        description={`This will permanently delete the booking for "${booking.Name}". This can't be undone.`}
        loading={isPending}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDeleteOpen(false)}
      />
    </form>
  );
}
