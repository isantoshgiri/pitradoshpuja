"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Loader2, KeyRound, CheckCircle2 } from "lucide-react";
import { updatePasswordAction, type UpdatePasswordState } from "@/app/admin/actions";

const initialState: UpdatePasswordState = { error: null, success: false };

const inputClass =
  "w-full rounded-lg border border-gold/25 bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-ivory shadow-sacred transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {pending ? (
        <>
          <Loader2 size={15} className="animate-spin" /> Updating&hellip;
        </>
      ) : (
        <>
          <KeyRound size={15} /> Update Password
        </>
      )}
    </button>
  );
}

export default function ChangePasswordForm() {
  const [state, formAction] = useFormState(updatePasswordAction, initialState);

  return (
    <form action={formAction} className="mt-4 space-y-4">
      <div>
        <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-ink/60">
          New Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="mb-1.5 block text-xs font-medium text-ink/60">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className={inputClass}
        />
      </div>

      {state.error && (
        <p className="rounded-lg bg-maroon/8 px-3 py-2 text-sm text-maroon" role="alert">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="flex items-center gap-1.5 text-sm text-emerald-700">
          <CheckCircle2 size={15} /> Password updated.
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
