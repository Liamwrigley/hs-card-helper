import { Card } from "./card";
import { Option } from "react-tailwindcss-select/dist/components/type";

export type Filter = {
  filterType: "single" | "multi" | "range" | "search";
  fuzzy?: boolean;
  range?: Range;
  options?: Option[];
  value: any | null;
  order: "asc" | "desc";
  orderType: "number" | "string";
};

export type Range = {
  min: number | null;
  max: number | null;
};

export type Filters = {
  [K in keyof Card]?: Filter;
};

export type FilterResultSummary = {
  results: number;
  total: number;
};
