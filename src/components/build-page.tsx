import { useMemo, useState } from "react";
import { FanMark, UmbrellaMark } from "@/components/marks";
import { ModeToggle } from "@/components/mode-toggle";
import { RotationPlayer } from "@/components/rotation-player";
import { cn } from "@/lib/utils";
import type { Build, Mode } from "@/data/types";

const CHAPTERS = [
  { id: "ringkasan", n: "01", label: "Ringkasan" },
  { id: "senjata", n: "02", label: "Senjata" },
  { id: "inner", n: "03", label: "Inner Way" },
  { id: "mystic", n: "04", label: "Mystic" },
  { id: "gear", n: "05", label: "Gear" },
  { id: "tune", n: "06", label: "Tune" },
  { id: "rotasi", n: "07", label: "Rotasi" },
  { id: "tips", n: "08", label: "Tips" },
] as const;

function ChapterHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 flex items-end gap-4">
      <span className="font-mono text-xs tabular-nums text-subtle">{n}</span>
      <h2 className="font-display text-3xl tracking-display">{title}</h2>
    </div>
  );
}

export function BuildPage({ build }: { build: Build }) {
  const [mode, setMode] = useState<Mode>("pve");
  const isDps = build.id === "dps";
  const mystic = mode === "pve" ? build.mystic.pve : build.mystic.pvp;
  const stats = mode === "pve" ? build.stats.pve : build.stats.pvp;
  const rotation = mode === "pve" ? build.rotation.pve : build.rotation.pvp;
  const tips = mode === "pve" ? build.tips.pve : build.tips.pvp;
  const gear = useMemo(
    () => build.gear.filter((g) => g.modes.includes(mode)),
    [build.gear, mode],
  );
  const inner = useMemo(
    () =>
      build.inner.filter((iw) => (mode === "pve" ? iw.pve : iw.pvp)),
    [build.inner, mode],
  );

  return (
    <article className="pb-20 pt-8 sm:pt-12">
      <header className="max-w-3xl">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-subtle">
            {build.kicker}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-display text-fg">
            {build.name}
          </h1>
          <p className="mt-1 font-display text-xl italic text-muted">
            {build.path}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {build.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ModeToggle value={mode} onChange={setMode} />
            <span className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
              {mode === "pve" ? "Raid · dungeon · bos" : "Arena · 5v5 · guild"}
            </span>
            <span className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
              {build.difficulty}
            </span>
          </div>
        </div>
      </header>

      <nav
        aria-label="Bab"
        className="sticky top-14 z-30 -mx-4 mt-10 overflow-x-auto border-y border-line bg-bg/90 px-4 backdrop-blur-md sm:-mx-0 sm:px-0 md:top-16"
      >
        <ul className="flex min-w-max gap-1 py-2">
          {CHAPTERS.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-3 text-sm text-muted no-underline hover:text-fg"
              >
                <span className="font-mono text-[10px] text-subtle">{c.n}</span>
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="ringkasan" className="scroll-mt-32 pt-12">
        <ChapterHead n="01" title="Ringkasan" />
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          {build.overview}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
              Kelebihan
            </p>
            <ul className="mt-3 space-y-2">
              {build.strengths.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-fg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
              Kekurangan
            </p>
            <ul className="mt-3 space-y-2">
              {build.weaknesses.map((s) => (
                <li key={s} className="text-sm leading-relaxed text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-[var(--radius-lg)] border border-line bg-raised p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
            Resource · {build.resource.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {build.resource.how}
          </p>
        </div>
      </section>

      <section id="senjata" className="scroll-mt-32 pt-14">
        <ChapterHead n="02" title="Senjata & skill" />
        <div className="grid gap-4 lg:grid-cols-2">
          <WeaponCol
            mark="fan"
            weapon={build.weapons.secondary}
            skills={build.skills.fan}
          />
          <WeaponCol
            mark="umbrella"
            weapon={build.weapons.primary}
            skills={build.skills.umbrella}
          />
        </div>
      </section>

      <section id="inner" className="scroll-mt-32 pt-14">
        <ChapterHead n="03" title="Inner Way" />
        <p className="mb-6 max-w-2xl text-sm text-muted">
          Empat slot. Urutan di bawah adalah prioritas upgrade untuk mode{" "}
          {mode === "pve" ? "PvE" : "PvP"}.
        </p>
        <ol className="space-y-3">
          {inner.map((iw) => (
            <li
              key={iw.name}
              className="rounded-[var(--radius-lg)] border border-line bg-surface p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl tracking-display">
                  {iw.name}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.16em] text-subtle">
                  {iw.slot}
                  {iw.must ? " · wajib" : ""}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{iw.why}</p>
              <p className="mt-3 font-mono text-xs text-accent">{iw.tier}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="mystic" className="scroll-mt-32 pt-14">
        <ChapterHead n="04" title={`Mystic Arts · ${mode === "pve" ? "PvE" : "PvP"}`} />
        <div className="grid gap-3 sm:grid-cols-2">
          {mystic.map((s) => (
            <article
              key={s.name}
              className="rounded-[var(--radius-lg)] border border-line bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg tracking-display">{s.name}</h3>
                {s.cd ? (
                  <span className="font-mono text-[11px] text-subtle">{s.cd}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gear" className="scroll-mt-32 pt-14">
        <ChapterHead n="05" title="Set gear" />
        <div className="space-y-3">
          {gear.map((g) => (
            <article
              key={g.name}
              className="rounded-[var(--radius-lg)] border border-line bg-surface p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl tracking-display">{g.name}</h3>
                <span className="text-[11px] uppercase tracking-[0.16em] text-subtle">
                  {g.bis ? "BiS · " : "Alt · "}
                  {g.piece}
                </span>
              </div>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-subtle">2-pc</dt>
                  <dd className="mt-1 text-muted">{g.two}</dd>
                </div>
                <div>
                  <dt className="text-xs text-subtle">4-pc</dt>
                  <dd className="mt-1 text-muted">{g.four}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-fg">{g.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tune" className="scroll-mt-32 pt-14">
        <ChapterHead n="06" title={`Prioritas tune · ${mode === "pve" ? "PvE" : "PvP"}`} />
        <ul className="space-y-4">
          {stats.map((s) => (
            <li key={s.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm text-fg">{s.name}</span>
                <span className="font-mono text-xs text-muted">{s.target}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-raised">
                <div
                  className={cn(
                    "h-full rounded-full",
                    isDps ? "bg-dps" : "bg-heal",
                  )}
                  style={{ width: `${s.weight}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs text-subtle">{s.note}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 font-display text-xl tracking-display">
          Attunement
        </h3>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-lg)] border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-raised text-xs uppercase tracking-[0.12em] text-subtle">
              <tr>
                <th className="px-4 py-3 font-medium">Slot</th>
                <th className="px-4 py-3 font-medium">PvE</th>
                <th className="px-4 py-3 font-medium">PvP</th>
              </tr>
            </thead>
            <tbody>
              {build.attunement.map((a) => (
                <tr key={a.slot} className="border-t border-line">
                  <td className="px-4 py-3 text-fg">{a.slot}</td>
                  <td className="px-4 py-3 text-muted">{a.pve}</td>
                  <td className="px-4 py-3 text-muted">{a.pvp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 font-display text-xl tracking-display">
          Urutan upgrade
        </h3>
        <ol className="mt-4 space-y-2">
          {build.upgrade.map((u, idx) => (
            <li key={u} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="font-mono text-xs tabular-nums text-subtle">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {u}
            </li>
          ))}
        </ol>
      </section>

      <section id="rotasi" className="scroll-mt-32 pt-14">
        <ChapterHead n="07" title="Rotasi" />
        <RotationPlayer
          steps={rotation}
          title={mode === "pve" ? build.rotationTitle.pve : build.rotationTitle.pvp}
        />
      </section>

      <section id="tips" className="scroll-mt-32 pt-14">
        <ChapterHead n="08" title={mode === "pve" ? "Tips PvE" : "Tips PvP"} />
        <ul className="space-y-3">
          {tips.map((t) => (
            <li
              key={t}
              className="border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        <h3 className="mt-10 font-display text-xl tracking-display">
          Kesalahan yang sering terjadi
        </h3>
        <ul className="mt-4 space-y-2">
          {build.mistakes.map((m) => (
            <li key={m} className="text-sm leading-relaxed text-danger">
              {m}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function WeaponCol({
  mark,
  weapon,
  skills,
}: {
  mark: "fan" | "umbrella";
  weapon: Build["weapons"]["primary"];
  skills: Build["skills"]["fan"];
}) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
            {weapon.role}
          </p>
          <h3 className="mt-1 font-display text-2xl tracking-display">
            {weapon.name}
          </h3>
          <p className="text-sm italic text-muted">{weapon.aka}</p>
        </div>
        <div className="size-14 shrink-0 text-muted">
          {mark === "fan" ? <FanMark /> : <UmbrellaMark />}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{weapon.why}</p>
      <ul className="mt-6 space-y-4 border-t border-line pt-5">
        {skills.map((s) => (
          <li key={s.name}>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm text-fg">{s.name}</span>
              {s.key ? (
                <span className="rounded-[var(--radius-xs)] border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">
                  {s.key}
                </span>
              ) : null}
              {s.cd ? (
                <span className="font-mono text-[10px] text-subtle">{s.cd}</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
