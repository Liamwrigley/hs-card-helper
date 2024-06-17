"use server";
import { bn_Card, bn_Response } from "@/types/bn_card";
import { Card } from "@/types/card";
import { hj_Card } from "@/types/hj_card";
import { mapBnetToCards } from "@/utils/card";

const bnet_settings: RequestInit = {
  headers: {
    Authorization: `Bearer KRWpkSRImus70XdDJxtFmU78r8l2hXSIpR`,
  },
  cache: "force-cache",
};

const getCards_hsj = async (): Promise<hj_Card[]> => {
  const url = "https://api.hearthstonejson.com/v1/latest/enUS/cards.json";
  const response = await fetch(url, { cache: "no-cache" });
  return response.json();
};

const getCards_bnet = async (): Promise<bn_Card[]> => {
  const url =
    "https://api.blizzard.com/hearthstone/cards?gameMode=battlegrounds&pageSize=300&locale=en_GB";

  let cards: bn_Card[] = [];
  let response = await fetch(url, bnet_settings);
  var initialResult = (await response.json()) as bn_Response;
  cards = initialResult.cards;

  // keep fetching and appending to cards until page === pageCount
  for (let i = initialResult.page + 1; i <= initialResult.pageCount; i++) {
    response = await fetch(`${url}&page=${i}`, bnet_settings);
    const result = (await response.json()) as bn_Response;
    cards = cards.concat(result.cards);
  }

  return cards;
};

const getMetaData_bnet = async () => {
  const url = "https://us.api.blizzard.com/hearthstone/metadata?locale=en_US";
  const response = await fetch(url, bnet_settings);
  return response.json();
};

const getAndMapBnetCards = async (): Promise<Card[]> => {
  const cards = await getCards_bnet();
  const metaData = await getMetaData_bnet();
  const mappedCards = mapBnetToCards(cards, metaData);

  return mappedCards;
};

export const fetchCards = async (): Promise<Card[]> => {
  // var hj_cards = await getCards_hsj();
  return await getAndMapBnetCards();
};
