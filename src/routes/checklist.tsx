import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { checklistItems } from "@/data/checklist";
import { cn } from "@/lib/utils";
import { useChecklist } from "@/store/checklist";

export const Route = createFileRoute("/checklist")({
  component: ChecklistPage,
  head: () => ({
    meta: [{ title: "Checklist tune · Kipas & Payung" }],
  }),
});

function ChecklistPage() {
  const ready = useChecklist((s) => s.ready);
  const done = useChecklist((s) => s.done);
  const toggle = useChecklist((s) => s.toggle);
  const reset = useChecklist((s) => s.reset);
  const hydrate = useChecklist((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const n = ready ? checklistItems.filter((i) => done[i.id]).length : 0;
  const pct = Math.round((n / checklistItems.length) * 100);

  const groups = useMemo(() => {
    const map = new Map<string, typeof checklistItems>();
    for (const item of checklistItems) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return [...map.entries()];
  }, []);

  return (
    <main className="pb-20 pt-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-subtle">
        Farm & latihan
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-display">Checklist</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Tandai yang sudah beres. Tersimpan di perangkat ini. DPS, healer, dan
        yang dipakai keduanya.
      </p>

      <div className="mt-8 rounded-[var(--radius-lg)] border border-line bg-surface p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs text-subtle">Progress</p>
            <p className="mt-1 font-mono text-2xl tabular-nums">
              {n}
              <span className="text-muted"> / {checklistItems.length}</span>
            </p>
          </div>
          <Button variant="ghost" type="button" onClick={reset}>
            Reset
          </Button>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-raised">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {groups.map(([group, items]) => (
          <section key={group}>
            <h2 className="font-display text-2xl tracking-display">{group}</h2>
            <ul className="mt-4 space-y-2">
              {items.map((item) => {
                const on = ready && Boolean(done[item.id]);
                return (
                  <li key={item.id}>
                    <label
                      className={cn(
                        "flex cursor-pointer gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-4",
                        on && "border-line-strong",
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(item.id)}
                        className="mt-1 size-4 shrink-0 accent-accent"
                      />
                      <span>
                        <span className="flex flex-wrap items-baseline gap-2">
                          <span className="text-sm text-fg">{item.label}</span>
                          <span className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                            {item.build === "both"
                              ? "Keduanya"
                              : item.build === "dps"
                                ? "DPS"
                                : "Healer"}
                          </span>
                        </span>
                        <span className="mt-1 block text-sm text-muted">
                          {item.hint}
                        </span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
