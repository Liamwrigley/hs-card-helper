export type bnm_Response = {
  sets: bnm_Set[];
  setGroups: bnm_SetGroup[];
  gameModes: bnm_BgGameMode[];
  bgGameModes: bnm_BgGameMode[];
  arenaIds: number[];
  types: bnm_BgGameMode[];
  rarities: bnm_Rarity[];
  classes: bnm_Class[];
  minionTypes: bnm_BgGameMode[];
  spellSchools: bnm_BgGameMode[];
  mercenaryRoles: bnm_BgGameMode[];
  mercenaryFactions: bnm_BgGameMode[];
  keywords: bnm_Keyword[];
  filterableFields: string[];
  numericFields: string[];
  cardBackCategories: bnm_BgGameMode[];
};

export type bnm_BgGameMode = {
  slug: string;
  id: number;
  name: string;
  gameModes?: number[];
};

export type bnm_Class = {
  slug: string;
  id: number;
  name: string;
  cardId?: number;
  heroPowerCardId?: number;
  alternateHeroCardIds?: number[];
};

export type bnm_Keyword = {
  id: number;
  slug: string;
  name: string;
  refText: string;
  text: string;
  gameModes: number[];
};

export type bnm_Rarity = {
  slug: string;
  id: number;
  craftingCost: Array<number | null>;
  dustValue: Array<number | null>;
  name: string;
};

export type bnm_SetGroup = {
  slug: string;
  year?: number;
  svg?: null | string;
  cardSets: string[];
  name: string;
  standard?: boolean;
  icon?: string;
  yearRange?: string;
};

export type bnm_Set = {
  id: number;
  name: string;
  slug: string;
  hyped: boolean;
  type: bnm_Type;
  collectibleCount: number;
  collectibleRevealedCount: number;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
  aliasSetIds?: number[];
};

export type bnm_Type = "expansion" | "" | "base" | "adventure";
