import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { RotationStep, WeaponKind } from "@/data/types";

const WEAPON_LABEL: Record<WeaponKind, string> = {
  fan: "Kipas",
  umbrella: "Payung",
  mystic: "Mystic",
  swap: "Swap",
};

export function RotationPlayer({
  steps,
  title,
}: {
  steps: RotationStep[];
  title: string;
}) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const step = steps[i];

  useEffect(() => {
    setI(0);
    setPlaying(false);
  }, [steps]);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => {
      setI((n) => (n + 1) % steps.length);
    }, 2200);
    return () => window.clearTimeout(t);
  }, [playing, i, steps.length]);

  if (!step) return null;

  return (
    <div className="overflow-hidden rounded-[var(--radius-xl)] border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
            Rotasi
          </p>
          <h3 className="mt-1 font-display text-xl tracking-display">{title}</h3>
        </div>
        <p className="font-mono text-sm tabular-nums text-muted">
          {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </p>
      </div>

      <div className="px-5 py-6 sm:px-7">
        <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
          {WEAPON_LABEL[step.weapon]}
        </p>
        <p className="mt-2 font-display text-2xl tracking-display sm:text-3xl">
          {step.action}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {step.note}
        </p>
      </div>

      <div className="flex items-center gap-2 border-t border-line px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Langkah sebelumnya"
          onClick={() => setI((n) => (n - 1 + steps.length) % steps.length)}
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "Jeda" : "Putar otomatis"}
        >
          {playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
          {playing ? "Jeda" : "Putar"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Langkah berikutnya"
          onClick={() => setI((n) => (n + 1) % steps.length)}
        >
          <ChevronRight className="size-5" />
        </Button>
        <div className="ml-2 flex flex-1 flex-wrap gap-1">
          {steps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Langkah ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-2 flex-1 min-w-3 max-w-8 rounded-full transition-colors duration-150",
                idx === i ? "bg-fg" : "bg-line-strong",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
