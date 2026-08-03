import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin | Pitra Dosh Puja"
  },
  robots: { index: false, follow: false }
};

export default async function AdminDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  // Middleware already gates /admin/*, this is a defense-in-depth check for
  // Server Components rendered before the middleware redirect resolves.
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-parchment/30 lg:flex">
      <Sidebar userEmail={user.email ?? null} />
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">{children}</main>
    </div>
  );
}
