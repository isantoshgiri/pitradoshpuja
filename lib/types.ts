export type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "In Progress"
  | "Completed"
  | "Cancelled";

export const BOOKING_STATUSES: BookingStatus[] = [
  "Pending",
  "Confirmed",
  "In Progress",
  "Completed",
  "Cancelled"
];

/**
 * Matches the columns written by the public booking form
 * (components/Contact.tsx) plus admin-only fields.
 * Extra columns (e.g. country/state/city/gotra/time) are read generically
 * via the index signature so they still show up on the detail page if
 * present in the table.
 */
export interface Booking {
  id: string | number;
  Name: string;
  Mobile: string;
  Email: string | null;
  Puja: string;
  "Booking Date": string;
  Message: string | null;
  notes: string | null;
  Status: BookingStatus;
  created_at: string;
  updated_at: string | null;
  [key: string]: unknown;
}
