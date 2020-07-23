import { createContext } from 'react';

const ItemsContext = createContext({
  items: [],
  generateNewItems: (num) => {},
  resetList: () => {},
});

export default ItemsContext;
