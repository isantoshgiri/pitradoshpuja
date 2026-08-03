import { createClient } from "@/lib/supabase/server";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-ink/55">Manage your admin account.</p>
      </div>

      <div className="max-w-lg rounded-2xl border border-gold/20 bg-ivory p-5 sm:p-6">
        <h2 className="font-display text-lg font-semibold text-maroon">Account</h2>
        <p className="mt-2 text-sm text-ink/70">
          Signed in as <span className="font-medium text-ink">{user?.email}</span>
        </p>
      </div>

      <div className="max-w-lg rounded-2xl border border-gold/20 bg-ivory p-5 sm:p-6">
        <h2 className="font-display text-lg font-semibold text-maroon">Change Password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
