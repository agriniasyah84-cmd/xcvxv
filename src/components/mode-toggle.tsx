import { cn } from "@/lib/utils";
import type { Mode } from "@/data/types";

export function ModeToggle({
  value,
  onChange,
}: {
  value: Mode;
  onChange: (m: Mode) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Mode konten"
      className="inline-flex h-11 rounded-[var(--radius-md)] border border-line bg-surface p-1"
    >
      {(["pve", "pvp"] as const).map((m) => (
        <button
          key={m}
          role="tab"
          type="button"
          aria-selected={value === m}
          onClick={() => onChange(m)}
          className={cn(
            "h-9 min-w-[5.5rem] rounded-[var(--radius-sm)] px-4 text-sm font-medium transition-[background-color,color] duration-150",
            value === m
              ? "bg-fg text-accent-fg"
              : "text-muted hover:text-fg",
          )}
        >
          {m === "pve" ? "PvE" : "PvP"}
        </button>
      ))}
    </div>
  );
}
