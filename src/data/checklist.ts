import type { Role } from "./types";

export type CheckItem = {
  id: string;
  build: Role | "both";
  group: string;
  label: string;
  hint: string;
};

export const checklistItems: CheckItem[] = [
  {
    id: "dps-fan",
    build: "dps",
    group: "Senjata",
    label: "Inkwell Fan terbuka",
    hint: "Path Silkbind–Jade. Setup, Jadewind Shield, Lingering Bone.",
  },
  {
    id: "dps-umb",
    build: "dps",
    group: "Senjata",
    label: "Vernal Umbrella terbuka",
    hint: "Mesin DPS. Spring Sorrow, Spring Away, drone.",
  },
  {
    id: "dps-bb",
    build: "dps",
    group: "Inner Way",
    label: "Blossom Barrage T4 (kejar T6)",
    hint: "Inner Way nomor satu. Extra charge Spring Sorrow + Combo +10%.",
  },
  {
    id: "dps-mc",
    build: "dps",
    group: "Inner Way",
    label: "Morale Chant T5+",
    hint: "Stack Yi River. Damage dan pen.",
  },
  {
    id: "dps-sr",
    build: "dps",
    group: "Inner Way",
    label: "Star Reacher T3",
    hint: "Wajib untuk bos. Lingering Bone tetap kasih ATK bonus.",
  },
  {
    id: "dps-tb",
    build: "dps",
    group: "Inner Way",
    label: "Thunderous Bloom (PvE) / Trapped Beast (PvP)",
    hint: "Slot 4. Jangan bawa PvE inner ke arena.",
  },
  {
    id: "dps-set-w",
    build: "dps",
    group: "Gear",
    label: "Mistwillow 4-pc",
    hint: "Light/Heavy saling buff +12% selama 10 detik.",
  },
  {
    id: "dps-set-a",
    build: "dps",
    group: "Gear",
    label: "Flawless Defense 4-pc (PvE) atau Beyond the Chill (PvP)",
    hint: "Nyawa untuk glass cannon.",
  },
  {
    id: "dps-crit",
    build: "dps",
    group: "Tune",
    label: "Critical Rate ≥ 60%",
    hint: "Ideal ~75% jika mengejar Hawkwing.",
  },
  {
    id: "dps-prec",
    build: "dps",
    group: "Tune",
    label: "Precision mendekati cap",
    hint: "Supaya Max Attack bukan Min Attack yang bekerja.",
  },
  {
    id: "dps-rot",
    build: "dps",
    group: "Latihan",
    label: "Swap Fan↔Umbrella tanpa jeda, Jadewind tidak di-spam",
    hint: "Delay swap adalah DPS leak terbesar.",
  },
  {
    id: "heal-fan",
    build: "healer",
    group: "Senjata",
    label: "Panacea Fan terbuka",
    hint: "Questline Jadewood Court / Kaifeng. Heal + revive.",
  },
  {
    id: "heal-umb",
    build: "healer",
    group: "Senjata",
    label: "Soulshade Umbrella terbuka",
    hint: "Kanopi, Dew, Floating Grace.",
  },
  {
    id: "heal-mc",
    build: "healer",
    group: "Inner Way",
    label: "Morale Chant tier tinggi",
    hint: "Naik dari hit dan heal. Buff Floating Grace.",
  },
  {
    id: "heal-rr",
    build: "healer",
    group: "Inner Way",
    label: "Royal Remedy T4 (T6 kalau bisa)",
    hint: "T4 = Perception 50% Dew. T6 = ally rez kamu.",
  },
  {
    id: "heal-rb",
    build: "healer",
    group: "Inner Way",
    label: "Restoring Blossom",
    hint: "Semua heal lebih kuat. Nurture dari crit heal.",
  },
  {
    id: "heal-ml",
    build: "healer",
    group: "Inner Way",
    label: "Mending Loom",
    hint: "Echoes of a Thousand Plants jadi mesin Dew.",
  },
  {
    id: "heal-set",
    build: "healer",
    group: "Gear",
    label: "Rainwhisper + Eaglerise (Ivorybloom sementara)",
    hint: "Healing + shield synergy. Jangan stuck di set farm.",
  },
  {
    id: "heal-crit",
    build: "healer",
    group: "Tune",
    label: "Crit Rate ≥ 40% + Healing Boost di senjata",
    hint: "Heal scale attack. Crit heal +50%.",
  },
  {
    id: "heal-dew",
    build: "healer",
    group: "Latihan",
    label: "Dew cycle: swap → Echoes → circle tanpa panic spam",
    hint: "Overcap Dew = buang Perception. Kosong = wipe.",
  },
  {
    id: "heal-rez",
    build: "healer",
    group: "Latihan",
    label: "Rez di cover (Golden Body / Serene), bukan di whirlwind",
    hint: "Rez terbuka = double kill.",
  },
  {
    id: "both-serene",
    build: "both",
    group: "PvP",
    label: "Serene Breeze di loadout PvP",
    hint: "Wajib untuk DPS dan healer. Skip = inting.",
  },
  {
    id: "both-mode",
    build: "both",
    group: "PvP",
    label: "Loadout PvE dan PvP dipisah (Inner Way slot 4 + mystic)",
    hint: "Thunderous Bloom bukan Serene Breeze. Jangan lupa ganti.",
  },
];
