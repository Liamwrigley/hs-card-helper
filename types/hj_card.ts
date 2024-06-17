export type hj_Card = {
  cardClass?: hj_Class;
  dbfId: number;
  health?: number;
  heroPowerDbfId?: number;
  id: string;
  name: string;
  set?: hj_Set;
  type?: hj_Type;
  artist?: string;
  rarity?: hj_Rarity;
  attack?: number;
  cost?: number;
  faction?: hj_Faction;
  collectible?: boolean;
  flavor?: string;
  spellSchool?: hj_SpellSchool;
  text?: string;
  mechanics?: hj_Mechanic[];
  race?: hj_Race;
  races?: hj_Race[];
  referencedTags?: hj_Mechanic[];
  elite?: boolean;
  targetingArrowText?: string;
  durability?: number;
  overload?: number;
  spellDamage?: number;
  battlegroundsPremiumDbfId?: number;
  techLevel?: number;
  collectionText?: string;
  hasDiamondSkin?: boolean;
  howToEarnGolden?: string;
  armor?: number;
  howToEarn?: string;
  hideCost?: boolean;
  hideStats?: boolean;
  mercenariesRole?: number;
  battlegroundsNormalDbfId?: number;
  isBattlegroundsPoolMinion?: boolean;
  battlegroundsBuddyDbfId?: number;
  battlegroundsHero?: boolean;
  isBattlegroundsBuddy?: boolean;
  battlegroundsSkinParentId?: number;
  isBattlegroundsPoolSpell?: boolean;
  battlegroundsDarkmoonPrizeTurn?: number;
  countAsCopyOfDbfId?: number;
  classes?: hj_Class[];
  puzzleType?: number;
  multiClassGroup?: string;
  isMiniSet?: boolean;
  mercenariesAbilityCooldown?: number;
  questReward?: string;
};

export enum hj_Class {
  Deathknight = "DEATHKNIGHT",
  Demonhunter = "DEMONHUNTER",
  Dream = "DREAM",
  Druid = "DRUId",
  Hunter = "HUNTER",
  Mage = "MAGE",
  Neutral = "NEUTRAL",
  Paladin = "PALADIN",
  Priest = "PRIEST",
  Rogue = "ROGUE",
  Shaman = "SHAMAN",
  Warlock = "WARLOCK",
  Warrior = "WARRIOR",
  Whizbang = "WHIZBANG",
}

export enum hj_Faction {
  Alliance = "ALLIANCE",
  Horde = "HORDE",
}

