import { createAdminClient } from "@/lib/supabase/admin";
import BookingsTable from "@/components/admin/BookingsTable";
import { BOOKING_STATUSES, type Booking, type BookingStatus } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getBookings() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("Bookings")
    .select("*")
    .order("created_at", { ascending: false });

  return { bookings: (data ?? []) as Booking[], error: error?.message ?? null };
}

export default async function BookingsPage({
  searchParams
}: {
  searchParams: { status?: string };
}) {
  const { bookings, error } = await getBookings();

  const requestedStatus = searchParams.status;
  const initialStatus: "All" | BookingStatus =
    requestedStatus && BOOKING_STATUSES.includes(requestedStatus as BookingStatus)
      ? (requestedStatus as BookingStatus)
      : "All";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">Bookings</h1>
        <p className="mt-1 text-sm text-ink/55">
          {bookings.length} booking{bookings.length === 1 ? "" : "s"} total.
        </p>
      </div>

      {error ? (
        <p className="rounded-xl bg-maroon/8 px-4 py-3 text-sm text-maroon" role="alert">
          Couldn&apos;t load bookings: {error}
        </p>
      ) : (
        <BookingsTable initialBookings={bookings} initialStatus={initialStatus} />
      )}
    </div>
  );
}
