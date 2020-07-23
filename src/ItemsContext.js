import { createContext } from 'react';

const ItemsContext = {
  items: [],
  appendToItems: (num) => {},
  resetList: () => {},
};

export default createContext(ItemsContext);