export enum hj_Mechanic {
  AIMustPlay = "AI_MUST_PLAY",
  Adapt = "ADAPT",
  AdjacentBuff = "ADJACENT_BUFF",
  AffectedBySpellPower = "AFFECTED_BY_SPELL_POWER",
  AppearFunctionallyDead = "APPEAR_FUNCTIONALLY_DEAD",
  Aura = "AURA",
  AutoAttack = "AUTO_ATTACK",
  Avenge = "AVENGE",
  Battlecry = "BATTLECRY",
  CantAttack = "CANT_ATTACK",
  CantBeDestroyed = "CANT_BE_DESTROYED",
  CantBeFatigued = "CANT_BE_FATIGUED",
  CantBeSilenced = "CANT_BE_SILENCED",
  CantBeTargetedByHeroPowers = "CANT_BE_TARGETED_BY_HERO_POWERS",
  CantBeTargetedBySpells = "CANT_BE_TARGETED_BY_SPELLS",
  Charge = "CHARGE",
  ChooseOne = "CHOOSE_ONE",
  CollectionmanagerFilterManaEven = "COLLECTIONMANAGER_FILTER_MANA_EVEN",
  CollectionmanagerFilterManaOdd = "COLLECTIONMANAGER_FILTER_MANA_ODD",
  Colossal = "COLOSSAL",
  Combo = "COMBO",
  Corrupt = "CORRUPT",
  Counter = "COUNTER",
  DeathKnight = "DEATH_KNIGHT",
  Deathrattle = "DEATHRATTLE",
  Discover = "DISCOVER",
  DivineShield = "DIVINE_SHIELD",
  Dredge = "DREDGE",
  DungeonPassiveBuff = "DUNGEON_PASSIVE_BUFF",
  Echo = "ECHO",
  Elusive = "ELUSIVE",
  EnchantmentInvisible = "ENCHANTMENT_INVISIBLE",
  Enraged = "ENRAGED",
  EvilGlow = "EVIL_GLOW",
  Excavate = "EXCAVATE",
  FinishAttackSpellOnDamage = "FINISH_ATTACK_SPELL_ON_DAMAGE",
  Forge = "FORGE",
  Forgetful = "FORGETFUL",
  Freeze = "FREEZE",
  Frenzy = "FRENZY",
  Gears = "GEARS",
  Ghostly = "GHOSTLY",
  Gigantify = "GIGANTIFY",
  GrimyGoons = "GRIMY_GOONS",
  HeropowerDamage = "HEROPOWER_DAMAGE",
  HonorableKill = "HONORABLE_KILL",
  IgnoreHideStatsForBigCard = "IGNORE_HIdE_STATS_FOR_BIG_CARD",
  Immune = "IMMUNE",
  ImmuneToSpellpower = "ImmuneToSpellpower",
  Infuse = "INFUSE",
  Inspire = "INSPIRE",
  InvisibleDeathrattle = "InvisibleDeathrattle",
  JadeGolem = "JADE_GOLEM",
  JadeLotus = "JADE_LOTUS",
  Kabal = "KABAL",
  Lifesteal = "LIFESTEAL",
  Magnetic = "MAGNETIC",
  Manathirst = "MANATHIRST",
  Miniaturize = "MINIATURIZE",
  Morph = "MORPH",
  MultiplyBuffValue = "MULTIPLY_BUFF_VALUE",
  Outcast = "OUTCAST",
  Overheal = "OVERHEAL",
  Overkill = "OVERKILL",
  Overload = "OVERLOAD",
  Poisonous = "POISONOUS",
  Puzzle = "PUZZLE",
  Quest = "QUEST",
  Quickdraw = "QUICKDRAW",
  Reborn = "REBORN",
  ReceivesDoubleSpelldamageBonus = "RECEIVES_DOUBLE_SPELLDAMAGE_BONUS",
  Recruit = "RECRUIT",
  Rush = "RUSH",
  Secret = "SECRET",
  SideQuest = "SIdE_QUEST",
  Silence = "SILENCE",
  SparePart = "SPARE_PART",
  Spellburst = "SPELLBURST",
  Spellpower = "SPELLPOWER",
  StartOfGameKeyword = "START_OF_GAME_KEYWORD",
  Stealth = "STEALTH",
  Summoned = "SUMMONED",
  TagOneTurnEffect = "TAG_ONE_TURN_EFFECT",
  Taunt = "TAUNT",
  Titan = "TITAN",
  Tradeable = "TRADEABLE",
  TriggerVisual = "TRIGGER_VISUAL",
  Twinspell = "TWINSPELL",
  Untouchable = "UNTOUCHABLE",
  Venomous = "VENOMOUS",
  Windfury = "WINDFURY",
}

export enum hj_Race {
  All = "ALL",
  Beast = "BEAST",
  Bloodelf = "BLOODELF",
  Celestial = "CELESTIAL",
  Centaur = "CENTAUR",
  Demon = "DEMON",
  Draenei = "DRAENEI",
  Dragon = "DRAGON",
  Dwarf = "DWARF",
  Egg = "EGG",
  Elemental = "ELEMENTAL",
  Furbolg = "FURBOLG",
  Gnoll = "GNOLL",
  Gnome = "GNOME",
  Goblin = "GOBLIN",
  Golem = "GOLEM",
  Gronn = "GRONN",
  Highelf = "HIGHELF",
  Human = "HUMAN",
  Lock = "LOCK",
  Mechanical = "MECHANICAL",
  Murloc = "MURLOC",
  Naga = "NAGA",
  Nightelf = "NIGHTELF",
  Ogre = "OGRE",
  Oldgod = "OLDGOD",
  Orc = "ORC",
  Pandaren = "PANDAREN",
  Pirate = "PIRATE",
  Quilboar = "QUILBOAR",
  Tauren = "TAUREN",
  Totem = "TOTEM",
  Treant = "TREANT",
  Troll = "TROLL",
  Undead = "UNDEAD",
  Vulpera = "VULPERA",
  Worgen = "WORGEN",
}

