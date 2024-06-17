export type bn_Response = {
  cards: bn_Card[];
  cardCount: number;
  pageCount: number;
  page: number;
};

export type bn_Card = {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: any[];
  cardTypeId: number;
  cardSetId: number;
  rarityId: number | null;
  artistName: null | string;
  health: number;
  manaCost: number;
  armor?: number;
  name: string;
  text: string;
  image: string;
  cropImage: string;
  imageGold: string;
  flavorText: string;
  childIds?: number[];
  isZilliaxFunctionalModule: boolean;
  isZilliaxCosmeticModule: boolean;
  battlegrounds: bn_Battlegrounds;
  minionTypeId?: number;
  attack?: number;
  keywordIds?: number[];
  multiTypeIds?: number[];
};

export type bn_Battlegrounds = {
  hero: boolean;
  quest: boolean;
  reward: boolean;
  duosOnly: boolean;
  solosOnly: boolean;
  companionId?: number;
  image: string;
  imageGold: string;
  tier?: number;
  upgradeId?: number;
};
