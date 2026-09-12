import type { Build } from "./types";

export const healerBuild: Build = {
  id: "healer",
  kicker: "Tipe 02 · Silkbind–Deluge",
  name: "Healer / Support",
  path: "Silkbind — Deluge",
  tagline:
    "Panacea Fan + Soulshade Umbrella. Satu-satunya pair healing murni di game. Revive, HoT, circle, dan payung yang mengikuti — PvE raid sampai guild war.",
  difficulty: "Mudah dipelajari, sulit dikuasai",
  overview:
    "Silkbind–Deluge adalah jalur healer sejati Where Winds Meet. Panacea Fan membawa burst heal, circle, dan Resurrection. Soulshade Umbrella memasang kanopi yang auto-heal, generate Dew, dan memberi buff damage tim. Tune yang sama dipakai PvE (dungeon, world boss, trial) dan PvP grup (5v5, prison break, guild). Damage personal rendah — itu harga yang benar. Kalau tim hidup, bos mati.",
  weapons: {
    primary: {
      name: "Panacea Fan",
      aka: "Kipas Panacea",
      role: "Heal utama + revive",
      why: "Cloudburst Healing (circle), Emerald Dewtouch (single-target + Dew), Light Dust After Morning Rain (burst / Resurrection). Ini alat yang membuat kamu healer, bukan DPS yang kebetulan bisa nge-heal.",
    },
    secondary: {
      name: "Soulshade Umbrella",
      aka: "Payung Soulshade",
      role: "Kanopi pasif, Dew, buff tim",
      why: "Echoes of a Thousand Plants meletakkan payung yang mengikuti dan auto-heal ally HP terendah puluhan detik. Floating Grace = buff damage ~15–20% + heal. Tanpa payung, Dew dan uptime heal ambruk.",
    },
  },
  strengths: [
    "Heal terbaik di game untuk konten grup",
    "Revive lewat Light Dust After Morning Rain",
    "Mobilitas tinggi, ranged, aman dari melee",
    "Buff damage tim (Floating Grace) — kamu bukan hanya kantong HP",
    "Sama kuat di PvE susah dan PvP grup",
  ],
  weaknesses: [
    "Damage personal rendah — solo clear lebih lambat",
    "Cooldown panjang, salah timing = wipe",
    "Resource Dew harus dikelola, bukan di-spam",
    "Bergantung posisi: di luar jangkauan = ally mati",
    "Squishy jika di-focus tanpa Golden Body / Serene",
  ],
  skills: {
    fan: [
      {
        name: "Riverside Inquiry",
        key: "Light",
        cd: "0,2s",
        summary:
          "Ranged 4-hit. Filler damage dan tumpuk Morale Chant. Bukan heal — jangan spam saat tim sekarat.",
      },
      {
        name: "Emerald Dewtouch",
        key: "Heavy",
        cd: "0,2s",
        summary:
          "Heal single-target, restore Dew (3 / 5 / 12 per hit). Tombol emergency ke ally terendah atau ke diri sendiri. Ini generator Dew aktif.",
      },
      {
        name: "Cloudburst Healing",
        key: "Martial / Q",
        cd: "20s",
        summary:
          "Circle heal 7 detik. Ally di dalam circle penuh dalam 2–3 detik pada gear bagus. Lempar ke stack tim, bukan ke kaki sendiri kalau DPS sedang di hitbox bos.",
      },
      {
        name: "Light Dust After Morning Rain",
        key: "~ Charged",
        cd: "14s",
        summary:
          "Makan ~60 Dew, HoT 6 detik ke diri dan ally HP terendah. Saat Dew penuh / Perception aktif, berubah jadi Resurrection — ini yang membedakan Fan dari healer palsu.",
      },
    ],
    umbrella: [
      {
        name: "Floating Grace",
        key: "Q / Martial",
        cd: "~60s",
        summary:
          "Buff damage tim (~15–20%) plus heal. Selalu pre-cast sebelum pull atau sebelum burst lawan di PvP. Jangan simpan sampai terlambat — CD panjang, value di depan.",
      },
      {
        name: "Echoes of a Thousand Plants",
        key: "~ / Special",
        summary:
          "Letakkan payung dekat grup. Mengikuti, auto-heal ally terendah 60+ detik, generate Dew. Ini uptime pasif. Recast sebelum habis, bukan setelah tim sudah jatuh.",
      },
      {
        name: "Unfading Bloom",
        key: "Special alt",
        summary:
          "Lempar payung yang lock ke HP terendah. Dengan Mending Loom / Silken Curse, cooldown special anjlok drastis dan heal mengenai kamu plus ally.",
      },
      {
        name: "Perception Burst",
        summary:
          "Saat Dew penuh (50% dengan Royal Remedy T4), Perception memicu burst heal massal. Tahan untuk setelah AoE bos, bukan untuk chip damage.",
      },
    ],
  },
  inner: [
    {
      name: "Morale Chant",
      slot: "Wajib · Slot 1",
      must: true,
      why: "Stack Yi River dari hit DAN heal. Naikkan penetration, damage, dan healing. Floating Grace dan Cloudburst jadi jauh lebih gemuk di 5 stack. Upgrade Inner Way ini lebih dulu daripada hampir semua yang lain.",
      tier: "Kejar tier tinggi segera",
      pve: true,
      pvp: true,
    },
    {
      name: "Royal Remedy",
      slot: "Wajib · Slot 2",
      must: true,
      why: "Inti Fan healer. +10% healing dari circle. T4: Perception hanya makan 50% Dew. T6: ally bisa resurrect kamu. Non-negotiable.",
      tier: "T4 dulu (Dew), T6 game-changing (rez balik)",
      pve: true,
      pvp: true,
    },
    {
      name: "Restoring Blossom",
      slot: "Inti · Slot 3",
      must: true,
      why: "Semua heal kamu lebih kuat tanpa syarat extra. Crit heal memberi Nurture: +2% healing received per stack (max 3). Pasif yang selalu on — cocok playstyle kita yang heal terus.",
      tier: "Pasang segera setelah Remedy T4",
      pve: true,
      pvp: true,
    },
    {
      name: "Mending Loom",
      slot: "Inti · Slot 4",
      must: true,
      why: "Mengubah Echoes of a Thousand Plants: restore Dew dan mengubah payung jadi mesin heal hampir pasif. Tanpa ini, Dew starve dan circle terasa kering.",
      tier: "Wajib 4-slot endgame",
      pve: true,
      pvp: true,
    },
  ],
  mystic: {
    pve: [
      {
        name: "Golden Body",
        cd: "45s · 40 Qi",
        summary:
          "Invuln ~8 detik + shield. Healer yang mati tidak bisa nge-heal. Pakai saat kamu di-target mechanic atau saat harus stand in fire untuk circle.",
      },
      {
        name: "Ghost Bind",
        summary:
          "Root / tarik pack. Kasih waktu DPS untuk stack, atau tahan add agar tidak makan DPS. Di dungeon ini value lebih tinggi daripada damage mystic.",
      },
      {
        name: "Talon Strike",
        summary:
          "Knockdown murah. Peel melee dari body kamu atau interrupt. Vitality rendah — jangan takut pakai.",
      },
      {
        name: "Ghostly Steps",
        summary:
          "Reposition. Keluar hitbox, ke stack, ke corpse untuk rez. Healer yang kaku posisi adalah healer yang wipe raid.",
      },
    ],
    pvp: [
      {
        name: "Serene Breeze",
        summary:
          "Wajib PvP. Break CC. Healer yang di-lock = tim tanpa heal. Tidak ada pengganti yang sah.",
      },
      {
        name: "Golden Body",
        summary:
          "Fortitude + invuln. Lawan akan dive kamu lebih dulu. Skill ini adalah 'tidak, kalian tidak dapat kill itu'.",
      },
      {
        name: "Ghostly Steps",
        summary:
          "Keluar dive, lewat wall-ish reposition, ke ally downed. Pasangan Evasive Charge jika kamu suka juke.",
      },
      {
        name: "Ghost Bind",
        summary:
          "Stop dive ke backline. Root peels lebih berharga daripada mystic damage di 5v5.",
      },
    ],
  },
  gear: [
    {
      name: "Rainwhisper",
      piece: "4-pc utama",
      two: "+40 Max HP",
      four: "Critical DMG dan healing +10%, tambahan +15% saat sedang shielded",
      why: "Payung dan Golden Body menjaga shield uptime. 4-pc nyala hampir terus. BiS bersama Eaglerise.",
      modes: ["pve", "pvp"],
      bis: true,
    },
    {
      name: "Eaglerise",
      piece: "Armor · 4-pc",
      two: "Survivability / DoT synergy",
      four: "Damage reduction saat DoT atau kondisi set terpenuhi — mudah aktif karena kamu heal dan apply terus",
      why: "Pasangan BiS dengan Rainwhisper. Memberi nyawa di raid dan di PvP tanpa mematikan healing.",
      modes: ["pve", "pvp"],
      bis: true,
    },
    {
      name: "Ivorybloom + Whirlsnow",
      piece: "Alternatif farm",
      two: "Ivorybloom: crit / heal window",
      four: "Whirlsnow: sustain",
      why: "Pakai sementara Eaglerise + Rainwhisper belum lengkap. Jangan stuck di sini kalau BiS sudah drop.",
      modes: ["pve", "pvp"],
      bis: false,
    },
    {
      name: "Calmwaters",
      piece: "Alternatif healer",
      two: "HP / healing",
      four: "Set healing yang direkomendasikan beberapa guide awal",
      why: "Valid jika roll substat jauh lebih bagus. Healing masih scale dari attack — jangan pilih set 'healer' yang roll-nya mati.",
      modes: ["pve"],
      bis: false,
    },
  ],
  stats: {
    pve: [
      {
        name: "External / Physical Attack",
        target: "Stat #1",
        weight: 100,
        note: "Healing scale dari attack power. Bukan 'healing power' murni di slot yang salah.",
      },
      {
        name: "Fan / Umbrella Healing Boost",
        target: "T0 di senjata",
        weight: 95,
        note: "All Weapon Boost setara. Ini roll yang dicari di kipas dan payung.",
      },
      {
        name: "Critical Rate",
        target: "≥ 40%",
        weight: 85,
        note: "Crit heal +50% HP. Restoring Blossom menumpuk Nurture dari crit. 40% adalah lantai nyaman.",
      },
      {
        name: "Min External Attack",
        target: "Konsistensi",
        weight: 72,
        note: "Heal yang tidak crit tetap harus gemuk. Min Attack = lantai heal.",
      },
      {
        name: "Max HP",
        target: "Cukup survive mechanic",
        weight: 60,
        note: "Healer mati = wipe. Tapi jangan op HP sampai heal kering.",
      },
      {
        name: "Affinity / Silkbind Attack",
        target: "Secondary",
        weight: 50,
        note: "Bagus, bukan prioritas di atas Crit dan Healing Boost.",
      },
    ],
    pvp: [
      {
        name: "Power",
        target: "Utama",
        weight: 100,
        note: "Scale heal dan poke. Jangan build full HP tanpa Power.",
      },
      {
        name: "Affinity Rate",
        target: "Tinggi",
        weight: 82,
        note: "Proc terasa di fight panjang 5v5.",
      },
      {
        name: "Silkbind Attack",
        target: "Roll senjata",
        weight: 78,
        note: "Kedua senjata Silkbind. Heal dan skill scale di sini.",
      },
      {
        name: "Max / Min Physical Attack",
        target: "Lantai + plafon heal",
        weight: 74,
        note: "Min Attack menjaga heal saat tidak crit di tengah chaos.",
      },
      {
        name: "Critical Rate",
        target: "40%+",
        weight: 68,
        note: "Crit heal menyelamatkan dive.",
      },
      {
        name: "Physical Penetration",
        target: "Setelah heal base",
        weight: 45,
        note: "Kamu bukan DPS. Ambil jika roll gratis, jangan kejar.",
      },
    ],
  },
  rotationTitle: {
    pve: "Setup kanopi → circle → Dew → perception / rez",
    pvp: "Prebuff → payung di badan → peel → rez",
  },
  rotation: {
    pve: [
      {
        action: "Floating Grace",
        weapon: "umbrella",
        note: "Pre-pull. Buff damage tim + heal awal. CD panjang — jangan ditahan.",
      },
      {
        action: "Echoes of a Thousand Plants",
        weapon: "umbrella",
        note: "Payung di stack. Auto-heal + Dew. Recast sebelum habis.",
      },
      {
        action: "Swap Fan → Cloudburst Healing",
        weapon: "fan",
        note: "Circle di bawah kaki tim, bukan di hitbox kosong. 7 detik sustain.",
      },
      {
        action: "Emerald Dewtouch ke HP terendah",
        weapon: "fan",
        note: "Single-target + generate Dew. Ini filler yang benar, bukan light attack spam.",
      },
      {
        action: "Light Dust After Morning Rain",
        weapon: "fan",
        note: "Makan Dew, HoT ke kamu dan ally terendah. Simpan jika rez sebentar lagi dibutuhkan.",
      },
      {
        action: "Perception burst (Dew penuh / 50%)",
        weapon: "fan",
        note: "Setelah AoE bos, bukan untuk chip. Royal Remedy T4 membuat ini lebih sering.",
      },
      {
        action: "Golden Body / Ghost Bind sesuai mechanic",
        weapon: "mystic",
        note: "Body jika kamu harus hidup. Bind jika add harus berhenti. Ghostly Steps ke corpse.",
      },
    ],
    pvp: [
      {
        action: "Floating Grace di buka fight",
        weapon: "umbrella",
        note: "Cover burst awal lawan dan naikkan damage tim. Selalu pertama.",
      },
      {
        action: "Echoes of a Thousand Plants di badanmu",
        weapon: "umbrella",
        note: "Kanopi mengikuti. Heal kamu + ally dekat. Jangan taruh jauh di depan.",
      },
      {
        action: "Cloudburst Healing di clump",
        weapon: "fan",
        note: "Circle memenangkan fight yang stack. Jangan buang ke 1 orang yang sudah kite.",
      },
      {
        action: "Emerald Dewtouch pada dive target",
        weapon: "fan",
        note: "Healer, carry, atau dirimu. Dew ikut terisi.",
      },
      {
        action: "Light Dust → Resurrection",
        weapon: "fan",
        note: "Inilah kenapa Fan dibawa. Rez di cover Golden Body / Serene, bukan di tengah whirlwind.",
      },
      {
        action: "Serene Breeze → Ghostly Steps",
        weapon: "mystic",
        note: "Break CC, keluar dive, pasang circle lagi. Healer yang panik spam light attack adalah healer yang kalah.",
      },
    ],
  },
  tips: {
    pve: [
      "Pre-heal sebelum damage yang bisa ditebak. Circle yang dipasang 1 detik terlalu telat = DPS floor.",
      "Dew: natural regen 60/30s, Umbrella E 60/18s, swap weapon mempercepat. Rotasi advanced: swap Umbrella → E cancel → swap Fan menghasilkan Dew beruntun.",
      "Jangan overheal full HP. Simpan Perception dan Morning Rain untuk spike.",
      "Posisi mid-range: lihat semua HP bar, line of sight ke stack, cukup dekat untuk circle.",
      "Royal Remedy T4 mengubah Dew economy. Ini upgrade yang terasa dalam satu raid.",
      "Kalau solo story, pair satu senjata heal dengan senjata DPS (Nameless Sword) — pair ganda heal lambat untuk open world.",
      "Mending Loom membuat Echoes hampir pasif. Jika terasa 'kering', Inner Way ini yang hilang.",
    ],
    pvp: [
      "Kamu backline. Dead healer = lost fight. Golden Body dan Serene Breeze lebih berharga daripada satu poke.",
      "Floating Grace di countdown, bukan setelah teman sudah 30%.",
      "Rez hanya saat aman. Rez di tengah CC chain = double kill untuk lawan.",
      "Payung di badanmu, bukan di frontliner yang dive 30 meter.",
      "Soaring Spin lawan (anti-heal −60%) adalah ancamanmu. Serene + reposition, jangan stand and heal ke dalam anti-heal.",
      "5v5 / guild / prison break adalah habitat. 1v1 arena: kamu kalah damage — jangan antri duel.",
      "Track HP terendah, bukan HP rata-rata. Satu carry hidup lebih berharga daripada chip semua orang.",
    ],
  },
  mistakes: [
    "Spam heal ke full HP sampai Dew kosong saat spike datang.",
    "Lupa Floating Grace pre-pull / pre-fight.",
    "Rez di tempat terbuka tanpa Golden Body.",
    "Berdiri max-range sampai circle dan Dewtouch whiff.",
    "Skip Serene Breeze di PvP.",
    "Main solo open world dengan dua senjata heal, lalu mengeluh damage.",
    "Tidak recast Echoes — kanopi mati, Dew mati, tim mati.",
  ],
  attunement: [
    {
      slot: "Weapon",
      pve: "Healing Boost / All Weapon Boost",
      pvp: "Healing Boost; secondary Vitality on execution jika sering peel",
    },
    {
      slot: "Disc / Pendant",
      pve: "Silkbind Attack / Crit",
      pvp: "Cooldown / Tenacity — kamu harus tetap bisa cast saat di-tekan",
    },
    {
      slot: "Helm / Chest",
      pve: "HP + External Defense",
      pvp: "Damage taken saat stagger / control resist",
    },
    {
      slot: "Greaves",
      pve: "HP",
      pvp: "Dodge: recover Endurance, dodge gratis 2 detik",
    },
    {
      slot: "Bracer",
      pve: "HP / Defense",
      pvp: "Deflect restore Qi — jaga mystic siap",
    },
  ],
  upgrade: [
    "Unlock Panacea Fan (Jadewood Court / Kaifeng questline) dan Soulshade Umbrella.",
    "Morale Chant ke tier tinggi — berlaku ke heal dan buff.",
    "Royal Remedy T4 (Perception 50% Dew), lalu T6 (ally rez kamu).",
    "Restoring Blossom — semua heal naik.",
    "Mending Loom — Echoes menjadi mesin Dew.",
    "Rainwhisper 4-pc, lalu Eaglerise. Ivorybloom+Whirlsnow sementara.",
    "Crit Rate 40%+ dan Healing Boost di kedua senjata.",
    "Latihan Dew cycle: swap → umbrella special → Fan circle tanpa panic spam.",
  ],
  resource: {
    name: "Dew (Embun)",
    how: "Bahan bakar heal besar. Terisi dari Dewtouch, payung Echoes, regen alami (~60 per 30 detik), dan weapon swap. Light Dust makan ~60 Dew. Perception butuh Dew penuh — atau 50% dengan Royal Remedy T4. Jangan cap 100% terlalu lama (overcap = buang burst). Jangan kosong saat mechanic besar. Advanced: swap ke Umbrella, E cancel, swap Fan, lalu Q+E Umbrella menghasilkan ~90 Dew beruntun dalam ~4 detik.",
  },
};
