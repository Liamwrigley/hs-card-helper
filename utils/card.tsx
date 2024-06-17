import { bn_Card } from "@/types/bn_card";
import { bnm_Response } from "@/types/bnetMetaData";
import { type Card, MinionType } from "@/types/card";
import { hj_Card } from "@/types/hj_card";
import { mapType, keywordMap, minionMap } from "./bnMapping";

export const getBGCards = (cards: hj_Card[]) => {
  return cards.filter(
    (card: hj_Card) =>
      card.isBattlegroundsPoolMinion || card.isBattlegroundsPoolSpell
  );
};

export const mapBnetToCards = (bnCards: bn_Card[], bnMeta: bnm_Response) => {
  return bnCards.map((bnCard) => mapBnetToCard(bnCard, bnMeta));
};

export const mapBnetToCard = (bnCard: bn_Card, bnMeta: bnm_Response): Card => {
  return {
    id: bnCard.id,
    name: bnCard.name,
    text: bnCard.text,
    attack: bnCard.attack,
    health: bnCard.health,
    tier: bnCard.battlegrounds.tier,
    cardType: findValue(mapType, bnCard.cardTypeId, bnMeta.types),
    images: {
      image: bnCard.battlegrounds.image,
      goldImage: bnCard.battlegrounds.imageGold,
      cropImage: bnCard.cropImage,
    },
    info: {
      reward: bnCard.battlegrounds.reward,
      upgradeId: bnCard.battlegrounds.upgradeId,
    },
    duosOnly: bnCard.battlegrounds.duosOnly,
    solosOnly: bnCard.battlegrounds.solosOnly,
    keywords: bnCard.keywordIds?.map((id) =>
      findValue(keywordMap, id, bnMeta.keywords)
    ),
    childIds: bnCard.childIds,
    minionTypes: getAllMinionTypes(bnCard, bnMeta),
  } as Card;
};

const findValue = (map: any, id: number, list: any[]) => {
  const slug = list.find((t) => t.id === id)?.slug;
  if (!slug) {
    return null;
  }
  return slug.replace("\n", "").replace("\t", "");
};

const getAllMinionTypes = (
  bnCard: bn_Card,
  bnMeta: bnm_Response
): MinionType[] => {
  let types: MinionType[] = [];
  if (bnCard.minionTypeId) {
    types.push(findValue(minionMap, bnCard.minionTypeId, bnMeta.minionTypes));
    bnCard.multiTypeIds?.forEach((id) => {
      const multiType = findValue(minionMap, id, bnMeta.minionTypes);
      if (multiType) {
        types.push(multiType);
      }
    });
  }
  return types;
};
