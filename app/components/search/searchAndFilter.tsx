import { Filter, FilterResultSummary, Filters } from "@/types/filter";
import Select from "react-tailwindcss-select";
import {
  Option,
  SelectValue,
} from "react-tailwindcss-select/dist/components/type";

const SearchAndFilter = ({
  filter,
  filterResult,
  setFilter,
  resetFilters,
}: {
  filter: Filters;
  filterResult: FilterResultSummary;
  setFilter: (key: keyof Filters, filter: Filter) => void;
  resetFilters: () => void;
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-2">
        {Object.keys(filter).map((key) => {
          const filterValue = filter[key as keyof Filters];
          return filterValue
            ? renderFilterType(key as keyof Filters, filterValue, setFilter)
            : null;
        })}
      </div>
      <div className="flex flex-row gap-2 justify-between text-xs">
        <div>
          Showing {filterResult.results} of {filterResult.total} cards
        </div>
        <div>
          <button onClick={() => resetFilters()}>Reset Filters</button>
        </div>
      </div>
    </div>
  );
};

const renderFilterType = (
  key: keyof Filters,
  filter: Filter,
  setFilter: (key: keyof Filters, filter: Filter) => void
) => {
  switch (filter.filterType) {
    case "search":
      return _search(key, filter, setFilter);
    case "range":
      return _range(key, filter, setFilter);
    case "multi":
      return _multi(key, filter, setFilter);
    case "single":
      return _single(key, filter, setFilter);
    default:
      return null;
  }
};

const LabeledInput = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const _label = label
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();
  return (
    <div className="flex flex-col w-full min-w-[100px] gap-1">
      <label className="text-xs">{_label}</label>
      {children}
    </div>
  );
};

const _search = (
  key: keyof Filters,
  filter: Filter,
  setFilter: (key: keyof Filters, filter: Filter) => void
) => {
  // this should be a typeahead search that filters as you type with a debounce
  return (
    <LabeledInput label={key as string}>
      <Select
        isClearable={true}
        isSearchable={true}
        onChange={(v) => {}}
        options={[]}
        onSearchInputChange={(v) => {
          console.log("search", v);
        }}
        primaryColor="blue"
        value={null}
        placeholder="Search..."
        formatOptionLabel={(data) => (
          <li
            className={`block transition px-2 py-2 cursor-pointer select-none truncate hover:translate-x-1 hover:font-bold duration-100`}
          >
            {data.label}
          </li>
        )}
      />
    </LabeledInput>
  );
};

const _range = (
  key: keyof Filters,
  filter: Filter,
  setFilter: (key: keyof Filters, filter: Filter) => void
) => {
  // this should be a range selector
  return (
    <p>
      {key} | {filter.range && filter.range.min}:
      {filter.range && filter.range.max}
    </p>
  );
};

const _multi = (
  key: keyof Filters,
  filter: Filter,
  setFilter: (key: keyof Filters, filter: Filter) => void
) => {
  const handleOnchange = (v: SelectValue) => {
    if (v === null) {
      v = [];
    }
    filter.value = v as Option[];
    setFilter(key, filter);
  };

  return (
    <LabeledInput label={key}>
      <Select
        isClearable={true}
        isMultiple={true}
        isSearchable={true}
        placeholder="Select..."
        onChange={(v) => handleOnchange(v)}
        options={filter.options ?? []}
        primaryColor="blue"
        value={filter.value as Option[]}
        formatOptionLabel={(data) => (
          <li
            className={`block transition px-2 py-2 cursor-pointer select-none truncate hover:translate-x-1 hover:font-bold duration-100`}
          >
            {data.label}
          </li>
        )}
      />
    </LabeledInput>
  );
};

const _single = (
  key: keyof Filters,
  filter: Filter,
  setFilter: (key: keyof Filters, filter: Filter) => void
) => {
  const handleOnchange = (v: SelectValue) => {
    if (v === null) {
      v = [];
    }
    filter.value = v as Option[];
    setFilter(key, filter);
  };

  return (
    <Select
      isClearable={true}
      isSearchable={true}
      onChange={(v) => handleOnchange(v)}
      options={filter.options ?? []}
      primaryColor="blue"
      value={filter.value as Option}
      formatOptionLabel={(data) => (
        <li
          className={`block transition px-2 py-2 cursor-pointer select-none truncate hover:translate-x-1 hover:font-bold duration-100`}
        >
          {data.label}
        </li>
      )}
    />
  );
};

export default SearchAndFilter;
