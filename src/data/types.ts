export type Mode = "pve" | "pvp";
export type Role = "dps" | "healer";
export type WeaponKind = "fan" | "umbrella" | "mystic" | "swap";

export type Weapon = {
  name: string;
  aka: string;
  role: string;
  why: string;
};

export type Skill = {
  name: string;
  key?: string;
  cd?: string;
  summary: string;
};

export type InnerWay = {
  name: string;
  slot: string;
  must: boolean;
  why: string;
  tier: string;
  pve: boolean;
  pvp: boolean;
  pvpSwap?: string;
};

export type GearSet = {
  name: string;
  piece: string;
  two: string;
  four: string;
  why: string;
  modes: Mode[];
  bis: boolean;
};

export type StatLine = {
  name: string;
  target: string;
  weight: number;
  note: string;
};

export type RotationStep = {
  action: string;
  weapon: WeaponKind;
  note: string;
};

export type Attune = {
  slot: string;
  pve: string;
  pvp: string;
};

export type Build = {
  id: Role;
  kicker: string;
  name: string;
  path: string;
  tagline: string;
  difficulty: string;
  overview: string;
  weapons: { primary: Weapon; secondary: Weapon };
  strengths: string[];
  weaknesses: string[];
  skills: { fan: Skill[]; umbrella: Skill[] };
  inner: InnerWay[];
  mystic: { pve: Skill[]; pvp: Skill[] };
  gear: GearSet[];
  stats: { pve: StatLine[]; pvp: StatLine[] };
  rotation: { pve: RotationStep[]; pvp: RotationStep[] };
  rotationTitle: { pve: string; pvp: string };
  tips: { pve: string[]; pvp: string[] };
  mistakes: string[];
  attunement: Attune[];
  upgrade: string[];
  resource: { name: string; how: string };
};