export enum hj_Rarity {
  Common = "COMMON",
  Epic = "EPIC",
  Free = "FREE",
  Legendary = "LEGENDARY",
  Rare = "RARE",
}

export enum hj_Set {
  AlteracValley = "ALTERAC_VALLEY",
  BRM = "BRM",
  Basic = "BASIC",
  BattleOfTheBands = "BATTLE_OF_THE_BANDS",
  Battlegrounds = "BATTLEGROUNDS",
  BlackTemple = "BLACK_TEMPLE",
  Boomsday = "BOOMSDAY",
  Core = "CORE",
  Credits = "CREDITS",
  Dalaran = "DALARAN",
  DarkmoonFaire = "DARKMOON_FAIRE",
  DemonHunterInitiate = "DEMON_HUNTER_INITIATE",
  Dragons = "DRAGONS",
  Event = "EVENT",
  Expert1 = "EXPERT1",
  Gangs = "GANGS",
  Gilneas = "GILNEAS",
  Gvg = "GVG",
  HeroSkins = "HERO_SKINS",
  Icecrown = "ICECROWN",
  Kara = "KARA",
  Legacy = "LEGACY",
  Lettuce = "LETTUCE",
  Loe = "LOE",
  Lootapalooza = "LOOTAPALOOZA",
  Missions = "MISSIONS",
  Naxx = "NAXX",
  Og = "OG",
  PathOfArthas = "PATH_OF_ARTHAS",
  Placeholder202204 = "PLACEHOLDER_202204",
  ReturnOfTheLichKing = "RETURN_OF_THE_LICH_KING",
  Revendreth = "REVENDRETH",
  Scholomance = "SCHOLOMANCE",
  Stormwind = "STORMWIND",
  TB = "TB",
  TavernsOfTime = "TAVERNS_OF_TIME",
  Tgt = "TGT",
  TheBarrens = "THE_BARRENS",
  TheSunkenCity = "THE_SUNKEN_CITY",
  Titans = "TITANS",
  Troll = "TROLL",
  Tutorial = "TUTORIAL",
  Uldum = "ULDUM",
  Ungoro = "UNGORO",
  Vanilla = "VANILLA",
  WhizbangsWorkshop = "WHIZBANGS_WORKSHOP",
  WildWest = "WILD_WEST",
  Wonders = "WONDERS",
  YearOfTheDragon = "YEAR_OF_THE_DRAGON",
}

export enum hj_SpellSchool {
  Arcane = "ARCANE",
  Fel = "FEL",
  Fire = "FIRE",
  Frost = "FROST",
  Holy = "HOLY",
  Nature = "NATURE",
  PhysicalCombat = "PHYSICAL_COMBAT",
  Shadow = "SHADOW",
  Spellcraft = "SPELLCRAFT",
  Tavern = "TAVERN",
}

export enum hj_Type {
  BattlegroundAnomaly = "BATTLEGROUND_ANOMALY",
  BattlegroundHeroBuddy = "BATTLEGROUND_HERO_BUDDY",
  BattlegroundQuestReward = "BATTLEGROUND_QUEST_REWARD",
  BattlegroundSpell = "BATTLEGROUND_SPELL",
  Enchantment = "ENCHANTMENT",
  GameModeButton = "GAME_MODE_BUTTON",
  Hero = "HERO",
  HeroPower = "HERO_POWER",
  LettuceAbility = "LETTUCE_ABILITY",
  Location = "LOCATION",
  Minion = "MINION",
  MoveMinionHoverTarget = "MOVE_MINION_HOVER_TARGET",
  Spell = "SPELL",
  Weapon = "WEAPON",
}
