"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-ivory/70 transition-colors hover:bg-ivory/8 hover:text-ivory"
      >
        <LogOut size={18} />
        Logout
      </button>
    </form>
  );
}
