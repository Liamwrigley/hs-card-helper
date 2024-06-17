import { fetchCards } from "@/app/actions";
import CardsWithFiltering from "./cardsWithFiltering";

export default async function Home() {
  const cards = await fetchCards();

  return <CardsWithFiltering cards={cards} />;
}
