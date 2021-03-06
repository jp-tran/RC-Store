import { useMemo, useState } from 'react';
import { SearchBarContext } from './SearchBarContext';

const SearchBarContextProvider = ({ children }: { children: any }) => {
  const [query, setQuery] = useState('');
  const searchBarValue = useMemo(() => ({ query, setQuery }), [
    query,
    setQuery,
  ]);

  return (
    <SearchBarContext.Provider value={searchBarValue}>
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarContextProvider;
