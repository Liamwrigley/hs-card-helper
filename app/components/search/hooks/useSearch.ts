import { Card, Keyword, MinionType, Type } from "@/types/card";
import { FilterResultSummary, Filters } from "@/types/filter";
import { useCallback, useEffect, useState } from "react";
import type { Option } from "react-tailwindcss-select/dist/components/type";

const defaultFilters = (cards: Card[]): Filters => {
  return {
    name: {
      filterType: "search",
      fuzzy: true,
      value: null,
      order: "asc",
      orderType: "string",
    },
    attack: {
      filterType: "range",
      value: null,
      range: {
        min: 0,
        max: Math.max(
          ...cards
            .filter((card) => Number(card.attack))
            .map((card) => card.attack)
        ),
      },
      order: "asc",
      orderType: "number",
    },
    health: {
      filterType: "range",
      value: null,
      range: {
        min: 0,
        max: Math.max(
          ...cards
            .filter((card) => Number(card.health))
            .map((card) => card.health)
        ),
      },
      order: "asc",
      orderType: "number",
    },
    tier: {
      filterType: "range",
      value: null,
      range: {
        min: 0,
        max: Math.max(
          ...cards.filter((card) => Number(card.tier)).map((card) => card.tier)
        ),
      },
      order: "asc",
      orderType: "number",
    },
    cardType: {
      filterType: "multi",
      options: Object.values(Type).map(
        (v) => ({ label: v, value: v } as Option)
      ),
      value: [],
      order: "asc",
      orderType: "string",
    },
    // duosOnly: {
    //   filterType: "single",
    //   options: ["true", "false"],
    //   value: null,
    //   order: "asc",
    // },
    // solosOnly: {
    //   filterType: "single",
    //   options: ["true", "false"],
    //   value: null,
    //   order: "asc",
    // },
    keywords: {
      filterType: "multi",
      options: Object.values(Keyword).map(
        (v) => ({ label: v, value: v } as Option)
      ),
      value: [],
      order: "asc",
      orderType: "string",
    },
    minionTypes: {
      filterType: "multi",
      options: Object.values(MinionType).map(
        (v) => ({ label: v, value: v } as Option)
      ),
      value: [],
      order: "asc",
      orderType: "string",
    },
  };
};

export const useSearch = (cards: Card[]) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters(cards));
  const [cardsFiltered, setCardsFiltered] = useState<Card[]>(cards);
  const [filterSummary, setFilterSummary] = useState<FilterResultSummary>({
    total: cards.length,
    results: cardsFiltered.length,
  });

  const filter = (filterParams: Filters) => {
    console.log("filters have been set", filterParams);
    setFilters(filterParams);
  };

  const resetFilters = () => {
    const newFilters = defaultFilters(cards);
    setFilters(newFilters);
  };

  const filterCards = useCallback(
    (filterParams: Filters) => {
      return cards
        .filter((card) => {
          return Object.entries(filterParams)
            .filter(([key, filter]) =>
              filter.filterType === "multi"
                ? filter.value.length > 0
                : filter.value
            )
            .every(([key, filter]) => {
              if (!filter.value) {
                return true;
              }
              if (filter.filterType === "search") {
                if (filter.fuzzy) {
                  return (card[key as keyof Card] as string)
                    .toLowerCase()
                    .includes(filter.value.toLowerCase());
                }
                return (
                  (card[key as keyof Card] as string).toLowerCase() ===
                  filter.value.toLowerCase()
                );
              }
              if (filter.filterType === "range") {
                const cardValue = Number(card[key as keyof Card]);
                const minCondition =
                  filter.range?.min !== null
                    ? cardValue >= filter.range!.min
                    : true;
                const maxCondition =
                  filter.range?.max !== null
                    ? cardValue <= filter.range!.max
                    : true;
                return minCondition && maxCondition;
              }
              if (filter.filterType === "multi") {
                return (filter.value as Option[]).some((v) =>
                  ((card[key as keyof Card] as string[]) || [] || "").includes(
                    v.value
                  )
                );
              }
              if (filter.filterType === "single") {
                return (
                  card[key as keyof Card] === (filter.value as Option).value
                );
              }
              return true;
            });
        })
        .sort((a, b) => {
          // Put 'hero' cards first
          if (a.cardType === Type.Hero && b.cardType !== Type.Hero) {
            return -1;
          }
          if (a.cardType !== Type.Hero && b.cardType === Type.Hero) {
            return 1;
          }
          // Default sort by 'tier' in ascending order
          if (a.tier !== b.tier) {
            return a.tier - b.tier;
          }

          // If 'tier' is the same, sort based on filters
          for (const [key, filter] of Object.entries(filterParams).filter(
            ([key, filter]) =>
              filter.filterType === "multi"
                ? filter.value.length > 0
                : filter.value
          )) {
            if (filter.order && a[key as keyof Card] !== b[key as keyof Card]) {
              if (filter.orderType === "number") {
                return filter.order === "asc"
                  ? Number(a[key as keyof Card]) - Number(b[key as keyof Card])
                  : Number(b[key as keyof Card]) - Number(a[key as keyof Card]);
              } else {
                return filter.order === "asc"
                  ? String(a[key as keyof Card]).localeCompare(
                      String(b[key as keyof Card])
                    )
                  : String(b[key as keyof Card]).localeCompare(
                      String(a[key as keyof Card])
                    );
              }
            }
          }
          return 0;
        });
    },
    [cards]
  );

  useEffect(() => {
    console.log("filtering cards", filters);
    setCardsFiltered(filterCards(filters));
  }, [filters, filterCards]);

  useEffect(() => {
    setFilterSummary({
      total: cards.length,
      results: cardsFiltered.length,
    });
  }, [cardsFiltered, cards]);

  return {
    filter,
    filters,
    resetFilters,
    cardsFiltered,
    filterSummary,
  };
};
