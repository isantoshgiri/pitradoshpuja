import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false }
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-temple-gradient px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <span className="font-display text-3xl font-semibold text-gold-light">
            Pitra Dosh Puja
          </span>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ivory/50">
            Admin Panel
          </p>
        </div>

        <div className="rounded-2xl border border-gold/20 bg-ivory p-7 shadow-sacred sm:p-8">
          <h1 className="font-display text-xl font-semibold text-maroon">Sign in</h1>
          <p className="mt-1 text-sm text-ink/60">
            Enter your admin credentials to continue.
          </p>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
