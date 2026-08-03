import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/admin";
import BookingEditForm from "@/components/admin/BookingEditForm";
import StatusBadge from "@/components/admin/StatusBadge";
import type { Booking } from "@/lib/types";

export const dynamic = "force-dynamic";

const KNOWN_FIELDS = new Set([
  "id",
  "Name",
  "Mobile",
  "Email",
  "Puja",
  "Booking Date",
  "Message",
  "notes",
  "Status",
  "created_at",
  "updated_at"
]);

async function getBooking(id: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("Bookings").select("*").eq("id", id).maybeSingle();
  return { booking: data as Booking | null, error: error?.message ?? null };
}

export default async function BookingDetailPage({
  params
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { booking, error } = await getBooking(id);

  if (error) {
    return (
      <p className="rounded-xl bg-maroon/8 px-4 py-3 text-sm text-maroon" role="alert">
        Couldn&apos;t load this booking: {error}
      </p>
    );
  }

  if (!booking) {
    notFound();
  }

  const extraFields = Object.entries(booking).filter(
    ([key, value]) => !KNOWN_FIELDS.has(key) && value !== null && value !== ""
  );

  return (
    <div className="space-y-6">
      <Link
        href="/admin/bookings"
        className="flex w-fit items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-maroon"
      >
        <ArrowLeft size={15} /> Back to bookings
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">
            {booking.Name}
          </h1>
          <p className="mt-1 text-sm text-ink/55">Booking #{booking.id}</p>
        </div>
        <StatusBadge status={booking.Status} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-gold/20 bg-ivory p-5 sm:p-6">
          <h2 className="font-display text-lg font-semibold text-maroon">Booking Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Mobile" value={booking.Mobile} />
            <Field label="Email" value={booking.Email || "—"} />
            <Field label="Puja" value={booking.Puja} />
            <Field label="Booking Date" value={booking["Booking Date"]} />
            <Field label="Created At" value={new Date(booking.created_at).toLocaleString()} />
            {booking.updated_at && (
              <Field label="Updated At" value={new Date(booking.updated_at).toLocaleString()} />
            )}
            {extraFields.map(([key, value]) => (
              <Field key={key} label={key} value={String(value)} />
            ))}
          </div>
          {booking.Message && (
            <div>
              <p className="text-xs uppercase tracking-wide text-ink/45">Message from devotee</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-ink/80">{booking.Message}</p>
            </div>
          )}
        </div>

        <BookingEditForm booking={booking} />
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-ink/45">{label}</p>
      <p className="mt-0.5 text-sm text-ink/85">{value}</p>
    </div>
  );
}
