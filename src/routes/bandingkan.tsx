import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bandingkan")({
  component: ComparePage,
  head: () => ({
    meta: [{ title: "Bandingkan · Kipas & Payung" }],
  }),
});

const ROWS: { label: string; dps: string; heal: string }[] = [
  { label: "Path", dps: "Silkbind–Jade", heal: "Silkbind–Deluge" },
  { label: "Senjata", dps: "Inkwell Fan + Vernal Umbrella", heal: "Panacea Fan + Soulshade Umbrella" },
  { label: "Peran", dps: "Ranged DPS", heal: "Healer / support" },
  { label: "Resource", dps: "Blossom → drone", heal: "Dew → burst & rez" },
  { label: "PvE", dps: "S-tier parse, Qi Break cash-out", heal: "Wajib di raid sulit, revive" },
  { label: "PvP", dps: "Grup: kuat. 1v1: sedang", heal: "Grup: wajib. 1v1: lemah" },
  { label: "Inner 1–3", dps: "Blossom Barrage, Morale Chant, Star Reacher", heal: "Morale Chant, Royal Remedy, Restoring Blossom" },
  { label: "Inner 4 PvE", dps: "Thunderous Bloom", heal: "Mending Loom" },
  { label: "Inner 4 PvP", dps: "Trapped Beast / Bitter Seasons", heal: "Mending Loom (tetap)", },
  { label: "Mystic PvP wajib", dps: "Serene Breeze", heal: "Serene Breeze" },
  { label: "Set BiS PvE", dps: "Mistwillow + Flawless Defense", heal: "Rainwhisper + Eaglerise" },
  { label: "Set BiS PvP", dps: "Veil of the Willow + Beyond the Chill", heal: "Rainwhisper + Eaglerise" },
  { label: "Stat #1", dps: "Crit Rate, Max Physical Attack", heal: "Attack (heal scale), Healing Boost" },
  { label: "Skill ceiling", dps: "Tinggi — buff drop = DPS anjlok", heal: "Sedang — Dew dan timing rez" },
];

const BARS: { label: string; dps: number; heal: number }[] = [
  { label: "Damage", dps: 92, heal: 28 },
  { label: "Healing", dps: 18, heal: 96 },
  { label: "Revive", dps: 0, heal: 100 },
  { label: "Mobilitas", dps: 78, heal: 82 },
  { label: "CC", dps: 80, heal: 45 },
  { label: "Survive", dps: 48, heal: 62 },
  { label: "PvE raid", dps: 90, heal: 88 },
  { label: "PvP grup", dps: 76, heal: 90 },
  { label: "PvP 1v1", dps: 58, heal: 32 },
];

function ComparePage() {
  return (
    <main className="pb-20 pt-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-subtle">
        Tipe 01 vs 02
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-display">Bandingkan</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Dua tune Fan + Payung. Bukan hibrida yang meragukan keduanya — pilih
        satu sebagai identitas, ganti loadout PvE/PvP di atasnya.
      </p>

      <div className="mt-10 overflow-x-auto rounded-[var(--radius-xl)] border border-line">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="bg-raised">
            <tr>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-subtle">
                Aspek
              </th>
              <th className="px-4 py-3 font-display text-lg font-medium tracking-display">
                DPS
              </th>
              <th className="px-4 py-3 font-display text-lg font-medium tracking-display">
                Healer
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.label} className="border-t border-line">
                <th className="px-4 py-3 align-top font-medium text-fg">
                  {r.label}
                </th>
                <td className="px-4 py-3 align-top text-muted">{r.dps}</td>
                <td className="px-4 py-3 align-top text-muted">{r.heal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 font-display text-3xl tracking-display">Profil</h2>
      <ul className="mt-6 space-y-4">
        {BARS.map((b) => (
          <li key={b.label}>
            <p className="text-sm text-fg">{b.label}</p>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Bar value={b.dps} tone="dps" />
              <Bar value={b.heal} tone="heal" />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex gap-6 text-xs text-subtle">
        <span className="inline-flex items-center gap-2">
          <i className="inline-block size-2 rounded-full bg-dps" /> DPS
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="inline-block size-2 rounded-full bg-heal" /> Healer
        </span>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/dps">Buka DPS</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/healer">Buka Healer</Link>
        </Button>
      </div>
    </main>
  );
}

function Bar({ value, tone }: { value: number; tone: "dps" | "heal" }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-raised">
      <div
        className={cn("h-full rounded-full", tone === "dps" ? "bg-dps" : "bg-heal")}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
