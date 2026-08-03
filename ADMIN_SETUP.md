# Admin Panel — Setup Guide

This adds a full admin system at `/admin` on top of your existing site. The
public booking form (`components/Contact.tsx`) was **not** touched.

## 1. Install the new dependency

```bash
npm install
```

(`@supabase/ssr` was added to `package.json` — it powers the cookie-based
login session for `/admin`.)

## 2. Environment variables

Add to `.env.local` (see `.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

`SUPABASE_SERVICE_ROLE_KEY` is new. Find it in **Supabase Dashboard → Project
Settings → API → service_role key**. It is only ever read on the server
(inside `app/admin/actions.ts` and other server-only files) and is never sent
to the browser — this is what lets the admin panel read/update/delete every
booking regardless of the public Row Level Security policy on `Bookings`
(which likely only allows anonymous `insert`).

If you don't want to use a service role key, you can instead add RLS
policies that let `authenticated` users `select`, `update`, and `delete` on
`Bookings` — then leave `SUPABASE_SERVICE_ROLE_KEY` unset and the admin
client automatically falls back to the anon key.

## 3. Create your admin login

In **Supabase Dashboard → Authentication → Users → Add user**, create the
email + password you'll use to sign in at `/admin/login`. (Or run
`supabase.auth.admin.createUser(...)` with the service role key.)

## 4. Database columns required for Phase 1

The admin panel now needs `notes` and `updated_at` columns on `Bookings`.
Run this in the Supabase SQL editor:

```sql
alter table "Bookings" add column if not exists "notes" text;
alter table "Bookings" add column if not exists "updated_at" timestamptz;
```

> If you already ran the earlier setup and added a capitalized `"Notes"`
> column, rename it instead so it matches the lowercase name the app now
> uses:
> ```sql
> alter table "Bookings" rename column "Notes" to "notes";
> ```

No database change is needed for the new **"In Progress"** status — it's
just a new value written into the existing `Status` column.

## 5. Run it

```bash
npm run dev
```

Visit `http://localhost:3000/admin` — you'll be redirected to
`/admin/login` until you sign in.

## What was added

**Phase 1 (this update):**
- "In Progress" status added everywhere (dropdown, filter, color-coded badge)
- Dashboard stat cards are now clickable and deep-link into a pre-filtered `/admin/bookings?status=...` view
- Search narrowed to Name / Mobile / Email; status filter dropdown (All/Pending/Confirmed/In Progress/Completed/Cancelled)
- Delete now shows a themed confirmation modal (`components/admin/ConfirmDialog.tsx`) instead of the browser's native `confirm()`
- `notes` and `updated_at` columns wired up end-to-end; `updated_at` is stamped automatically on every status/notes save

**Original setup:**
- `/admin` — Dashboard (total/pending/confirmed/completed/cancelled cards + recent bookings)
- `/admin/bookings` — Searchable, filterable table of all bookings (view, edit, delete, inline status update)
- `/admin/bookings/[id]` — Full booking details + edit Status & Notes + delete
- `/admin/settings` — Signed-in account info + change password
- `/admin/login` — Email/password sign-in
- `middleware.ts` — Scoped to `/admin/*` only; redirects signed-out visitors to `/admin/login` and signed-in visitors away from `/admin/login`
- `lib/supabase/server.ts`, `lib/supabase/middleware.ts`, `lib/supabase/admin.ts` — new Supabase clients for the admin system (your existing `lib/supabase/client.ts` used by the public form is untouched)

Nothing in `app/page.tsx`, `components/Contact.tsx`, or any other public page
was modified.
