import type { Build } from "./types";

export const dpsBuild: Build = {
  id: "dps",
  kicker: "Tipe 01 · Silkbind–Jade",
  name: "DPS Jarak",
  path: "Silkbind — Jade",
  tagline:
    "Inkwell Fan + Vernal Umbrella. Mage-nya Where Winds Meet: tembak dari udara, jaga jarak, dan pecahkan jendela damage saat Qi Break.",
  difficulty: "Menengah–tinggi",
  overview:
    "Ini tune DPS Fan + Payung terbaik untuk PvE dan PvP. Inkwell Fan membuka jendela (Jadewind Shield, Lingering Bone, launch), Vernal Umbrella yang mengeksekusi (Spring Sorrow, Spring Away, drone Unfading Flower). Path-nya sama: Silkbind–Jade, projectile murni. Setelah patch Lingering Bone dan buff Blossom Barrage, pairing ini naik ke S-tier raid dan tetap menekan di arena karena range, CC, dan anti-heal Soaring Spin.",
  weapons: {
    primary: {
      name: "Vernal Umbrella",
      aka: "Payung Musim Semi",
      role: "Mesin damage",
      why: "Spring Sorrow menandai target, Spring Away adalah charged light beruntun, Unfading Flower melepaskan drone yang terus menembak saat kamu swap kembali ke Fan.",
    },
    secondary: {
      name: "Inkwell Fan",
      aka: "Kipas Tinta",
      role: "Setup, buff, CC",
      why: "Jadewind Shield adalah dinding + buff damage projectile. Peak's Springless Silence melempar musuh dan menempelkan Lingering Bone. Tanpa Fan, Umbrella kehilangan jendela burst.",
    },
  },
  strengths: [
    "DPS raid S-tier jika buff dan drone terjaga",
    "Full ranged — jarang perlu masuk melee",
    "CC kuat: stun, airborne, dinding Jadewind",
    "Sama sekali viable di PvP grup (guild, 5v5, hutan)",
    "Hit frequency tinggi, Affinity dan Crit terasa sekali",
  ],
  weaknesses: [
    "Squishy kalau ketutup jarak",
    "Rotasi kompleks, DPS anjlok jika buff drop",
    "Spring Sorrow tidak immobilize bos",
    "Bergantung Qi Break dan timing drone",
    "1v1 arena lebih lemah daripada grup PvP",
  ],
  skills: {
    fan: [
      {
        name: "Jadewind Shield",
        key: "Q",
        cd: "Charge ×2",
        summary:
          "Melempar dinding angin yang memblokir projectile dan banyak gap-close. Memberi buff damage ranged. Jangan spam kedua charge — simpan satu untuk jendela berikutnya. Saat dipakai, kamu juga mendapat i-frame pendek.",
      },
      {
        name: "Peak's Springless Silence",
        key: "Special",
        summary:
          "Lunge, melempar target ke udara, dan menempelkan Lingering Bone. Di PvE ini membuka Moon Shatter Spring (+45% ke non-player). Di PvP ini adalah CC utama untuk cash-out Spring Away.",
      },
      {
        name: "Moon Shatter Spring",
        summary:
          "Follow-up airborne. Damage besar ke target yang sedang di udara atau bertanda Lingering Bone. Jangan buang di ground combat.",
      },
      {
        name: "Charged Tornado / Heavy",
        summary:
          "Angkat pack, masuk air combo tanpa charge penuh (tekan R). Di sela cooldown Umbrella, light Fan menumpuk Morale Chant.",
      },
    ],
    umbrella: [
      {
        name: "Spring Sorrow",
        key: "Q",
        cd: "2 stack",
        summary:
          "Proyektil jarak jauh. Stun trash, menandai target. Dengan Blossom Barrage, target kena Combo: +10% damage dari ballistic kamu (Let Spring Go, Everbloom, Light, Spring Away) selama ~10 detik. Ini debuff yang wajib hidup terus.",
      },
      {
        name: "Spring Away",
        key: "Hold Light",
        summary:
          "Charged light beruntun — damage single-target utama saat Jadewind dan Combo aktif. Jaga mid-range, jangan max-range (banyak hit whiff).",
      },
      {
        name: "Unfading Flower / Everbloom",
        key: "~ / Special",
        summary:
          "Saat Blossom penuh, lepaskan payung ke udara. Drone menembak target terdekat secara pasif. Swap ke Fan dan lanjut DPS — ini uptime gratis yang membedakan parse bagus dan biasa.",
      },
      {
        name: "Charged Light Float",
        summary:
          "Tahan light di udara, makan endurance. Menghindari melee trash. Bos tetap bisa hit. Jangan habiskan endurance sebelum mechanic.",
      },
    ],
  },
  inner: [
    {
      name: "Blossom Barrage",
      slot: "Wajib · Slot 1",
      must: true,
      why: "Spring Sorrow jadi 2 stack (T6 hingga 3). Tiap hit memasang Combo +10% ballistic. T4 mempercepat cast Umbrella Q ~30%. Ini Inner Way nomor satu — naikkan T6 dulu.",
      tier: "T4 minimum, T6 prioritas absolut",
      pve: true,
      pvp: true,
    },
    {
      name: "Morale Chant",
      slot: "Wajib · Slot 2",
      must: true,
      why: "Tiap hit/heal: +1 Yi River (pen +2, damage/heal +1%, max 5, 12 detik). Proc tiap 2 detik. Rotation kita hit terus — stack hampir tidak pernah drop.",
      tier: "T5+ untuk bonus Physical Attack",
      pve: true,
      pvp: true,
    },
    {
      name: "Star Reacher",
      slot: "Inti · Slot 3",
      must: true,
      why: "Setelah Lingering Bone: +5% Physical Attack 8 detik. Airborne: +10%. T3 berlaku di bos (yang tidak bisa di-launch). Peak's Springless Silence adalah tombolnya.",
      tier: "T3 wajib untuk bos",
      pve: true,
      pvp: true,
    },
    {
      name: "Thunderous Bloom",
      slot: "PvE · Slot 4",
      must: false,
      why: "Setelah Martial Art Skill: 3 stack Spring Thunder, hit berikutnya +15% HP damage. Cocok karena kita spam Q, Heavy, Pursuit, Light, dan ballistic. Ganti Breaking Point jika kamu konsisten Perfect Dodge.",
      tier: "Pasca 1.7 ini rekomendasi umum",
      pve: true,
      pvp: false,
      pvpSwap: "Trapped Beast atau Bitter Seasons",
    },
    {
      name: "Trapped Beast",
      slot: "PvP · Slot 4",
      must: false,
      why: "Glass-cannon PvP. Bertahan dan membalas saat tertekan. Alternatif: Bitter Seasons (racun, turunkan Physical Defense — bagus fight panjang) atau Flying Gourds (extra charge Springless Silence).",
      tier: "Situasional, sesuaikan matchup",
      pve: false,
      pvp: true,
    },
  ],
  mystic: {
    pve: [
      {
        name: "Flute of the Tides",
        summary:
          "Opener. Flute mengikuti 12,5 detik, ripple AoE beruntun. Pasang sebelum loop utama supaya damage jalan sendiri saat kamu setup Emerald Barrier dan Spring Sorrow.",
      },
      {
        name: "Soaring Spin",
        summary:
          "Dua hit cepat, path damage, −60% healing received 5 detik. Masuk rotasi utama, ada dodge window untuk Breaking Point. Wajib bawa ke PvP juga.",
      },
      {
        name: "Leaping Toad",
        summary:
          "Knockback, Toad Venom, cast ketiga Golden Toad Crash. Memperpanjang combo dan reposition. Buang dari rotasi jika jendela bos terlalu pendek.",
      },
      {
        name: "Drunken Poet",
        summary:
          "Burst di Qi Break. Intoxicated 30 detik, hingga 5 strike. Pasangkan Dragon's Breath jika ada waktu — tapi jangan paksakan; animasi panjang bisa rugi DPS dibanding weapon skill.",
      },
    ],
    pvp: [
      {
        name: "Serene Breeze",
        summary:
          "Wajib. Break CC instan, keluar combo, reset fight. Skip skill ini di PvP = inting. Anti-CC nomor satu Fan/Umbrella.",
      },
      {
        name: "Golden Body",
        summary:
          "Invuln pendek + Fortitude. Pakai saat di-focus atau untuk eat skill mahal lawan. Di season awal saat Qi hancur cepat, ini menyelamatkan parse hidup.",
      },
      {
        name: "Talon Strike",
        cd: "Vitality rendah",
        summary:
          "Knockdown, dorong musuh lepas dari badanmu. Lanjut kite atau masuk Spring Away. Pasangan bagus dengan Soaring Spin.",
      },
      {
        name: "Soaring Spin",
        summary:
          "Damage bagus plus −60% healing received. Ini yang bikin ranged DPS menekan healer lawan. Chain setelah Talon Strike.",
      },
    ],
  },
  gear: [
    {
      name: "Mistwillow / Veil of the Willow",
      piece: "Senjata · 4-pc",
      two: "Precision Rate +4,8% (Mistwillow) / +0,1% (Veil naming lama)",
      four: "Setelah Light / Airborne Light: Heavy damage +12% selama 10 detik. Sebaliknya juga berlaku — setelah Heavy, Light Charged +12%.",
      why: "BiS umum. Rotasi kita campur light, heavy, charged, airborne — 4-pc hampir selalu nyala. Paling konsisten untuk Fan dan Umbrella.",
      modes: ["pve", "pvp"],
      bis: true,
    },
    {
      name: "Flawless Defense",
      piece: "Armor · 4-pc · PvE",
      two: "+24 Physical Defense",
      four: "Damage taken −5%. Di bawah 60% HP, −1% lagi tiap 10% HP hilang (max 5 stack).",
      why: "Kamu squishy. Set ini memberi nyawa tanpa memaksa substat defensif. Prioritaskan roll damage di piece-nya.",
      modes: ["pve"],
      bis: true,
    },
    {
      name: "Hawkwing + Eaglerise",
      piece: "Alternatif PvE max DPS",
      two: "Hawkwing: damage extra tiap Affinity proc",
      four: "Eaglerise: damage reduction saat DoT aktif (pasangan Fivefold Bleed)",
      why: "Pakai jika Affinity ~16% dan Crit ~75,3%. Hit frequency Umbrella sangat tinggi — Hawkwing terasa. Kalau substat Mistwillow lebih bagus, jangan memaksa set ini.",
      modes: ["pve"],
      bis: false,
    },
    {
      name: "Beyond the Chill",
      piece: "Armor · 4-pc · PvP",
      two: "+40 Max HP",
      four: "10 detik tanpa kena damage: hit berikutnya dan 2 detik setelahnya −40% damage. Hilang saat keluar combat.",
      why: "Ranged playstyle mudah menjaga syarat 10 detik. Combo BiS PvP: Veil of the Willow + Beyond the Chill.",
      modes: ["pvp"],
      bis: true,
    },
  ],
  stats: {
    pve: [
      {
        name: "Critical Rate",
        target: "≥ 60% · ideal 75%",
        weight: 100,
        note: "Hit count tinggi. Crit adalah multiplier paling bersih.",
      },
      {
        name: "Max Physical / Silkbind Attack",
        target: "Prioritas roll senjata",
        weight: 92,
        note: "Kalau Precision tinggi, Abrasion (angka abu) hampir tidak muncul — Min Attack jadi stat terbuang. Max Attack juga scale Affinity.",
      },
      {
        name: "Physical Penetration",
        target: "Cap attunement",
        weight: 80,
        note: "Attunement PvE di semua slot: Physical / Formless Penetration.",
      },
      {
        name: "Affinity Rate",
        target: "≥ 12% · 16% jika Hawkwing",
        weight: 70,
        note: "Secondary. Jangan kejar Affinity sampai Crit dan Max Attack beres.",
      },
      {
        name: "Precision",
        target: "Mendekati 100%",
        weight: 62,
        note: "Supaya tidak roll Abrasion. Pondasi logika Max Attack.",
      },
      {
        name: "Vernal Special DMG / Martial Boost",
        target: "Substat senjata",
        weight: 55,
        note: "Everbloom dan Spring Sorrow. Boss Damage Boost juga valid.",
      },
    ],
    pvp: [
      {
        name: "Power",
        target: "Stat utama",
        weight: 100,
        note: "Scale damage dan pressure projectile.",
      },
      {
        name: "Affinity Rate",
        target: "Tinggi",
        weight: 85,
        note: "Proc terasa di duel karena hit volume.",
      },
      {
        name: "Silkbind Attack",
        target: "Roll senjata",
        weight: 80,
        note: "Kedua senjata ada di path Silkbind.",
      },
      {
        name: "Max / Min Physical Attack",
        target: "Seimbang lebih aman di PvP",
        weight: 75,
        note: "Di arena Precision tidak selalu cap — Min Attack masih relevan.",
      },
      {
        name: "Critical Rate",
        target: "60%+",
        weight: 70,
        note: "Jangan op HP sampai Crit ambruk.",
      },
      {
        name: "Physical Penetration",
        target: "Setelah damage base",
        weight: 60,
        note: "Menembus tank dan healer bulky.",
      },
    ],
  },
  rotationTitle: {
    pve: "Loop raid baseline — jaga Combo, drone, dan Jadewind",
    pvp: "Pressure ranged — shield, tag, cash-out, reset",
  },
  rotation: {
    pve: [
      {
        action: "Flute of the Tides",
        weapon: "mystic",
        note: "Opener. Biarkan flute jalan sendiri 12,5 detik.",
      },
      {
        action: "Jadewind Shield / Emerald Barrier",
        weapon: "fan",
        note: "Dinding + buff projectile. Tempel ke terrain kalau pack bisa pathing.",
      },
      {
        action: "Swap → Spring Sorrow",
        weapon: "umbrella",
        note: "Pasang Combo +10% ballistic. Ini debuff yang tidak boleh mati.",
      },
      {
        action: "Spring Sorrow lagi → Heavy → Light",
        weapon: "umbrella",
        note: "Refresh setup, jaga Combo, buka dodge window.",
      },
      {
        action: "Unfading Flower (Blossom penuh)",
        weapon: "umbrella",
        note: "Lepas drone. Uptime pasif yang membedakan parse.",
      },
      {
        action: "Swap Fan → Charged ×2",
        weapon: "fan",
        note: "Projectile berat selama buff dan drone hidup. Tumpuk Morale Chant.",
      },
      {
        action: "Peak's Springless Silence → Moon Shatter",
        weapon: "fan",
        note: "Lingering Bone + Star Reacher. Airborne follow-up ke non-player +45%.",
      },
      {
        action: "Leaping Toad atau Soaring Spin",
        weapon: "mystic",
        note: "Toad jika jendela panjang. Spin jika butuh anti-heal / dodge.",
      },
      {
        action: "Recast Jadewind Shield",
        weapon: "fan",
        note: "Jangan biarkan buff projectile drop. Ulang dari Spring Sorrow.",
      },
    ],
    pvp: [
      {
        action: "Jadewind Shield di kaki / chokepoint",
        weapon: "fan",
        note: "Funnel lawan, blok gap-close, tembak tembus dinding. Buff projectile nyala.",
      },
      {
        action: "Spring Sorrow (tag)",
        weapon: "umbrella",
        note: "Stun jika unsuspecting. Combo +10% harus menempel sebelum burst.",
      },
      {
        action: "Peak's Springless Silence",
        weapon: "fan",
        note: "Launch. Ini jendela cash-out. Jangan Q ke bos-style — ini CC manusia.",
      },
      {
        action: "Spring Away (hold light)",
        weapon: "umbrella",
        note: "Burst utama setelah stun/launch. Mid-range, jangan max-range.",
      },
      {
        action: "Soaring Spin",
        weapon: "mystic",
        note: "−60% healing. Healer lawan langsung terasa. Chain dari Talon Strike.",
      },
      {
        action: "Unfading Flower lalu kite",
        weapon: "umbrella",
        note: "Drone menekan sementara kamu reposition. Jangan greedy float di atas melee.",
      },
      {
        action: "Serene Breeze saat kena CC",
        weapon: "mystic",
        note: "Instan. Lalu Golden Body jika masih di-focus. Reset, pasang shield lagi.",
      },
    ],
  },
  tips: {
    pve: [
      "Main dari mid-range, bukan max-range. Basic string Fan dan Umbrella punya jangkauan sedang — terlalu jauh = whiff.",
      "Jadewind Shield: satu charge untuk buka jendela, satu disimpan. Spam dua charge = buff drop di tengah burst.",
      "Drone Unfading Flower harus hampir selalu hidup saat Blossom penuh. Swap ke Fan, jangan berdiri menonton payung.",
      "Star Reacher T3 mengubah bos fight: Lingering Bone tetap nyala meski bos tidak bisa di-launch.",
      "Qi Break adalah cash-out. Simpan Spring Away, Fan charged, dan Drunken Poet untuk jendela itu — bukan untuk filler.",
      "Hawkwing hanya jika Affinity ~16% dan Crit ~75%. Kalau belum, Mistwillow lebih konsisten.",
      "Dragon's Breath + Drunken Poet kalah DPS dibanding weapon skill jika animasi tidak di-cancel. Jangan memaksa di dummy.",
    ],
    pvp: [
      "Dua gaya: slow ranged (pancing stun Fan, cash-out Spring Away) dan hit-and-run (Springless Silence, poke Umbrella). Campur sesuai lawan.",
      "Serene Breeze tidak boleh tidak di-equip. Titik.",
      "Jadewind Shield men-deny banyak movement skill. Pasang di choke, di punggungmu, atau untuk eat projectile.",
      "Soaring Spin adalah anti-heal. Lempar ke healer lawan setiap fight grup.",
      "Jangan float greedy. Melee yang cakap akan anti-air. Touch ground, shield, kite.",
      "Attunement arena prioritas: Disc (Springless Silence +12% damage taken) lalu Pendant (Spring Away stack Spring Spirit → immobilize 0,6 detik).",
      "1v1 arena bukan kekuatan utama. Build ini bersinar di Perception Forest, guild war, dan 5v5 — space control.",
    ],
  },
  mistakes: [
    "Spam kedua charge Jadewind Shield — buff projectile mati di tengah jendela.",
    "Berdiri max-range sampai Spring Away whiff.",
    "Lupa Unfading Flower saat Blossom penuh (drone terbuang).",
    "Pakai Min Attack sebagai stat utama padahal Precision sudah tinggi.",
    "Bawa Thunderous Bloom ke arena, atau sebaliknya skip Serene Breeze di PvP.",
    "Float di atas bos selama mechanic yang punya anti-air.",
    "Ignore Lingering Bone: Fan special bukan filler, itu tombol Star Reacher.",
  ],
  attunement: [
    {
      slot: "Weapon",
      pve: "Physical / Formless Penetration",
      pvp: "Setelah Execution: +20 Vitality, Mystic damage +20% 8 detik",
    },
    {
      slot: "Disc",
      pve: "Physical / Formless Penetration",
      pvp: "Peak's Springless Silence stagger/CC: target +12% damage taken 5 detik + Tenacity 2 detik",
    },
    {
      slot: "Pendant",
      pve: "Physical / Formless Penetration",
      pvp: "Spring Away ke non-defending: bonus Qi damage, Spring Spirit. 18 stack = immobilize 0,6 detik",
    },
    {
      slot: "Helm",
      pve: "Physical / Formless Penetration",
      pvp: "Setelah break CC: HP damage & Qi damage +20% 5 detik",
    },
    {
      slot: "Chest / Greaves / Bracer",
      pve: "Physical / Formless Penetration",
      pvp: "Chest: −28% saat stagger. Greaves: dodge recover Endurance. Bracer: deflect +16 Qi",
    },
  ],
  upgrade: [
    "Blossom Barrage T4, lalu kejar T6 — jangan sebar bahan ke Inner Way lain.",
    "Morale Chant T5+ (bonus Physical Attack).",
    "Star Reacher T3 sebelum masuk bos sulit.",
    "Cap Precision, lalu dump Max Physical Attack dan Crit.",
    "Mistwillow 4-pc dengan roll Crit / Max Attack.",
    "Flawless Defense 4-pc (PvE) atau Beyond the Chill (PvP).",
    "Thunderous Bloom sebagai slot 4 PvE. PvP: Trapped Beast / Bitter Seasons.",
    "Latihan swap Fan↔Umbrella sampai jadi otot — delay swap adalah DPS leak terbesar.",
  ],
  resource: {
    name: "Blossom (Kuntum)",
    how: "Terisi dari serangan Vernal. Saat penuh, tombol special melepaskan payung yang berputar dan menembak sendiri. Jangan overcap — buang kuntum = buang drone. Habiskan di jendela kerentanan, kumpulkan lagi saat fase aman. Blossom Barrage T4+ mempercepat siklus ini.",
  },
};
