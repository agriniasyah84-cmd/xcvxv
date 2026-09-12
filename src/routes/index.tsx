import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { FanMark, UmbrellaMark } from "@/components/marks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
});

const Q = [
  {
    id: "content",
    q: "Kamu lebih sering main apa?",
    opts: [
      { id: "raid", label: "Raid, dungeon, bos dunia" },
      { id: "arena", label: "Arena, 5v5, perang guild" },
      { id: "mix", label: "Campuran, tergantung hari" },
    ],
  },
  {
    id: "need",
    q: "Tim (atau kamu) butuh apa?",
    opts: [
      { id: "dmg", label: "Angka damage, parse tinggi" },
      { id: "heal", label: "Tim tidak boleh jatuh, ada revive" },
      { id: "hyb", label: "Tekan dari belakang, tetap bisa nge-heal" },
    ],
  },
  {
    id: "skill",
    q: "Seberapa rumit rotasi yang kamu mau?",
    opts: [
      { id: "easy", label: "Santai, prioritas hidup" },
      { id: "mid", label: "Ada mekanik, masih nyaman" },
      { id: "hard", label: "Kompleks tidak apa, asalkan DPS" },
    ],
  },
] as const;

type Answers = Record<string, string>;

function recommend(a: Answers) {
  const healScore =
    (a.need === "heal" ? 3 : a.need === "hyb" ? 1 : 0) +
    (a.skill === "easy" ? 2 : a.skill === "mid" ? 1 : 0);
  const role = healScore >= 3 ? "healer" : "dps";
  const mode = a.content === "arena" ? "PvP" : a.content === "raid" ? "PvE" : "PvE + PvP";
  if (role === "healer") {
    return {
      to: "/healer" as const,
      title: "Healer · Silkbind–Deluge",
      weapons: "Panacea Fan + Soulshade Umbrella",
      mode,
      blurb:
        "Kamu butuh tim hidup. Fan membawa circle dan revive, payung membawa kanopi dan Dew. Mode PvP tetap pakai pair ini — ganti mystic ke Serene Breeze.",
    };
  }
  return {
    to: "/dps" as const,
    title: "DPS · Silkbind–Jade",
    weapons: "Inkwell Fan + Vernal Umbrella",
    mode,
    blurb:
      "Jalur ranged S-tier. Fan memasang dinding dan Lingering Bone, payung mengeksekusi. Di PvP, skill yang sama menekan dari jarak — jangan lupa Serene Breeze.",
  };
}

function Home() {
  const [answers, setAnswers] = useState<Answers>({});
  const step = Q.find((q) => !answers[q.id]) ?? null;
  const rec = useMemo(
    () => (Object.keys(answers).length === Q.length ? recommend(answers) : null),
    [answers],
  );

  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-line pb-16 pt-12 sm:pt-16">
        <p className="text-[11px] uppercase tracking-[0.28em] text-subtle">
          Where Winds Meet · Meta 1.7
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-display sm:text-5xl">
          Fan + Umbrella.
          <span className="mt-2 block italic text-muted">
            Panduan tune lengkap, dua jalur.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          Satu aliran Silkbind, dua pekerjaan. DPS Silkbind–Jade merobek dari
          udara. Healer Silkbind–Deluge menahan tim tetap berdiri. Keduanya
          dipakai di PvE dan PvP — yang berubah Inner Way slot 4, mystic, dan
          attunement.
        </p>
      </section>

      <section className="grid gap-4 pt-10 lg:grid-cols-2">
        <PathCard
          to="/dps"
          kicker="Tipe 01"
          title="DPS jarak"
          path="Silkbind–Jade"
          weapons="Inkwell Fan · Vernal Umbrella"
          points={[
            "S-tier PvE setelah Lingering Bone",
            "Jadewind Shield + Spring Sorrow + drone",
            "PvP: space control, anti-heal, kite",
          ]}
          mark="fan"
        />
        <PathCard
          to="/healer"
          kicker="Tipe 02"
          title="Healer / support"
          path="Silkbind–Deluge"
          weapons="Panacea Fan · Soulshade Umbrella"
          points={[
            "Satu-satunya pair heal murni",
            "Revive, circle, kanopi, Dew",
            "PvP grup: backline yang tidak boleh mati",
          ]}
          mark="umb"
        />
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-subtle">
            Kenapa pair ini
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-display">
            Dua senjata, satu napas.
          </h2>
          <div className="mt-8 space-y-8">
            <Note
              n="01"
              title="Path yang benar-benar nyambung"
              body="Fan dan payung berbagi Silkbind. Swap tidak memecah identity — Jade ke DPS projectile, Deluge ke heal. Resource-nya berbeda: Blossom untuk drone, Dew untuk burst heal."
            />
            <Note
              n="02"
              title="Satu tune, dua mode"
              body="Jangan bikin karakter kedua. Loadout PvE dan PvP hampir sama. Yang wajib diganti: mystic (Serene Breeze di arena), Inner Way slot 4, attunement disc/pendant."
            />
            <Note
              n="03"
              title="Yang sering salah"
              body="DPS yang spam kedua charge Jadewind Shield. Healer yang overheal sampai Dew kosong saat spike. Keduanya dijabarkan di bab rotasi dan kesalahan."
            />
          </div>
        </div>

        <aside className="h-fit rounded-[var(--radius-xl)] border border-line bg-surface p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-subtle">
            Cari jalurmu
          </p>
          <h2 className="mt-2 font-display text-2xl tracking-display">
            Tiga pertanyaan.
          </h2>

          {step ? (
            <div className="mt-5">
              <p className="text-sm text-fg">{step.q}</p>
              <div className="mt-3 flex flex-col gap-2">
                {step.opts.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setAnswers((s) => ({ ...s, [step.id]: o.id }))}
                    className="h-auto min-h-11 rounded-[var(--radius-md)] border border-line px-3 py-2.5 text-left text-sm text-muted hover:border-line-strong hover:text-fg"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              <p className="mt-4 font-mono text-[11px] text-subtle">
                {Object.keys(answers).length + 1} / {Q.length}
              </p>
            </div>
          ) : rec ? (
            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                {rec.mode}
              </p>
              <p className="mt-2 font-display text-xl tracking-display">
                {rec.title}
              </p>
              <p className="mt-1 text-xs text-muted">{rec.weapons}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{rec.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild>
                  <Link to={rec.to}>
                    Buka panduan
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setAnswers({})}
                  type="button"
                >
                  Ulang
                </Button>
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </main>
  );
}

function PathCard({
  to,
  kicker,
  title,
  path,
  weapons,
  points,
  mark,
}: {
  to: "/dps" | "/healer";
  kicker: string;
  title: string;
  path: string;
  weapons: string;
  points: string[];
  mark: "fan" | "umb";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex flex-col rounded-[var(--radius-xl)] border border-line bg-surface p-6 no-underline transition-[border-color] duration-200 hover:border-line-strong sm:p-8",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-subtle">
            {kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-display text-fg">
            {title}
          </h2>
          <p className="mt-1 text-sm italic text-muted">{path}</p>
        </div>
        <div className="size-16 shrink-0 text-muted">
          {mark === "fan" ? <FanMark /> : <UmbrellaMark />}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">{weapons}</p>
      <ul className="mt-6 flex-1 space-y-2">
        {points.map((p) => (
          <li key={p} className="text-sm leading-relaxed text-fg/90">
            {p}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-flex items-center gap-2 text-sm text-accent">
        Buka tune
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function Note({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-4">
      <span className="font-mono text-xs tabular-nums text-subtle">{n}</span>
      <div>
        <h3 className="font-display text-xl tracking-display">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}
