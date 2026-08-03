"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarCheck, Settings, Menu, X, Flame } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/admin/settings", label: "Settings", icon: Settings }
];

export default function Sidebar({ userEmail }: { userEmail: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-gold/15 bg-temple-gradient px-4 py-3 lg:hidden">
        <span className="font-display text-lg font-semibold text-gold-light">
          Pitra Dosh Puja
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-ivory/80 hover:bg-ivory/10"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-dusk/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-temple-gradient transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="hidden items-center gap-2 px-6 pb-2 pt-7 lg:flex">
          <Flame size={20} className="text-gold" />
          <div>
            <p className="font-display text-lg font-semibold leading-tight text-gold-light">
              Pitra Dosh Puja
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/40">Admin</p>
          </div>
        </div>

        <nav className="mt-4 flex-1 space-y-1 px-4">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive(href)
                  ? "bg-gold/15 text-gold-light"
                  : "text-ivory/65 hover:bg-ivory/8 hover:text-ivory"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-ivory/10 px-4 py-5">
          {userEmail && (
            <p className="mb-3 truncate px-1 text-xs text-ivory/45" title={userEmail}>
              {userEmail}
            </p>
          )}
          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
