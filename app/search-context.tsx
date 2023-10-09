// SearchContext.tsx

import React, { Dispatch, SetStateAction } from 'react';

import { Item } from '#/lib/services';

type SearchContextType = {
  filteredDemos: { name: string; items: Item[] }[];
  setFilteredDemos: Dispatch<SetStateAction<{ name: string; items: Item[] }[]>>;
};

const SearchContext = React.createContext<SearchContextType>({
  filteredDemos: [],
  setFilteredDemos: () => {},
});

export default SearchContext;
