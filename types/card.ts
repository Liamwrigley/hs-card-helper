export type Card = {
  id: number;
  name: string;
  text: string;
  attack: number;
  health: number;
  tier: number;
  cardType: Type;
  images: CardImages;
  goldImage: string;
  cropImage: string;
  info: CardInfo;
  duosOnly: boolean;
  solosOnly: boolean;
  keywords: Keyword[];
  childIds: number[];
  minionTypes: MinionType[];
};

export type CardImages = {
  image: string;
  goldImage: string;
  cropImage: string;
};

export type CardInfo = {
  reward: boolean;
  upgradeId: number;
};

export enum Type {
  Hero = "hero",
  Minion = "minion",
  Spell = "spell",
  Weapon = "weapon",
  HeroPower = "hero power",
  Location = "location",
  Reward = "baconquestreward",
  Anomalies = "anomalies",
}

export enum MinionType {
  BloodElf = "bloodelf",
  Draenei = "draenei",
  Dwarf = "dwarf",
  Gnome = "gnome",
  Human = "human",
  NightElf = "nightelf",
  Orc = "orc",
  Tauren = "tauren",
  Troll = "troll",
  Undead = "undead",
  Murloc = "murloc",
  Demon = "demon",
  Mech = "mech",
  Elemental = "elemental",
  Beast = "beast",
  Totem = "totem",
  Pirate = "pirate",
  Dragon = "dragon",
  All = "all",
  Quilboar = "quilboar",
  HalfOrc = "halforc",
  Naga = "naga",
  OldGod = "oldgod",
  Pandaren = "pandaren",
  Gronn = "gronn",
}

export enum _Keyword {
  Pass = "pass",
  Excavate = "excavate",
  Quickdraw = "quickdraw",
  Mini = "mini",
  Miniaturize = "miniaturize",
  Titan = "titan",
  Forge = "forge",
  Elusive = "elusive",
  Venomous = "venomous",
  Manathirst = "manathirst-(x)",
  Overheal = "overheal",
  Finale = "finale",
  Stealth = "stealth",
  Corpse = "corpse",
  Infuse = "infuse",
  Spellcraft = "spellcraft",
  Dredge = "dredge",
  Colossal = "colossal-+x",
  Avenge = "avenge-(x)",
  Refresh = "refresh",
  BloodGem = "blood-gem",
  NatureSpellDamage = "nature-spell-damage",
  HonorableKill = "honorable-kill",
  Frenzy = "frenzy",
  Tradeable = "tradeable",
  Questline = "questline",
  Corrupt = "corrupt",
  Sidequest = "sidequest",
  Spellburst = "spellburst",
  Outcast = "outcast",
  Invoke = "invoke",
  Reborn = "reborn",
  MegaWindfury = "mega-windfury",
  Twinspell = "twinspell",
  Lackey = "lackey",
  Magnetic = "magnetic",
  StartOfGame = "start-of-game",
  Overkill = "overkill",
  Rush = "rush",
  Echo = "echo",
  Recruit = "recruit",
  Lifesteal = "lifesteal",
  Adapt = "adapt",
  Poisonous = "poisonous",
  Quest = "quest",
  Discover = "discover",
  Inspire = "inspire",
  SpareParts = "spare-parts",
  Immune = "immune",
  Counter = "counter",
  Silence = "silence",
  Overload = "overload:-x",
  Combo = "combo",
  Deathrattle = "deathrattle",
  Windfury = "windfury",
  Freeze = "freeze",
  Battlecry = "battlecry",
  Secret = "secret",
  Charge = "charge",
  DivineShield = "divine-shield",
  SpellDamage = "spell-damage",
  Taunt = "taunt",
}

export enum Keyword {
  Pass = "pass",
  Excavate = "excavate",
  Quickdraw = "quickdraw",
  Mini = "mini",
  Miniaturize = "miniaturize",
  Titan = "titan",
  Forge = "forge",
  Elusive = "elusive",
  Venomous = "venomous",
  Manathirst = "manathirst-(x)",
  Overheal = "overheal",
  Finale = "finale",
  Stealth = "stealth",
  Corpse = "corpse",
  Infuse = "infuse",
  Spellcraft = "spellcraft",
  Dredge = "dredge",
  Colossal = "colossal-+x",
  Avenge = "avenge-(x)",
  Refresh = "refresh",
  BloodGem = "blood-gem",
  NatureSpellDamage = "nature-spell-damage",
  HonorableKill = "honorable-kill",
  Frenzy = "frenzy",
  Tradeable = "tradeable",
  Questline = "questline",
  Corrupt = "corrupt",
  Sidequest = "sidequest",
  Spellburst = "spellburst",
  Outcast = "outcast",
  Invoke = "invoke",
  Reborn = "reborn",
  MegaWindfury = "mega-windfury",
  Twinspell = "twinspell",
  Lackey = "lackey",
  Magnetic = "magnetic",
  StartOfGame = "start-of-game",
  Overkill = "overkill",
  Rush = "rush",
  Echo = "echo",
  Recruit = "recruit",
  Lifesteal = "lifesteal",
  Adapt = "adapt",
  Poisonous = "poisonous",
  Quest = "quest",
  Discover = "discover",
  Inspire = "inspire",
  SpareParts = "spare-parts",
  Immune = "immune",
  Counter = "counter",
  Silence = "silence",
  Overload = "overload:-x",
  Combo = "combo",
  Deathrattle = "deathrattle",
  Windfury = "windfury",
  Freeze = "freeze",
  Battlecry = "battlecry",
  Secret = "secret",
  Charge = "charge",
  DivineShield = "divine-shield",
  SpellDamage = "spell-damage",
  Taunt = "taunt",
}
