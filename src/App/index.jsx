import React, { useState, useEffect } from 'react';

import { loadItems, saveItems } from '../utils/itemStorage';
import getRandomLorem from '../utils/getRandomLorem';
import ItemsContext from '../contexts/ItemContext';
import { Wrapper } from './styles';

import ListContainer from '../components/ListContainer';
import GeneratorInput from '../components/GeneratorInput';

function App() {
  const [items, setItems] = useState([]);

  const generateNewItems = (num) => {
    const newItems = [];

    for (let i = items.length + 1; i <= num + items.length; i++) {
      newItems.push({
        title: i,
        description: getRandomLorem(),
      });
    }

    // Append to `items`
    setItems([...items, ...newItems]);
  };

  const removeFromItems = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };

  const resetList = () => setItems([]);

  // Load saved items on mount
  useEffect(() => {
    const savedItems = loadItems();

    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save items to localStorage when `items` is updated
  useEffect(() => saveItems(items), [items]);

  return (
    <Wrapper>
      <ItemsContext.Provider
        value={{ items, generateNewItems, removeFromItems, resetList }}
      >
        <GeneratorInput />
        <ListContainer />
      </ItemsContext.Provider>
    </Wrapper>
  );
}

export default App;
