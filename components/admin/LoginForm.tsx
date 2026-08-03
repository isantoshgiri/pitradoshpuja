"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { Loader2, LogIn } from "lucide-react";
import { loginAction, type AuthActionState } from "@/app/admin/actions";

const initialState: AuthActionState = { error: null };

const inputClass =
  "w-full rounded-lg border border-gold/25 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory shadow-sacred transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Signing in&hellip;
        </>
      ) : (
        <>
          <LogIn size={16} /> Sign in
        </>
      )}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initialState);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/admin";

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          placeholder="admin@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-ink/60">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className={inputClass}
        />
      </div>

      {state.error && (
        <p className="rounded-lg bg-maroon/8 px-3 py-2 text-sm text-maroon" role="alert">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
