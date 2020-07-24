import React, { useState, useEffect } from 'react';

import { loadItems, saveItems } from './itemStorage';
import getRandomLorem from './getRandomLorem';
import { Wrapper } from './styles';

import ItemsContext from '../contexts/ItemContext';
import ListContainer from '../components/ListContainer';
import GeneratorInput from '../components/GeneratorInput';

function App() {
  const [items, setItems] = useState([]);

  /**
   * Generates new items with `num` of random lorem sentences and
   * appends it to the end of `items`
   * @param {number} num
   */
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

  /**
   * Remove an item specified by index `index`
   * @param {number} index
   */
  const removeFromItems = (index) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  const reorderItems = (start, end) => {
    const result = [...items];
    const [removed] = result.splice(start, 1);

    result.splice(end, 0, removed);

    setItems(result);
  };

  /**
   * Clear `items` array
   */
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
        value={{
          items,
          generateNewItems,
          removeFromItems,
          reorderItems,
          resetList,
        }}
      >
        <GeneratorInput />
        <ListContainer />
      </ItemsContext.Provider>
    </Wrapper>
  );
}

export default App;
