import { createContext } from 'react';

const defaultValue = {
  query: '',
  setQuery: (_query: string) => {},
};

export const SearchBarContext = createContext(defaultValue);
