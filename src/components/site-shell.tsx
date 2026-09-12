import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/dps", label: "DPS" },
  { to: "/healer", label: "Healer" },
  { to: "/bandingkan", label: "Bandingkan" },
  { to: "/checklist", label: "Checklist" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link
            to="/"
            className="flex items-baseline gap-2 text-fg no-underline"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-lg tracking-display sm:text-xl">
              Kipas & Payung
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-subtle sm:inline">
              Where Winds Meet
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-2 text-sm no-underline transition-colors duration-150",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {open ? (
          <nav className="border-t border-line px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex h-11 items-center rounded-[var(--radius-sm)] px-3 text-base no-underline",
                      active ? "bg-raised text-fg" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        ) : null}
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-line px-4 py-10 sm:px-6">
        <p className="font-display text-xl tracking-display">Kipas & Payung</p>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
          Panduan tune Fan + Umbrella untuk Where Winds Meet. Dua jalur: DPS
          Silkbind–Jade dan Healer Silkbind–Deluge, masing-masing untuk PvE dan
          PvP. Meta disusun ulang untuk patch 1.7 / musim 2026.
        </p>
        <p className="mt-6 text-xs text-subtle">
          Nama skill mengikuti client global. Bukan afiliasi NetEase.
        </p>
      </footer>
    </div>
  );
}
