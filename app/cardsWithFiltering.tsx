"use client";

import { Card } from "@/types/card";
import { useSearch } from "./components/search/hooks/useSearch";
import Link from "next/link";
import Image from "next/image";
import SearchAndFilter from "./components/search/searchAndFilter";
import { Filter, Filters } from "@/types/filter";

const CardsWithFiltering = ({ cards }: { cards: Card[] }) => {
  const search = useSearch(cards);

  const linkUrl = (card: Card) => {
    if (card.images.goldImage === "") {
      return `/golden/${card.images.image.split("/").pop()}`;
    }
    return `/golden/${card.images.goldImage.split("/").pop()}`;
  };

  const handleFilterChange = (key: keyof Filters, filter: Filter) => {
    if (search.filters[key]) {
      const newFilters = { ...search.filters };
      newFilters[key]!.value = filter.value;

      console.log("filter change", key, filter);
      search.filter(newFilters);
    }
  };

  return (
    <div
      style={{
        background:
          "url(https://d39zum0jwvcigt.cloudfront.net/images/ui/parchment-f5126a8249a32eb235b139078b4cc13b5fb9d2c29b0e825569312681123d721a1f2e1addb4bad78f979933e561361e2ee2c5f5881ab4fef5385c66c6276c3b44.jpg) 50% #f1d4ab",
      }}
      className="flex flex-col gap-2"
    >
      <div
        style={{
          background:
            "url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_middle_tile-907853600f2b8dc11ae3acca94ff309f58b4959f380a6995e1b69b2d94f4bae5811b3ec588d56290599d59ddf6d00f0ce3fa9087c08ee8f7eabe843ed3646f9d.jpg) 50% #f1d4ab",
        }}
        className="flex  p-5 drop-shadow-2xl sticky top-0 z-10"
      >
        <SearchAndFilter
          filter={search.filters}
          filterResult={search.filterSummary}
          setFilter={handleFilterChange}
          resetFilters={search.resetFilters}
        />
      </div>
      <div className="flex snap-y flex-wrap justify-center gap-2 p-5">
        {search.cardsFiltered.map((card: Card) => {
          return (
            <Link
              key={card.id}
              className="relative snap-center w-[256px] h-[388px]"
              href={linkUrl(card)}
            >
              <Image
                key={card.id}
                fill={true}
                sizes="256px"
                alt={card.name}
                src={card.images.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardsWithFiltering;
