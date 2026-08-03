"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { BookingStatus } from "@/lib/types";

export interface AuthActionState {
  error: string | null;
}

export async function loginAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const password = (formData.get("password") as string | null) ?? "";
  const redirectTo = (formData.get("redirectTo") as string | null) || "/admin";

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Invalid email or password." };
  }

  redirect(redirectTo);
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export interface UpdatePasswordState {
  error: string | null;
  success: boolean;
}

export async function updatePasswordAction(
  _prevState: UpdatePasswordState,
  formData: FormData
): Promise<UpdatePasswordState> {
  const password = (formData.get("password") as string | null) ?? "";
  const confirmPassword = (formData.get("confirmPassword") as string | null) ?? "";

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters.", success: false };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match.", success: false };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { error: error.message, success: false };
  }

  return { error: null, success: true };
}

export async function updateBookingStatus(id: string | number, status: BookingStatus) {
  const admin = createAdminClient();
  const { error } = await admin
    .from("Bookings")
    .update({ Status: status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
  revalidatePath(`/admin/bookings/${id}`);
  return { error: null };
}

export async function updateBooking(
  id: string | number,
  updates: { Status: BookingStatus; notes: string }
) {
  const admin = createAdminClient();
  const { error } = await admin
    .from("Bookings")
    .update({
      Status: updates.Status,
      notes: updates.notes || null,
      updated_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
  revalidatePath(`/admin/bookings/${id}`);
  return { error: null };
}

export async function deleteBooking(id: string | number) {
  const admin = createAdminClient();
  const { error } = await admin.from("Bookings").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
  return { error: null };
}
