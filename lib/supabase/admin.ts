import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Privileged Supabase client for admin-only server-side operations
 * (reading/updating/deleting rows in "Bookings" regardless of the public
 * Row Level Security policies used by the booking form).
 *
 * SUPABASE_SERVICE_ROLE_KEY must NOT be prefixed with NEXT_PUBLIC_ — it is
 * only ever read on the server (inside app/admin/actions.ts) and is never
 * sent to the browser.
 *
 * Add it to your .env.local (get it from Supabase Dashboard → Project
 * Settings → API → service_role key):
 *   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
 *
 * If it isn't set, this falls back to the public anon key — admin actions
 * will then only work if you've added RLS policies on "Bookings" that allow
 * authenticated users to select/update/delete rows.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cachedClient: SupabaseClient | null = null;

export function createAdminClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  const key = serviceRoleKey || anonKey;

  if (!supabaseUrl || !key) {
    throw new Error(
      "Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)."
    );
  }

  cachedClient = createClient(supabaseUrl, key, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  return cachedClient;
}
